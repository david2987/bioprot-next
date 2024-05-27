"use client"
// import { usePaginatedQuery } from "@blitzjs/rpc"
// import Link from "next/link"
// import { useRouter } from "next/navigation"
// import getCategoriasPresupuestos from "../queries/getCategoriasPresupuestos"
// import { useSearchParams } from "next/navigation"
// import { usePathname } from "next/navigation"
// import { Route } from "next"
import { usePaginatedQuery, useMutation } from "@blitzjs/rpc"
import Link from "next/link"
import { useRouter } from "next/navigation"
import getCategoriasPresupuestos from "../queries/getCategoriasPresupuestos"
import { useSearchParams } from "next/navigation"
import { usePathname } from "next/navigation"
import { Route } from "next"
import { ArrowLeft, ArrowRight, Edit, Search, Trash2 } from "lucide-react"
import { HeaderTable } from "../../components/RowsTable"
import deleteCategoriasPresupuesto from "../mutations/deleteCategoriasPresupuesto"
import { v4 as uuidv4 } from "uuid"

const ITEMS_PER_PAGE = 100

export const CategoriasPresupuestosList = () => {
  const searchparams = useSearchParams()!
  const page = Number(searchparams.get("page")) || 0

  const nombreFiltrer = searchparams.get("nombre") ? String(searchparams.get("nombre")) : undefined
  const [deleteCategoriasPresupuestoMutation] = useMutation(deleteCategoriasPresupuesto)

  const [{ categoriasPresupuestos, hasMore }] = usePaginatedQuery(getCategoriasPresupuestos, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
    ...(nombreFiltrer ? { where: { descripcion: { contains: nombreFiltrer } } } : ""),
  })
  const router = useRouter()
  const pathname = usePathname()

  const goToPreviousPage = () => {
    const params = new URLSearchParams(searchparams)
    params.set("page", (page - 1).toString())
    router.push((pathname + "?" + params.toString()) as Route)
  }
  const goToNextPage = () => {
    const params = new URLSearchParams(searchparams)
    params.set("page", (page + 1).toString())
    router.push((pathname + "?" + params.toString()) as Route)
  }

  const filtrarDatos = (nombre: string) => {
    const params = new URLSearchParams(searchparams)
    params.set("nombre", nombre)
    router.push((pathname + "?" + params.toString()) as Route)
  }

  type HeaderTable = { titulo: string }[]

  const tableHader: HeaderTable = [
    { titulo: "#" },
    { titulo: "Descripción" },
    { titulo: "" },
    { titulo: "" },
  ]

  return (
    // <div>
    //   <ul>
    //     {categoriasPresupuestos.map((categoriasPresupuesto) => (
    //       <li key={categoriasPresupuesto.id}>
    //         <Link href={`/categorias-presupuestos/${categoriasPresupuesto.id}`}>
    //           {categoriasPresupuesto.descripcion}
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>

    //   <button disabled={page === 0} onClick={goToPreviousPage}>
    //     Previous
    //   </button>
    //   <button disabled={!hasMore} onClick={goToNextPage}>
    //     Next
    //   </button>
    // </div>
    <div>
      <div className="flex mb-3 gap-3">
        <div>
          <label>Descripción: </label>
          <input
            className="border-solid border-2 border-slate-500 rounded-md"
            type="text"
            placeholder="Descripción"
            onChange={(e) => filtrarDatos(e.target.value)}
          ></input>
        </div>
        <Search></Search>
      </div>
      {categoriasPresupuestos.length == 0 ? (
        <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
          <thead className="bg-gray-700">
            <tr>{HeaderTable({ headers: tableHader })}</tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
            <tr key={uuidv4()}>
              <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
                No Hay Registro.
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        ""
      )}

      {categoriasPresupuestos.length > 0 ? (
        <>
          <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
            <thead className="bg-gray-700">
              <tr>{HeaderTable({ headers: tableHader })}</tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
              {categoriasPresupuestos &&
                categoriasPresupuestos.map((categoriaPresupuesto) => (
                  <tr key={uuidv4()}>
                    <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
                      {categoriaPresupuesto.id}
                    </td>
                    <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2  text-base font-medium">
                      {categoriaPresupuesto.descripcion}
                    </td>
                    <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
                      <a href={`/categorias-presupuestos/${categoriaPresupuesto.id}/edit`}>
                        <Edit></Edit>
                      </a>
                    </td>
                    <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
                      <button
                        type="button"
                        onClick={async () => {
                          if (
                            window.confirm("Este registro se va a Eliminar. Usted desea continuar?")
                          ) {
                            await deleteCategoriasPresupuestoMutation({
                              id: categoriaPresupuesto.id,
                            })
                            router.push("/categorias-presupuestos")
                          }
                        }}
                        style={{ marginLeft: "0.5rem" }}
                      >
                        <Trash2></Trash2>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <button
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            disabled={page === 0}
            onClick={goToPreviousPage}
          >
            <ArrowLeft></ArrowLeft>
          </button>
          <button
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            disabled={!hasMore}
            onClick={goToNextPage}
          >
            <ArrowRight></ArrowRight>
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  )
}
