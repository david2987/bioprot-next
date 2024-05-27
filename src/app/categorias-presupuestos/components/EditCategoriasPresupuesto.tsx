"use client"
import { Suspense } from "react"
import updateCategoriasPresupuesto from "../mutations/updateCategoriasPresupuesto"
import getCategoriasPresupuesto from "../queries/getCategoriasPresupuesto"
import { UpdateCategoriasPresupuestoSchema } from "../schemas"
import { FORM_ERROR, CategoriasPresupuestoForm } from "./CategoriasPresupuestoForm"
import { useMutation, useQuery } from "@blitzjs/rpc"
import { useRouter } from "next/navigation"

export const EditCategoriasPresupuesto = ({
  categoriasPresupuestoId,
}: {
  categoriasPresupuestoId: number
}) => {
  const [categoriasPresupuesto, { setQueryData }] = useQuery(
    getCategoriasPresupuesto,
    { id: categoriasPresupuestoId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [updateCategoriasPresupuestoMutation] = useMutation(updateCategoriasPresupuesto)
  const router = useRouter()
  return (
    <>
      <div>
        <div className="text-2xl mb-2 border-b-2 mt-2">Editar Categoria Presupuesto </div>

        <Suspense fallback={<div>Loading...</div>}>
          <CategoriasPresupuestoForm
            submitText="Actualizar Categoria Presupuesto"
            schema={UpdateCategoriasPresupuestoSchema}
            initialValues={categoriasPresupuesto}
            onSubmit={async (values) => {
              try {
                const updated = await updateCategoriasPresupuestoMutation({
                  ...values,
                  id: categoriasPresupuesto.id,
                })
                await setQueryData(updated)
                router.refresh()
                router.push("/categorias-presupuestos")
              } catch (error: any) {
                console.error(error)
                return {
                  [FORM_ERROR]: error.toString(),
                }
              }
            }}
          />
        </Suspense>
      </div>
    </>
  )
}
