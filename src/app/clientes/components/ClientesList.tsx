"use client"
import { usePaginatedQuery, useMutation } from "@blitzjs/rpc"
import Link from "next/link"
import { useRouter } from "next/navigation"
import getClientes from "../queries/getClientes"
import { useSearchParams } from "next/navigation"
import { usePathname } from "next/navigation"
import { Route } from "next"
import { ArrowLeft, ArrowRight, Edit, Search, Trash2 } from "lucide-react"
import { HeaderTable } from "../../components/RowsTable"
import deleteCliente from "../mutations/deleteCliente"

const ITEMS_PER_PAGE = 3

export const ClientesList = () => {
  const searchparams = useSearchParams()!
  const page = Number(searchparams.get("page")) || 0
  const nombreFiltrer = searchparams.get("nombre") ? String(searchparams.get("nombre")) : undefined
  const [deleteClienteMutation] = useMutation(deleteCliente)

  const [{ clientes, hasMore }] = usePaginatedQuery(getClientes, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
    ...(nombreFiltrer ? { where: { nombre: { contains: nombreFiltrer } } } : ""),
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
    { titulo: "Nombre" },
    { titulo: "Email" },
    { titulo: "CUIT" },
    { titulo: "Localidad" },
    { titulo: "Teléfono" },
    { titulo: "Celular" },
    { titulo: "IVA" },
    { titulo: "" },
    { titulo: "" },
  ]

  return (
    <div>
      <div className="flex mb-3 gap-3">
        <div>
          <label>Nombre: </label>
          <input
            className="border-solid border-2 border-slate-500 rounded-md"
            type="text"
            placeholder="Nombre"
            onChange={(e) => filtrarDatos(e.target.value)}
          ></input>
        </div>
        <Search></Search>
      </div>
      {clientes.length == 0 ? (
        <>
          <table className="min-w-3/4 divide-y divide-gray-200 dark:divide-neutral-700">
            <thead className="bg-gray-700">
              <tr>{HeaderTable({ headers: tableHader })}</tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
              <tr>
                <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
                  No Hay Registro.
                </td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        ""
      )}

      {clientes.length > 0 ? (
        <>
          <table className="min-w-3/4 divide-y divide-gray-200 dark:divide-neutral-700">
            <thead className="bg-gray-700">
              <tr>{HeaderTable({ headers: tableHader })}</tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
              {clientes &&
                clientes.map((cliente) => (
                  <tr>
                    <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
                      {cliente.nombre}
                    </td>
                    <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
                      {cliente.email}
                    </td>
                    <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
                      {cliente.cuit}
                    </td>
                    <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
                      {cliente.localidad}
                    </td>
                    <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
                      {cliente.telefono}
                    </td>
                    <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
                      {cliente.celular}
                    </td>
                    <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
                      {cliente.iva}
                    </td>
                    <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
                      <a href={`/clientes/${cliente.id}/edit`}>
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
                            await deleteClienteMutation({ id: cliente.id })
                            router.push("/clientes")
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
