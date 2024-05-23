import { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import { invoke } from "src/app/blitz-server"
import getMedic from "../queries/getMedic"
import { Medic } from "../components/Medic"

export async function generateMetadata({ params }: MedicPageProps): Promise<Metadata> {
  const Medic = await invoke(getMedic, { id: Number(params.medicId) })
  return {
    title: `Medic ${Medic.id} - ${Medic.name}`,
  }
}

type MedicPageProps = {
  params: { medicId: string }
}

export default async function Page({ params }: MedicPageProps) {
  return (
    <div>
      <p>
        <Link href={"/medics"}>Medics</Link>
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <Medic medicId={Number(params.medicId)} />
      </Suspense>
    </div>
  )
}
