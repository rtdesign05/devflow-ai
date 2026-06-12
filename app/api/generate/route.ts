import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
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

    const n8nData = await n8nRes.json()

    const generation = await prisma.generation.create({
      data: {
        figmaUrl,
        htmlCode: n8nData.html ?? JSON.stringify(n8nData),
        reactCode: n8nData.react ?? null,
        status: 'success',
      },
    })

    return NextResponse.json({
      id: generation.id,
      htmlCode: generation.htmlCode,
      reactCode: generation.reactCode,
      createdAt: generation.createdAt,
    })
  } catch (error) {
    console.error('[/api/generate]', error)
    return NextResponse.json({ error: 'Erreur lors de la génération' }, { status: 500 })
  }
}
