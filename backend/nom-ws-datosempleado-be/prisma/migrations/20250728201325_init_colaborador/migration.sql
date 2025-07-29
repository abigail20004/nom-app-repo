-- AlterTable
CREATE SEQUENCE colaborador_idcolaborador_seq;
ALTER TABLE "colaborador" ALTER COLUMN "idcolaborador" SET DEFAULT nextval('colaborador_idcolaborador_seq'),
ALTER COLUMN "direccion" DROP NOT NULL,
ALTER COLUMN "profesion" DROP NOT NULL,
ALTER COLUMN "estado_civil" DROP NOT NULL;
ALTER SEQUENCE colaborador_idcolaborador_seq OWNED BY "colaborador"."idcolaborador";
