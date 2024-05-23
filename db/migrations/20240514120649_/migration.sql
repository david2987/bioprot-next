-- CreateTable
CREATE TABLE "Producto" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "titulo" TEXT NOT NULL,
    "detalle" TEXT,
    "idCategoriaProducto" INTEGER,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("id")
);
