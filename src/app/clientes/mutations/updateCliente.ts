import { resolver } from "@blitzjs/rpc"
import db from "db"
import { UpdateClienteSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(UpdateClienteSchema),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const cliente = await db.cliente.update({ where: { id }, data })

    return cliente
  }
)
