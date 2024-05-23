import { resolver } from "@blitzjs/rpc"
import db from "db"
import { UpdateProductoSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(UpdateProductoSchema),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const producto = await db.producto.update({ where: { id }, data })

    return producto
  }
)
