import { resolver } from "@blitzjs/rpc"
import db from "db"
import { DeleteProductoSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(DeleteProductoSchema),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const producto = await db.producto.deleteMany({ where: { id } })

    return producto
  }
)
