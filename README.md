## Cómo correr el proyecto localmente
Sigue estos pasos para clonar, instalar y ejecutar el backend y frontend en tu máquina local.

### 1. Clonar el repositorio
git clone https://github.com/abigail20004/nom-app-repo.git
cd nom-app-repo
### 2. Backend
- cd backend/nom-ws-datosempleado-be
- npm install
- Crea un archivo .env en esta carpeta con el siguiente contenido:
    DATABASE_URL="postgresql://postgres:8ac3etuq@localhost:5432/test?schema=public"
- Ejecuta el script SQL para crear la tabla en tu base de datos PostgreSQL:
  psql -U postgres -d test -f create_colaborador.sql
- Genera el cliente Prisma:
  npx prisma generate
- Levanta el servidor:
  node index.js
### 3. Frontend
cd ../../frontend/nom-wa-datosempleado-fe
npm install
ng serve
### 4. Abrir la aplicación
Abre tu navegador y navega a:
http://localhost:4200

# Descripción del Proyecto
### Sistema de Gestión de Colaboradores – Cofiño Stahl


Proyecto desarrollado como parte de una prueba técnica para Cofiño Stahl. Esta aplicación fullstack permite gestionar colaboradores a través de una API REST y una interfaz web moderna. Incluye funcionalidades de listado, validación, y registro de colaboradores.
Tecnologías:
- Backend: Node.js + Express + PostgreSQL + Prisma
- Frontend: Angular + Bootstrap

---
## Tecnologías utilizadas

| Sección  | Tecnología                                    |
|----------|-----------------------------------------------|
| Backend  | Node.js, Express, Prisma ORM, PostgreSQL      |
| Frontend | Angular, Bootstrap 5                          |
| Estilo   | Paleta de colores basada en Cofiño Stahl      |
---
## Estructura del Repositorio
- nom-ws-datosempleado-be/ → Backend (Node.js + Prisma)
- nom-wa-datosempleado-fe/ → Frontend (Angular + Bootstrap)
- create_colaborador.sql → Script SQL para crear la tabla
- README.md → Documentación del proyecto

## Funcionalidades
### Frontend (Angular)
Visualización de colaboradores en una tabla estilizada
Botón “Cargar colaboradores” para obtener datos desde el backend
Botón “+” con formulario flotante para agregar colaboradores
Validaciones visuales de campos requeridos
Cálculo del Nivel de riesgo según edad:
    🟢 18–25 años: Fuera de peligro
    🟠 26–50 años: Tenga cuidado
    🔴 51+ años: Por favor, quédese en casa
Estilo moderno

### Backend (Node.js + PostgreSQL)
- `GET /colaboradores`: retorna todos los registros de colaboradores
- `POST /api/colaboradores`: inserta un nuevo colaborador en la base de datos
- Prisma ORM para manejo de modelos y conexión a PostgreSQL
- Validación de datos y manejo de errores de servidor

## Requisitos previos
- Node.js v18+
- PostgreSQL
- Angular CLI v17

## Script SQL (`create_colaborador.sql`)
```sql
CREATE TABLE IF NOT EXISTS colaborador (
  idcolaborador SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100) NOT NULL,
  direccion VARCHAR(255),
  edad INT CHECK (edad > 0),
  profesion VARCHAR(100),
  estado_civil VARCHAR(50)
);
```
---
## Repositorio
https://github.com/abigail20004/nom-app-repo.git

## Desarrolladora

**Kimberly Abigail García Trujillo**  
Prueba técnica realizada para Cofiño Stahl – Julio 2025


