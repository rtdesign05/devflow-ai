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
    const payload = jwt.verify(token, process.env.JWT_SECRET!) as { userId: unknown; email: string }
    const userId = Number(payload.userId)
    if (!Number.isFinite(userId) || userId <= 0) return null
    return { userId, email: payload.email }
  } catch {
    return null
  }
}
