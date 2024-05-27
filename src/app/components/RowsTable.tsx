type HeaderTable = { titulo: string }[]

export const HeaderTable = ({ headers }: { headers: HeaderTable }) => {
  return (
    <>
      {headers &&
        headers.map((header) => (
          <th
            scope="col"
            className="px-6 py-3 text-start text-xs font-medium text-white uppercase "
          >
            {header.titulo}
          </th>
        ))}
    </>
  )
}
