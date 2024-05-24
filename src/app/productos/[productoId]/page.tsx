import { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import { invoke } from "src/app/blitz-server"
import getProducto from "../queries/getProducto"
import { Producto } from "../components/Producto"

export async function generateMetadata({ params }: ProductoPageProps): Promise<Metadata> {
  const Producto = await invoke(getProducto, { id: Number(params.productoId) })
  return {
    title: `Producto ${Producto.id} - ${Producto.titulo}`,
  }
}

type ProductoPageProps = {
  params: { productoId: string }
}

export default async function Page({ params }: ProductoPageProps) {
  return (
    <div>
      <p>
        <Link href={"/productos"}>Productos</Link>
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <Producto productoId={Number(params.productoId)} />
      </Suspense>
    </div>
  )
}
