import { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import { ProductosList } from "./components/ProductosList"

export const metadata: Metadata = {
  title: "Productos",
  description: "List of productos",
}

export default function Page() {
  return (
    <div>
      <p>
        <Link href={"/productos/new"}>Create Producto</Link>
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductosList />
      </Suspense>
    </div>
  )
}
