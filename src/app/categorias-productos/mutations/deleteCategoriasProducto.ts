import { resolver } from "@blitzjs/rpc"
import db from "db"
import { DeleteCategoriasProductoSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(DeleteCategoriasProductoSchema),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const categoriasProducto = await db.categoriasProducto.deleteMany({
      where: { id },
    })

    return categoriasProducto
  }
)
