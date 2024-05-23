import { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import { MedicsList } from "./components/MedicsList"

export const metadata: Metadata = {
  title: "Medics",
  description: "List of medics",
}

export default function Page() {
  return (
    <div>
      <p>
        <Link href={"/medics/new"}>Create Medic</Link>
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <MedicsList />
      </Suspense>
    </div>
  )
}
