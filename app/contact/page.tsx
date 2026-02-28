export default function Contact() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Contactez-moi 📬
        </h1>
        
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
            <span className="text-3xl">📧</span>
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <a href="mailto:rtdesign05@gmail.com" className="text-blue-600 font-semibold hover:underline">
                rtdesign05@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
            <span className="text-3xl">📱</span>
            <div>
              <p className="text-sm text-gray-600">Téléphone</p>
              <a href="tel:+33769314084" className="text-blue-600 font-semibold hover:underline">
                +33 7 69 31 40 84
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
            <span className="text-3xl">📲</span>
            <div>
              <p className="text-sm text-gray-600">Telegram</p>
              <a href="https://t.me/RTdesign05" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">
                @RTdesign05
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
            <span className="text-3xl">🐙</span>
            <div>
              <p className="text-sm text-gray-600">GitHub</p>
              <a href="https://github.com/rtdesign05" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">
                github.com/rtdesign05
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-700 text-center">
            <span className="font-bold">Raoult Tankou</span><br/>
            Étudiant Bachelor CDA 2025<br/>
            Fondateur DevFlow AI
          </p>
        </div>
      </div>
    </main>
  );
}