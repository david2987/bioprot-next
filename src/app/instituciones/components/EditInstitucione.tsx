"use client"
import { Suspense } from "react"
import updateInstitucione from "../mutations/updateInstitucione"
import getInstitucione from "../queries/getInstitucione"
import { UpdateInstitucioneSchema } from "../schemas"
import { FORM_ERROR, InstitucioneForm } from "./InstitucioneForm"
import { useMutation, useQuery } from "@blitzjs/rpc"
import { useRouter } from "next/navigation"

export const EditInstitucione = ({ institucioneId }: { institucioneId: number }) => {
  const [institucione, { setQueryData }] = useQuery(
    getInstitucione,
    { id: institucioneId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [updateInstitucioneMutation] = useMutation(updateInstitucione)
  const router = useRouter()
  return (
    <>
      <div>
        <h1>Edit Institucione {institucione.id}</h1>
        <pre>{JSON.stringify(institucione, null, 2)}</pre>
        <Suspense fallback={<div>Loading...</div>}>
          <InstitucioneForm
            submitText="Update Institucione"
            schema={UpdateInstitucioneSchema}
            initialValues={institucione}
            onSubmit={async (values) => {
              try {
                const updated = await updateInstitucioneMutation({
                  ...values,
                  id: institucione.id,
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
