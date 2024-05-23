import { resolver } from "@blitzjs/rpc"
import db from "db"
import { DeleteCategoriasPresupuestoSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(DeleteCategoriasPresupuestoSchema),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const categoriasPresupuesto = await db.categoriasPresupuesto.deleteMany({
      where: { id },
    })

    return categoriasPresupuesto
  }
)
