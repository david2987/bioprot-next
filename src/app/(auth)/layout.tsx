import { useAuthenticatedBlitzContext } from "../blitz-server"
import Footer from "../(auth)/components/Footer"
import Header from "../(auth)/components/Header"

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  await useAuthenticatedBlitzContext({
    redirectAuthenticatedTo: "/",
  })
  return <>{children}</>
}
