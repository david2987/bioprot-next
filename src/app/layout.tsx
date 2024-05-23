import "./styles/globals.css"
import { BlitzProvider } from "./blitz-client"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import SideBar from "./components/SideBar"
import getCurrentUser from "./users/queries/getCurrentUser"
import { invoke } from "./blitz-server"

async function tieneUsuario() {
  const currentUser = await invoke(getCurrentUser, null)
  return currentUser
}

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: { title: "Bioprot Implante Quirurgicos", template: "%s – Blitz" },
  description: "Implante Quirurgicos ",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const vista = tieneUsuario().then((data) => {
    if (data) {
      return (
        <html lang="en">
          <body className={inter.className}>
            <BlitzProvider>
              <Header />
              <div className="flex">
                <div className="w-[340px]">
                  <h5 className="ml-2 mt-2 block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">
                    Bienvenido, {data.name}
                  </h5>
                  <SideBar />
                </div>
                <div className="w-full">{children}</div>
              </div>
              <Footer />
            </BlitzProvider>
          </body>
        </html>
      )
    } else {
      return (
        <html lang="en">
          <body className={inter.className}>
            <BlitzProvider>
              {children}
              <Footer />
            </BlitzProvider>
          </body>
        </html>
      )
    }
  })

  return <>{vista}</>
}
