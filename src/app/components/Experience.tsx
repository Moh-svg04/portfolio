import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function Experience() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Expérience Professionnelle
          </h2>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="p-3 bg-indigo-600/20 rounded-lg">
                    <Briefcase className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-2xl mb-2">
                      Stagiaire Data Scientist / ML Engineer
                    </CardTitle>
                    <CardDescription className="text-slate-300 text-lg font-semibold">
                      AIDRE CONSULTING
                    </CardDescription>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mt-4 text-slate-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Avril - Juin 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Île-de-France</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-white font-semibold mb-3 text-lg">Missions principales</h4>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-indigo-400 mt-1">▸</span>
                    <span><strong className="text-white">IA Générative & Assistants:</strong> Développement d'un Agent IA autonome (RAG/LLM) pour l'analyse d'impact et l'intégrité des données</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-400 mt-1">▸</span>
                    <span><strong className="text-white">Cloud Computing:</strong> Automatisation de pipelines d'ingestion vers des environnements Cloud via API</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-400 mt-1">▸</span>
                    <span><strong className="text-white">NLP & Recherche Sémantique:</strong> Architecture de recherche sémantique via des pipelines NLP pour l'alignement de corpus massifs</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-400 mt-1">▸</span>
                    <span><strong className="text-white">Data Engineering:</strong> Automatisation de pipelines de données via API et Web Sémantique pour alimenter les modèles</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-400 mt-1">▸</span>
                    <span><strong className="text-white">Fiabilisation:</strong> Mise en place d'un système de versioning de contenu pour garantir la qualité des sorties IA (99,97% de disponibilité)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3">Technologies utilisées</h4>
                <div className="flex flex-wrap gap-2">
                  {["Python", "LangChain", "LlamaIndex", "RAG", "Cloud Computing", "NLP", "FastAPI", "Docker"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8">
            <Card className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border-indigo-700/50">
              <CardHeader>
                <CardTitle className="text-white text-xl">Formation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold">2026 – 2029 | Cycle Ingénieur – EFREI Paris</h4>
                  <p className="text-slate-300">Majeure Big Data & Machine Learning</p>
                  <p className="text-slate-400 text-sm">Rythme alternance: 2j école / 3j entreprise</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">2023 – 2026 | Licence Informatique – Université Le Havre Normandie</h4>
                  <p className="text-indigo-300 font-semibold">MENTION BIEN</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
