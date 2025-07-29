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
app.post("api/colaboradores", async (req, res) => {
  const { nombre, apellido, direccion, edad, profesion, estado_civil } = req.body;

  if (!nombre || !apellido || !direccion || !edad || !profesion || !estado_civil) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  try {
    const nuevo = await prisma.colaborador.create({
      data: {
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
    console.error("Error al guardar:", error);
    res.status(500).json({ error: "Error al guardar el colaborador" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:3000`);
});
