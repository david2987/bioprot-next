type HeaderTable = { titulo: string }[]
import { v4 as uuidv4 } from "uuid"

export const HeaderTable = ({ headers }: { headers: HeaderTable }) => {
  return (
    <>
      {headers &&
        headers.map((header) => (
          <th
            key={uuidv4()}
            scope="col"
            className="px-6 py-3 text-start text-xs font-medium text-white uppercase "
          >
            {header.titulo}
          </th>
        ))}
    </>
  )
}
