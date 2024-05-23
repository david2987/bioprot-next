import { resolver } from "@blitzjs/rpc"
import db from "db"
import { DeletePlazosEntregaSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(DeletePlazosEntregaSchema),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const plazosEntrega = await db.plazosEntrega.deleteMany({ where: { id } })

    return plazosEntrega
  }
)
