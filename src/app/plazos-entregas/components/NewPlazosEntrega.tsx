"use client"
import { FORM_ERROR, PlazosEntregaForm } from "./PlazosEntregaForm"
import { CreatePlazosEntregaSchema } from "../schemas"
import { useMutation } from "@blitzjs/rpc"
import createPlazosEntrega from "../mutations/createPlazosEntrega"
import { useRouter } from "next/navigation"

export function New__ModelName() {
  const [createPlazosEntregaMutation] = useMutation(createPlazosEntrega)
  const router = useRouter()
  return (
    <PlazosEntregaForm
      submitText="Create PlazosEntrega"
      schema={CreatePlazosEntregaSchema}
      onSubmit={async (values) => {
        try {
          const plazosEntrega = await createPlazosEntregaMutation(values)
          router.push(`/plazos-entregas/${plazosEntrega.id}`)
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
