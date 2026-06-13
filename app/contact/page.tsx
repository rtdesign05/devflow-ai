'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (!nom.trim()) { setError('Le nom est requis.'); return }
    if (!email.includes('@') || !email.includes('.')) { setError('Adresse email invalide.'); return }
    if (message.trim().length < 10) { setError('Le message doit contenir au moins 10 caractères.'); return }

    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nom, email, message }),
      })
      if (!res.ok) {
        const data = await res.json()
        setError(data.error ?? 'Erreur lors de l\'envoi.')
        return
      }
      setSent(true)
    } catch {
      setError('Erreur réseau, veuillez réessayer.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#0a0a0f',
    border: '1px solid #2a2740',
    borderRadius: '8px',
    padding: '10px 14px',
    color: '#e8e6f0',
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '13px',
    fontWeight: '500',
    color: '#9d9ab0',
    marginBottom: '8px',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', color: '#e8e6f0', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <main style={{ maxWidth: '560px', margin: '0 auto', padding: '40px 24px 60px' }}>

        <div style={{ marginBottom: '32px' }}>
          <span style={{ fontSize: '11px', fontWeight: '600', color: '#3d3a55', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '10px' }}>
            Contact
          </span>
          <h1 style={{ fontSize: 'clamp(1.4rem, 4vw, 2rem)', fontWeight: '700', color: '#fff', margin: '0 0 10px' }}>
            Nous contacter
          </h1>
          <p style={{ fontSize: '14px', color: '#6b6880', margin: 0 }}>
            Une question, une suggestion ? Remplissez le formulaire ci-dessous.
          </p>
        </div>

        <section style={{ background: '#111018', border: '1px solid #1e1c2e', borderRadius: '12px', padding: '28px' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>✓</div>
              <p style={{ fontSize: '16px', fontWeight: '600', color: '#4ade80', margin: '0 0 8px' }}>
                Message envoyé (démo)
              </p>
              <p style={{ fontSize: '14px', color: '#6b6880', margin: 0 }}>
                Merci pour votre message. Nous reviendrons vers vous rapidement.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <label style={labelStyle}>Nom</label>
                <input
                  type="text"
                  style={inputStyle}
                  placeholder="Votre nom"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  required
                />
              </div>

              <div>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  style={inputStyle}
                  placeholder="vous@exemple.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }}
                  placeholder="Votre message (10 caractères minimum)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              {error && (
                <p style={{ margin: 0, fontSize: '13px', color: '#f87171' }}>⚠ {error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                style={{
                  background: loading ? '#3d3a55' : '#7c6af7',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '11px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  marginTop: '4px',
                }}
              >
                {loading ? 'Envoi...' : 'Envoyer le message'}
              </button>
            </form>
          )}
        </section>

      </main>
    </div>
  )
}
