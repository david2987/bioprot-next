import React, { Suspense } from "react"
import { Form, FormProps } from "src/app/components/Form"
import { LabeledTextField } from "src/app/components/LabeledTextField"

import { z } from "zod"
export { FORM_ERROR } from "src/app/components/Form"

export function MedicForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <div className="grid grid-cols-3 gap-4 ">
        <div>
          <LabeledTextField name="nombre" label="Nombre" placeholder="Nombre" type="text" />
        </div>
        <div>
          <LabeledTextField
            name="domicilio"
            label="Domicilio"
            placeholder="Domicilio"
            type="text"
          />
        </div>
      </div>
      {/* template: <__component__ name="__fieldName__" label="__Field_Name__" placeholder="__Field_Name__"  type="__inputType__" /> */}
    </Form>
  )
}
