"use client"
import { ReactNode, MouseEvent } from "react"
import Link from "next/link"
import {
  BaggageClaimIcon,
  BoxIcon,
  Car,
  GaugeIcon,
  HandIcon,
  Home,
  LogOut,
  LucideIcon,
  Map,
  MapPinnedIcon,
  MenuIcon,
  MessageCircle,
  Package,
  Store,
  UserCircle,
  Users,
  Menu,
} from "lucide-react"

interface LinkDeSidebarProps {
  // iconoSVG: ReactNode;
  href?: string
  texto: string
  iconoSVG?: LucideIcon | JSX.Element
  onClick?: (event: MouseEvent) => void
}

const iconoSideBar = (texto: string) => {
  switch (texto) {
    case "Presupuesto":
      return <Home />

    case "Salir":
      return <LogOut />

    case "Clientes":
      return <Car />

    case "Medicos":
      return <Store />

    case "Instituciones ":
      return <BaggageClaimIcon />

    case "Chat":
      return <MessageCircle />

    case "Regiones":
      return <MapPinnedIcon />

    case "Productos":
      return <Package />

    case "ACL":
      return <HandIcon />

    case "Categorias Presupuesto":
      return <GaugeIcon />

    case "Categorias Producto":
      return <Users />

    case "Menu":
      return <Menu />

    default:
      return <></>
  }
}

export default function LinkDeSidebar({
  // iconoSVG,
  href,
  texto,
  onClick,
  ...props
}: LinkDeSidebarProps) {
  return (
    <li {...props} onClick={onClick} className="hover:bg-muted/50">
      <Link href={{ href }} prefetch={false} className="flex items-center p-2 space-x-3 rounded-md">
        {iconoSideBar(texto)}
        <span>{texto}</span>
      </Link>
    </li>
  )
}
