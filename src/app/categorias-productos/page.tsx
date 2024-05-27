import { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import { CategoriasProductosList } from "./components/CategoriasProductosList"
import { Plus } from "lucide-react"

export const metadata: Metadata = {
  title: "Categorias de Productos",
  description: "List of categoriasProductos",
}

export default function Page() {
  return (
    <div>
      <div className="text-end mr-5 mt-2">
        <button className="bg-green-500 bg-green-700 text-white font-bold py-2 px-4 rounded">
          <div className="flex">
            <div>
              <Plus></Plus>
            </div>
            <div>
              <Link href={"/categorias-productos/new"}>Crear Categoria</Link>
            </div>
          </div>
        </button>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <div className="p-4 ml-5 justify-self-start ">
          <CategoriasProductosList />
        </div>
      </Suspense>
    </div>
  )
}
