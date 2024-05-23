import { paginate } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db, { Prisma } from "db"

interface GetMedicsInput
  extends Pick<Prisma.MedicFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetMedicsInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: medics,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.medic.count({ where }),
      query: (paginateArgs) => db.medic.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      medics,
      nextPage,
      hasMore,
      count,
    }
  }
)
