import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSessionFromRequest } from '@/lib/session'

export async function POST(req: NextRequest) {
  const session = getSessionFromRequest(req)
  if (!session) {
    return NextResponse.json({ error: 'Non authentifié' }, { status: 401 })
  }
  const userId = session.userId

  try {
    const { figmaUrl } = await req.json()

    if (!figmaUrl || !figmaUrl.includes('figma.com')) {
      return NextResponse.json({ error: 'URL Figma invalide' }, { status: 400 })
    }

    const webhookUrl = process.env.N8N_WEBHOOK_URL
    if (!webhookUrl) {
      return NextResponse.json({ error: 'Agent non configuré' }, { status: 500 })
    }

    const n8nRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ figma_url: figmaUrl }),
    })

    if (!n8nRes.ok) throw new Error(`n8n: ${n8nRes.status}`)

    const htmlCode = await n8nRes.text()

    const generation = await prisma.generation.create({
      data: { figmaUrl, htmlCode, reactCode: null, status: 'success', userId },
    })

    return NextResponse.json({
      id: generation.id,
      htmlCode: generation.htmlCode,
      reactCode: generation.reactCode,
      createdAt: generation.createdAt,
    })
  } catch (error) {
    console.error('[/api/generate]', error)
    await prisma.generation.create({
      data: {
        figmaUrl: 'unknown',
        htmlCode: '',
        errorMessage: error instanceof Error ? error.message : 'Erreur inconnue',
        status: 'error',
        userId,
      },
    }).catch(() => {})
    return NextResponse.json({ error: 'Erreur lors de la génération' }, { status: 500 })
  }
}
