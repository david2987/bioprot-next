import React, { useState } from "react"

interface Dato {
  id: number
  email: string | null
  createdAt: Date
  updatedAt: Date
  nombre: string
  cuit: string | null
  telefono: string | null
  celular: string | null
  domicilio: string | null
  iva: string | null
  localidad: string | null
}

interface Props {
  datos: Dato[]
  setDatosFiltrados: (datosFiltrados: Dato[]) => void
}

const FiltroTitulo: React.FC<Props> = ({ datos, setDatosFiltrados }) => {
  const [filtro, setFiltro] = useState("")

  const filtrarDatos = (event: React.ChangeEvent<HTMLInputElement>) => {
    const textoFiltro = event.target.value.toLowerCase()
    const datosFiltrados = datos.filter((dato) => dato.nombre.toLowerCase().includes(textoFiltro))
    return datosFiltrados
  }

  return (
    <div>
      <input type="text" placeholder="Filtrar por título" value={filtro} onChange={filtrarDatos} />
    </div>
  )
}

export default FiltroTitulo
