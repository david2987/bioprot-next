import { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import { invoke } from "src/app/blitz-server"
import getCategoriasPresupuesto from "../queries/getCategoriasPresupuesto"
import { CategoriasPresupuesto } from "../components/CategoriasPresupuesto"

export async function generateMetadata({
  params,
}: CategoriasPresupuestoPageProps): Promise<Metadata> {
  const CategoriasPresupuesto = await invoke(getCategoriasPresupuesto, {
    id: Number(params.categoriasPresupuestoId),
  })
  return {
    title: `CategoriasPresupuesto ${CategoriasPresupuesto.id} - ${CategoriasPresupuesto.descripcion}`,
  }
}

type CategoriasPresupuestoPageProps = {
  params: { categoriasPresupuestoId: string }
}

export default async function Page({ params }: CategoriasPresupuestoPageProps) {
  return (
    <div>
      <p>{/* <Link href={"/categoriasPresupuestos"}>CategoriasPresupuestos</Link> */}</p>
      <Suspense fallback={<div>Loading...</div>}>
        <CategoriasPresupuesto categoriasPresupuestoId={Number(params.categoriasPresupuestoId)} />
      </Suspense>
    </div>
  )
}
