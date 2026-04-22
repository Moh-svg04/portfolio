import { Mail, Phone, Github, Linkedin, ExternalLink, Sparkles, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function ModernContact() {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-gray-50 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-600">Available for Work-Study</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Seeking work-study opportunity as ML Engineer / Data Scientist
            </p>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold">
              <Calendar className="w-5 h-5" />
              <span>2 days school / 3 days company</span>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:gueyemoe04@gmail.com"
              className="group"
            >
              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-100 rounded-3xl p-8 hover:border-blue-300 transition-all hover:scale-105 hover:shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-600 mb-1">Email</div>
                    <div className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      gueyemoe04@gmail.com
                    </div>
                  </div>
                </div>
              </Card>
            </a>

            <a
              href="tel:+33666952168"
              className="group"
            >
              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-100 rounded-3xl p-8 hover:border-purple-300 transition-all hover:scale-105 hover:shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-600 mb-1">Phone</div>
                    <div className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                      06 66 95 21 68
                    </div>
                  </div>
                </div>
              </Card>
            </a>
          </div>

          {/* Social Links */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <Button
              className="h-auto py-6 bg-gray-900 hover:bg-gray-800 text-white rounded-2xl group"
              onClick={() => window.open('https://github.com/Moh-svg04', '_blank')}
            >
              <div className="flex items-center gap-4 w-full">
                <Github className="w-6 h-6" />
                <div className="text-left flex-1">
                  <div className="font-bold">GitHub</div>
                  <div className="text-xs text-gray-300">View repositories</div>
                </div>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Button>

            <Button
              className="h-auto py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl group"
              onClick={() => window.open('https://linkedin.com/in/mohamed-gueye-32a945352', '_blank')}
            >
              <div className="flex items-center gap-4 w-full">
                <Linkedin className="w-6 h-6" />
                <div className="text-left flex-1">
                  <div className="font-bold">LinkedIn</div>
                  <div className="text-xs text-blue-100">Connect with me</div>
                </div>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Button>

            <Button
              className="h-auto py-6 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl group"
              onClick={() => window.open('https://moeg.netlify.app/', '_blank')}
            >
              <div className="flex items-center gap-4 w-full">
                <Sparkles className="w-6 h-6" />
                <div className="text-left flex-1">
                  <div className="font-bold">Portfolio</div>
                  <div className="text-xs text-purple-100">Main website</div>
                </div>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Button>
          </div>

          {/* Value Proposition */}
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-0 rounded-3xl p-10 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Why Hire Me?</h3>
              <p className="text-gray-300">Production-ready skills from day one</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">🚀</div>
                </div>
                <h4 className="font-bold mb-2">Full ML Lifecycle</h4>
                <p className="text-sm text-gray-300">From data collection to deployment and monitoring</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">⚡</div>
                </div>
                <h4 className="font-bold mb-2">Production Experience</h4>
                <p className="text-sm text-gray-300">Real metrics: 99.97% uptime, 600+ docs/min throughput</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">🎯</div>
                </div>
                <h4 className="font-bold mb-2">Business-Focused</h4>
                <p className="text-sm text-gray-300">ROI-driven approach with measurable impact</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
