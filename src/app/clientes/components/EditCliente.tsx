"use client"
import { Suspense } from "react"
import updateCliente from "../mutations/updateCliente"
import getCliente from "../queries/getCliente"
import { UpdateClienteSchema } from "../schemas"
import { FORM_ERROR, ClienteForm } from "./ClienteForm"
import { useMutation, useQuery } from "@blitzjs/rpc"
import { useRouter } from "next/navigation"

export const EditCliente = ({ clienteId }: { clienteId: number }) => {
  const [cliente, { setQueryData }] = useQuery(
    getCliente,
    { id: clienteId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [updateClienteMutation] = useMutation(updateCliente)
  const router = useRouter()
  return (
    <>
      <div>
        <div className="text-2xl mb-2 border-b-2 mt-2">Editar Cliente </div>
        {/* <pre>{JSON.stringify(cliente, null, 2)}</pre> */}
        <Suspense fallback={<div>Loading...</div>}>
          <ClienteForm
            submitText="Actualizar Cliente"
            schema={UpdateClienteSchema}
            initialValues={cliente}
            onSubmit={async (values) => {
              try {
                const updated = await updateClienteMutation({
                  ...values,
                  id: cliente.id,
                })
                await setQueryData(updated)
                router.refresh()
                router.push("/clientes")
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
