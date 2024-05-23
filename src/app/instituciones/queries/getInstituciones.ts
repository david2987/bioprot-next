import { paginate } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db, { Prisma } from "db"

interface GetInstitucionesInput
  extends Pick<Prisma.InstitucioneFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetInstitucionesInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: instituciones,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.institucione.count({ where }),
      query: (paginateArgs) => db.institucione.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      instituciones,
      nextPage,
      hasMore,
      count,
    }
  }
)
