import React, { Suspense } from "react"
import { Form, FormProps } from "src/app/components/Form"
import { LabeledTextField } from "src/app/components/LabeledTextField"

import { z } from "zod"
export { FORM_ERROR } from "src/app/components/Form"

export function ProductoForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <div className="grid grid-cols-1 gap-4 ">
        <div>
          <LabeledTextField name="titulo" label="Titulo" placeholder="Titulo" type="text" />
        </div>
        <div>
          <LabeledTextField name="detalle" label="Detalle" placeholder="Detalle" type="text" />
        </div>
        <div>
          <LabeledTextField
            name="idCategoriaProducto"
            label="Id Categoria Producto"
            placeholder="Id Categoria Producto"
            type="number"
          />
        </div>
      </div>
      {/* template: <__component__ name="__fieldName__" label="__Field_Name__" placeholder="__Field_Name__"  type="__inputType__" /> */}
    </Form>
  )
}
