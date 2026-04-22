import { Brain, Database, Cloud, Sparkles, Code, BarChart } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const skillCategories = [
  {
    icon: Brain,
    title: "Machine Learning",
    gradient: "from-blue-500 to-cyan-500",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "Deep Learning", "NLP", "CV"]
  },
  {
    icon: Sparkles,
    title: "Generative AI",
    gradient: "from-purple-500 to-pink-500",
    skills: ["LangChain", "LlamaIndex", "RAG", "Prompt Eng.", "OpenAI", "HuggingFace"]
  },
  {
    icon: Database,
    title: "Data Engineering",
    gradient: "from-emerald-500 to-teal-500",
    skills: ["Kafka", "Airflow", "Spark", "PostgreSQL", "MongoDB", "Redis", "TimescaleDB"]
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    gradient: "from-orange-500 to-red-500",
    skills: ["AWS", "GCP", "Azure", "Docker", "K8s", "Terraform", "CI/CD", "Actions"]
  },
  {
    icon: Code,
    title: "Development",
    gradient: "from-indigo-500 to-purple-500",
    skills: ["Python", "FastAPI", "React", "TypeScript", "Node.js", "SQL", "Git", "REST"]
  },
  {
    icon: BarChart,
    title: "MLOps & Analytics",
    gradient: "from-pink-500 to-rose-500",
    skills: ["MLflow", "Prometheus", "Grafana", "Streamlit", "Plotly", "Power BI", "Viz"]
  }
];

export function AnimatedSkills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-gray-950 relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-purple-950/20 to-pink-950/20 opacity-50"
        style={{ backgroundSize: "200% 200%" }}
      />

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
              <Brain className="w-4 h-4 text-purple-400" />
              <span className="text-white/80 font-medium">Technical Stack</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-black mb-6"
            >
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </motion.h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -45 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.8, rotateY: -45 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:border-white/40 transition-all h-full">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white mb-6">
                      {category.title}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-3 py-1.5 bg-white/10 border border-white/20 text-white/90 rounded-full text-sm font-medium hover:bg-white/20 transition-all"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex gap-12 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl px-12 py-8 shadow-2xl">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-4"
              >
                <span className="text-4xl">🇫🇷</span>
                <div className="text-left">
                  <div className="text-sm text-gray-400 font-medium">French</div>
                  <div className="text-xl font-bold text-white">Native</div>
                </div>
              </motion.div>
              <div className="w-px bg-white/20" />
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-4"
              >
                <span className="text-4xl">🇬🇧</span>
                <div className="text-left">
                  <div className="text-sm text-gray-400 font-medium">English</div>
                  <div className="text-xl font-bold text-white">C1 Level</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
