import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import NavbarClient from './NavbarClient'

export default async function Navbar() {
  const cookieStore = await cookies()
  const token = cookieStore.get('session')?.value
  let userEmail: string | null = null

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: number; email: string }
      userEmail = decoded.email ?? null
    } catch {
      // invalid or expired token
    }
  }

  return <NavbarClient userEmail={userEmail} />
}
