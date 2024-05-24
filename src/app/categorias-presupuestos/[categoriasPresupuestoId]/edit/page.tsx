import { Metadata } from "next"
import { Suspense } from "react"
import { invoke } from "src/app/blitz-server"
import getCategoriasPresupuesto from "../../queries/getCategoriasPresupuesto"
import { EditCategoriasPresupuesto } from "../../components/EditCategoriasPresupuesto"

type EditCategoriasPresupuestoPageProps = {
  params: { categoriasPresupuestoId: string }
}

export async function generateMetadata({
  params,
}: EditCategoriasPresupuestoPageProps): Promise<Metadata> {
  const CategoriasPresupuesto = await invoke(getCategoriasPresupuesto, {
    id: Number(params.categoriasPresupuestoId),
  })
  return {
    title: `Edit CategoriasPresupuesto ${CategoriasPresupuesto.id} - ${CategoriasPresupuesto.descripcion}`,
  }
}

export default async function Page({ params }: EditCategoriasPresupuestoPageProps) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditCategoriasPresupuesto
          categoriasPresupuestoId={Number(params.categoriasPresupuestoId)}
        />
      </Suspense>
    </div>
  )
}
