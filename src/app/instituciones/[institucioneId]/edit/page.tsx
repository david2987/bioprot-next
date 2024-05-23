import { Metadata } from "next"
import { Suspense } from "react"
import { invoke } from "src/app/blitz-server"
import getInstitucione from "../../queries/getInstitucione"
import { EditInstitucione } from "../../components/EditInstitucione"

type EditInstitucionePageProps = {
  params: { institucioneId: string }
}

export async function generateMetadata({ params }: EditInstitucionePageProps): Promise<Metadata> {
  const Institucione = await invoke(getInstitucione, {
    id: Number(params.institucioneId),
  })
  return {
    title: `Edit Institucione ${Institucione.id} - ${Institucione.name}`,
  }
}

export default async function Page({ params }: EditInstitucionePageProps) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditInstitucione institucioneId={Number(params.institucioneId)} />
      </Suspense>
    </div>
  )
}
