const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Ruta GET para obtener todos los colaboradores
app.get("/colaboradores", async (req, res) => {
  try {
    const colaboradores = await prisma.colaborador.findMany();
    res.json(colaboradores);
  } catch (error) {
    console.error("Error al obtener colaboradores:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

// Ruta POST para crear un nuevo colaborador
app.post("/api/colaboradores", async (req, res) => {
  try {
    const { idcolaborador, nombre, apellido, direccion, edad, profesion, estado_civil } = req.body;

    const nuevo = await prisma.colaborador.create({
      data: {
        idcolaborador,
        nombre,
        apellido,
        direccion,
        edad,
        profesion,
        estado_civil,
      },
    });

    res.json(nuevo);
  } catch (error) {
    res.status(500).json({ error: "Error al crear usuario", detalle: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
