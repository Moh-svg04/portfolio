import { ExternalLink, Github, ChevronLeft, ChevronRight, Monitor } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const projects = [
  {
    id: 1,
    title: "Insurance AI",
    category: "MLOps Platform",
    description: "Real-time document classification system with BiLSTM architecture achieving 93.4% accuracy. Reduces processing time from hours to <2 seconds.",
    gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
    glowColor: "shadow-purple-500/30",
    borderColor: "border-purple-500/40",
    accentColor: "text-purple-400",
    metrics: [{ v: "93.4%", l: "F1 Score" }, { v: "433ms", l: "Latency" }, { v: "520/min", l: "Throughput" }, { v: "99.97%", l: "Uptime" }],
    tech: ["PyTorch", "BiLSTM", "XGBoost", "FastAPI", "React", "GCP"],
    github: "https://github.com/Moh-svg04/insurance-moe",
    demo: "https://isurancemoe.streamlit.app/",
    screens: [
      {
        title: "Classification de document",
        color: "from-violet-900/60 to-purple-950/80",
        accent: "#a78bfa",
        icon: "📄",
        preview: [
          { label: "Upload fichier", type: "upload", value: "PDF, PNG, JPG, JPEG, TXT — 200MB max" },
          { label: "Texte direct", type: "textarea", value: "CONTRAT D'ASSURANCE AUTOMOBILE\nAssuré : Jean Martin\nVéhicule : AB-123-CD\nPrime annuelle : 850 €" },
          { label: "", type: "button", value: "🔴 Analyser" },
        ]
      },
      {
        title: "Analyser une souscription",
        color: "from-fuchsia-900/60 to-violet-950/80",
        accent: "#e879f9",
        icon: "🔍",
        preview: [
          { label: "Risque détecté", type: "metric", value: "FAIBLE" },
          { label: "Confiance modèle", type: "bar", value: "93.4%" },
          { label: "Catégorie", type: "badge", value: "Auto · Résidentiel · Vie" },
          { label: "Temps d'analyse", type: "metric", value: "433ms" },
        ]
      },
      {
        title: "Dashboard",
        color: "from-purple-900/60 to-indigo-950/80",
        accent: "#818cf8",
        icon: "📊",
        preview: [
          { label: "Documents traités", type: "metric", value: "12,847" },
          { label: "Précision globale", type: "bar", value: "93.4%" },
          { label: "Temps moyen", type: "metric", value: "433ms" },
          { label: "Taux d'erreur", type: "metric", value: "0.03%" },
        ]
      },
      {
        title: "Modèles IA",
        color: "from-indigo-900/60 to-purple-950/80",
        accent: "#c4b5fd",
        icon: "🤖",
        preview: [
          { label: "BiLSTM v2.1", type: "badge", value: "Production · AUC 0.97" },
          { label: "XGBoost v1.4", type: "badge", value: "Fallback · F1 0.89" },
          { label: "Ensemble Score", type: "bar", value: "96.2%" },
          { label: "API endpoint", type: "code", value: "https://insurance-ai.run.app" },
        ]
      }
    ]
  },
  {
    id: 2,
    title: "CineMatch",
    category: "Recommendation Engine",
    description: "Hybrid recommendation system combining collaborative filtering (SVD) and content-based filtering (TF-IDF). Trained on MovieLens 100K — 1,682 films, 943 users.",
    gradient: "from-orange-600 via-red-600 to-pink-600",
    glowColor: "shadow-orange-500/30",
    borderColor: "border-orange-500/40",
    accentColor: "text-orange-400",
    metrics: [{ v: "~0.97", l: "RMSE" }, { v: "~82%", l: "Variance" }, { v: "100%", l: "Coverage" }, { v: "50", l: "SVD dims" }],
    tech: ["SVD", "TF-IDF", "Scikit-learn", "Plotly", "Streamlit", "MovieLens"],
    github: "https://github.com/Moh-svg04/cinematch",
    demo: "https://cinematch-iqhqwe88wvpswjgpdbya9k.streamlit.app/",
    screens: [
      {
        title: "Recommandations",
        color: "from-orange-900/60 to-red-950/80",
        accent: "#fb923c",
        icon: "🎬",
        preview: [
          { label: "Films sélectionnés", type: "tags", value: "Star Wars (1977) × · Toy Story (1995) ×" },
          { label: "Nombre de recommandations", type: "slider", value: "10" },
          { label: "Poids Content-Based", type: "slider", value: "0.60 — équilibre" },
          { label: "", type: "button", value: "🚀 Générer mes recommandations" },
        ]
      },
      {
        title: "Pipeline complet",
        color: "from-red-900/60 to-orange-950/80",
        accent: "#f87171",
        icon: "⚙️",
        preview: [
          { label: "Données brutes", type: "pipeline", value: "MovieLens 100K · 1682 films" },
          { label: "Preprocessing", type: "pipeline", value: "TF-IDF · Matrice user-item" },
          { label: "Modèles", type: "pipeline", value: "TF-IDF + SVD-50 hybride" },
          { label: "Recommandations", type: "pipeline", value: "Top-N · Filtrés · Classés" },
        ]
      },
      {
        title: "Exploration des données",
        color: "from-pink-900/60 to-red-950/80",
        accent: "#f472b6",
        icon: "📈",
        preview: [
          { label: "Films totaux", type: "metric", value: "1,682" },
          { label: "Utilisateurs", type: "metric", value: "943" },
          { label: "Notes totales", type: "metric", value: "100,000" },
          { label: "RMSE estimé (CV 5-fold)", type: "metric", value: "~0.97" },
        ]
      },
      {
        title: "Performance SVD",
        color: "from-rose-900/60 to-pink-950/80",
        accent: "#fb7185",
        icon: "📉",
        preview: [
          { label: "Composantes latentes", type: "metric", value: "50" },
          { label: "Variance expliquée", type: "bar", value: "82%" },
          { label: "MAE estimé", type: "metric", value: "~0.77" },
          { label: "Sparsité matrice", type: "metric", value: "93.7%" },
        ]
      }
    ]
  },
  {
    id: 3,
    title: "ICU Predict",
    category: "Clinical ML",
    description: "XGBoost model for ICU outcome prediction — mortality risk, estimated LOS, and APACHE II score proxy. SHAP-powered explainability for clinical decision support.",
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    glowColor: "shadow-emerald-500/30",
    borderColor: "border-emerald-500/40",
    accentColor: "text-emerald-400",
    metrics: [{ v: "0.665", l: "AUC" }, { v: "-9.8%", l: "vs APACHE II" }, { v: "300", l: "patients" }, { v: "0.6439", l: "SHAP Âge" }],
    tech: ["XGBoost", "SHAP", "Scikit-learn", "MIMIC-IV", "Streamlit", "Plotly"],
    github: "https://github.com/Moh-svg04/icu-predict",
    demo: "https://icu-predict-dyknhzekurr6yswzahle8k.streamlit.app/",
    screens: [
      {
        title: "Prédiction ICU",
        color: "from-emerald-900/60 to-teal-950/80",
        accent: "#34d399",
        icon: "🏥",
        preview: [
          { label: "Mortalité — XGBoost", type: "metric", value: "13.7% — FAIBLE" },
          { label: "DDS estimée", type: "metric", value: "9.3j (MAE ≈ 4.62j)" },
          { label: "APACHE II Proxy ML", type: "metric", value: "23.5% (-9.8%)" },
          { label: "AUC du modèle", type: "metric", value: "0.665 vs APACHE 0.730" },
        ]
      },
      {
        title: "Analyse SHAP",
        color: "from-teal-900/60 to-cyan-950/80",
        accent: "#2dd4bf",
        icon: "🔬",
        preview: [
          { label: "Âge", type: "shap", value: "0.6439" },
          { label: "Score de Glasgow", type: "shap", value: "0.4307" },
          { label: "Lactate", type: "shap", value: "0.3192" },
          { label: "Instabilité PAM", type: "shap", value: "0.2680" },
        ]
      },
      {
        title: "Signes vitaux (24h)",
        color: "from-cyan-900/60 to-emerald-950/80",
        accent: "#67e8f9",
        icon: "❤️",
        preview: [
          { label: "FC (bpm) / PAM (mmHg)", type: "twin", value: "92  /  68" },
          { label: "SpO₂ (%) / FR (/min)", type: "twin", value: "95  /  22" },
          { label: "Temp (°C) / Instab.PAM", type: "twin", value: "37.8  /  12" },
          { label: "Type d'admission", type: "badge", value: "🚨 Urgence" },
        ]
      },
      {
        title: "Performance modèles",
        color: "from-green-900/60 to-teal-950/80",
        accent: "#86efac",
        icon: "📊",
        preview: [
          { label: "XGBoost AUC", type: "bar", value: "66%" },
          { label: "APACHE II AUC", type: "bar", value: "73%" },
          { label: "Données test", type: "metric", value: "300 patients MIMIC-IV" },
          { label: "Top features SHAP", type: "badge", value: "Âge · Glasgow · Lactate" },
        ]
      }
    ]
  },
  {
    id: 4,
    title: "DataNexus",
    category: "Real-Time ML Pipeline",
    description: "Production-grade platform with Kafka ingestion, automated ML lifecycle, and statistical drift detection. Processing 600+ docs/min at scale.",
    gradient: "from-cyan-600 via-blue-600 to-indigo-600",
    glowColor: "shadow-blue-500/30",
    borderColor: "border-blue-500/40",
    accentColor: "text-blue-400",
    metrics: [{ v: "600+/min", l: "Throughput" }, { v: "<45ms", l: "P99" }, { v: "99.97%", l: "Availability" }, { v: "0", l: "Downtime" }],
    tech: ["Kafka", "Airflow", "MLflow", "Kubernetes", "Prometheus", "FastAPI"],
    github: "https://github.com/Moh-svg04/datanexus",
    screens: [
      {
        title: "Pipeline Overview",
        color: "from-blue-900/60 to-indigo-950/80",
        accent: "#60a5fa",
        icon: "⚡",
        preview: [
          { label: "Kafka topics actifs", type: "metric", value: "12" },
          { label: "Messages / sec", type: "metric", value: "10,000+" },
          { label: "Airflow DAGs", type: "metric", value: "8 en production" },
          { label: "Latence P99", type: "metric", value: "<45ms" },
        ]
      },
      {
        title: "ML Lifecycle (MLflow)",
        color: "from-indigo-900/60 to-blue-950/80",
        accent: "#818cf8",
        icon: "🔄",
        preview: [
          { label: "Experiments MLflow", type: "metric", value: "47" },
          { label: "Meilleur modèle", type: "badge", value: "F1: 0.934 · v2.1" },
          { label: "Drift KS test", type: "badge", value: "✅ Stable — p > 0.05" },
          { label: "Déploiement", type: "badge", value: "✅ Zero-downtime K8s" },
        ]
      },
      {
        title: "Monitoring Prometheus",
        color: "from-sky-900/60 to-blue-950/80",
        accent: "#38bdf8",
        icon: "📡",
        preview: [
          { label: "CPU clusters K8s", type: "bar", value: "62%" },
          { label: "RAM utilisée", type: "bar", value: "71%" },
          { label: "Taux d'erreur (24h)", type: "metric", value: "0.03%" },
          { label: "Alertes actives", type: "metric", value: "0 🟢" },
        ]
      }
    ]
  },
  {
    id: 5,
    title: "LLM Fine-Tuning Lab",
    category: "LLM / Generative AI",
    description: "Fine-tuning pipeline for domain-specific LLMs using LoRA/QLoRA adapters on Mistral-7B and LLaMA-3. Evaluation via ROUGE & BERTScore with W&B tracking.",
    gradient: "from-yellow-500 via-amber-500 to-orange-500",
    glowColor: "shadow-yellow-500/30",
    borderColor: "border-yellow-500/40",
    accentColor: "text-yellow-400",
    metrics: [{ v: "LoRA", l: "Adapter" }, { v: "7B", l: "Params" }, { v: "+18%", l: "ROUGE-L" }, { v: "4-bit", l: "QLoRA" }],
    tech: ["Mistral-7B", "LLaMA-3", "LoRA", "QLoRA", "PEFT", "HuggingFace", "W&B"],
    github: "https://github.com/Moh-svg04",
    screens: [
      {
        title: "Configuration fine-tuning",
        color: "from-yellow-900/60 to-amber-950/80",
        accent: "#fbbf24",
        icon: "🧬",
        preview: [
          { label: "Modèle base", type: "badge", value: "mistralai/Mistral-7B-v0.1" },
          { label: "Méthode", type: "badge", value: "QLoRA — 4-bit NF4" },
          { label: "Rank LoRA (r)", type: "metric", value: "16" },
          { label: "Epochs / LR", type: "metric", value: "3 · 2e-4" },
        ]
      },
      {
        title: "Évaluation ROUGE",
        color: "from-amber-900/60 to-yellow-950/80",
        accent: "#f59e0b",
        icon: "📏",
        preview: [
          { label: "ROUGE-1", type: "bar", value: "62%" },
          { label: "ROUGE-L (+18% vs base)", type: "bar", value: "58%" },
          { label: "BERTScore F1", type: "bar", value: "87%" },
          { label: "Perplexité", type: "metric", value: "4.23 (↓ vs 6.81 base)" },
        ]
      },
      {
        title: "Inference & démo",
        color: "from-orange-900/60 to-amber-950/80",
        accent: "#fb923c",
        icon: "💬",
        preview: [
          { label: "Prompt exemple", type: "code", value: "Résume ce contrat d'assurance en 3 points clés..." },
          { label: "Tokens/sec (A100)", type: "metric", value: "48 tok/s" },
          { label: "Latence P50", type: "metric", value: "1.2s" },
          { label: "Décodage", type: "badge", value: "Beam search · top-k 50" },
        ]
      },
      {
        title: "W&B Tracking",
        color: "from-yellow-900/60 to-orange-950/80",
        accent: "#fde68a",
        icon: "📉",
        preview: [
          { label: "Train loss", type: "bar", value: "92%" },
          { label: "Val loss", type: "bar", value: "88%" },
          { label: "GPU utilisé", type: "metric", value: "A100 40GB · VRAM 31.2GB" },
          { label: "Durée training", type: "metric", value: "4h 23min" },
        ]
      }
    ]
  },
  {
    id: 6,
    title: "RAG Chatbot",
    category: "Retrieval-Augmented Generation",
    description: "Production RAG chatbot avec LangChain + ChromaDB. Ingère PDFs et documents techniques, répond avec sources citées et score de confiance.",
    gradient: "from-teal-500 via-green-500 to-emerald-500",
    glowColor: "shadow-teal-500/30",
    borderColor: "border-teal-500/40",
    accentColor: "text-teal-400",
    metrics: [{ v: "GPT-4o", l: "LLM" }, { v: "1536d", l: "Embeddings" }, { v: "91.3%", l: "Faithfulness" }, { v: "<2s", l: "Réponse" }],
    tech: ["LangChain", "ChromaDB", "OpenAI", "FastAPI", "Streamlit", "RAGAS"],
    github: "https://github.com/Moh-svg04",
    screens: [
      {
        title: "Chat Interface",
        color: "from-teal-900/60 to-green-950/80",
        accent: "#2dd4bf",
        icon: "🤖",
        preview: [
          { label: "Question", type: "code", value: "Quelles sont les clauses d'exclusion du contrat ?" },
          { label: "Sources retrouvées", type: "metric", value: "5 chunks · score > 0.82" },
          { label: "Réponse générée", type: "badge", value: "GPT-4o · 312 tokens" },
          { label: "Latence totale", type: "metric", value: "1.8s (RAG + LLM)" },
        ]
      },
      {
        title: "Ingestion documents",
        color: "from-green-900/60 to-teal-950/80",
        accent: "#4ade80",
        icon: "📚",
        preview: [
          { label: "Docs indexés", type: "metric", value: "847 fichiers PDF" },
          { label: "Chunks créés", type: "metric", value: "14,230 (512 tokens)" },
          { label: "Embeddings", type: "badge", value: "text-embedding-3-small · 1536d" },
          { label: "Store vectoriel", type: "badge", value: "ChromaDB · cosine similarity" },
        ]
      },
      {
        title: "Évaluation RAGAS",
        color: "from-emerald-900/60 to-green-950/80",
        accent: "#6ee7b7",
        icon: "📋",
        preview: [
          { label: "Faithfulness", type: "bar", value: "91%" },
          { label: "Answer relevancy", type: "bar", value: "89%" },
          { label: "Context recall", type: "bar", value: "84%" },
          { label: "Framework", type: "badge", value: "RAGAS · Trulens · LangSmith" },
        ]
      }
    ]
  }
];

