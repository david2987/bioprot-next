import React, { Suspense } from "react"
import { Form, FormProps } from "src/app/components/Form"
import { LabeledTextField } from "src/app/components/LabeledTextField"

import { z } from "zod"
export { FORM_ERROR } from "src/app/components/Form"

export function ClienteForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <div className="grid grid-cols-3 gap-4 ">
        <div>
          <LabeledTextField name="nombre" label="Nombre" placeholder="Nombre" type="text" />
        </div>
        <div>
          <LabeledTextField name="email" label="Email" placeholder="Email" type="text" />
        </div>
        <div>
          <LabeledTextField name="cuit" label="Cuit" placeholder="Cuit" type="text" />
        </div>
        <div>
          <LabeledTextField name="telefono" label="Telefono" placeholder="Telefono" type="text" />
        </div>
        <div>
          <LabeledTextField name="celular" label="Celular" placeholder="Celular" type="text" />
        </div>
        <div>
          <LabeledTextField
            name="domicilio"
            label="Domicilio"
            placeholder="Domicilio"
            type="text"
          />
        </div>
        <div>
          <LabeledTextField name="iva" label="Iva" placeholder="Iva" type="text" />
        </div>
        <div>
          <LabeledTextField
            name="localidad"
            label="Localidad"
            placeholder="Localidad"
            type="text"
          />
        </div>
      </div>

      {/* template: <__component__ name="__fieldName__" label="__Field_Name__" placeholder="__Field_Name__"  type="__inputType__" /> */}
    </Form>
  )
}
