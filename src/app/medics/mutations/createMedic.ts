import { resolver } from "@blitzjs/rpc"
import db from "db"
import { CreateMedicSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(CreateMedicSchema),
  resolver.authorize(),
  async (input) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const medic = await db.medic.create({ data: input })

    return medic
  }
)
