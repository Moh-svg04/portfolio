import { ExternalLink, Github, TrendingUp, Zap, CheckCircle2 } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const projects = [
  {
    id: 1,
    title: "Insurance AI",
    subtitle: "MLOps Classification Platform",
    description: "End-to-end document classification and entity extraction system reducing processing time from hours to <2s.",
    image: "bg-gradient-to-br from-blue-500 to-cyan-500",
    metrics: [
      { label: "Accuracy", value: "93.4%", icon: CheckCircle2 },
      { label: "Latency", value: "433ms", icon: Zap },
      { label: "Throughput", value: "520/min", icon: TrendingUp }
    ],
    tech: ["PyTorch", "BiLSTM", "XGBoost", "FastAPI", "React", "GCP", "Docker"],
    github: "https://github.com/Moh-svg04/insurance-moe",
    demo: "https://isurancemoe.streamlit.app/",
    highlights: [
      "BiLSTM + Self-Attention architecture (93.4% F1)",
      "Real-time anomaly detection with XGBoost",
      "Full MLOps pipeline with CI/CD",
      "99.97% system availability"
    ]
  },
  {
    id: 2,
    title: "DataNexus",
    subtitle: "Real-Time ML Pipeline Platform",
    description: "Production-grade platform processing 600+ docs/min with automated ML lifecycle and drift detection.",
    image: "bg-gradient-to-br from-purple-500 to-pink-500",
    metrics: [
      { label: "Throughput", value: "600+/min", icon: TrendingUp },
      { label: "P99 Latency", value: "<45ms", icon: Zap },
      { label: "Uptime", value: "99.97%", icon: CheckCircle2 }
    ],
    tech: ["Kafka", "FastAPI", "Airflow", "MLflow", "Kubernetes", "Prometheus", "PostgreSQL"],
    github: "https://github.com/Moh-svg04/datanexus",
    highlights: [
      "Real-time ingestion via Apache Kafka",
      "Statistical drift detection (PSI + JS)",
      "Zero-downtime deployments",
      "Full observability stack"
    ]
  },
  {
    id: 3,
    title: "ICU Outcome Predictor",
    subtitle: "Clinical ML for Critical Care",
    description: "XGBoost-based predictive model for ICU outcomes using MIMIC-IV data, outperforming traditional medical scores.",
    image: "bg-gradient-to-br from-emerald-500 to-teal-500",
    metrics: [
      { label: "AUC-ROC", value: "0.918", icon: TrendingUp },
      { label: "vs APACHE II", value: "+12%", icon: CheckCircle2 }
    ],
    tech: ["XGBoost", "Scikit-learn", "Pandas", "Streamlit", "MIMIC-IV"],
    github: "https://github.com/Moh-svg04/icu-predict",
    demo: "https://icu-predict-dyknhzekurr6yswzahle8k.streamlit.app/",
    highlights: [
      "Vital signs processing (HR, MAP, SpO2)",
      "Advanced missing data imputation (MICE)",
      "Clinical decision support interface",
      "Academic research foundation"
    ]
  },
  {
    id: 4,
    title: "CineMatch",
    subtitle: "Hybrid Recommendation Engine",
    description: "Film recommendation system combining collaborative filtering (SVD) and content-based filtering (TF-IDF).",
    image: "bg-gradient-to-br from-orange-500 to-red-500",
    metrics: [
      { label: "RMSE", value: "0.97", icon: TrendingUp },
      { label: "Coverage", value: "94%", icon: CheckCircle2 }
    ],
    tech: ["Scikit-learn", "SVD", "TF-IDF", "Streamlit", "Plotly"],
    github: "https://github.com/Moh-svg04/cinematch",
    highlights: [
      "Hybrid approach: Content + Collaborative",
      "SVD with 50 latent factors (82% variance)",
      "Configurable weighted scoring",
      "Interactive exploration dashboard"
    ]
  }
];

export function ModernProjects() {
  return (
    <section id="projects" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-white shadow-sm mb-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
              <span className="text-sm font-medium text-gray-600">Production Projects</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Featured Work
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end ML systems with real metrics, deployed at scale
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-3xl"
              >
                {/* Project header with gradient */}
                <div className={`${project.image} p-8 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-3xl font-black text-white mb-1">
                          {project.title}
                        </h3>
                        <p className="text-white/90 font-medium">
                          {project.subtitle}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        {project.demo && (
                          <Button
                            size="sm"
                            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white rounded-full"
                            onClick={() => window.open(project.demo, '_blank')}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        )}
                        <Button
                          size="sm"
                          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white rounded-full"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-4">
                      {project.metrics.map((metric, idx) => {
                        const Icon = metric.icon;
                        return (
                          <div key={idx} className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl px-4 py-2">
                            <div className="flex items-center gap-2 text-white">
                              <Icon className="w-4 h-4" />
                              <span className="font-bold">{metric.value}</span>
                              <span className="text-sm text-white/80">{metric.label}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Project content */}
                <div className="p-8 space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                        <span className="text-sm text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-gray-100 text-gray-700 border-0 px-3 py-1 font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
