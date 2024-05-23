import { paginate } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db, { Prisma } from "db"

interface GetCategoriasPresupuestosInput
  extends Pick<Prisma.CategoriasPresupuestoFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetCategoriasPresupuestosInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: categoriasPresupuestos,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.categoriasPresupuesto.count({ where }),
      query: (paginateArgs) =>
        db.categoriasPresupuesto.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      categoriasPresupuestos,
      nextPage,
      hasMore,
      count,
    }
  }
)
