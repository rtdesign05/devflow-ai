'use client'

import { useEffect, useState } from 'react'

export default function LogoutBanner() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => dismiss(), 3000)
    return () => clearTimeout(timer)
  }, [])

  function dismiss() {
    setVisible(false)
    window.history.replaceState({}, '', '/')
  }

  if (!visible) return null

  return (
    <div
      onClick={dismiss}
      style={{
        position: 'fixed',
        top: '76px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: '#0d2e1a',
        border: '1px solid #4ade80',
        color: '#4ade80',
        borderRadius: '8px',
        padding: '10px 20px',
        fontSize: '14px',
        fontWeight: '500',
        zIndex: 200,
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
      }}
    >
      Déconnexion réussie · cliquez pour fermer
    </div>
  )
}
