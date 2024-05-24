import { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import { invoke } from "src/app/blitz-server"
import getInstitucione from "../queries/getInstitucione"
import { Institucione } from "../components/Institucione"

export async function generateMetadata({ params }: InstitucionePageProps): Promise<Metadata> {
  const Institucione = await invoke(getInstitucione, {
    id: Number(params.institucioneId),
  })
  return {
    title: `Institucione ${Institucione.id} - ${Institucione.descripcion}`,
  }
}

type InstitucionePageProps = {
  params: { institucioneId: string }
}

export default async function Page({ params }: InstitucionePageProps) {
  return (
    <div>
      <p>
        <Link href={"/instituciones"}>Instituciones</Link>
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <Institucione institucioneId={Number(params.institucioneId)} />
      </Suspense>
    </div>
  )
}
