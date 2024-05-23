import { Metadata } from "next"
import { Suspense } from "react"
import { invoke } from "src/app/blitz-server"
import getPlazosEntrega from "../../queries/getPlazosEntrega"
import { EditPlazosEntrega } from "../../components/EditPlazosEntrega"

type EditPlazosEntregaPageProps = {
  params: { plazosEntregaId: string }
}

export async function generateMetadata({ params }: EditPlazosEntregaPageProps): Promise<Metadata> {
  const PlazosEntrega = await invoke(getPlazosEntrega, {
    id: Number(params.plazosEntregaId),
  })
  return {
    title: `Edit PlazosEntrega ${PlazosEntrega.id} - ${PlazosEntrega.name}`,
  }
}

export default async function Page({ params }: EditPlazosEntregaPageProps) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditPlazosEntrega plazosEntregaId={Number(params.plazosEntregaId)} />
      </Suspense>
    </div>
  )
}
