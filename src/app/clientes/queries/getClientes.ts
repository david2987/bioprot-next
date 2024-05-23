import { paginate } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db, { Prisma } from "db"

interface GetClientesInput
  extends Pick<Prisma.ClienteFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetClientesInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: clientes,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.cliente.count({ where }),
      query: (paginateArgs) => db.cliente.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      clientes,
      nextPage,
      hasMore,
      count,
    }
  }
)
