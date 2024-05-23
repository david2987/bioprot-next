/*
  Warnings:

  - Added the required column `email` to the `Medic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Medic" ADD COLUMN     "email" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Medico" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nombre" TEXT,
    "domicilio" TEXT,

    CONSTRAINT "Medico_pkey" PRIMARY KEY ("id")
);
