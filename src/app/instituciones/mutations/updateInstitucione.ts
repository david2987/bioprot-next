import { resolver } from "@blitzjs/rpc"
import db from "db"
import { UpdateInstitucioneSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(UpdateInstitucioneSchema),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const institucione = await db.institucione.update({ where: { id }, data })

    return institucione
  }
)
