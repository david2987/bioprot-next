import React, { Suspense } from "react"
import { Form, FormProps } from "src/app/components/Form"
import { LabeledTextField } from "src/app/components/LabeledTextField"

import { z } from "zod"
export { FORM_ERROR } from "src/app/components/Form"

export function CategoriasProductoForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <LabeledTextField
        name="descripcion"
        label="Descripcion"
        placeholder="Descripcion"
        type="text"
      />
      {/* template: <__component__ name="__fieldName__" label="__Field_Name__" placeholder="__Field_Name__"  type="__inputType__" /> */}
    </Form>
  )
}
