import { z } from "zod"

export const CreateClienteSchema = z.object({
  nombre: z.string(),
  email: z.string().nullable(),
  cuit: z.string().nullable(),
  telefono: z.string().nullable(),
  celular: z.string().nullable(),
  domicilio: z.string().nullable(),
  iva: z.string().nullable(),
  localidad: z.string().nullable(),
  // template: __fieldName__: z.__zodType__(),
})
export const UpdateClienteSchema = CreateClienteSchema.merge(
  z.object({
    id: z.number(),
  })
)

export const DeleteClienteSchema = z.object({
  id: z.number(),
})
