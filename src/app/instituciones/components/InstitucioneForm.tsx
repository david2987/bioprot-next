import React, { Suspense } from "react"
import { Form, FormProps } from "src/app/components/Form"
import { LabeledTextField } from "src/app/components/LabeledTextField"

import { z } from "zod"
export { FORM_ERROR } from "src/app/components/Form"

export function InstitucioneForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <LabeledTextField
        name="descripcion"
        label="Descripcion"
        placeholder="Descripcion"
        type="text"
      />
      <LabeledTextField name="email" label="Email" placeholder="Email" type="text" />
      <LabeledTextField name="cuit" label="Cuit" placeholder="Cuit" type="text" />
      <LabeledTextField name="telefono" label="Telefono" placeholder="Telefono" type="text" />
      <LabeledTextField name="domicilio" label="Domicilio" placeholder="Domicilio" type="text" />
      <LabeledTextField name="cufe" label="Cufe" placeholder="Cufe" type="text" />
      <LabeledTextField name="localidad" label="Localidad" placeholder="Localidad" type="text" />
      {/* template: <__component__ name="__fieldName__" label="__Field_Name__" placeholder="__Field_Name__"  type="__inputType__" /> */}
    </Form>
  )
}
