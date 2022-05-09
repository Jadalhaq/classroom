import { useSession, signIn, signOut } from "next-auth/react"
import styles from "../styles/Home.module.css";
import { useRouter } from 'next/router'

export default function Component() {
  const { data: session } = useSession()
  const router = useRouter()

  if (session) {
    router.push('/dashboard')
  }
  
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}