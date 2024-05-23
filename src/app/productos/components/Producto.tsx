"use client"
import { useMutation, useQuery } from "@blitzjs/rpc"
import Link from "next/link"
import { useRouter } from "next/navigation"
import deleteProducto from "../mutations/deleteProducto"
import getProducto from "../queries/getProducto"

export const Producto = ({ productoId }: { productoId: number }) => {
  const router = useRouter()
  const [deleteProductoMutation] = useMutation(deleteProducto)
  const [producto] = useQuery(getProducto, { id: productoId })

  return (
    <>
      <div>
        <h1>Project {producto.id}</h1>
        <pre>{JSON.stringify(producto, null, 2)}</pre>

        <Link href={`/productos/${producto.id}/edit`}>Edit</Link>

        <button
          type="button"
          onClick={async () => {
            if (window.confirm("This will be deleted")) {
              await deleteProductoMutation({ id: producto.id })
              router.push("/productos")
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
