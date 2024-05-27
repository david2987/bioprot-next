import { Metadata } from "next"
import { Suspense } from "react"
import { New__ModelName } from "../components/NewPlazosEntrega"

export const metadata: Metadata = {
  title: "New Project",
  description: "Create a new project",
}

export default function Page() {
  return (
    <div className="mt-4">
      <div className="text-2xl mb-2 border-b-2">Crear Plazo Entrega</div>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="container">
          <New__ModelName />
        </div>
      </Suspense>
    </div>
  )
}
