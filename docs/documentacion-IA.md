# 🤖 Registro de Uso de Inteligencia Artificial

## Herramientas utilizadas

Durante el desarrollo del proyecto se utilizo la herramienta de inteligencia artificial:

- Claude (Anthropic)

---

## 🎯 Enfoque de uso

La inteligencia artificial fue utilizada principalmente como una herramienta de apoyo al aprendizaje y resolución de dudas.

En lugar de solicitar soluciones completas, se utilizó para:

- Comprender conceptos teóricos de Node.js, Express y PostgreSQL.
- Resolver dudas sobre arquitectura y organización del proyecto.
- Interpretar errores y mensajes del sistema.
- Comprender buenas prácticas de desarrollo.
- Revisar y mejorar partes específicas del código desarrollado.

El objetivo principal fue utilizar la IA como una guía de aprendizaje, manteniendo la autoría e implementación del proyecto por cuenta propia.

---

## 💬 Ejemplos de consultas realizadas

### Consulta 1: Organización de la estructura del proyecto

**Prompt**

> Bueno vamos por parte, hoy es jueves a la tarde, tengo que entregar esto el miércoles de la semana que viene a la tarde, o sea tengo 6 días para hacerlo. Antes que nada yo crearía el repositorio en GitHub (ya lo tengo) así puedo ir documentando con los commits y viendo la estructura de carpetas. En la carpeta sql iría el schema para crear las tablas y agregar información. En middleware los archivos de controladores, en routes las rutas, en validators las funciones de validación, en index.js el entrypoint de la API y en server.js la configuración de Express. ¿Está bien así?

**Respuesta resumida**

La IA sugirió separar responsabilidades siguiendo una arquitectura más clara:

- `routes/` para las rutas.
- `controllers/` para la lógica de los endpoints.
- `services/` para la lógica de acceso a datos.
- `middlewares/` para middlewares reales (manejo de errores, autenticación, etc.).

Esta recomendación ayudó a reorganizar la estructura del proyecto de una forma más alineada con las buenas prácticas de desarrollo backend.

---

### Consulta 2: Depuración de una consulta SQL

**Prompt**

> Me sigue apareciendo el array vacío [] y creo que veo un bug porque por ejemplo busqué con el id 1 y me aparecen dos cursos que tienen id 1, no solo el author_id 1.

**Respuesta resumida**

La IA ayudó a identificar dos posibles problemas:

1. Al utilizar:

```sql
SELECT posts.*, authors.*
```
> las columnas id de ambas tablas entraban en conflicto, sobrescribiéndose entre sí.

2. El segundo problema estaba relacionado con la validación del resultado de la consulta y el manejo de arrays vacíos.

> Esta explicación permitió corregir la consulta SQL y comprender mejor cómo funcionan los JOIN y los nombres de columnas duplicadas.

---

### Consulta 3: Códigos de estado HTTP
**Prompt**

> No recuerdo para qué es cada código de error o si funciona.

**Respuesta resumida**
La IA explicó los códigos HTTP más relevantes para el proyecto:

200	OK
201	Created
204	No Content
400	Bad Request
404	Not Found
409	Conflict
500	Internal Server Error

Esta explicación sirvió como referencia para implementar respuestas consistentes en todos los endpoints de la API.

## 📝 Reflexión personal
La inteligencia artificial fue una herramienta de apoyo durante el desarrollo del proyecto. La utilicé principalmente para resolver dudas, comprender mejor conceptos nuevos y obtener orientación cuando me encontraba con errores o situaciones que no sabía cómo abordar.

Tanto el diseño de la base de datos como la implementación de los endpoints, las validaciones, los tests y la documentación fueron realizados por mí. La IA me sirvió como una guía para entender conceptos, revisar decisiones técnicas y reforzar conocimientos mientras avanzaba en el desarrollo.

Considero que este enfoque me permitió aprender de forma más activa, ya que utilicé las respuestas como punto de partida para investigar, comprender y aplicar las soluciones por mi cuenta, en lugar de limitarme a copiar código ya resuelto.
