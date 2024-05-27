import { Metadata } from "next"
import { Suspense } from "react"
import { New__ModelName } from "../components/NewCategoriasProducto"

export const metadata: Metadata = {
  title: "Create CategoriaProducto",
  description: "Create CategoriaProducto",
}

export default function Page() {
  return (
    <div className="mt-4">
      <div className="text-2xl mb-2 border-b-2">Crear Categoria de Producto</div>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="container">
          <New__ModelName />
        </div>
      </Suspense>
    </div>
  )
}
