"use client"
import { Suspense } from "react"
import updateProducto from "../mutations/updateProducto"
import getProducto from "../queries/getProducto"
import { UpdateProductoSchema } from "../schemas"
import { FORM_ERROR, ProductoForm } from "./ProductoForm"
import { useMutation, useQuery } from "@blitzjs/rpc"
import { useRouter } from "next/navigation"

export const EditProducto = ({ productoId }: { productoId: number }) => {
  const [producto, { setQueryData }] = useQuery(
    getProducto,
    { id: productoId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [updateProductoMutation] = useMutation(updateProducto)
  const router = useRouter()
  return (
    <>
      <div>
        <h1>Edit Producto {producto.id}</h1>
        <pre>{JSON.stringify(producto, null, 2)}</pre>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductoForm
            submitText="Update Producto"
            schema={UpdateProductoSchema}
            initialValues={producto}
            onSubmit={async (values) => {
              try {
                const updated = await updateProductoMutation({
                  ...values,
                  id: producto.id,
                })
                await setQueryData(updated)
                router.refresh()
              } catch (error: any) {
                console.error(error)
                return {
                  [FORM_ERROR]: error.toString(),
                }
              }
            }}
          />
        </Suspense>
      </div>
    </>
  )
}
