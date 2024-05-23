import { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import { invoke } from "src/app/blitz-server"
import getCategoriasProducto from "../queries/getCategoriasProducto"
import { CategoriasProducto } from "../components/CategoriasProducto"

export async function generateMetadata({ params }: CategoriasProductoPageProps): Promise<Metadata> {
  const CategoriasProducto = await invoke(getCategoriasProducto, {
    id: Number(params.categoriasProductoId),
  })
  return {
    title: `CategoriasProducto ${CategoriasProducto.id} - ${CategoriasProducto.name}`,
  }
}

type CategoriasProductoPageProps = {
  params: { categoriasProductoId: string }
}

export default async function Page({ params }: CategoriasProductoPageProps) {
  return (
    <div>
      <p>
        <Link href={"/categoriasProductos"}>CategoriasProductos</Link>
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <CategoriasProducto categoriasProductoId={Number(params.categoriasProductoId)} />
      </Suspense>
    </div>
  )
}