/* ─────────────────────────────────────────────
   SCREEN PREVIEW RENDERER
───────────────────────────────────────────── */
type PreviewItem = { label: string; type: string; value: string };
type Screen = { title: string; color: string; accent: string; icon: string; preview: PreviewItem[] };

function ScreenPreview({ screen }: { screen: Screen }) {
  return (
    <div className={`relative w-full h-full bg-gradient-to-br ${screen.color} rounded-xl overflow-hidden p-3 flex flex-col gap-2`}>
      {/* Browser bar */}
      <div className="flex items-center gap-1.5 mb-0.5">
        <div className="w-2 h-2 rounded-full bg-red-500/70" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
        <div className="w-2 h-2 rounded-full bg-green-500/70" />
        <div className="ml-2 flex-1 bg-white/10 rounded-full h-3.5 px-2 flex items-center">
          <span className="text-white/40 text-[8px] truncate">streamlit.app</span>
        </div>
      </div>

      {/* Screen title */}
      <div className="flex items-center gap-1.5">
        <span className="text-xs">{screen.icon}</span>
        <span className="text-white font-bold text-[11px]">{screen.title}</span>
      </div>

      {/* Content rows */}
      <div className="flex flex-col gap-1.5 flex-1">
        {screen.preview.map((item, i) => (
          <div key={i} className="flex flex-col gap-0.5">
            {item.label && (
              <span className="text-white/40 text-[8px] uppercase tracking-wide">{item.label}</span>
            )}
            {item.type === "metric" && (
              <span className="font-bold text-[12px]" style={{ color: screen.accent }}>{item.value}</span>
            )}
            {item.type === "bar" && (
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-white/10 rounded-full h-1.5">
                  <div
                    className="h-1.5 rounded-full"
                    style={{ width: item.value, background: screen.accent, opacity: 0.85 }}
                  />
                </div>
                <span className="text-white/60 text-[9px] shrink-0">{item.value}</span>
              </div>
            )}
            {item.type === "badge" && (
              <span
                className="inline-block text-[9px] font-medium px-2 py-0.5 rounded-full border w-fit"
                style={{ borderColor: screen.accent + "50", color: screen.accent, background: screen.accent + "15" }}
              >
                {item.value}
              </span>
            )}
            {item.type === "code" && (
              <span className="font-mono text-[8px] bg-black/40 rounded px-1.5 py-1 text-white/60 line-clamp-2">{item.value}</span>
            )}
            {item.type === "upload" && (
              <div className="border border-dashed border-white/20 rounded-lg px-2 py-1">
                <span className="text-white/40 text-[8px]">{item.value}</span>
              </div>
            )}
            {item.type === "textarea" && (
              <div className="bg-black/30 rounded-lg p-1.5 border border-white/10">
                <span className="text-white/40 text-[8px] font-mono leading-tight line-clamp-2">{item.value}</span>
              </div>
            )}
            {item.type === "button" && (
              <div
                className="text-center rounded-lg py-1 text-[10px] font-bold text-white mt-0.5"
                style={{ background: screen.accent }}
              >
                {item.value}
              </div>
            )}
            {item.type === "slider" && (
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-white/10 rounded-full h-1 relative">
                  <div className="absolute left-0 top-0 h-1 w-3/5 rounded-full" style={{ background: screen.accent }} />
                  <div className="absolute h-2.5 w-2.5 rounded-full top-1/2 -translate-y-1/2 left-[60%] border border-white" style={{ background: screen.accent }} />
                </div>
                <span className="text-white/50 text-[8px] shrink-0">{item.value}</span>
              </div>
            )}
            {item.type === "tags" && (
              <div className="flex gap-1 flex-wrap">
                {item.value.split(" · ").map((tag, j) => (
                  <span key={j} className="text-[8px] px-1.5 py-0.5 rounded-full bg-white/10 text-white/60">{tag}</span>
                ))}
              </div>
            )}
            {item.type === "pipeline" && (
              <div className="flex items-center gap-1">
                <div className="border rounded px-1.5 py-0.5 text-[8px]" style={{ borderColor: screen.accent + "60", color: screen.accent }}>
                  {item.value}
                </div>
                {i < 3 && <span className="text-white/30 text-[9px]">→</span>}
              </div>
            )}
            {item.type === "shap" && (
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-white/10 rounded h-1.5">
                  <div
                    className="h-1.5 rounded"
                    style={{ width: `${(parseFloat(item.value) / 0.7) * 100}%`, background: screen.accent }}
                  />
                </div>
                <span className="text-[9px] font-mono" style={{ color: screen.accent }}>{item.value}</span>
              </div>
            )}
            {item.type === "twin" && (
              <div className="flex gap-4">
                {item.value.split("  /  ").map((v, j) => (
                  <span key={j} className="font-bold text-sm" style={{ color: screen.accent }}>{v}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PROJECT CARD
───────────────────────────────────────────── */
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeScreen, setActiveScreen] = useState(0);

  const prev = () => setActiveScreen(s => Math.max(0, s - 1));
  const next = () => setActiveScreen(s => Math.min(project.screens.length - 1, s + 1));

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25 }}
        className={`group relative bg-gradient-to-br ${project.gradient} rounded-3xl p-[1px] shadow-2xl ${project.glowColor} hover:shadow-3xl`}
      >
        <div className="bg-gray-950 rounded-3xl overflow-hidden">

          {/* ── Screenshot carousel ── */}
          <div className="relative h-52 bg-black overflow-hidden">
            {project.screens.map((screen, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 p-2.5"
                initial={false}
                animate={{
                  opacity: i === activeScreen ? 1 : 0,
                  x: i === activeScreen ? 0 : i < activeScreen ? -16 : 16
                }}
                transition={{ duration: 0.22 }}
                style={{ pointerEvents: i === activeScreen ? "auto" : "none" }}
              >
                <ScreenPreview screen={screen} />
              </motion.div>
            ))}

            {/* Nav arrows — visible on hover */}
            <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
              <button
                onClick={prev}
                disabled={activeScreen === 0}
                className="w-7 h-7 rounded-full bg-black/80 border border-white/20 flex items-center justify-center text-white hover:bg-black disabled:opacity-20 transition-all"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={next}
                disabled={activeScreen === project.screens.length - 1}
                className="w-7 h-7 rounded-full bg-black/80 border border-white/20 flex items-center justify-center text-white hover:bg-black disabled:opacity-20 transition-all"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Dot indicators */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
              {project.screens.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveScreen(i)}
                  className={`rounded-full transition-all duration-200 ${
                    i === activeScreen ? "w-5 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Counter badge */}
            <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/60 backdrop-blur-sm rounded-full px-2 py-0.5 z-10">
              <Monitor className="w-2.5 h-2.5 text-white/40" />
              <span className="text-white/40 text-[9px]">{activeScreen + 1}/{project.screens.length}</span>
            </div>
          </div>

          {/* ── Text content ── */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className={`text-xs font-medium ${project.accentColor} mb-1 block`}>{project.category}</span>
                <h3 className="text-2xl font-black text-white">{project.title}</h3>
              </div>
              <div className="flex gap-2 shrink-0 ml-3">
                {project.demo && (
                  <motion.button
                    whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                    onClick={() => window.open(project.demo, '_blank')}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-white" />
                  </motion.button>
                )}
                <motion.button
                  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                  onClick={() => window.open(project.github, '_blank')}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-white" />
                </motion.button>
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

            {/* Metrics */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              {project.metrics.map((m, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-2 text-center">
                  <div className={`font-black text-sm ${project.accentColor}`}>{m.v}</div>
                  <div className="text-white/40 text-[9px] mt-0.5">{m.l}</div>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${project.borderColor} text-white/60 bg-white/5`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   SECTION
───────────────────────────────────────────── */
export function AnimatedProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-8"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-white/80 font-medium">6 Production Projects</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-black mb-6"
            >
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Featured Work
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              ML · LLM · RAG · MLOps — systèmes déployés en production avec de vraies métriques
            </motion.p>
          </div>

          {/* Grid 2 cols */}
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
