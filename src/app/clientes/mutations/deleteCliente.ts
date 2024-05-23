import { resolver } from "@blitzjs/rpc"
import db from "db"
import { DeleteClienteSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(DeleteClienteSchema),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const cliente = await db.cliente.deleteMany({ where: { id } })

    return cliente
  }
)
