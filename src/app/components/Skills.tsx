import { Brain, Code, Cloud, BarChart, Wrench, Languages } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const skillCategories = [
  {
    icon: Brain,
    title: "Data Science & ML",
    color: "indigo",
    skills: [
      "Scikit-learn", "TensorFlow", "Keras", "PyTorch", "XGBoost",
      "Deep Learning", "Statistics", "Feature Selection",
      "Hyperparameter Tuning", "Model Evaluation"
    ]
  },
  {
    icon: Code,
    title: "Engineering & DevOps",
    color: "purple",
    skills: [
      "Data Pipeline", "CI/CD", "Docker", "Kubernetes", "Gitflow",
      "API REST", "Unit Testing", "Monitoring", "FastAPI",
      "React.js", "Node.js", "GitHub Actions"
    ]
  },
  {
    icon: Cloud,
    title: "Cloud & Data Management",
    color: "blue",
    skills: [
      "AWS", "Azure", "GCP", "Cloud Computing",
      "Data Governance", "Apache Kafka", "Airflow",
      "MLflow", "Terraform"
    ]
  },
  {
    icon: Languages,
    title: "Langages & Databases",
    color: "green",
    skills: [
      "Python", "SQL", "Java", "R", "C++",
      "NoSQL", "MongoDB", "PostgreSQL", "Redis", "TimescaleDB"
    ]
  },
  {
    icon: BarChart,
    title: "Visualisation & Agilité",
    color: "pink",
    skills: [
      "Power BI", "Data Visualization", "Streamlit",
      "Plotly", "Matplotlib", "Grafana", "Agile", "Scrum"
    ]
  },
  {
    icon: Wrench,
    title: "IA Générative",
    color: "yellow",
    skills: [
      "LangChain", "LlamaIndex", "RAG", "Prompt Engineering",
      "OpenAI API", "GitHub Copilot", "Transformers", "HuggingFace"
    ]
  }
];

const colorMap: Record<string, string> = {
  indigo: "bg-indigo-600/20 border-indigo-500/30 text-indigo-300",
  purple: "bg-purple-600/20 border-purple-500/30 text-purple-300",
  blue: "bg-blue-600/20 border-blue-500/30 text-blue-300",
  green: "bg-green-600/20 border-green-500/30 text-green-300",
  pink: "bg-pink-600/20 border-pink-500/30 text-pink-300",
  yellow: "bg-yellow-600/20 border-yellow-500/30 text-yellow-300"
};

const iconColorMap: Record<string, string> = {
  indigo: "text-indigo-400 bg-indigo-600/20",
  purple: "text-purple-400 bg-purple-600/20",
  blue: "text-blue-400 bg-blue-600/20",
  green: "text-green-400 bg-green-600/20",
  pink: "text-pink-400 bg-pink-600/20",
  yellow: "text-yellow-400 bg-yellow-600/20"
};

export function Skills() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Compétences Techniques
            </h2>
            <p className="text-xl text-slate-300">
              Stack technologique complète pour la Data Science et le développement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Card
                  key={category.title}
                  className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-lg ${iconColorMap[category.color]}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-white text-lg">
                        {category.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className={colorMap[category.color]}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border-slate-600 inline-block">
              <CardContent className="py-6 px-8">
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2 justify-center">
                  <Languages className="w-5 h-5 text-indigo-400" />
                  Langues
                </h3>
                <div className="flex gap-4">
                  <Badge className="bg-indigo-600/20 text-indigo-300 border-indigo-500/30">
                    🇫🇷 Français - Natif
                  </Badge>
                  <Badge className="bg-indigo-600/20 text-indigo-300 border-indigo-500/30">
                    🇬🇧 Anglais - C1
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
