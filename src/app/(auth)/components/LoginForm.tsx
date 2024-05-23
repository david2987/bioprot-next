"use client"
import { AuthenticationError, PromiseReturnType } from "blitz"
import Link from "next/link"
import { LabeledTextField } from "src/app/components/LabeledTextField"
import { Form, FORM_ERROR } from "src/app/components/Form"
import login from "../mutations/login"
import { Login } from "../validations"
import { useMutation } from "@blitzjs/rpc"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import type { Route } from "next"
import Image from "next/image"

type LoginFormProps = {
  onSuccess?: (user: PromiseReturnType<typeof login>) => void
}

export const LoginForm = (props: LoginFormProps) => {
  const [loginMutation] = useMutation(login)
  const router = useRouter()
  const next = useSearchParams()?.get("next")
  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-6 lg:px-8">
        <div className="align-middle">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Image src={"/logos/Logo-Bioprot-001.jpg"} width={320} height={90} alt="Logo"></Image>
          </div>
          <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm border-2 p-9 rounded-md border-gray ">
            <Form
              submitText="Login"
              schema={Login}
              initialValues={{ email: "", password: "" }}
              onSubmit={async (values) => {
                try {
                  await loginMutation(values)
                  if (next) {
                    router.push(next as Route)
                  } else {
                    window.location.reload()
                  }
                } catch (error: any) {
                  if (error instanceof AuthenticationError) {
                    return { [FORM_ERROR]: "Error al Ingresar  Usuario/Contraseña " }
                  } else {
                    return {
                      [FORM_ERROR]: "Error al Ingresar - ERROR - " + error.toString(),
                    }
                  }
                }
              }}
            >
              <LabeledTextField name="email" label="Email" placeholder="Email" />
              <LabeledTextField
                name="password"
                label="Contraseña"
                placeholder="Contraseña"
                type="password"
              />
              {/* <div>
                <Link href={"/forgot-password"}>Forgot your password?</Link>
              </div> */}
            </Form>
            <button className="mt-2 flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
              <Link href="/signup">Crear Usuario</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
