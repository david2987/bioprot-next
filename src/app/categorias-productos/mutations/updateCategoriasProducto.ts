import { resolver } from "@blitzjs/rpc"
import db from "db"
import { UpdateCategoriasProductoSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(UpdateCategoriasProductoSchema),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const categoriasProducto = await db.categoriasProducto.update({
      where: { id },
      data,
    })

    return categoriasProducto
  }
)
