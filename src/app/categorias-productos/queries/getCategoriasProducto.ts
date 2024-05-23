import { NotFoundError } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db from "db"
import { z } from "zod"

const GetCategoriasProducto = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(
  resolver.zod(GetCategoriasProducto),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const categoriasProducto = await db.categoriasProducto.findFirst({
      where: { id },
    })

    if (!categoriasProducto) throw new NotFoundError()

    return categoriasProducto
  }
)
