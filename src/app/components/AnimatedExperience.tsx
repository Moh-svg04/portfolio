import { Briefcase, GraduationCap, Calendar, MapPin, Award, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function AnimatedExperience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-gray-950 relative overflow-hidden">
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-8"
            >
              <Briefcase className="w-4 h-4 text-blue-400" />
              <span className="text-white/80 font-medium">Professional Journey</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-black mb-6"
            >
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Experience & Education
              </span>
            </motion.h2>
          </div>

          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 p-1 rounded-3xl shadow-2xl"
            >
              <div className="bg-black/90 backdrop-blur-sm rounded-3xl p-10">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-lg"
                  >
                    <Briefcase className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div>
                      <h3 className="text-3xl font-black text-white mb-2">
                        ML Engineer Intern
                      </h3>
                      <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                        AIDRE CONSULTING
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>Apr - Jun 2026</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>Île-de-France</span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { title: "Generative AI & RAG", desc: "Built autonomous AI agents with LangChain & LlamaIndex" },
                        { title: "Cloud Engineering", desc: "Automated data pipelines to cloud environments via API" },
                        { title: "NLP & Semantic Search", desc: "Developed semantic search architecture for corpus alignment" },
                        { title: "System Reliability", desc: "Implemented content versioning (99.97% uptime achieved)" }
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                          whileHover={{ x: 5 }}
                          className="flex gap-3 items-start"
                        >
                          <Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="font-bold text-white text-sm mb-1">{item.title}</div>
                            <div className="text-xs text-gray-400">{item.desc}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-2">
                      {["Python", "RAG", "LangChain", "LlamaIndex", "Cloud APIs", "NLP", "FastAPI"].map((tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ duration: 0.3, delay: 1 + i * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1.5 bg-blue-500/20 border border-blue-500/30 text-blue-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Education Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* EFREI */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.03, rotate: 1 }}
            >
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-1 rounded-3xl h-full">
                <div className="bg-black/90 backdrop-blur-sm rounded-3xl p-8 h-full">
                  <div className="flex gap-4 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg"
                    >
                      <GraduationCap className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <div className="text-xs font-bold text-purple-400 mb-1">2026 - 2029</div>
                      <h4 className="text-xl font-black text-white mb-1">Engineering Degree</h4>
                      <div className="text-gray-300 font-bold">EFREI Paris</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="font-bold text-white">Big Data & Machine Learning</div>
                    <div className="text-sm text-gray-400">Work-study: 2 days school / 3 days company</div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {["Deep Learning", "Cloud", "MLOps"].map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 text-purple-300 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Le Havre */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.03, rotate: -1 }}
            >
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 p-1 rounded-3xl h-full">
                <div className="bg-black/90 backdrop-blur-sm rounded-3xl p-8 h-full">
                  <div className="flex gap-4 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-lg"
                    >
                      <Award className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <div className="text-xs font-bold text-emerald-400 mb-1">2023 - 2026</div>
                      <h4 className="text-xl font-black text-white mb-1">Bachelor's Degree</h4>
                      <div className="text-gray-300 font-bold">University Le Havre</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="font-bold text-white">Computer Science</div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 px-4 py-2 rounded-full text-sm font-bold"
                    >
                      <Award className="w-4 h-4" />
                      WITH HONORS
                    </motion.div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {["Algorithms", "Data Structures", "DB"].map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
