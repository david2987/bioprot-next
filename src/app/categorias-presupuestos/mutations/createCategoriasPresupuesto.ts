import { resolver } from "@blitzjs/rpc"
import db from "db"
import { CreateCategoriasPresupuestoSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(CreateCategoriasPresupuestoSchema),
  resolver.authorize(),
  async (input) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const categoriasPresupuesto = await db.categoriasPresupuesto.create({
      data: input,
    })

    return categoriasPresupuesto
  }
)
