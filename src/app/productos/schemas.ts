import { z } from "zod"

export const CreateProductoSchema = z.object({
  titulo: z.string(),
  detalle: z.string().nullable(),
  idCategoriaProducto: z.number().nullable(),
  // template: __fieldName__: z.__zodType__(),
})
export const UpdateProductoSchema = CreateProductoSchema.merge(
  z.object({
    id: z.number(),
  })
)

export const DeleteProductoSchema = z.object({
  id: z.number(),
})
