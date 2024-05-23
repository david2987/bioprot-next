"use client"
import { useMutation, useQuery } from "@blitzjs/rpc"
import Link from "next/link"
import { useRouter } from "next/navigation"
import deleteCategoriasProducto from "../mutations/deleteCategoriasProducto"
import getCategoriasProducto from "../queries/getCategoriasProducto"

export const CategoriasProducto = ({ categoriasProductoId }: { categoriasProductoId: number }) => {
  const router = useRouter()
  const [deleteCategoriasProductoMutation] = useMutation(deleteCategoriasProducto)
  const [categoriasProducto] = useQuery(getCategoriasProducto, {
    id: categoriasProductoId,
  })

  return (
    <>
      <div>
        <h1>Project {categoriasProducto.id}</h1>
        <pre>{JSON.stringify(categoriasProducto, null, 2)}</pre>

        <Link href={`/categoriasProductos/${categoriasProducto.id}/edit`}>Edit</Link>

        <button
          type="button"
          onClick={async () => {
            if (window.confirm("This will be deleted")) {
              await deleteCategoriasProductoMutation({
                id: categoriasProducto.id,
              })
              router.push("/categoriasProductos")
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
