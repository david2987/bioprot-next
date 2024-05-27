"use client"
import { FORM_ERROR, ClienteForm } from "./ClienteForm"
import { CreateClienteSchema } from "../schemas"
import { useMutation } from "@blitzjs/rpc"
import createCliente from "../mutations/createCliente"
import { useRouter } from "next/navigation"

export function New__ModelName() {
  const [createClienteMutation] = useMutation(createCliente)
  const router = useRouter()
  return (
    <>
      <ClienteForm
        submitText="Crear Cliente"
        schema={CreateClienteSchema}
        onSubmit={async (values) => {
          try {
            const cliente = await createClienteMutation(values)
            router.push(`/clientes`)
          } catch (error: any) {
            console.error(error)
            return {
              [FORM_ERROR]: error.toString(),
            }
          }
        }}
      />
    </>
  )
}
