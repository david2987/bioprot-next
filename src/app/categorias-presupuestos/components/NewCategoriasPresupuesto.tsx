"use client"
import { FORM_ERROR, CategoriasPresupuestoForm } from "./CategoriasPresupuestoForm"
import { CreateCategoriasPresupuestoSchema } from "../schemas"
import { useMutation } from "@blitzjs/rpc"
import createCategoriasPresupuesto from "../mutations/createCategoriasPresupuesto"
import { useRouter } from "next/navigation"

export function New__ModelName() {
  const [createCategoriasPresupuestoMutation] = useMutation(createCategoriasPresupuesto)
  const router = useRouter()
  return (
    <CategoriasPresupuestoForm
      submitText="Crear Categoria Presupuesto"
      schema={CreateCategoriasPresupuestoSchema}
      onSubmit={async (values) => {
        try {
          const categoriasPresupuesto = await createCategoriasPresupuestoMutation(values)
          router.push(`/categorias-presupuestos`)
        } catch (error: any) {
          console.error(error)
          return {
            [FORM_ERROR]: error.toString(),
          }
        }
      }}
    />
  )
}
