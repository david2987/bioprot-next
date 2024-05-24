"use client"
import { useMutation, useQuery } from "@blitzjs/rpc"
import Link from "next/link"
import { useRouter } from "next/navigation"
import deleteCategoriasPresupuesto from "../mutations/deleteCategoriasPresupuesto"
import getCategoriasPresupuesto from "../queries/getCategoriasPresupuesto"

export const CategoriasPresupuesto = ({
  categoriasPresupuestoId,
}: {
  categoriasPresupuestoId: number
}) => {
  const router = useRouter()
  const [deleteCategoriasPresupuestoMutation] = useMutation(deleteCategoriasPresupuesto)
  const [categoriasPresupuesto] = useQuery(getCategoriasPresupuesto, {
    id: categoriasPresupuestoId,
  })

  return (
    <>
      <div>
        <h1>Project {categoriasPresupuesto.id}</h1>
        <pre>{JSON.stringify(categoriasPresupuesto, null, 2)}</pre>

        <Link href={`/categorias-presupuestos/${categoriasPresupuesto.id}/edit`}>Edit</Link>

        <button
          type="button"
          onClick={async () => {
            if (window.confirm("This will be deleted")) {
              await deleteCategoriasPresupuestoMutation({
                id: categoriasPresupuesto.id,
              })
              router.push("/categorias-presupuestos")
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
