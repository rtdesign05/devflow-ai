import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="text-center text-white px-6">
        <h1 className="text-7xl font-bold mb-4">
          DevFlow AI 🚀
        </h1>
        <p className="text-2xl mb-2">
          Figma → Next.js en un clic
        </p>
        <p className="text-lg text-blue-100 mb-8">
          Par Raoult Tankou — Bachelor CDA 2025
        </p>
        
        <div className="flex gap-4 justify-center mb-12">
          <div className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">
            Semaine 1 — Jour 2 ✓
          </div>
          <div className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold">
            4 Pages · Navigation
          </div>
        </div>

        {/* Boutons CTA */}
        <div className="flex gap-4 justify-center">
          <Link 
            href="/about"
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition shadow-lg"
          >
            Découvrir le Projet
          </Link>
          <Link 
            href="/roadmap"
            className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition"
          >
            Voir la Roadmap
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div>
            <div className="text-4xl font-bold">90%+</div>
            <div className="text-sm text-blue-100">Fidélité Visuelle</div>
          </div>
          <div>
            <div className="text-4xl font-bold">4</div>
            <div className="text-sm text-blue-100">Agents IA</div>
          </div>
          <div>
            <div className="text-4xl font-bold">16</div>
            <div className="text-sm text-blue-100">Semaines</div>
          </div>
        </div>
      </div>
    </main>
  );
}