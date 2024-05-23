import { z } from "zod"

export const CreateCategoriasProductoSchema = z.object({
  descripcion: z.string(),
  // template: __fieldName__: z.__zodType__(),
})
export const UpdateCategoriasProductoSchema = CreateCategoriasProductoSchema.merge(
  z.object({
    id: z.number(),
  })
)

export const DeleteCategoriasProductoSchema = z.object({
  id: z.number(),
})
