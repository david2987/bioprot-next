import { z } from "zod"

export const CreateInstitucioneSchema = z.object({
  descripcion: z.string(),
  email: z.string().nullable(),
  cuit: z.string().nullable(),
  telefono: z.string().nullable(),
  domicilio: z.string().nullable(),
  cufe: z.string().nullable(),
  localidad: z.string().nullable(),
  // template: __fieldName__: z.__zodType__(),
})
export const UpdateInstitucioneSchema = CreateInstitucioneSchema.merge(
  z.object({
    id: z.number(),
  })
)

export const DeleteInstitucioneSchema = z.object({
  id: z.number(),
})
