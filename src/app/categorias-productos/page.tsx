import { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import { CategoriasProductosList } from "./components/CategoriasProductosList"

export const metadata: Metadata = {
  title: "CategoriasProductos",
  description: "List of categoriasProductos",
}

export default function Page() {
  return (
    <div>
      <p>
        <Link href={"/categoriasProductos/new"}>Create CategoriasProducto</Link>
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <CategoriasProductosList />
      </Suspense>
    </div>
  )
}
