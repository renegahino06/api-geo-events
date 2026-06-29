# Backend - API Geo Events

API REST educativa para la materia **Aplicaciones Web Orientadas a Servicios (AWOS)**.  
Unidad 3: Desarrollo de una interfaz de programación de aplicaciones (API).  

## Objetivo

Que el estudiante implemente una API REST usando **Node.js + Express**, capaz de:

- Registrar eventos urbanos con geolocalización.
- Consultar, actualizar y eliminar eventos.
- Ser consumida por una aplicación web cliente (frontend).

## Requisitos

- Node.js 18+
- npm

## Instalación

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

El servidor quedará escuchando en `http://localhost:3000`.

## Endpoints iniciales

- `GET /` – Prueba de vida.
- `GET /api/events` – Lista todos los eventos.
- `GET /api/events/:id` – Devuelve un evento por id.
- `POST /api/events` – Crea un evento.
- `PUT /api/events/:id` – Actualiza un evento.
- `DELETE /api/events/:id` – Elimina un evento.

Los alumnos deberán:

- Reemplazar la “BD en memoria” por una base de datos real.
- Mejorar validaciones, manejo de errores y pruebas.
- Documentar la API (por ejemplo, con Swagger o documento Markdown).
