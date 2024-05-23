"use client"
import { usePaginatedQuery } from "@blitzjs/rpc"
import Link from "next/link"
import { useRouter } from "next/navigation"
import getClientes from "../queries/getClientes"
import { useSearchParams } from "next/navigation"
import { usePathname } from "next/navigation"
import { Route } from "next"
import { ArrowLeft, ArrowRight } from "lucide-react"

const ITEMS_PER_PAGE = 100

export const ClientesList = () => {
  const searchparams = useSearchParams()!
  const page = Number(searchparams.get("page")) || 0
  const [{ clientes, hasMore }] = usePaginatedQuery(getClientes, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
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

  return (
    <div>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id}>
            <Link href={`/clientes/${cliente.id}`}>{cliente.nombre}</Link>
          </li>
        ))}
      </ul>
      {clientes.length == 0 ? (
        <>
          <table className="min-w-3/4 divide-y divide-gray-200 dark:divide-neutral-700">
            <thead className="bg-gray-700">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-medium text-white uppercase "
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-medium text-white uppercase "
                >
                  Age
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-medium text-white uppercase "
                >
                  Address
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-end text-xs font-medium text-white uppercase "
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
              <tr>
                <td className="text-bolder">No Hay Registro.</td>
                {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  ">John Brown</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm  ">45</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm  ">New York No. 1 Lake Park</td>               */}
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        ""
      )}

      {clientes.length > 0 ? (
        <>
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
