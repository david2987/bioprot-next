import { paginate } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db, { Prisma } from "db"

interface GetProductosInput
  extends Pick<Prisma.ProductoFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetProductosInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: productos,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.producto.count({ where }),
      query: (paginateArgs) => db.producto.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      productos,
      nextPage,
      hasMore,
      count,
    }
  }
)
