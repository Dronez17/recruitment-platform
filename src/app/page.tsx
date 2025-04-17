import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A2E1F] text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#2E8B57] rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold">S</span>
            </div>
            <span className="text-2xl font-bold">SIMBA</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-[#2E8B57] transition">Features</a>
            <a href="#how-it-works" className="hover:text-[#2E8B57] transition">How It Works</a>
            <a href="#pricing" className="hover:text-[#2E8B57] transition">Pricing</a>
            <a href="#contact" className="hover:text-[#2E8B57] transition">Contact</a>
          </div>
          <button className="bg-[#2E8B57] px-6 py-2 rounded-full hover:bg-[#3CB371] transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Future-Proof Your Workforce with <span className="text-[#2E8B57]">SIMBA</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              We don't just help you hire - we help you build a workforce that thrives in tomorrow's world. 
              Our unique Vibe Coding approach ensures your team is ready for whatever the future holds.
            </p>
            <div className="flex space-x-4">
              <button className="bg-[#2E8B57] px-8 py-3 rounded-full hover:bg-[#3CB371] transition">
                Start Hiring
              </button>
              <button className="border border-[#2E8B57] px-8 py-3 rounded-full hover:bg-[#2E8B57] transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative w-full h-96">
              <div className="absolute inset-0 bg-[#2E8B57] rounded-2xl opacity-20"></div>
              <div className="absolute inset-4 bg-[#0A2E1F] rounded-xl border-2 border-[#2E8B57] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-[#2E8B57] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Vibe Coding</h3>
                  <p className="text-gray-300">Where talent meets tomorrow's technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose SIMBA?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Future-Ready Talent",
              description: "We identify candidates who can adapt and grow with your company's evolving needs."
            },
            {
              title: "Vibe Coding Assessment",
              description: "Our unique approach evaluates not just skills, but adaptability and learning potential."
            },
            {
              title: "AI-Powered Matching",
              description: "Advanced algorithms ensure perfect matches between candidates and your company culture."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-[#1A3A2A] p-6 rounded-xl border border-[#2E8B57]">
              <div className="w-12 h-12 bg-[#2E8B57] rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">✨</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
} 