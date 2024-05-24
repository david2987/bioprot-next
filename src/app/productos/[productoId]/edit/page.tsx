import { Metadata } from "next"
import { Suspense } from "react"
import { invoke } from "src/app/blitz-server"
import getProducto from "../../queries/getProducto"
import { EditProducto } from "../../components/EditProducto"

type EditProductoPageProps = {
  params: { productoId: string }
}

export async function generateMetadata({ params }: EditProductoPageProps): Promise<Metadata> {
  const Producto = await invoke(getProducto, { id: Number(params.productoId) })
  return {
    title: `Edit Producto ${Producto.id} - ${Producto.titulo}`,
  }
}

export default async function Page({ params }: EditProductoPageProps) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditProducto productoId={Number(params.productoId)} />
      </Suspense>
    </div>
  )
}
