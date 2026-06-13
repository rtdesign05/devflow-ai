import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSessionFromRequest } from '@/lib/session'

export async function GET(req: NextRequest) {
  const session = getSessionFromRequest(req)
  if (!session) {
    return NextResponse.json({ error: 'Non authentifié' }, { status: 401 })
  }

  try {
    const generations = await prisma.generation.findMany({
      where: { userId: session.userId },
      orderBy: { createdAt: 'desc' },
      take: 20,
      select: {
        id: true,
        figmaUrl: true,
        status: true,
        errorMessage: true,
        createdAt: true,
        htmlCode: true,
        reactCode: true,
      },
    })
    return NextResponse.json(generations)
  } catch (error) {
    console.error('[/api/history]', error)
    return NextResponse.json({ error: 'Erreur de récupération' }, { status: 500 })
  }
}
