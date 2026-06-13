'use client'

import { useState, useEffect } from 'react'

interface Generation {
  id: number
  figmaUrl: string
  htmlCode: string
  reactCode: string | null
  errorMessage: string | null
  status: string
  createdAt: string
}

export default function DashboardPage() {
  const [figmaUrl, setFigmaUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState<Generation | null>(null)
  const [history, setHistory] = useState<Generation[]>([])
  const [historyLoaded, setHistoryLoaded] = useState(false)
  const [activeTab, setActiveTab] = useState<'html' | 'react'>('html')
  const [copied, setCopied] = useState(false)

  useEffect(() => { fetchHistory() }, [])

  async function fetchHistory() {
    try {
      const res = await fetch('/api/history')
      if (res.ok) setHistory(await res.json())
    } finally {
      setHistoryLoaded(true)
    }
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
      <main style={{ maxWidth: '780px', margin: '0 auto', padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

        {/* Formulaire */}
        <section style={{ background: '#111018', border: '1px solid #1e1c2e', borderRadius: '12px', padding: '24px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#9d9ab0', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            URL de la maquette Figma
          </label>
          <div className="generate-row" style={{ display: 'flex', gap: '10px' }}>
            <input
              type="url"
              className="generate-input"
              style={{ flex: 1, background: '#0a0a0f', border: '1px solid #2a2740', borderRadius: '8px', padding: '10px 14px', color: '#e8e6f0', fontSize: '14px', outline: 'none', minWidth: 0 }}
              placeholder="https://www.figma.com/design/..."
              value={figmaUrl}
              onChange={(e) => setFigmaUrl(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
            />
            <button
              onClick={handleGenerate}
              disabled={loading || !figmaUrl.trim()}
              className="generate-btn"
              style={{ background: loading || !figmaUrl.trim() ? '#3d3a55' : '#7c6af7', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 22px', fontSize: '14px', fontWeight: '500', cursor: loading || !figmaUrl.trim() ? 'not-allowed' : 'pointer', whiteSpace: 'nowrap' }}
            >
              {loading ? '⏳ Génération...' : 'Générer'}
            </button>
          </div>
          {error && <p style={{ margin: '10px 0 0', fontSize: '13px', color: '#f87171' }}>⚠ {error}</p>}
        </section>

        {/* Résultat */}
        {result && (
          <section style={{ background: '#111018', border: '1px solid #1e1c2e', borderRadius: '12px', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
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
            <pre style={{ background: '#0a0a0f', border: '1px solid #1a1828', borderRadius: '8px', padding: '16px', overflowX: 'auto', fontSize: '12px', lineHeight: '1.6', color: '#c4b5fd', maxHeight: '420px', margin: 0 }}>
              <code>{activeCode}</code>
            </pre>
          </section>
        )}

        {/* Historique */}
        <section style={{ background: '#111018', border: '1px solid #1e1c2e', borderRadius: '12px', padding: '24px' }}>
          <h2 style={{ fontSize: '13px', fontWeight: '500', color: '#9d9ab0', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 16px' }}>
            Générations récentes
          </h2>

          {!historyLoaded ? (
            <p style={{ fontSize: '13px', color: '#3d3a55', margin: 0 }}>Chargement…</p>
          ) : history.length === 0 ? (
            <p style={{ fontSize: '14px', color: '#6b6880', margin: 0 }}>
              Aucune génération pour le moment. Colle une URL Figma ci-dessus pour commencer.
            </p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {history.map((gen) => (
                <li
                  key={gen.id}
                  onClick={() => gen.status === 'success' ? setResult(gen) : undefined}
                  style={{
                    display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                    padding: '12px 14px', background: '#0a0a0f', border: '1px solid #1a1828',
                    borderRadius: '8px', cursor: gen.status === 'success' ? 'pointer' : 'default',
                    gap: '12px', flexWrap: 'wrap',
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <span style={{ fontSize: '13px', color: '#9d9ab0', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {gen.figmaUrl}
                    </span>
                    {gen.status === 'error' && gen.errorMessage && (
                      <span style={{ fontSize: '12px', color: '#f87171', display: 'block', marginTop: '4px' }}>
                        {gen.errorMessage.slice(0, 80)}
                      </span>
                    )}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                    <span style={{
                      fontSize: '11px', padding: '2px 8px', borderRadius: '20px',
                      background: gen.status === 'error' ? '#2e0d0d' : '#0d2e1a',
                      color: gen.status === 'error' ? '#f87171' : '#4ade80',
                    }}>
                      {gen.status === 'error' ? 'Erreur' : 'OK'}
                    </span>
                    <span style={{ fontSize: '12px', color: '#3d3a55' }}>
                      {new Date(gen.createdAt).toLocaleString('fr-FR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  )
}
