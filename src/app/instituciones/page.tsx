import { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import { InstitucionesList } from "./components/InstitucionesList"

export const metadata: Metadata = {
  title: "Instituciones",
  description: "List of instituciones",
}

export default function Page() {
  return (
    <div>
      <p>
        <Link href={"/instituciones/new"}>Create Institucione</Link>
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <InstitucionesList />
      </Suspense>
    </div>
  )
}
