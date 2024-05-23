import { z } from "zod"

export const CreateCategoriasPresupuestoSchema = z.object({
  descripcion: z.string(),
  // template: __fieldName__: z.__zodType__(),
})
export const UpdateCategoriasPresupuestoSchema = CreateCategoriasPresupuestoSchema.merge(
  z.object({
    id: z.number(),
  })
)

export const DeleteCategoriasPresupuestoSchema = z.object({
  id: z.number(),
})
