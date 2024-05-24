import { Metadata } from "next"
import { Suspense } from "react"
import { invoke } from "src/app/blitz-server"
import getCliente from "../../queries/getCliente"
import { EditCliente } from "../../components/EditCliente"

type EditClientePageProps = {
  params: { clienteId: string }
}

export async function generateMetadata({ params }: EditClientePageProps): Promise<Metadata> {
  const Cliente = await invoke(getCliente, { id: Number(params.clienteId) })
  return {
    title: `Edit Cliente ${Cliente.id} - ${Cliente.nombre}`,
  }
}

export default async function Page({ params }: EditClientePageProps) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditCliente clienteId={Number(params.clienteId)} />
      </Suspense>
    </div>
  )
}
