-- CreateTable
CREATE TABLE "colaborador" (
    "idcolaborador" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "profesion" TEXT NOT NULL,
    "estado_civil" TEXT NOT NULL,

    CONSTRAINT "colaborador_pkey" PRIMARY KEY ("idcolaborador")
);
