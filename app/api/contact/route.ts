import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { nom, email, message } = await req.json()

    if (!nom?.trim() || !email?.includes('@') || !message?.trim()) {
      return NextResponse.json({ error: 'Champs invalides' }, { status: 400 })
    }

    console.log('[/api/contact] Nouveau message:', { nom, email, message: message.slice(0, 200) })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
