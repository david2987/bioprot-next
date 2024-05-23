-- CreateTable
CREATE TABLE "Institucione" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "descripcion" TEXT NOT NULL,
    "email" TEXT,
    "cuit" TEXT,
    "telefono" TEXT,
    "domicilio" TEXT,
    "cufe" TEXT,
    "localidad" TEXT,

    CONSTRAINT "Institucione_pkey" PRIMARY KEY ("id")
);
