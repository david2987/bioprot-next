"use client"
import { BlitzPage } from "@blitzjs/auth"
import { Routes } from "@blitzjs/next"
import Link from "next/link"
import { useSession } from "@blitzjs/auth"
import { useRouter } from "next/navigation"
import { useMutation } from "@blitzjs/rpc"
import logout from "../(auth)/mutations/logout"
import { Institucione } from "../instituciones/components/Institucione"
import {
  Building2,
  LayoutDashboard,
  LucideUserSearch,
  Package,
  ReceiptTextIcon,
  Shapes,
  User2Icon,
  Box,
  Home,
} from "lucide-react"
import LinkDeSidebar from "./LinkDeSidebar"
import { v4 as uuidv4 } from "uuid"

const SideBar: BlitzPage = () => {
  const session = useSession({ suspense: false })
  const router = useRouter()
  const [logoutMutation] = useMutation(logout)

  let nombreUsuario = session.userId

  // detalles de los menu de la plataforma
  const menus = [
    { nombre: "Presupuesto", link: "/presupuestos", icon: <ReceiptTextIcon></ReceiptTextIcon> },
    { nombre: "Clientes", link: "/clientes", icon: <User2Icon></User2Icon> },
    { nombre: "Medicos", link: "/medics", icon: <LucideUserSearch></LucideUserSearch> },
    { nombre: "Instituciones", link: "/instituciones", icon: <Home></Home> },
    { nombre: "Productos", link: "/productos", icon: <Package></Package> },
    { nombre: "Categorias Presupuesto", link: "/categorias-presupuestos", icon: <Shapes></Shapes> },
    { nombre: "Categorias Producto", link: "/categorias-productos", icon: <Box></Box> },
  ]

  return (
    <>
      <div
        className="relative flex  flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-2rem)] w-full max-w-[16rem] p-4 shadow-xl shadow-blue-gray-900/5"
        key={uuidv4()}
      >
        <nav
          className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700"
          key={uuidv4()}
        >
          {menus &&
            menus.map((menu) => {
              const enlace = menu.link
              return (
                <ul className="list-none" key={uuidv4()}>
                  <LinkDeSidebar key={uuidv4()} texto={menu.nombre} href={enlace}></LinkDeSidebar>
                </ul>
              )
            })}
          <div
            role="button"
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            key={uuidv4()}
          >
            <div
              className="grid place-items-center mr-4 bg-red-500 p-1 rounded-md text-white"
              key={uuidv4()}
            >
              {session.userId && (
                <>
                  <button
                    className="flex items-center w-full p-2 rounded-lg text-start leading-tight transition-all  focus:bg-gray-50 focus:bg-opacity-80  hover:bg-red-400 focus:text-blue-900 active:text-blue-900 outline-none"
                    onClick={async () => {
                      await logoutMutation()
                      router.replace("/login")
                      router.refresh()
                    }}
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-2">Salir</div>
                  </button>
                </>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default SideBar
