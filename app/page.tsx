'use client'

import { useState, useEffect } from 'react'

interface Generation {
  id: number
  figmaUrl: string
  htmlCode: string
  reactCode: string | null
  status: string
  createdAt: string
}

export default function Home() {
  const [figmaUrl, setFigmaUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState<Generation | null>(null)
  const [history, setHistory] = useState<Generation[]>([])
  const [activeTab, setActiveTab] = useState<'html' | 'react'>('html')
  const [copied, setCopied] = useState(false)

  useEffect(() => { fetchHistory() }, [])

  async function fetchHistory() {
    const res = await fetch('/api/history')
    if (res.ok) setHistory(await res.json())
  }

  async function handleGenerate() {
    if (!figmaUrl.trim()) return
    setLoading(true)
    setError('')
    setResult(null)
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ figmaUrl }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setResult(data)
      fetchHistory()
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Erreur inconnue')
    } finally {
      setLoading(false)
    }
  }

  function handleCopy(code: string) {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const activeCode = result
    ? activeTab === 'html' ? result.htmlCode : result.reactCode ?? ''
    : ''

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', color: '#e8e6f0', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <header style={{ borderBottom: '1px solid #1e1c2e', padding: '24px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
            <span style={{ fontSize: '24px', color: '#7c6af7' }}>⬡</span>
            <span style={{ fontSize: '20px', fontWeight: '600', color: '#fff' }}>DevFlow AI</span>
          </div>
          <p style={{ fontSize: '14px', color: '#6b6880', margin: 0 }}>
            Transforme tes maquettes Figma en code HTML/CSS et React
          </p>
        </div>
      </header>

      <main style={{ maxWidth: '780px', margin: '0 auto', padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Formulaire */}
        <section style={{ background: '#111018', border: '1px solid #1e1c2e', borderRadius: '12px', padding: '24px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#9d9ab0', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            URL de la maquette Figma
          </label>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              type="url"
              style={{ flex: 1, background: '#0a0a0f', border: '1px solid #2a2740', borderRadius: '8px', padding: '10px 14px', color: '#e8e6f0', fontSize: '14px', outline: 'none' }}
              placeholder="https://www.figma.com/design/..."
              value={figmaUrl}
              onChange={(e) => setFigmaUrl(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
            />
            <button
              onClick={handleGenerate}
              disabled={loading || !figmaUrl.trim()}
              style={{ background: loading || !figmaUrl.trim() ? '#3d3a55' : '#7c6af7', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 22px', fontSize: '14px', fontWeight: '500', cursor: loading || !figmaUrl.trim() ? 'not-allowed' : 'pointer' }}
            >
              {loading ? '⏳ Génération...' : 'Générer'}
            </button>
          </div>
          {error && <p style={{ margin: '10px 0 0', fontSize: '13px', color: '#f87171' }}>⚠ {error}</p>}
        </section>

        {/* Résultat */}
        {result && (
          <section style={{ background: '#111018', border: '1px solid #1e1c2e', borderRadius: '12px', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div style={{ display: 'flex', gap: '4px', background: '#0a0a0f', borderRadius: '8px', padding: '3px' }}>
                {(['html', 'react'] as const).map(tab => (
                  <button key={tab} onClick={() => setActiveTab(tab)}
                    style={{ background: activeTab === tab ? '#1e1c2e' : 'transparent', border: 'none', color: activeTab === tab ? '#e8e6f0' : '#6b6880', padding: '6px 14px', fontSize: '13px', borderRadius: '6px', cursor: 'pointer' }}>
                    {tab === 'html' ? 'HTML / CSS' : 'React'}
                  </button>
                ))}
              </div>
              <button onClick={() => handleCopy(activeCode)}
                style={{ background: 'transparent', border: '1px solid #2a2740', color: copied ? '#4ade80' : '#9d9ab0', padding: '6px 14px', borderRadius: '6px', fontSize: '13px', cursor: 'pointer' }}>
                {copied ? '✓ Copié' : 'Copier'}
              </button>
            </div>
            <pre style={{ background: '#0a0a0f', border: '1px solid #1a1828', borderRadius: '8px', padding: '16px', overflow: 'auto', fontSize: '12px', lineHeight: '1.6', color: '#c4b5fd', maxHeight: '420px', margin: 0 }}>
              <code>{activeCode}</code>
            </pre>
          </section>
        )}

        {/* Historique */}
        {history.length > 0 && (
          <section style={{ background: '#111018', border: '1px solid #1e1c2e', borderRadius: '12px', padding: '24px' }}>
            <h2 style={{ fontSize: '13px', fontWeight: '500', color: '#9d9ab0', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 16px' }}>
              Générations récentes
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {history.map((gen) => (
                <li key={gen.id} onClick={() => setResult(gen)}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px', background: '#0a0a0f', border: '1px solid #1a1828', borderRadius: '8px', cursor: 'pointer', gap: '12px' }}>
                  <span style={{ fontSize: '13px', color: '#9d9ab0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>
                    {gen.figmaUrl}
                  </span>
                  <span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '20px', background: '#0d2e1a', color: '#4ade80', flexShrink: 0 }}>
                    {gen.status}
                  </span>
                  <span style={{ fontSize: '12px', color: '#3d3a55', flexShrink: 0 }}>
                    {new Date(gen.createdAt).toLocaleString('fr-FR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </div>
  )
}
