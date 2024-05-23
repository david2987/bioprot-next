import { z } from "zod"

export const CreateMedicSchema = z.object({
  nombre: z.string().nullable(),
  domicilio: z.string().nullable(),
  // template: __fieldName__: z.__zodType__(),
})
export const UpdateMedicSchema = CreateMedicSchema.merge(
  z.object({
    id: z.number(),
  })
)

export const DeleteMedicSchema = z.object({
  id: z.number(),
})
