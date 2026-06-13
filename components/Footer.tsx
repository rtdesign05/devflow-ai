export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #1e1c2e',
      padding: '32px 24px',
      textAlign: 'center',
      color: '#6b6880',
      fontSize: '13px',
      background: '#0a0a0f',
    }}>
      <div style={{ maxWidth: '780px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <p style={{ margin: 0, fontWeight: '600', color: '#9d9ab0', fontSize: '14px' }}>
          <span style={{ color: '#7c6af7' }}>⬡</span> DevFlow AI
        </p>
        <p style={{ margin: 0 }}>
          Convertissez vos maquettes Figma en code HTML/CSS grâce à l&apos;IA.
        </p>
        <p style={{ margin: 0 }}>
          Projet réalisé en formation CDA · Green Up Academy 2025
        </p>
        <p style={{ margin: '8px 0 0' }}>
          <a
            href="https://github.com/rtdesign05"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#7c6af7', textDecoration: 'none' }}
          >
            GitHub
          </a>
          {' · '}
          © 2025 Raoult Tankou
        </p>
      </div>
    </footer>
  )
}
