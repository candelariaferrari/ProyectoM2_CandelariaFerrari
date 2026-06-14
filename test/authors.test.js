const request = require('supertest');
const app = require('../src/server');
const pool = require('../src/database/database');

describe('GET /api/authors', () => {
  test('Devuelve status 200 y un array de authors', async () => {
    const response = await request(app).get('/api/authors');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe('GET /api/authors/:id', () => {
  test('Devuelve author por id', async () => {
    const created = await request(app)
      .post('/api/authors')
      .send({
        name: 'Autor de prueba',
        email: `autor${Date.now()}@example.com`,
        bio: 'Bio de prueba'
      });

    const authorId = created.body.id;

    const response = await request(app)
      .get(`/api/authors/${authorId}`);

    expect(response.status).toBe(200);
    expect(response.body.id).toBe(authorId);
    expect(response.body.name).toBe('Autor de prueba');
    expect(response.body.bio).toBe('Bio de prueba');
  });

  test('Devuelve un 404 cuando el author no existe', async () => {
    const response = await request(app)
      .get('/api/authors/999999');

    expect(response.status).toBe(404);
    expect(response.body.message).toBe(
      'Autor no encontrado'
    );
  });

  test('Devuelve un 400 cuando ID no es un número', async () => {
    const response = await request(app)
      .get('/api/authors/aaa');

    expect(response.status).toBe(400);
    expect(response.body.message).toBe(
      'ID inválido, tiene que ser un número'
    );
  });
});

describe('POST /api/authors', () => {
  test('Crea author con datos válidos', async () => {
    const response = await request(app)
      .post('/api/authors')
      .send({
        name: 'Autor de prueba',
        email: `autor${Date.now()}@example.com`,
        bio: 'Bio de prueba'
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('Autor de prueba');
    expect(response.body.bio).toBe('Bio de prueba');
    expect(response.body).toHaveProperty('created_at');
  });

  test('Rechaza request sin name', async () => {
    const response = await request(app)
      .post('/api/authors')
      .send({
        email: `autor${Date.now()}@example.com`,
        bio: 'Bio de prueba'
      });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe(
      'Todos los campos son obligatorios'
    );
  });

  test('Rechaza request sin email', async () => {
    const response = await request(app)
      .post('/api/authors')
      .send({
        name: 'Autor de prueba',
        bio: 'Bio de prueba'
      });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe(
      'Todos los campos son obligatorios'
    );
  });
  test('Rechaza email duplicado', async () => {
    const email = `autor${Date.now()}@example.com`;

    await request(app)
      .post('/api/authors')
      .send({
        name: 'Autor 1',
        email,
        bio: 'Bio 1'
      });

    const response = await request(app)
      .post('/api/authors')
      .send({
        name: 'Autor 2',
        email,
        bio: 'Bio 2'
      });

    expect(response.status).toBe(409);

    expect(response.body.message).toBe(
      'El email ya está registrado'
    );
  });
  test('Rechaza request vacío', async () => {
    const response = await request(app)
      .post('/api/authors')
      .send({});

    expect(response.status).toBe(400);
    expect(response.body.message).toBe(
      'Todos los campos son obligatorios'
    );
  });
});

describe('PUT /api/authors/:id', () => {
  test('Actualiza un autor existente', async () => {
    const created = await request(app)
      .post('/api/authors')
      .send({
        name: 'Autor Original',
        email: `autor${Date.now()}@example.com`,
        bio: 'Bio original'
      });

    const response = await request(app)
      .put(`/api/authors/${created.body.id}`)
      .send({
        name: 'Autor Actualizado',
        email: created.body.email,
        bio: 'Bio actualizada'
      });

    expect(response.status).toBe(200);
    expect(response.body.name).toBe(
      'Autor Actualizado'
    );
    expect(response.body.bio).toBe(
      'Bio actualizada'
    );
  });

  test('Devuelve 404 si el autor no existe', async () => {
    const response = await request(app)
      .put('/api/authors/999999')
      .send({
        name: 'Autor',
        email: 'autor@test.com',
        bio: 'Bio'
      });

    expect(response.status).toBe(404);
  });
});

describe('DELETE /api/authors/:id', () => {
  test('Elimina un autor existente', async () => {
    const created = await request(app)
      .post('/api/authors')
      .send({
        name: 'Autor a eliminar',
        email: `autor${Date.now()}@example.com`,
        bio: 'Bio'
      });

    const response = await request(app)
      .delete(`/api/authors/${created.body.id}`);

    expect(response.status).toBe(204);


  });

  test('Devuelve 404 si el autor no existe', async () => {
    const response = await request(app)
      .delete('/api/authors/999999');

    expect(response.status).toBe(404);

    expect(response.body.message).toBe(
      'Autor no encontrado'
    );
  });
});

afterEach(async () => {
  await pool.query(`
    DELETE FROM authors
    WHERE email LIKE 'autor%@example.com'
  `);
});

afterAll(async () => {
  await pool.end();
});