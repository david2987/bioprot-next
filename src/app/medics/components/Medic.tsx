"use client"
import { useMutation, useQuery } from "@blitzjs/rpc"
import Link from "next/link"
import { useRouter } from "next/navigation"
import deleteMedic from "../mutations/deleteMedic"
import getMedic from "../queries/getMedic"

export const Medic = ({ medicId }: { medicId: number }) => {
  const router = useRouter()
  const [deleteMedicMutation] = useMutation(deleteMedic)
  const [medic] = useQuery(getMedic, { id: medicId })

  return (
    <>
      <div>
        <h1>Project {medic.id}</h1>
        <pre>{JSON.stringify(medic, null, 2)}</pre>

        <Link href={`/medics/${medic.id}/edit`}>Edit</Link>

        <button
          type="button"
          onClick={async () => {
            if (window.confirm("This will be deleted")) {
              await deleteMedicMutation({ id: medic.id })
              router.push("/medics")
            }
          }}
          style={{ marginLeft: "0.5rem" }}
        >
          Delete
        </button>
      </div>
    </>
  )
}
