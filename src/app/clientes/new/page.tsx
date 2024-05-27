import { Metadata } from "next"
import { Suspense } from "react"
import { New__ModelName } from "../components/NewCliente"

export const metadata: Metadata = {
  title: "Cliente",
  description: "Crear a Cliente",
}

export default function Page() {
  return (
    <div className="mt-4">
      <div className="text-2xl mb-2 border-b-2">Crear Cliente</div>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="container">
          <New__ModelName />
        </div>
      </Suspense>
    </div>
  )
}
