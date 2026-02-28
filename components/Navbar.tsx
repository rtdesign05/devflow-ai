import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition">
            DevFlow AI 🚀
          </Link>

          {/* Menu de navigation */}
          <div className="flex gap-6">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Accueil
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              À Propos
            </Link>
            <Link 
              href="/roadmap" 
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Roadmap
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}