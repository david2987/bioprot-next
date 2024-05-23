import { invoke } from "./blitz-server"
import getCurrentUser from "./users/queries/getCurrentUser"
import { redirect } from "next/navigation"

export default async function Home() {
  const currentUser = await invoke(getCurrentUser, null)
  console.log(currentUser)

  //  if(currentUser) redirect('/dashboard')
  if (!currentUser) redirect("/login")

  return <></>
}
