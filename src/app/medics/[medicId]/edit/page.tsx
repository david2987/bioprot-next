import { Metadata } from "next"
import { Suspense } from "react"
import { invoke } from "src/app/blitz-server"
import getMedic from "../../queries/getMedic"
import { EditMedic } from "../../components/EditMedic"

type EditMedicPageProps = {
  params: { medicId: string }
}

export async function generateMetadata({ params }: EditMedicPageProps): Promise<Metadata> {
  const Medic = await invoke(getMedic, { id: Number(params.medicId) })
  return {
    title: `Edit Medic ${Medic.id} - ${Medic.name}`,
  }
}

export default async function Page({ params }: EditMedicPageProps) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditMedic medicId={Number(params.medicId)} />
      </Suspense>
    </div>
  )
}
