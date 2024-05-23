import { resolver } from "@blitzjs/rpc"
import db from "db"
import { DeleteMedicSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(DeleteMedicSchema),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const medic = await db.medic.deleteMany({ where: { id } })

    return medic
  }
)
