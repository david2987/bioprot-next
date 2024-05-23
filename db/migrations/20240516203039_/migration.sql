-- CreateTable
CREATE TABLE "Medic" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nombre" TEXT,
    "domicilio" TEXT,

    CONSTRAINT "Medic_pkey" PRIMARY KEY ("id")
);
