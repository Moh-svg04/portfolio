import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Insurance AI",
    category: "MLOps Platform",
    description: "Real-time document classification system with BiLSTM architecture achieving 93.4% accuracy. Reduces processing time from hours to <2 seconds.",
    gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
    glowColor: "shadow-purple-500/50",
    metrics: ["93.4% F1", "433ms", "520/min", "99.97% Uptime"],
    tech: ["PyTorch", "BiLSTM", "XGBoost", "FastAPI", "React", "GCP"],
    github: "https://github.com/Moh-svg04/insurance-moe",
    demo: "https://isurancemoe.streamlit.app/"
  },
  {
    id: 2,
    title: "DataNexus",
    category: "Real-Time ML Pipeline",
    description: "Production-grade platform with Kafka ingestion, automated ML lifecycle, and statistical drift detection. Processing 600+ docs/min at scale.",
    gradient: "from-cyan-600 via-blue-600 to-indigo-600",
    glowColor: "shadow-blue-500/50",
    metrics: ["600+/min", "<45ms P99", "99.97%", "Zero-Downtime"],
    tech: ["Kafka", "Airflow", "MLflow", "K8s", "Prometheus", "FastAPI"],
    github: "https://github.com/Moh-svg04/datanexus"
  },
  {
    id: 3,
    title: "ICU Predictor",
    category: "Clinical ML",
    description: "XGBoost model for ICU outcome prediction using MIMIC-IV data. Outperforms traditional medical scores with 0.918 AUC-ROC.",
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    glowColor: "shadow-emerald-500/50",
    metrics: ["0.918 AUC", "+12% vs APACHE", "MIMIC-IV", "Clinical DSS"],
    tech: ["XGBoost", "Scikit-learn", "MICE", "Streamlit", "Pandas"],
    github: "https://github.com/Moh-svg04/icu-predict",
    demo: "https://icu-predict-dyknhzekurr6yswzahle8k.streamlit.app/"
  },
  {
    id: 4,
    title: "CineMatch",
    category: "Recommendation Engine",
    description: "Hybrid recommendation system combining collaborative filtering (SVD) and content-based filtering (TF-IDF) for personalized suggestions.",
    gradient: "from-orange-600 via-red-600 to-pink-600",
    glowColor: "shadow-orange-500/50",
    metrics: ["0.97 RMSE", "82% Var.", "94% Coverage", "Hybrid"],
    tech: ["SVD", "TF-IDF", "Scikit-learn", "Plotly", "Streamlit"],
    github: "https://github.com/Moh-svg04/cinematch"
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className={`relative bg-gradient-to-br ${project.gradient} rounded-3xl p-1 shadow-2xl ${project.glowColor} hover:shadow-3xl transition-all`}
      >
        <div className="bg-black rounded-3xl p-8 h-full">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="text-sm text-gray-400 mb-2 font-medium"
              >
                {project.category}
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="text-3xl font-black text-white mb-2"
              >
                {project.title}
              </motion.h3>
            </div>
            <div className="flex gap-2">
              {project.demo && (
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    size="sm"
                    className="bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full backdrop-blur-sm"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </motion.div>
              )}
              <motion.div whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.9 }}>
                <Button
                  size="sm"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full backdrop-blur-sm"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
            className="text-gray-300 mb-6 leading-relaxed"
          >
            {project.description}
          </motion.p>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
            className="grid grid-cols-4 gap-3 mb-6"
          >
            {project.metrics.map((metric, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-3 py-2 text-center"
              >
                <div className="text-white font-bold text-sm">{metric}</div>
              </div>
            ))}
          </motion.div>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
            className="flex flex-wrap gap-2"
          >
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-white/10 border border-white/20 text-white/80 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function AnimatedProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-32 bg-black relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-8"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-white/80 font-medium">Production Projects</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-black mb-6"
            >
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Featured Work
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              End-to-end ML systems with real metrics, deployed at scale
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
