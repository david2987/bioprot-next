-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT,
    "cuit" TEXT,
    "telefono" TEXT,
    "celular" TEXT,
    "domicilio" TEXT,
    "iva" TEXT,
    "localidad" TEXT,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);
