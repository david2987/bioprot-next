"use client"
import { Suspense } from "react"
import updatePlazosEntrega from "../mutations/updatePlazosEntrega"
import getPlazosEntrega from "../queries/getPlazosEntrega"
import { UpdatePlazosEntregaSchema } from "../schemas"
import { FORM_ERROR, PlazosEntregaForm } from "./PlazosEntregaForm"
import { useMutation, useQuery } from "@blitzjs/rpc"
import { useRouter } from "next/navigation"

export const EditPlazosEntrega = ({ plazosEntregaId }: { plazosEntregaId: number }) => {
  const [plazosEntrega, { setQueryData }] = useQuery(
    getPlazosEntrega,
    { id: plazosEntregaId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [updatePlazosEntregaMutation] = useMutation(updatePlazosEntrega)
  const router = useRouter()
  return (
    <>
      <div>
        <div className="text-2xl mb-2 border-b-2 mt-2">Editar Plazo Entrega </div>

        <Suspense fallback={<div>Loading...</div>}>
          <PlazosEntregaForm
            submitText="Actualizar PlazosEntrega"
            schema={UpdatePlazosEntregaSchema}
            initialValues={plazosEntrega}
            onSubmit={async (values) => {
              try {
                const updated = await updatePlazosEntregaMutation({
                  ...values,
                  id: plazosEntrega.id,
                })
                await setQueryData(updated)
                router.refresh()
                router.push("/plazos-entregas")
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
