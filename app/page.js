import Link from 'next/link'
export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="min-h-screen px-6 py-20 md:px-24 flex items-center">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">
          
          <div>
            <p className="text-sm text-amber-400 mb-6 tracking-wider">
              👋 HELLO, I'M NOTHANDO
            </p>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-sky-400 via-blue-500 to-amber-400 bg-clip-text text-transparent">
              Nothando
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
              A curious mind who turns ideas into impact — blending 
              code, creativity, and discipline into solutions that matter.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:opacity-90 transition">
                View My Work
              </button>
              <button className="px-8 py-3 border border-gray-700 rounded-full font-semibold hover:bg-gray-900 transition">
                Get In Touch
              </button>
            </div>
            
            <div className="flex gap-8 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition">GitHub</a>
              <a href="#" className="hover:text-white transition">LinkedIn</a>
              <a href="#" className="hover:text-white transition">Email</a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-600/10 blur-3xl"></div>
            <div className="absolute w-80 h-80 rounded-full border border-cyan-500/20 top-8"></div>
          </div>

        </div>

        <div className="fixed bottom-8 right-8 z-50">
          <div className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-sm font-semibold">
            4.0 GPA 🎓
          </div>
        </div>
      </section>

      {/* The Chapters Section */}
      <section className="px-6 py-24 md:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Chapters</span>
          </h2>
          <p className="text-gray-400 mb-16 max-w-3xl">
            Every great story is built on curiosity, consistency, and the courage to begin. Here's my chapter 
            so far — written in grades, great people, and good choices.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">Born To Build</h3>
              <p className="text-gray-400">
                From first line Python to leading campus-wide hacks — building things that solve real 
                problems is what drives me.
              </p>
            </div>
            
            <div className="p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-3">Classroom Champion</h3>
              <p className="text-gray-400">
                Top scorer every semester, Dean's list, and research balancing rigor and creativity — 
                because excellence is a habit.
              </p>
            </div>
            
            <div className="p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3">Inspiring Others</h3>
              <p className="text-gray-400">
                Mentored 100+ students, founded the student tech club, and proved that great 
                leaders multiply impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Toolkit Section */}
      <section className="px-6 py-24 md:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Toolkit</span>
          </h2>
          <p className="text-gray-400 mb-16">
            Skills are just modern magic — and I've been practicing.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="flex justify-between mb-2">
                <span>🔧 Problem Solving</span>
                <span className="text-cyan-400">95%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
              </div>
            </div>
            
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="flex justify-between mb-2">
                <span>💬 Communication</span>
                <span className="text-purple-400">95%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full" style={{width: '95%'}}></div>
              </div>
            </div>
            
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="flex justify-between mb-2">
                <span>🤝 Teamwork</span>
                <span className="text-amber-400">88%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 h-2 rounded-full" style={{width: '88%'}}></div>
              </div>
            </div>
            
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="flex justify-between mb-2">
                <span>🎯 Results & Execution</span>
                <span className="text-green-400">90%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full" style={{width: '90%'}}></div>
              </div>
            </div>
            
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="flex justify-between mb-2">
                <span>🌊 Adaptability</span>
                <span className="text-blue-400">85%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-600 h-2 rounded-full" style={{width: '85%'}}></div>
              </div>
            </div>
            
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="flex justify-between mb-2">
                <span>📈 Growth Mindset</span>
                <span className="text-pink-400">94%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full" style={{width: '94%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
