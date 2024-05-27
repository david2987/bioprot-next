import { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import { MedicsList } from "./components/MedicsList"
import { Plus } from "lucide-react"

export const metadata: Metadata = {
  title: "Medicos",
  description: "List of medicos",
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
              <Link href={"/medics/new"}>Crear Medico</Link>
            </div>
          </div>
        </button>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <MedicsList />
      </Suspense>
    </div>
  )
}
