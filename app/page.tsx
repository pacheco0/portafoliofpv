"use client";
import Image from "next/image";
import Link from "next/link";
import { useBackgroundMode } from "./components/BackgroundContext";

export default function Home() {
  const { mode } = useBackgroundMode();
  const isLight = mode === "light";
  return (
    <main className={`min-h-screen ${isLight ? "bg-white" : ""}`}>
      {/* Hero Section: Big intro at the top */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading with your name */}
          <h1 className={`text-4xl sm:text-6xl font-bold mb-6 ${isLight ? "text-black drop-shadow-none" : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"}`}>
            <span className={isLight ? "text-black" : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"}>Hi, I'm</span> <span className={`text-blue-400 ${isLight ? "drop-shadow-none" : "drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"}`}>Fernando Pacheco</span>
          </h1>
          {/* Subtitle with your role */}
          <p className={`text-xl sm:text-2xl mb-8 ${isLight ? "text-gray-800 drop-shadow-none" : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"}`}>
            Front-End Web Developer
          </p>
          {/* Buttons to view work or contact */}
          <div className="flex gap-4 justify-center">
            <Link href="#projects" className={`px-6 py-3 rounded-lg transition font-semibold ${isLight ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-600/80 backdrop-blur-sm text-white hover:bg-blue-700 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"}`}>
              View My Work
            </Link>
            <Link href="#contact" className={`px-6 py-3 rounded-lg border transition font-semibold ${isLight ? "border-blue-400 text-blue-600 hover:bg-blue-50" : "border-blue-400/50 backdrop-blur-sm text-blue-400 hover:bg-blue-400/10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"}`}>
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* About Section: Info about you */}
      <section id="about" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isLight ? "text-black drop-shadow-none" : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"}`}>About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Bio text */}
            <div className={`space-y-4 p-6 rounded-lg ${isLight ? "bg-gray-50 text-gray-800" : "backdrop-blur-sm bg-white/5 text-white"}`}>
              <p className={isLight ? "text-gray-800" : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"}>
                I'm a passionate web developer with expertise in building modern web applications.
                I love creating beautiful, functional, and user-friendly websites using the latest technologies.
              </p>
            </div>
            {/* Profile picture */}
            <div className="relative h-64 w-64 mx-auto">
              <Image
                src="./perfil.jpg"
                alt="Profile"
                fill
                className={`rounded-full object-cover border-4 ${isLight ? "border-blue-400" : "border-blue-400/50"}`}
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section: List your skills */}
      <section id="skills" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isLight ? "text-black drop-shadow-none" : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"}`}>Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* Each skill is a card */}
            {['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML', 'CSS'].map((skill) => (
              <div key={skill} className={`p-4 rounded-lg text-center transition border font-semibold ${isLight ? "bg-white text-gray-800 border-blue-100" : "backdrop-blur-sm bg-white/5 text-white border-blue-400/20 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"}`}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section: Show your projects */}
      <section id="projects" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isLight ? "text-black drop-shadow-none" : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"}`}>Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Cards */}
            <div className={`rounded-lg overflow-hidden shadow-lg border ${isLight ? "bg-white border-blue-100" : "backdrop-blur-sm bg-white/5 border-blue-400/20"}`}>
              <div className={`relative h-48 flex items-center justify-center ${isLight ? "bg-gray-100" : "bg-gray-900/50"}`}>
                <Image
                  src="./calculadora.png"
                  alt="Project 1"
                  width={400}
                  height={192}
                  className="object-contain w-full h-full"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${isLight ? "text-gray-900" : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"}`}>Calculator</h3>
                <p className={`mb-4 ${isLight ? "text-gray-700" : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"}`}>
                  A simple calculator built with HTML, CSS, and JavaScript.
                </p>
                <div className="flex gap-4">
                  <Link 
                    href="https://calculatorfpv.web.app/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-semibold ${isLight ? "text-blue-600 hover:underline" : "text-blue-400 hover:text-blue-300"}`}
                  >
                    View Demo
                  </Link>
                  <Link 
                    href="https://github.com/pacheco0/Calculadora" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-semibold ${isLight ? "text-blue-600 hover:underline" : "text-blue-400 hover:text-blue-300"}`}
                  >
                    Source Code
                  </Link>
                </div>
              </div>
            </div>

            {/* More project cards... */}
            <div className={`rounded-lg overflow-hidden shadow-lg border ${isLight ? "bg-white border-blue-100" : "backdrop-blur-sm bg-white/5 border-blue-400/20"}`}>
              <div className={`relative h-48 flex items-center justify-center ${isLight ? "bg-gray-100" : "bg-gray-900/50"}`}>
                <Image
                  src="./currency-convertor.png"
                  alt="Project 2"
                  width={400}
                  height={192}
                  className="object-contain w-full h-full"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${isLight ? "text-gray-900" : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"}`}>Currency Converter</h3>
                <p className={`mb-4 ${isLight ? "text-gray-700" : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"}`}>
                  A currency converter built with HTML, CSS, and JavaScript.
                </p>
                <div className="flex gap-4">
                  <Link 
                    href="https://currency-convertorfpv.web.app/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-semibold ${isLight ? "text-blue-600 hover:underline" : "text-blue-400 hover:text-blue-300"}`}
                  >
                    View Demo
                  </Link>
                  <Link 
                    href="https://github.com/pacheco0/Currency" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-semibold ${isLight ? "text-blue-600 hover:underline" : "text-blue-400 hover:text-blue-300"}`}
                  >
                    Source Code
                  </Link>
                </div>
              </div>
            </div>

            <div className={`rounded-lg overflow-hidden shadow-lg border ${isLight ? "bg-white border-blue-100" : "backdrop-blur-sm bg-white/5 border-blue-400/20"}`}>
              <div className={`relative h-48 flex items-center justify-center ${isLight ? "bg-gray-100" : "bg-gray-900/50"}`}>
                <Image
                  src="./clima.png"
                  alt="Project 3"
                  width={400}
                  height={192}
                  className="object-contain w-full h-full"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${isLight ? "text-gray-900" : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"}`}>Climate Website</h3>
                <p className={`mb-4 ${isLight ? "text-gray-700" : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"}`}>
                  A website built with HTML, CSS, and JavaScript.
                </p>
                <div className="flex gap-4">
                  <Link 
                    href="https://webclimafpv.web.app/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-semibold ${isLight ? "text-blue-600 hover:underline" : "text-blue-400 hover:text-blue-300"}`}
                  >
                    View Demo
                  </Link>
                  <Link 
                    href="https://github.com/pacheco0/Clima/tree/main/clima" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-semibold ${isLight ? "text-blue-600 hover:underline" : "text-blue-400 hover:text-blue-300"}`}
                  >
                    Source Code
                  </Link>
                </div>
              </div>
            </div>

            <div className={`rounded-lg overflow-hidden shadow-lg border ${isLight ? "bg-white border-blue-100" : "backdrop-blur-sm bg-white/5 border-blue-400/20"}`}>
              <div className={`relative h-48 flex items-center justify-center ${isLight ? "bg-gray-100" : "bg-gray-900/50"}`}>
                <Image
                  src="./crmfpv.png"
                  alt="Project 4"
                  width={400}
                  height={192}
                  className="object-contain w-full h-full"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${isLight ? "text-gray-900" : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"}`}>CRM System</h3>
                <p className={`mb-4 ${isLight ? "text-gray-700" : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"}`}>
                  A customer relationship management system built with React and Firebase.
                </p>
                <div className="flex gap-4">
                  <Link 
                    href="https://crmfpv.web.app/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-semibold ${isLight ? "text-blue-600 hover:underline" : "text-blue-400 hover:text-blue-300"}`}
                  >
                    View Demo
                  </Link>
                  <Link 
                    href="https://github.com/pacheco0/CRM" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-semibold ${isLight ? "text-blue-600 hover:underline" : "text-blue-400 hover:text-blue-300"}`}
                  >
                    Source Code
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section: Contact form and info */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isLight ? "text-black drop-shadow-none" : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"}`}>Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact info card */}
            <div className={`space-y-4 p-6 rounded-lg border ${isLight ? "bg-white text-gray-800 border-blue-100" : "backdrop-blur-sm bg-white/5 text-white border-blue-400/20"}`}>
              <p className={isLight ? "text-gray-800" : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"}>
                I'm always open to new opportunities and collaborations.
                Feel free to reach out if you'd like to work together!
              </p>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <span className={`font-bold ${isLight ? "text-gray-900" : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"}`}>Email:</span>
                  <a href="mailto:ferpacvel@gmail.com" className={`font-semibold ${isLight ? "text-blue-600 hover:underline" : "text-blue-400 hover:text-blue-300"}`}>
                    ferpacvel@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className={`font-bold ${isLight ? "text-gray-900" : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"}`}>Location:</span>
                  <span className={isLight ? "text-gray-700" : "text-white/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"}>Santa Cruz, Bolivia</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className={`font-bold ${isLight ? "text-gray-900" : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"}`}>Number:</span>
                  <span className={isLight ? "text-gray-700" : "text-white/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"}>+591 70858529</span>
                </p>
              </div>
            </div>
            {/*
              Contact form card
            <form className={`space-y-4 p-6 rounded-lg border ${isLight ? "bg-white border-blue-100" : "backdrop-blur-sm bg-white/5 border-blue-400/20"}`}>
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-1 ${isLight ? "text-gray-900" : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"}`}>Name</label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-400 focus:border-transparent ${isLight ? "bg-white border-blue-100 text-gray-900 placeholder:text-gray-400" : "bg-white/5 border-blue-400/20 text-white placeholder:text-white/70"}`}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-1 ${isLight ? "text-gray-900" : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"}`}>Email</label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-400 focus:border-transparent ${isLight ? "bg-white border-blue-100 text-gray-900 placeholder:text-gray-400" : "bg-white/5 border-blue-400/20 text-white placeholder:text-white/70"}`}
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-1 ${isLight ? "text-gray-900" : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"}`}>Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-400 focus:border-transparent ${isLight ? "bg-white border-blue-100 text-gray-900 placeholder:text-gray-400" : "bg-white/5 border-blue-400/20 text-white placeholder:text-white/70"}`}
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className={`w-full px-6 py-3 rounded-lg font-semibold transition ${isLight ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-600/80 backdrop-blur-sm text-white hover:bg-blue-700 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"}`}
              >
                Send Message
              </button>
            </form>*/}
          </div>
        </div>
      </section>
    </main>
  );
}
