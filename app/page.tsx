import Link from 'next/link'

export default function LandingPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', color: '#e8e6f0', fontFamily: 'Inter, system-ui, sans-serif' }}>

      {/* Hero */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '80px 24px 60px', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#111018', border: '1px solid #2a2740', borderRadius: '20px', padding: '6px 14px', fontSize: '13px', color: '#9d9ab0', marginBottom: '32px' }}>
          <span style={{ color: '#7c6af7' }}>⬡</span>
          Figma → Code HTML/React en secondes
        </div>

        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '700', lineHeight: '1.15', margin: '0 0 20px', color: '#fff' }}>
          Transforme tes maquettes{' '}
          <span style={{ color: '#7c6af7' }}>Figma</span>{' '}
          en code production
        </h1>

        <p style={{ fontSize: '18px', color: '#9d9ab0', maxWidth: '520px', margin: '0 auto 40px', lineHeight: '1.6' }}>
          Colle une URL Figma, laisse l&apos;IA générer le HTML/CSS et React. Copie, c&apos;est prêt.
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/register" style={{
            background: '#7c6af7', color: '#fff', textDecoration: 'none',
            borderRadius: '8px', padding: '12px 28px', fontSize: '15px', fontWeight: '600',
          }}>
            Créer un compte gratuit
          </Link>
          <Link href="/login" style={{
            background: 'transparent', color: '#e8e6f0', textDecoration: 'none',
            border: '1px solid #2a2740', borderRadius: '8px', padding: '12px 28px', fontSize: '15px', fontWeight: '500',
          }}>
            Se connecter
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 24px 80px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '13px', fontWeight: '500', color: '#9d9ab0', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '32px' }}>
          Comment ça marche
        </h2>
        <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {[
            { icon: '⬡', step: '1', title: 'Colle ton URL Figma', desc: 'Copie le lien de ta maquette depuis Figma et colle-le dans le champ.' },
            { icon: '⬡', step: '2', title: "L'IA génère le code", desc: "Notre agent analyse le design et produit le HTML/CSS fidèle en quelques secondes." },
            { icon: '⬡', step: '3', title: 'Copie et utilise', desc: 'Récupère ton code HTML ou React, prêt à intégrer dans ton projet.' },
          ].map(({ icon, step, title, desc }) => (
            <div key={step} style={{ background: '#111018', border: '1px solid #1e1c2e', borderRadius: '12px', padding: '24px' }}>
              <div style={{ fontSize: '22px', color: '#7c6af7', marginBottom: '12px' }}>{icon}</div>
              <div style={{ fontSize: '11px', color: '#3d3a55', fontWeight: '600', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Étape {step}</div>
              <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#fff', margin: '0 0 8px' }}>{title}</h3>
              <p style={{ fontSize: '13px', color: '#6b6880', margin: 0, lineHeight: '1.6' }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA bottom */}
      <section style={{ borderTop: '1px solid #1e1c2e', padding: '60px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '700', color: '#fff', margin: '0 0 16px' }}>
          Prêt à démarrer ?
        </h2>
        <p style={{ fontSize: '15px', color: '#9d9ab0', margin: '0 0 28px' }}>
          Rejoins DevFlow AI et génère ton premier code en moins d&apos;une minute.
        </p>
        <Link href="/register" style={{
          background: '#7c6af7', color: '#fff', textDecoration: 'none',
          borderRadius: '8px', padding: '12px 32px', fontSize: '15px', fontWeight: '600',
          display: 'inline-block',
        }}>
          Créer un compte gratuitement
        </Link>
      </section>
    </div>
  )
}
