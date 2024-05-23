import { resolver } from "@blitzjs/rpc"
import db from "db"
import { CreatePlazosEntregaSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(CreatePlazosEntregaSchema),
  resolver.authorize(),
  async (input) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const plazosEntrega = await db.plazosEntrega.create({ data: input })

    return plazosEntrega
  }
)
