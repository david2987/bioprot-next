import { z } from "zod"

export const CreatePlazosEntregaSchema = z.object({
  descripcion: z.string(),
  // template: __fieldName__: z.__zodType__(),
})
export const UpdatePlazosEntregaSchema = CreatePlazosEntregaSchema.merge(
  z.object({
    id: z.number(),
  })
)

export const DeletePlazosEntregaSchema = z.object({
  id: z.number(),
})
