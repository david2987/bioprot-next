"use client"
import { useMutation, useQuery } from "@blitzjs/rpc"
import Link from "next/link"
import { useRouter } from "next/navigation"
import deleteCliente from "../mutations/deleteCliente"
import getCliente from "../queries/getCliente"

export const Cliente = ({ clienteId }: { clienteId: number }) => {
  const router = useRouter()
  const [deleteClienteMutation] = useMutation(deleteCliente)
  const [cliente] = useQuery(getCliente, { id: clienteId })

  return (
    <>
      <div>
        <h1>Project {cliente.id}</h1>
        <pre>{JSON.stringify(cliente, null, 2)}</pre>

        <Link href={`/clientes/${cliente.id}/edit`}>Edit</Link>

        <button
          type="button"
          onClick={async () => {
            if (window.confirm("This will be deleted")) {
              await deleteClienteMutation({ id: cliente.id })
              router.push("/clientes")
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
