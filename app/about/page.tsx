export default function AboutPage() {
  const stack = [
    { name: 'Next.js 16', desc: 'Framework React avec App Router, Server Components et middleware Edge.' },
    { name: 'Prisma 7', desc: 'ORM avec adaptateur BetterSQLite3 pour accès base de données SQLite locale.' },
    { name: 'SQLite', desc: 'Base de données embarquée légère pour stocker utilisateurs et générations.' },
    { name: 'n8n', desc: 'Orchestrateur d\'agents IA — analyse la maquette Figma et pilote la génération de code.' },
    { name: 'GPT-4o', desc: 'Modèle de langage utilisé pour convertir le design Figma en HTML/CSS fidèle.' },
  ]

  const sectionStyle: React.CSSProperties = {
    background: '#111018',
    border: '1px solid #1e1c2e',
    borderRadius: '12px',
    padding: '28px',
    marginBottom: '20px',
  }

  const labelStyle: React.CSSProperties = {
    fontSize: '11px',
    fontWeight: '600',
    color: '#3d3a55',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: '12px',
    display: 'block',
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', color: '#e8e6f0', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <main style={{ maxWidth: '780px', margin: '0 auto', padding: '40px 24px 60px' }}>

        {/* En-tête */}
        <div style={{ marginBottom: '40px' }}>
          <span style={labelStyle}>À propos</span>
          <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: '700', color: '#fff', margin: '0 0 16px', lineHeight: '1.2' }}>
            DevFlow AI
          </h1>
          <p style={{ fontSize: '16px', color: '#9d9ab0', lineHeight: '1.7', margin: 0, maxWidth: '600px' }}>
            DevFlow AI est un outil qui convertit automatiquement des maquettes{' '}
            <strong style={{ color: '#e8e6f0' }}>Figma</strong> en code{' '}
            <strong style={{ color: '#e8e6f0' }}>HTML/CSS</strong> fidèle grâce à un agent IA.
            Collez un lien Figma, obtenez du code prêt à intégrer — en quelques secondes.
          </p>
        </div>

        {/* Objectif */}
        <section style={sectionStyle}>
          <span style={labelStyle}>Objectif</span>
          <p style={{ fontSize: '15px', color: '#9d9ab0', lineHeight: '1.7', margin: '0 0 12px' }}>
            Réduire le temps entre le design et le code. Aujourd&apos;hui, la conversion d&apos;une maquette en
            HTML/CSS prend des heures. DevFlow AI automatise ce processus en analysant le design Figma via
            l&apos;API Figma, en extrayant les composants visuels, puis en générant un code structuré et
            sémantique via GPT-4o.
          </p>
          <p style={{ fontSize: '15px', color: '#9d9ab0', lineHeight: '1.7', margin: 0 }}>
            Chaque génération est sauvegardée dans l&apos;historique personnel de l&apos;utilisateur pour
            retrouver et réutiliser le code à tout moment.
          </p>
        </section>

        {/* Stack technique */}
        <section style={sectionStyle}>
          <span style={labelStyle}>Stack technique</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {stack.map(({ name, desc }) => (
              <div
                key={name}
                style={{
                  display: 'flex',
                  gap: '16px',
                  padding: '14px',
                  background: '#0a0a0f',
                  border: '1px solid #1a1828',
                  borderRadius: '8px',
                  alignItems: 'flex-start',
                }}
              >
                <span style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#7c6af7',
                  background: '#1a1540',
                  border: '1px solid #2a2060',
                  borderRadius: '5px',
                  padding: '3px 8px',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  marginTop: '2px',
                }}>
                  {name}
                </span>
                <p style={{ fontSize: '14px', color: '#9d9ab0', margin: 0, lineHeight: '1.6' }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contexte */}
        <section style={sectionStyle}>
          <span style={labelStyle}>Contexte</span>
          <p style={{ fontSize: '15px', color: '#9d9ab0', lineHeight: '1.7', margin: 0 }}>
            Projet réalisé dans le cadre de la formation{' '}
            <strong style={{ color: '#e8e6f0' }}>Concepteur Développeur d&apos;Applications (CDA)</strong>{' '}
            à <strong style={{ color: '#e8e6f0' }}>Green Up Academy</strong> — promotion 2025.
            Il illustre la mise en œuvre d&apos;une architecture fullstack moderne avec authentification,
            base de données relationnelle, et intégration d&apos;agents IA via orchestration n8n.
          </p>
        </section>

      </main>
    </div>
  )
}
