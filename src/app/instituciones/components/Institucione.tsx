"use client"
import { useMutation, useQuery } from "@blitzjs/rpc"
import Link from "next/link"
import { useRouter } from "next/navigation"
import deleteInstitucione from "../mutations/deleteInstitucione"
import getInstitucione from "../queries/getInstitucione"

export const Institucione = ({ institucioneId }: { institucioneId: number }) => {
  const router = useRouter()
  const [deleteInstitucioneMutation] = useMutation(deleteInstitucione)
  const [institucione] = useQuery(getInstitucione, { id: institucioneId })

  return (
    <>
      <div>
        <h1>Project {institucione.id}</h1>
        <pre>{JSON.stringify(institucione, null, 2)}</pre>

        <Link href={`/instituciones/${institucione.id}/edit`}>Edit</Link>

        <button
          type="button"
          onClick={async () => {
            if (window.confirm("This will be deleted")) {
              await deleteInstitucioneMutation({ id: institucione.id })
              router.push("/instituciones")
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
