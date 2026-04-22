import { Brain, Database, Cloud, Sparkles, Code, BarChart } from "lucide-react";

const skillCategories = [
  {
    icon: Brain,
    title: "Machine Learning",
    gradient: "from-blue-500 to-cyan-500",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "Deep Learning", "NLP", "Computer Vision"]
  },
  {
    icon: Sparkles,
    title: "Generative AI",
    gradient: "from-purple-500 to-pink-500",
    skills: ["LangChain", "LlamaIndex", "RAG", "Prompt Engineering", "OpenAI API", "HuggingFace"]
  },
  {
    icon: Database,
    title: "Data Engineering",
    gradient: "from-emerald-500 to-teal-500",
    skills: ["Apache Kafka", "Airflow", "Spark", "PostgreSQL", "MongoDB", "Redis", "TimescaleDB"]
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    gradient: "from-orange-500 to-red-500",
    skills: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD", "GitHub Actions"]
  },
  {
    icon: Code,
    title: "Development",
    gradient: "from-indigo-500 to-purple-500",
    skills: ["Python", "FastAPI", "React", "TypeScript", "Node.js", "SQL", "Git", "REST APIs"]
  },
  {
    icon: BarChart,
    title: "MLOps & Analytics",
    gradient: "from-pink-500 to-rose-500",
    skills: ["MLflow", "Prometheus", "Grafana", "Streamlit", "Plotly", "Power BI", "Data Viz"]
  }
];

export function ModernSkills() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-white shadow-sm mb-6">
              <Brain className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-gray-600">Technical Expertise</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Skills & Stack
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Full-stack data science and ML engineering capabilities
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="group bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-gray-200 transition-all shadow-lg hover:shadow-xl"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Languages */}
          <div className="mt-16 text-center">
            <div className="inline-flex gap-8 bg-white rounded-3xl px-12 py-6 border-2 border-gray-100 shadow-lg">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🇫🇷</span>
                <div className="text-left">
                  <div className="text-sm text-gray-500 font-medium">French</div>
                  <div className="text-lg font-bold text-gray-900">Native</div>
                </div>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="flex items-center gap-3">
                <span className="text-2xl">🇬🇧</span>
                <div className="text-left">
                  <div className="text-sm text-gray-500 font-medium">English</div>
                  <div className="text-lg font-bold text-gray-900">C1 Level</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
