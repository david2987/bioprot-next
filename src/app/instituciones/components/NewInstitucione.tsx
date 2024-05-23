"use client"
import { FORM_ERROR, InstitucioneForm } from "./InstitucioneForm"
import { CreateInstitucioneSchema } from "../schemas"
import { useMutation } from "@blitzjs/rpc"
import createInstitucione from "../mutations/createInstitucione"
import { useRouter } from "next/navigation"

export function New__ModelName() {
  const [createInstitucioneMutation] = useMutation(createInstitucione)
  const router = useRouter()
  return (
    <InstitucioneForm
      submitText="Create Institucione"
      schema={CreateInstitucioneSchema}
      onSubmit={async (values) => {
        try {
          const institucione = await createInstitucioneMutation(values)
          router.push(`/instituciones/${institucione.id}`)
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
