import { resolver } from "@blitzjs/rpc"
import db from "db"
import { UpdatePlazosEntregaSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(UpdatePlazosEntregaSchema),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const plazosEntrega = await db.plazosEntrega.update({
      where: { id },
      data,
    })

    return plazosEntrega
  }
)
