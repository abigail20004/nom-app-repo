
# Sistema de Gestión de Colaboradores – Cofiño Stahl

Proyecto desarrollado como parte de una prueba técnica para Cofiño Stahl. Esta aplicación fullstack permite gestionar colaboradores a través de una API REST y una interfaz web moderna. Incluye funcionalidades de listado, validación, y registro de colaboradores.
Está dividido en dos partes:
- Backend: API REST con Node.js + Express + PostgreSQL + Prisma
- Frontend: Aplicación Angular con Bootstrap y formulario flotante

---
## Tecnologías utilizadas

| Sección  | Tecnología                                    |
|----------|-----------------------------------------------|
| Backend  | Node.js, Express, Prisma ORM, PostgreSQL      |
| Frontend | Angular, Bootstrap 5                          |
| Estilo   | Inspirado en los colores de Cofiño Stahl      |

---

## Estructura del proyecto

nom-ws-datosempleado-be # Backend (Node.js + Prisma)
nom-wa-datosempleado-fe # Frontend (Angular + Bootstrap)
create_colaborador.sql # Script SQL para crear la tabla
README.md # Documentación del proyecto

## Funcionalidades
### Frontend (Angular)

- Visualización de colaboradores en una tabla estilizada
- Botón “Cargar colaboradores” para obtener datos del backend
- Botón “+” que abre un formulario flotante para agregar nuevo colaborador
- Validación visual de campos requeridos
- Lógica de “Nivel de riesgo” basada en la edad del colaborador:
  - 18–25 años: 🟢 FUERA DE PELIGRO
  - 26–50 años: 🟠 TENGA CUIDADO
  - 51+ años: 🔴 POR FAVOR QUEDARSE EN CASA
- Estilo moderno con inspiración institucional

### Backend (Node.js + PostgreSQL)
- `GET /colaboradores`: retorna todos los registros de colaboradores
- `POST /api/colaboradores`: inserta un nuevo colaborador en la base de datos
- Prisma ORM para manejo de modelos y conexión a PostgreSQL
- Validación de datos y manejo de errores de servidor

## Requisitos previos
- Node.js v18+
- PostgreSQL
- Angular CLI v17+

## Instrucciones de ejecución
### Backend (`nom-ws-datosempleado-be`)
1. Instalar dependencias:
```bash
npm install
```
2. Crear archivo .env con los datos de conexión:
```.env
DATABASE_URL="postgresql://postgres:8ac3etuq@localhost:5432/test?schema=public"
```
3. Ejecutar el script para crear la tabla:
psql -U postgres -d test -f create_colaborador.sql

4. Generar Prisma Client:
npx prisma generate

5. Levantar servidor:
 node index.js

### Frontend (`nom-wa-datosempleado-fe`)

1. Instalar dependencias:

npm install


2. Levantar app de Angular:

ng serve

3. Abrir navegador en: `http://localhost:4200`


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


