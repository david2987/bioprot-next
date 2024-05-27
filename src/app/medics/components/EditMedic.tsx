"use client"
import { Suspense } from "react"
import updateMedic from "../mutations/updateMedic"
import getMedic from "../queries/getMedic"
import { UpdateMedicSchema } from "../schemas"
import { FORM_ERROR, MedicForm } from "./MedicForm"
import { useMutation, useQuery } from "@blitzjs/rpc"
import { useRouter } from "next/navigation"

export const EditMedic = ({ medicId }: { medicId: number }) => {
  const [medic, { setQueryData }] = useQuery(
    getMedic,
    { id: medicId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [updateMedicMutation] = useMutation(updateMedic)
  const router = useRouter()
  return (
    <>
      <div>
        <div className="text-2xl mb-2 border-b-2 mt-2">Editar Medico </div>

        <Suspense fallback={<div>Loading...</div>}>
          <MedicForm
            submitText="Actualizar Medico"
            schema={UpdateMedicSchema}
            initialValues={medic}
            onSubmit={async (values) => {
              try {
                const updated = await updateMedicMutation({
                  ...values,
                  id: medic.id,
                })
                await setQueryData(updated)
                router.refresh()
                router.push("/medics")
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
