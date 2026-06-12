import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const generations = await prisma.generation.findMany({
      orderBy: { createdAt: 'desc' },
      take: 20,
      select: {
        id: true,
        figmaUrl: true,
        status: true,
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
