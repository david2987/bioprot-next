import { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import { invoke } from "src/app/blitz-server"
import getPlazosEntrega from "../queries/getPlazosEntrega"
import { PlazosEntrega } from "../components/PlazosEntrega"

export async function generateMetadata({ params }: PlazosEntregaPageProps): Promise<Metadata> {
  const PlazosEntrega = await invoke(getPlazosEntrega, {
    id: Number(params.plazosEntregaId),
  })
  return {
    title: `PlazosEntrega ${PlazosEntrega.id} - ${PlazosEntrega.descripcion}`,
  }
}

type PlazosEntregaPageProps = {
  params: { plazosEntregaId: string }
}

export default async function Page({ params }: PlazosEntregaPageProps) {
  return (
    <div>
      <p>
        <Link href={"/plazos-entregas"}>PlazosEntregas</Link>
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <PlazosEntrega plazosEntregaId={Number(params.plazosEntregaId)} />
      </Suspense>
    </div>
  )
}
