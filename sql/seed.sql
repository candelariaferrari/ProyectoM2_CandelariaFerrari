/* insertar los datos */
INSERT INTO authors (name, email, bio)
VALUES
('Ana García', 'ana@example.com', 'Desarrolladora full-stack apasionada por Node.js'),
('Carlos Ruiz', 'carlos@example.com', 'Escritor técnico especializado en bases de datos'),
('María López', 'maria@example.com', 'Ingeniera de software con foco en APIs REST'),
('Juan Pérez', 'juan@example.com', 'Backend developer especializado en Express'),
('Lucía Fernández', 'lucia@example.com', 'Frontend developer experta en Angular'),
('Pedro Gómez', 'pedro@example.com', 'Administrador de bases de datos PostgreSQL'),
('Sofía Martínez', 'sofia@example.com', 'Desarrolladora de aplicaciones móviles'),
('Diego Torres', 'diego@example.com', 'Arquitecto de software y mentor técnico');

INSERT INTO posts (title, content, author_id, published)
VALUES
(
    'Introducción a Node.js',
    'Node.js es un entorno de ejecución que permite utilizar JavaScript en el servidor. Gracias a su arquitectura basada en eventos y operaciones no bloqueantes, es una herramienta muy utilizada para construir aplicaciones web escalables.',
    1,
    true
),
(
    'PostgreSQL vs MySQL',
    'PostgreSQL y MySQL son dos de los sistemas de gestión de bases de datos relacionales más populares. Cada uno tiene ventajas particulares en rendimiento, extensibilidad y facilidad de uso según las necesidades del proyecto.',
    2,
    true
),
(
    'APIs RESTful',
    'REST es un estilo arquitectónico utilizado para diseñar servicios web. Se basa en el uso de métodos HTTP y recursos identificados mediante URLs para facilitar la comunicación entre aplicaciones.',
    3,
    true
),
(
    'Manejo de errores en Express',
    'Implementar un manejo adecuado de errores en Express permite mejorar la estabilidad de las aplicaciones y ofrecer respuestas claras cuando ocurre un problema durante una solicitud.',
    4,
    false
),
(
    'Async/Await explicado',
    'Las palabras clave async y await simplifican el manejo de operaciones asíncronas en JavaScript, permitiendo escribir código más legible y fácil de mantener que utilizando promesas encadenadas.',
    1,
    false
),
(
    'Guía de Angular',
    'Angular es un framework desarrollado por Google para crear aplicaciones web de una sola página. Incluye herramientas para enrutamiento, formularios, consumo de APIs y gestión de estados.',
    5,
    true
),
(
    'Índices en PostgreSQL',
    'Los índices son estructuras que permiten acelerar las consultas a la base de datos. Utilizarlos correctamente puede mejorar significativamente el rendimiento de una aplicación.',
    6,
    true
),
(
    'Desarrollo Mobile con Ionic',
    'Ionic es un framework que permite crear aplicaciones móviles multiplataforma utilizando tecnologías web como HTML, CSS y JavaScript, reduciendo tiempos de desarrollo.',
    7,
    true
),
(
    'Buenas prácticas en Git',
    'Utilizar ramas, realizar commits descriptivos y mantener un historial limpio son algunas de las prácticas recomendadas para trabajar de forma colaborativa con Git.',
    8,
    true
),
(
    'Autenticación con JWT',
    'JSON Web Token es un estándar utilizado para intercambiar información de manera segura entre cliente y servidor. Es ampliamente empleado en sistemas de autenticación modernos.',
    4,
    false
),
(
    'Consultas SQL Avanzadas',
    'Las consultas avanzadas permiten combinar información de múltiples tablas mediante joins, utilizar subconsultas y aplicar funciones agregadas para obtener resultados complejos.',
    6,
    true
),
(
    'Patrones de Diseño',
    'Los patrones de diseño son soluciones reutilizables para problemas comunes en el desarrollo de software. Facilitan la creación de aplicaciones mantenibles y escalables.',
    8,
    true
),
(
    'Testing en JavaScript',
    'Las pruebas automatizadas ayudan a detectar errores antes de que lleguen a producción. Herramientas como Jest permiten implementar pruebas unitarias de forma sencilla.',
    1,
    true
),
(
    'Docker para principiantes',
    'Docker permite empaquetar aplicaciones y sus dependencias en contenedores, garantizando que funcionen de manera consistente en distintos entornos de desarrollo y producción.',
    4,
    false
);