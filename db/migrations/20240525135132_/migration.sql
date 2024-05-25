/*
  Warnings:

  - You are about to drop the column `email` on the `Medic` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Medic" DROP COLUMN "email";

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
