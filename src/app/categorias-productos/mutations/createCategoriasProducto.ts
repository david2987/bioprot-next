import { resolver } from "@blitzjs/rpc"
import db from "db"
import { CreateCategoriasProductoSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(CreateCategoriasProductoSchema),
  resolver.authorize(),
  async (input) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const categoriasProducto = await db.categoriasProducto.create({
      data: input,
    })

    return categoriasProducto
  }
)
