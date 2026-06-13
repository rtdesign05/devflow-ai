import { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

interface SessionPayload {
  userId: number
  email: string
}

export function getSessionFromRequest(req: NextRequest): SessionPayload | null {
  const token = req.cookies.get('session')?.value
  if (!token) return null
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!) as SessionPayload
    if (typeof payload.userId !== 'number') return null
    return payload
  } catch {
    return null
  }
}
