import { resolver } from "@blitzjs/rpc"
import db from "db"
import { CreateProductoSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(CreateProductoSchema),
  resolver.authorize(),
  async (input) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const producto = await db.producto.create({ data: input })

    return producto
  }
)
