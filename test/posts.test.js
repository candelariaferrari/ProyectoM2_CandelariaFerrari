const request = require("supertest");
const app = require("../src/server");
const pool = require("../src/database/database");

describe("GET /api/posts", () => {
  test("Devuelve status 200 y un array de posts", async () => {
    const response = await request(app).get("/api/posts");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe('GET /api/posts/:id', () => {
  test('Devuelve post por id', async () => {
    const created = await request(app)
      .post('/api/posts')
      .send({
        title: 'Titulo de prueba',
        content: 'contenido de prueba',
        author_id: 2,
        published: true,
      });

    const postId = created.body.id;

    const response = await request(app)
      .get(`/api/posts/${postId}`);

    expect(response.status).toBe(200);
    expect(response.body.id).toBe(postId);
    expect(response.body.title).toBe('Titulo de prueba');
    expect(response.body.content).toBe('contenido de prueba');
    expect(response.body.author_id).toBe(2);
    expect(response.body.published).toBe(true);
  });

  test('Devuelve un 404 cuando el posts no existe', async () => {
    const response = await request(app)
      .get('/api/posts/999999');

    expect(response.status).toBe(404);
    expect(response.body.message).toBe(
      'Post no encontrado'
    );
  });

  test('Devuelve un 400 cuando ID no es un número', async () => {
    const response = await request(app)
      .get('/api/posts/aaa');

    expect(response.status).toBe(400);
    expect(response.body.message).toBe(
      'ID inválido, tiene que ser un número'
    );
  });
});

describe('POST /api/posts', () => {
  test('Crea post con datos válidos', async () => {
    const response = await request(app)
      .post('/api/posts')
      .send({
        title: 'Titulo de prueba',
        content: 'contenido de prueba',
        author_id: 2,
        published: true,
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.title).toBe('Titulo de prueba');
    expect(response.body.content).toBe('contenido de prueba');
    expect(response.body.author_id).toBe(2);
    expect(response.body.published).toBe(true);
  });

  test('Rechaza request sin title', async () => {
    const response = await request(app)
      .post('/api/posts')
      .send({
        content: 'contenido de prueba',
        author_id: 2,
        published: true,
      });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe(
      'Todos los campos son obligatorios'
    );
  });

  test('Rechaza request sin content', async () => {
    const response = await request(app)
      .post('/api/posts')
      .send({
        title: 'Titulo de prueba',
        author_id: 2,
        published: true,
      });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe(
      'Todos los campos son obligatorios'
    );
  });

  test('Rechaza request sin author_id', async () => {
    const response = await request(app)
      .post('/api/posts')
      .send({
        title: 'Titulo de prueba',
        content: 'contenido de prueba',
        published: true,
      });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe(
      'Todos los campos son obligatorios'
    );
  });


  test('Rechaza request sin published', async () => {
    const response = await request(app)
      .post('/api/posts')
      .send({
        title: 'Titulo de prueba',
        content: 'contenido de prueba',
        author_id: 2
      });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Published es obligatorio y debe ser true o false');
  });

  test('Rechaza published si no es boolean', async () => {
    const response = await request(app)
      .post('/api/posts')
      .send({
        title: 'Titulo de prueba',
        content: 'Contenido de prueba',
        author_id: 2,
        published: 'hola'
      });
  
    expect(response.status).toBe(400);
  
    expect(response.body.message).toBe('Published es obligatorio y debe ser true o false');

  });

  test('Rechaza published si es un número', async () => {
    const response = await request(app)
      .post('/api/posts')
      .send({
        title: 'Titulo de prueba',
        content: 'Contenido de prueba',
        author_id: 2,
        published: 123
      });
  
    expect(response.status).toBe(400);
  
    expect(response.body.message).toBe('Published es obligatorio y debe ser true o false');

  });

  test('Rechaza request vacío', async () => {
    const response = await request(app)
      .post('/api/posts')
      .send({});

    expect(response.status).toBe(400);
    expect(response.body.message).toBe(
      'Todos los campos son obligatorios'
    );
  });
});

describe('PUT /api/posts/:id', () => {
  test('Actualiza un posts existente', async () => {
    const created = await request(app)
      .post('/api/posts')
      .send({
        title: 'Titulo de prueba Actualizado',
        content: 'contenido de prueba',
        author_id: 2,
        published: true,
      });

    const response = await request(app)
      .put(`/api/posts/${created.body.id}`)
      .send({
        title: created.body.title,
        content: 'contenido de prueba',
        author_id: 2,
        published: true,
      });

      expect(response.status).toBe(200);
      expect(response.body.title).toBe('Titulo de prueba Actualizado');
  
  });

  test('Devuelve 404 si el post no existe', async () => {
    const response = await request(app)
      .put('/api/posts/999999')
      .send({
        title: 'Titulo de prueba',
        content: 'contenido de prueba',
        author_id: 2,
        published: true,
      });

    expect(response.status).toBe(404);
  });
});

describe('DELETE /api/posts/:id', () => {
  test('Elimina un post existente', async () => {
    const created = await request(app)
      .post('/api/posts')
      .send({
        title: 'Titulo de prueba A ELIMINAR',
        content: 'contenido de prueba',
        author_id: 2,
        published: true,
      });

    const response = await request(app)
      .delete(`/api/posts/${created.body.id}`);

    expect(response.status).toBe(204);


  });

  test('Devuelve 404 si el post no existe', async () => {
    const response = await request(app)
      .delete('/api/posts/999999');

    expect(response.status).toBe(404);

    expect(response.body.message).toBe(
      'Post no encontrado'
    );
  });
});

afterAll(async () => {
  await pool.end();
});
