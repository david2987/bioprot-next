"use client"
import { FORM_ERROR, MedicForm } from "./MedicForm"
import { CreateMedicSchema } from "../schemas"
import { useMutation } from "@blitzjs/rpc"
import createMedic from "../mutations/createMedic"
import { useRouter } from "next/navigation"

export function New__ModelName() {
  const [createMedicMutation] = useMutation(createMedic)
  const router = useRouter()
  return (
    <MedicForm
      submitText="Create Medic"
      schema={CreateMedicSchema}
      onSubmit={async (values) => {
        try {
          const medic = await createMedicMutation(values)
          router.push(`/medics/${medic.id}`)
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
