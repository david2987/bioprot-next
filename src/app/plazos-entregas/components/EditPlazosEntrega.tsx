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
        <h1>Edit PlazosEntrega {plazosEntrega.id}</h1>
        <pre>{JSON.stringify(plazosEntrega, null, 2)}</pre>
        <Suspense fallback={<div>Loading...</div>}>
          <PlazosEntregaForm
            submitText="Update PlazosEntrega"
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
