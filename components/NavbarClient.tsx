'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Props {
  userEmail: string | null
}

export default function NavbarClient({ userEmail }: Props) {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const isLoggedIn = !!userEmail

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    setMenuOpen(false)
    router.push('/?logout=success')
    router.refresh()
  }

  const navLinks = isLoggedIn
    ? [
        { href: '/dashboard', label: 'Accueil' },
        { href: '/about', label: 'À propos' },
        { href: '/contact', label: 'Contact' },
      ]
    : [
        { href: '/', label: 'Accueil' },
      ]

  const linkStyle: React.CSSProperties = { color: '#9d9ab0', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }
  const mobileLinkStyle: React.CSSProperties = { ...linkStyle, display: 'block', padding: '10px 0', borderBottom: '1px solid #1e1c2e' }

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: '#0a0a0f', borderBottom: '1px solid #1e1c2e' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

        {/* Logo */}
        <Link href={isLoggedIn ? '/dashboard' : '/'} style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: '#fff', fontWeight: '700', fontSize: '17px' }}>
          <span style={{ color: '#7c6af7', fontSize: '22px' }}>⬡</span>
          DevFlow AI
        </Link>

        {/* Desktop nav links */}
        <div className="nav-desktop" style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} style={linkStyle}>{label}</Link>
          ))}
        </div>

        {/* Desktop auth */}
        <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {isLoggedIn ? (
            <>
              <span style={{ fontSize: '13px', color: '#6b6880' }}>{userEmail}</span>
              <button
                onClick={handleLogout}
                style={{ background: 'transparent', border: '1px solid #2a2740', color: '#9d9ab0', borderRadius: '7px', padding: '7px 16px', fontSize: '13px', cursor: 'pointer', fontWeight: '500' }}
              >
                Déconnexion
              </button>
            </>
          ) : (
            <>
              <Link href="/login" style={{ ...linkStyle, padding: '7px 14px' }}>Connexion</Link>
              <Link href="/register" style={{ background: '#7c6af7', color: '#fff', textDecoration: 'none', borderRadius: '7px', padding: '7px 16px', fontSize: '13px', fontWeight: '600' }}>
                Inscription
              </Link>
            </>
          )}
        </div>

        {/* Burger — mobile only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-burger"
          aria-label="Menu"
          style={{ display: 'none', background: 'transparent', border: 'none', color: '#e8e6f0', fontSize: '22px', cursor: 'pointer', padding: '4px' }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{ background: '#111018', borderTop: '1px solid #1e1c2e', padding: '12px 24px 16px' }}>
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)} style={mobileLinkStyle}>{label}</Link>
          ))}
          <div style={{ paddingTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {isLoggedIn ? (
              <>
                <span style={{ fontSize: '13px', color: '#6b6880' }}>{userEmail}</span>
                <button onClick={handleLogout} style={{ background: 'transparent', border: '1px solid #2a2740', color: '#9d9ab0', borderRadius: '7px', padding: '10px', fontSize: '14px', cursor: 'pointer', textAlign: 'left' }}>
                  Déconnexion
                </button>
              </>
            ) : (
              <>
                <Link href="/login" onClick={() => setMenuOpen(false)} style={{ color: '#9d9ab0', textDecoration: 'none', fontSize: '14px', padding: '10px 0', display: 'block' }}>
                  Connexion
                </Link>
                <Link href="/register" onClick={() => setMenuOpen(false)} style={{ background: '#7c6af7', color: '#fff', textDecoration: 'none', borderRadius: '7px', padding: '10px 16px', fontSize: '14px', fontWeight: '600', textAlign: 'center', display: 'block' }}>
                  Inscription
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
