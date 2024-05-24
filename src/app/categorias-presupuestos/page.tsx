import { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import { CategoriasPresupuestosList } from "./components/CategoriasPresupuestosList"

export const metadata: Metadata = {
  title: "CategoriasPresupuestos",
  description: "List of categoriasPresupuestos",
}

export default function Page() {
  return (
    <div>
      <p>
        <Link href={"/categorias-presupuestos/new"}>Create CategoriasPresupuesto</Link>
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <CategoriasPresupuestosList />
      </Suspense>
    </div>
  )
}
