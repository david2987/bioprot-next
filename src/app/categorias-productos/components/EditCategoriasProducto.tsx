"use client"
import { Suspense } from "react"
import updateCategoriasProducto from "../mutations/updateCategoriasProducto"
import getCategoriasProducto from "../queries/getCategoriasProducto"
import { UpdateCategoriasProductoSchema } from "../schemas"
import { FORM_ERROR, CategoriasProductoForm } from "./CategoriasProductoForm"
import { useMutation, useQuery } from "@blitzjs/rpc"
import { useRouter } from "next/navigation"

export const EditCategoriasProducto = ({
  categoriasProductoId,
}: {
  categoriasProductoId: number
}) => {
  const [categoriasProducto, { setQueryData }] = useQuery(
    getCategoriasProducto,
    { id: categoriasProductoId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [updateCategoriasProductoMutation] = useMutation(updateCategoriasProducto)
  const router = useRouter()
  return (
    <>
      <div>
        <h1>Edit CategoriasProducto {categoriasProducto.id}</h1>
        <pre>{JSON.stringify(categoriasProducto, null, 2)}</pre>
        <Suspense fallback={<div>Loading...</div>}>
          <CategoriasProductoForm
            submitText="Update CategoriasProducto"
            schema={UpdateCategoriasProductoSchema}
            initialValues={categoriasProducto}
            onSubmit={async (values) => {
              try {
                const updated = await updateCategoriasProductoMutation({
                  ...values,
                  id: categoriasProducto.id,
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
