-- CreateTable
CREATE TABLE "CategoriasProducto" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "CategoriasProducto_pkey" PRIMARY KEY ("id")
);
