export default function About() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600">
      <div className="text-center text-white max-w-2xl px-6">
        <h1 className="text-5xl font-bold mb-6">
          À Propos de DevFlow AI 🎨
        </h1>
        <p className="text-lg mb-4">
          DevFlow AI transforme automatiquement vos designs Figma en code Next.js 
          production-ready avec <span className="font-bold">90%+ de fidélité visuelle</span>.
        </p>
        <p className="text-lg mb-4">
          Propulsé par une architecture de <span className="font-bold">4 agents IA spécialisés</span> :
        </p>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
            <div className="text-3xl mb-2">🔍</div>
            <h3 className="font-bold mb-1">Agent 1 - Parser</h3>
            <p className="text-sm">Extraction Figma</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
            <div className="text-3xl mb-2">🧠</div>
            <h3 className="font-bold mb-1">Agent 2 - Analyzer</h3>
            <p className="text-sm">Analyse Design System</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="font-bold mb-1">Agent 3 - Generator</h3>
            <p className="text-sm">Génération Code</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
            <div className="text-3xl mb-2">✅</div>
            <h3 className="font-bold mb-1">Agent 4 - Validator</h3>
            <p className="text-sm">Validation Visuelle</p>
          </div>
        </div>
      </div>
    </main>
  );
}