import { paginate } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db, { Prisma } from "db"

interface GetCategoriasProductosInput
  extends Pick<Prisma.CategoriasProductoFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetCategoriasProductosInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: categoriasProductos,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.categoriasProducto.count({ where }),
      query: (paginateArgs) => db.categoriasProducto.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      categoriasProductos,
      nextPage,
      hasMore,
      count,
    }
  }
)
