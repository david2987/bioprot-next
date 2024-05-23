import { resolver } from "@blitzjs/rpc"
import db from "db"
import { UpdateCategoriasPresupuestoSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(UpdateCategoriasPresupuestoSchema),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const categoriasPresupuesto = await db.categoriasPresupuesto.update({
      where: { id },
      data,
    })

    return categoriasPresupuesto
  }
)
