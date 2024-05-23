import { resolver } from "@blitzjs/rpc"
import db from "db"
import { DeleteInstitucioneSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(DeleteInstitucioneSchema),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const institucione = await db.institucione.deleteMany({ where: { id } })

    return institucione
  }
)
