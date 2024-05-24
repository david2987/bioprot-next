import { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import { PlazosEntregasList } from "./components/PlazosEntregasList"

export const metadata: Metadata = {
  title: "PlazosEntregas",
  description: "List of plazosEntregas",
}

export default function Page() {
  return (
    <div>
      <p>
        <Link href={"/plazos-entregas/new"}>Create PlazosEntrega</Link>
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <PlazosEntregasList />
      </Suspense>
    </div>
  )
}
