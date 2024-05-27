import { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import { CategoriasPresupuestosList } from "./components/CategoriasPresupuestosList"
import { Plus } from "lucide-react"

export const metadata: Metadata = {
  title: "CategoriasPresupuestos",
  description: "List of categoriasPresupuestos",
}

export default function Page() {
  return (
    <div className="grid container mx-auto  px-4 mt-4">
      <div className="text-end mr-5">
        <button className="bg-green-500 bg-green-700 text-white font-bold py-2 px-4 rounded">
          <div className="flex">
            <div>
              <Plus></Plus>
            </div>
            <div>
              <Link href={"/categorias-presupuestos/new"}>Crear Categoria Presupuesto</Link>
            </div>
          </div>
        </button>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <CategoriasPresupuestosList />
      </Suspense>
    </div>
  )
}
