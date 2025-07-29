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
