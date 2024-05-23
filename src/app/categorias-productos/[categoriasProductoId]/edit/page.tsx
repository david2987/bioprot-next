import { Metadata } from "next"
import { Suspense } from "react"
import { invoke } from "src/app/blitz-server"
import getCategoriasProducto from "../../queries/getCategoriasProducto"
import { EditCategoriasProducto } from "../../components/EditCategoriasProducto"

type EditCategoriasProductoPageProps = {
  params: { categoriasProductoId: string }
}

export async function generateMetadata({
  params,
}: EditCategoriasProductoPageProps): Promise<Metadata> {
  const CategoriasProducto = await invoke(getCategoriasProducto, {
    id: Number(params.categoriasProductoId),
  })
  return {
    title: `Edit CategoriasProducto ${CategoriasProducto.id} - ${CategoriasProducto.name}`,
  }
}

export default async function Page({ params }: EditCategoriasProductoPageProps) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditCategoriasProducto categoriasProductoId={Number(params.categoriasProductoId)} />
      </Suspense>
    </div>
  )
}
