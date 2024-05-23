import { resolver } from "@blitzjs/rpc"
import db from "db"
import { CreateClienteSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(CreateClienteSchema),
  resolver.authorize(),
  async (input) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const cliente = await db.cliente.create({ data: input })

    return cliente
  }
)
