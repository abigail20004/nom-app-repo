import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    await prisma.colaborador.deleteMany(); //Borra TODOS los colaboradores
  await prisma.colaborador.createMany({
    data: [
      { idcolaborador: 2, nombre: "Ana", apellido: "García", direccion: "Zona 1", edad: 22, profesion: "Diseñadora", estado_civil: "Soltera" },
      {idcolaborador: 3, nombre: "Luis", apellido: "Martínez", direccion: "Zona 7", edad: 48, profesion: "Ingeniero", estado_civil: "Casado" },
      { idcolaborador: 4,nombre: "Carmen", apellido: "Hernández", direccion: "Zona 5", edad: 55, profesion: "Maestra", estado_civil: "Viuda" }
    ]
  });
}

main()
  .then(() => console.log("Datos insertados"))
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
