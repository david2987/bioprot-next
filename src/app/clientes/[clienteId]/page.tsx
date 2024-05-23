import { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import { invoke } from "src/app/blitz-server"
import getCliente from "../queries/getCliente"
import { Cliente } from "../components/Cliente"

export async function generateMetadata({ params }: ClientePageProps): Promise<Metadata> {
  const Cliente = await invoke(getCliente, { id: Number(params.clienteId) })
  return {
    title: `Cliente ${Cliente.id} - ${Cliente.name}`,
  }
}

type ClientePageProps = {
  params: { clienteId: string }
}

export default async function Page({ params }: ClientePageProps) {
  return (
    <div>
      <p>
        <Link href={"/clientes"}>Clientes</Link>
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <Cliente clienteId={Number(params.clienteId)} />
      </Suspense>
    </div>
  )
}
