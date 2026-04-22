import { ExternalLink, Github, TrendingUp, Activity, Database, Film } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const projects = [
  {
    id: "insurance-moe",
    title: "Insurance AI - Plateforme MLOps",
    icon: Database,
    description: "Système complet de classification de documents et d'extraction d'informations pour la souscription de contrats d'assurance — réduction des délais de traitement de plusieurs heures à moins de 2 secondes.",
    achievements: [
      "93.4% de précision en classification",
      "433 ms temps de traitement moyen",
      "84.7% taux d'auto-approbation",
      "520 docs/min de débit maximum",
      "99.97% de disponibilité"
    ],
    tech: ["Python", "PyTorch", "BiLSTM", "XGBoost", "FastAPI", "React", "Streamlit", "GCP", "MLflow", "Docker"],
    github: "https://github.com/Moh-svg04/insurance-moe",
    demo: "https://isurancemoe.streamlit.app/",
    highlights: [
      "Pipeline NLP end-to-end avec classification BiLSTM + Self-Attention",
      "Extraction d'entités (NER) spécialisée assurance",
      "Détection d'anomalies et scoring temps réel",
      "Architecture MLOps complète avec CI/CD",
      "Dashboard interactif temps réel"
    ]
  },
  {
    id: "datanexus",
    title: "DataNexus - ML Pipeline Platform",
    icon: Activity,
    description: "Production-grade real-time ML pipeline platform processing 600+ documents/minute with 99.97% uptime SLA.",
    achievements: [
      "600+ docs/min throughput",
      "< 45ms latency (p99)",
      "99.97% system availability",
      "< 5 min drift detection lag",
      "< 8 min CI/CD pipeline"
    ],
    tech: ["Python", "Kafka", "FastAPI", "Airflow", "MLflow", "Docker", "Kubernetes", "Prometheus", "Grafana", "PostgreSQL"],
    github: "https://github.com/Moh-svg04/datanexus",
    highlights: [
      "Real-time ingestion via Apache Kafka",
      "Automated ML lifecycle (train → deploy → monitor → retrain)",
      "Statistical drift detection (PSI + Jensen-Shannon)",
      "Full observability stack with Prometheus & Grafana",
      "Zero-downtime deployments"
    ]
  },
  {
    id: "icu-predict",
    title: "ICU Outcome Predictor",
    icon: TrendingUp,
    description: "Modélisation prédictive des résultats en soins intensifs. POC d'analyse prédictive avec pipeline XGBoost sur données réelles (MIMIC-IV) surpassant les standards médicaux traditionnels.",
    achievements: [
      "0.918 AUC (ROC)",
      "Surpasse les scores médicaux traditionnels (APACHE II)",
      "Traitement de signaux vitaux complexes",
      "Dashboard interactif pour aide à la décision"
    ],
    tech: ["Python", "XGBoost", "Scikit-learn", "Pandas", "Streamlit", "MIMIC-IV"],
    github: "https://github.com/Moh-svg04/icu-predict",
    demo: "https://icu-predict-dyknhzekurr6yswzahle8k.streamlit.app/",
    highlights: [
      "Extraction et traitement de signaux vitaux (HR, MAP, SpO2)",
      "Imputation de données manquantes (MICE)",
      "Modèle XGBoost optimisé pour mortalité et durée de séjour",
      "Interface d'aide à la décision pour cliniciens",
      "Basé sur recherche scientifique académique"
    ]
  },
  {
    id: "cinematch",
    title: "CineMatch - Recommandation de Films",
    icon: Film,
    description: "Système de recommandation hybride combinant filtrage collaboratif (SVD) et content-based filtering (TF-IDF) pour des suggestions personnalisées de films.",
    achievements: [
      "RMSE ~0.97 (validation croisée 5-fold)",
      "82% variance expliquée",
      "94% coverage des films",
      "Architecture hybride optimale"
    ],
    tech: ["Python", "Scikit-learn", "TF-IDF", "SVD", "Streamlit", "Plotly", "MovieLens"],
    github: "https://github.com/Moh-svg04/cinematch",
    highlights: [
      "Approche hybride: Content-Based + Collaborative Filtering",
      "TF-IDF pour similarité de contenu",
      "SVD tronqué (k=50) pour facteurs latents",
      "Score hybride pondéré configurable",
      "Dashboard interactif avec visualisations"
    ]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Projets Data/IA
            </h2>
            <p className="text-xl text-slate-300">
              Projets end-to-end démontrant des compétences en Data Engineering, ML et MLOps
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card
                  key={project.id}
                  className="bg-slate-800/50 border-slate-700 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex gap-4 flex-1">
                        <div className="p-3 bg-indigo-600/20 rounded-lg h-fit">
                          <Icon className="w-8 h-8 text-indigo-400" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-white text-2xl mb-2">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="text-slate-300 text-base">
                            {project.description}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {project.demo && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-indigo-500 text-indigo-300 hover:bg-indigo-500/10"
                            onClick={() => window.open(project.demo, '_blank')}
                          >
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Demo
                          </Button>
                        )}
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-slate-600 text-slate-300 hover:bg-slate-700"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-indigo-400" />
                        Performances clés
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2 text-slate-300">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">Points forts techniques</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex gap-2 text-slate-300">
                            <span className="text-indigo-400 mt-1">▸</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">Stack technique</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-slate-700/50 text-slate-200 border-slate-600"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
