-- CreateEnum
CREATE TYPE "Sexo" AS ENUM ('MACHO', 'FEMEA');

-- CreateEnum
CREATE TYPE "Especie" AS ENUM ('GATO', 'CACHORRO');

-- CreateEnum
CREATE TYPE "Maturidade" AS ENUM ('FILHOTE', 'ADULTO', 'IDOSO');

-- CreateTable
CREATE TABLE "Animais" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "descricao" TEXT NOT NULL,
    "especie" "Especie" NOT NULL,
    "sexo" "Sexo" NOT NULL,
    "maturidade" "Maturidade" NOT NULL,
    "status" INTEGER NOT NULL,

    CONSTRAINT "Animais_pkey" PRIMARY KEY ("id")
);
