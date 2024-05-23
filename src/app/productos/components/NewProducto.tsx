"use client"
import { FORM_ERROR, ProductoForm } from "./ProductoForm"
import { CreateProductoSchema } from "../schemas"
import { useMutation } from "@blitzjs/rpc"
import createProducto from "../mutations/createProducto"
import { useRouter } from "next/navigation"

export function New__ModelName() {
  const [createProductoMutation] = useMutation(createProducto)
  const router = useRouter()
  return (
    <ProductoForm
      submitText="Create Producto"
      schema={CreateProductoSchema}
      onSubmit={async (values) => {
        try {
          const producto = await createProductoMutation(values)
          router.push(`/productos/${producto.id}`)
        } catch (error: any) {
          console.error(error)
          return {
            [FORM_ERROR]: error.toString(),
          }
        }
      }}
    />
  )
}
