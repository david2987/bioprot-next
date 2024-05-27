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
  Building,
  Receipt,
  UserRoundSearch,
  PackageSearch,
  ReceiptTextIcon,
  PackageOpenIcon,
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
      return <Receipt />

    case "Salir":
      return <LogOut />

    case "Clientes":
      return <Users />

    case "Medicos":
      return <UserRoundSearch />

    case "Instituciones":
      return <Building />

    case "Chat":
      return <MessageCircle />

    case "Regiones":
      return <MapPinnedIcon />

    case "Productos":
      return <Package />

    case "ACL":
      return <HandIcon />

    case "Categorias Presupuesto":
      return <ReceiptTextIcon />

    case "Categorias Producto":
      return <PackageOpenIcon />

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
    <li {...props} onClick={onClick} className="hover:bg-muted/50" key={1}>
      <a href={href} className="flex items-center p-2 space-x-3 rounded-md" key={1}>
        {iconoSideBar(texto)}
        <span>{texto}</span>
      </a>
    </li>
  )
}
