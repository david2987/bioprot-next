import { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import { PlazosEntregasList } from "./components/PlazosEntregasList"
import { Plus } from "lucide-react"

export const metadata: Metadata = {
  title: "Plazo de Entregas",
  description: "List of plazo de Entrega",
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
              <Link href={"/plazos-entregas/new"}>Crear Plazo de Entrega</Link>
            </div>
          </div>
        </button>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <PlazosEntregasList />
      </Suspense>
    </div>
  )
}
