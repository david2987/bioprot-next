import { Metadata } from "next"
import { Suspense } from "react"
import { New__ModelName } from "../components/NewCliente"

export const metadata: Metadata = {
  title: "Cliente",
  description: "Crear a Cliente",
}

export default function Page() {
  return (
    <div>
      <h1>Crear Cliente</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="container">
          <New__ModelName />
        </div>
      </Suspense>
    </div>
  )
}
