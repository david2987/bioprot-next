"use client"
import { FORM_ERROR, CategoriasProductoForm } from "./CategoriasProductoForm"
import { CreateCategoriasProductoSchema } from "../schemas"
import { useMutation } from "@blitzjs/rpc"
import createCategoriasProducto from "../mutations/createCategoriasProducto"
import { useRouter } from "next/navigation"

export function New__ModelName() {
  const [createCategoriasProductoMutation] = useMutation(createCategoriasProducto)
  const router = useRouter()
  return (
    <CategoriasProductoForm
      submitText="Crear Categoria de Producto"
      schema={CreateCategoriasProductoSchema}
      onSubmit={async (values) => {
        try {
          const categoriasProducto = await createCategoriasProductoMutation(values)
          router.push(`/categorias-productos/${categoriasProducto.id}`)
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
