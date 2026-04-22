import { Mail, Phone, Github, Linkedin, ExternalLink, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Recherche Alternance
            </h2>
            <p className="text-xl text-slate-300 mb-6">
              Data Scientist / ML Engineer - Rythme: 2j école / 3j entreprise
            </p>
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg">
              <p className="text-white font-semibold text-lg">
                🎯 Disponible immédiatement
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-indigo-500/50 transition-all">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Mail className="w-5 h-5 text-indigo-400" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:gueyemoe04@gmail.com"
                  className="text-slate-300 hover:text-indigo-400 transition-colors"
                >
                  gueyemoe04@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-indigo-500/50 transition-all">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Phone className="w-5 h-5 text-indigo-400" />
                  Téléphone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="tel:+33666952168"
                  className="text-slate-300 hover:text-indigo-400 transition-colors"
                >
                  06 66 95 21 68
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <Button
              className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 h-auto py-4"
              onClick={() => window.open('https://github.com/Moh-svg04', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              <div className="text-left">
                <div className="font-semibold">GitHub</div>
                <div className="text-xs text-slate-400">Voir mes projets</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>

            <Button
              className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 h-auto py-4"
              onClick={() => window.open('https://linkedin.com/in/mohamed-gueye-32a945352', '_blank')}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              <div className="text-left">
                <div className="font-semibold">LinkedIn</div>
                <div className="text-xs text-slate-400">Mon profil</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>

            <Button
              className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 h-auto py-4"
              onClick={() => window.open('https://moeg.netlify.app/', '_blank')}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              <div className="text-left">
                <div className="font-semibold">Portfolio</div>
                <div className="text-xs text-slate-400">Site principal</div>
              </div>
            </Button>
          </div>

          <Card className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border-indigo-700/50">
            <CardHeader>
              <CardTitle className="text-white text-center">
                Pourquoi me recruter en alternance ?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 text-slate-300">
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    Compétences Techniques
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span className="text-indigo-400">•</span>
                      <span>Maîtrise complète du cycle ML (data → deploy)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-indigo-400">•</span>
                      <span>Expérience MLOps et Cloud (GCP, AWS)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-indigo-400">•</span>
                      <span>Stack moderne: PyTorch, FastAPI, Docker, K8s</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <span className="text-2xl">💼</span>
                    Expérience Pratique
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span className="text-indigo-400">•</span>
                      <span>Projets production-ready avec métriques réelles</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-indigo-400">•</span>
                      <span>Stage en IA générative et RAG/LLM</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-indigo-400">•</span>
                      <span>Approche orientée business et ROI</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
