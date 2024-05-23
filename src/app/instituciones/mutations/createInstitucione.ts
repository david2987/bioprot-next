import { resolver } from "@blitzjs/rpc"
import db from "db"
import { CreateInstitucioneSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(CreateInstitucioneSchema),
  resolver.authorize(),
  async (input) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const institucione = await db.institucione.create({ data: input })

    return institucione
  }
)
