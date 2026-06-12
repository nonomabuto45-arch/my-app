
import Link from 'next/link'

export default function GetInTouch() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Want to Win Together?
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
          I don't just want to impress — I want to deliver. Whether it's a student team, a startup, or 
          an ambitious researcher, I bring the full package: brains, grit, and the belief that good 
          ideas deserve to be built.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="mailto:nonomabuto45@gmail.com" 
            className="bg-gradient-to-r from-cyan-300 to-blue-300 text-slate-900 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform"
          >
            Let's Make It Happen ✨
          </a>
          
          <a 
            href="https://nonomabuto45@gmail.com/your-link" 
            target="_blank"
            className="border border-gray-600 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition"
          >
            Schedule a Chat
          </a>
        </div>
      </div>

      <footer className="absolute bottom-8 w-full max-w-5xl px-6 flex justify-between text-sm text-gray-500">
        <p>© 2026 Nothando — Built with caffeine and curiosity.</p>
        <p>Next.js + Tailwind + Vercel Ready</p>
      </footer>
    </main>
  )
}
