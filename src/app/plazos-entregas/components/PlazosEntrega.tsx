"use client"
import { useMutation, useQuery } from "@blitzjs/rpc"
import Link from "next/link"
import { useRouter } from "next/navigation"
import deletePlazosEntrega from "../mutations/deletePlazosEntrega"
import getPlazosEntrega from "../queries/getPlazosEntrega"

export const PlazosEntrega = ({ plazosEntregaId }: { plazosEntregaId: number }) => {
  const router = useRouter()
  const [deletePlazosEntregaMutation] = useMutation(deletePlazosEntrega)
  const [plazosEntrega] = useQuery(getPlazosEntrega, { id: plazosEntregaId })

  return (
    <>
      <div>
        <h1>Project {plazosEntrega.id}</h1>
        <pre>{JSON.stringify(plazosEntrega, null, 2)}</pre>

        <Link href={`/plazos-entregas/${plazosEntrega.id}/edit`}>Edit</Link>

        <button
          type="button"
          onClick={async () => {
            if (window.confirm("This will be deleted")) {
              await deletePlazosEntregaMutation({ id: plazosEntrega.id })
              router.push("/plazos-entregas")
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
