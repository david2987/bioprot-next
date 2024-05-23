import { resolver } from "@blitzjs/rpc"
import db from "db"
import { UpdateMedicSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(UpdateMedicSchema),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const medic = await db.medic.update({ where: { id }, data })

    return medic
  }
)
