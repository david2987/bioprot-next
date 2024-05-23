import { paginate } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db, { Prisma } from "db"

interface GetPlazosEntregasInput
  extends Pick<Prisma.PlazosEntregaFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetPlazosEntregasInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: plazosEntregas,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.plazosEntrega.count({ where }),
      query: (paginateArgs) => db.plazosEntrega.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      plazosEntregas,
      nextPage,
      hasMore,
      count,
    }
  }
)
