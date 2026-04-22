import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-sm font-medium mb-6">
              🚀 Powered by Claude AI
            </span>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent">
              HE IS HERE
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Mohamed Gueye
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Data Scientist & ML Engineer
            </p>
          </div>

          <div className="mb-12 space-y-4 text-slate-300 text-lg">
            <p className="flex items-center justify-center gap-2">
              <span className="text-2xl">🎓</span>
              <span>Ingénieur Big Data & Machine Learning @ EFREI Paris</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-2xl">💼</span>
              <span>Alternance: 2j école / 3j entreprise</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-2xl">🌍</span>
              <span>Île-de-France</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-white gap-2"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Voir mes projets
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-white hover:bg-slate-800"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Me contacter
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/Moh-svg04"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 hover:bg-slate-700 rounded-full transition-colors border border-slate-700"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://linkedin.com/in/mohamed-gueye-32a945352"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 hover:bg-slate-700 rounded-full transition-colors border border-slate-700"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a
              href="mailto:gueyemoe04@gmail.com"
              className="p-3 bg-slate-800/50 hover:bg-slate-700 rounded-full transition-colors border border-slate-700"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
