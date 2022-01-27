# Swagger Workshop
> La idea con este taller es repasar el uso de Swagger, para ello deberas documentar la api de `users` y `tasks`.

##  Cómo documentar una API Express con Swagger UI y JSDoc
[JSDoc](https://jsdoc.app/) es una herramienta popular para generar documentación a partir de comentarios en el código fuente de su aplicación. Esto tiene dos propósitos. Primero, la documentación está directamente disponible para cualquiera que vea el código fuente. En segundo lugar, los comentarios se pueden compilar posteriormente en un conjunto completo de documentación de referencia.

[Swagger](https://swagger.io/) proporciona una herramienta para presentar esta documentación: [Swagger UI](https://swagger.io/tools/swagger-ui/). La interfaz de usuario de Swagger crea una página web a partir de las definiciones de la [especificación OpenAPI](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md). Como mostrará este tutorial, estas definiciones se pueden escribir en YAML directamente en los comentarios JSDoc.

### Terminologia

OpenAPI es el nombre de la especificación, mientras que Swagger es el conjunto de herramientas que implementan esta especificación. Consulte [¿Cuál es la diferencia entre Swagger y OpenAPI?](https://swagger.io/blog/api-strategy/difference-between-swagger-and-openapi/)

Este workshop utiliza los siguientes términos y definiciones relacionados con la API definidos por OpenAPI:

![Screen Shot 2021-09-22 at 11.44.33 AM.png](https://ginger-cheese-954.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa4a4a169-b266-46c1-a2f6-3cd6e36388a1%2FScreen_Shot_2021-09-22_at_11.44.33_AM.png?table=block&id=2ba9e37b-5551-48d3-bc8c-ff9f7b44c7c5&spaceId=cfce52b7-e0d5-4dbb-b152-95ab4a106956&width=2560&userId=&cache=v2)

- **Server URL or base URL**: La base de todos los endpoints: `localhost:3000` or `example.com/api`
- **Endpoint path**: La ruta que representa la ubicación del recurso (relativa a la URL base): `/users` or `/users/1`
- **Operation**: El método HTTP utilizado para manipular las rutas de los puntos finales: GET, POST, PUT, DELETE
- **Resource**: Información que representa un objeto del mundo real (por ejemplo, un usuario o un libro), generalmente devuelto por la API como datos JSON. Representado por un **modelo** de base de datos en Express.

## Express Router y Routes

| Route               | HTTP Verb | Route Middleware   | Description                          |
| --------------------| --------- | ------------------ | ------------------------------------ |
| /api/users          | GET       |                    | Get list of users                    |
| /api/users          | POST      |                    | Creates a new user                   |
| /api/users/:id      | GET       | `validateParamId`  | Get a single user                    |
| /api/users/:id      | DELETE    | `validateParamId`  | Deletes a user                       |
| /api/task           | GET       |                    | Get list of task                     |
| /api/task           | POST      |                    | Creates a new task                   |
| /api/task/:id       | GET       | `validateParamId`  | Get a single task                    |
| /api/task/:id       | DELETE    | `validateParamId`  | Deletes a task                       |
| /api/task/user/:id  | GET       | `validateParamId`  | Get task by user                     |

## Uso

### Ejemplo basico  **crear un USER** `/api/users`:

Request Body:
```json
{
  "name": "CRISTIAN MORENO",
}
```

Response:
```json
{
    "id": "1",
    "name": "cristian moreno"
}
```

## Empezando

### Requisitos previos

- [Git](https://git-scm.com/)
- [Node.js & npm](nodejs.org) Node >= 16.0.x, npm >= 6.14.x

### Developing

1. Ejecute `npm install` para instalar las dependencias del servidor.

2. Configure el archivo `.env`
```shell
$ cp env.example .env.development
```

3. Actualice `.env.development` con la información requerida

4. Ejecute `npm run dev` para iniciar el servidor de desarrollo.
