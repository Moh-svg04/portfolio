import { ArrowRight, Github, Linkedin, Mail, Sparkles, Code2, Brain } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export function ModernHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Animated gradient orbs */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-3xl"
        style={{
          left: `${mousePosition.x / 20}px`,
          top: `${mousePosition.y / 20}px`,
          transition: 'all 0.3s ease-out'
        }}
      />
      <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-3xl right-0 bottom-0" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-white/80 backdrop-blur-sm shadow-sm">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Available for Work</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>

            {/* Main title */}
            <div className="space-y-4">
              <h1 className="text-7xl md:text-9xl font-black tracking-tight">
                <span className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent">
                  MOHAMED
                </span>
              </h1>
              <h2 className="text-5xl md:text-7xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
                  GUEYE
                </span>
              </h2>
            </div>

            {/* Subtitle with typing effect */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xl md:text-2xl text-gray-600 font-medium">
              <div className="flex items-center gap-2">
                <Brain className="w-6 h-6 text-blue-600" />
                <span>ML Engineer</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-gray-400 rounded-full" />
              <div className="flex items-center gap-2">
                <Code2 className="w-6 h-6 text-purple-600" />
                <span>Data Scientist</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-8">
              <div className="space-y-1">
                <div className="text-4xl font-bold bg-gradient-to-br from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  99.97%
                </div>
                <div className="text-sm text-gray-500 font-medium">System Uptime</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-bold bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  600+
                </div>
                <div className="text-sm text-gray-500 font-medium">Docs/Min</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-bold bg-gradient-to-br from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  93.4%
                </div>
                <div className="text-sm text-gray-500 font-medium">ML Accuracy</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 justify-center pt-8">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-black/20 transition-all hover:scale-105"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </Button>
            </div>

            {/* Social links */}
            <div className="flex gap-4 justify-center pt-8">
              <a
                href="https://github.com/Moh-svg04"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-full border border-gray-200 hover:border-gray-900 transition-all hover:scale-110"
              >
                <Github className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/mohamed-gueye-32a945352"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-full border border-gray-200 hover:border-blue-600 transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
              </a>
              <a
                href="mailto:gueyemoe04@gmail.com"
                className="group p-4 rounded-full border border-gray-200 hover:border-purple-600 transition-all hover:scale-110"
              >
                <Mail className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2 animate-bounce">
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
