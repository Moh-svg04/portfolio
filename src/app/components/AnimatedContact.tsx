import { Mail, Phone, Github, Linkedin, ExternalLink, Rocket } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function AnimatedContact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-32 bg-black relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-green-500/50 bg-green-500/10 backdrop-blur-sm mb-8"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 font-medium">Available for Work-Study</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-black mb-6"
            >
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Let's Build Together
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-400 mb-8"
            >
              Seeking work-study as ML Engineer / Data Scientist
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full font-bold text-white shadow-lg"
            >
              <Rocket className="w-5 h-5" />
              <span>2 days school / 3 days company</span>
            </motion.div>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.a
              href="mailto:gueyemoe04@gmail.com"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border-2 border-blue-500/30 rounded-3xl p-8 hover:border-blue-500/60 transition-all">
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg"
                  >
                    <Mail className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Email</div>
                    <div className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      gueyemoe04@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>

            <motion.a
              href="tel:+33666952168"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border-2 border-purple-500/30 rounded-3xl p-8 hover:border-purple-500/60 transition-all">
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg"
                  >
                    <Phone className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Phone</div>
                    <div className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                      06 66 95 21 68
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid md:grid-cols-3 gap-4 mb-12"
          >
            {[
              { icon: Github, label: "GitHub", sub: "View code", href: "https://github.com/Moh-svg04", gradient: "from-gray-600 to-gray-800" },
              { icon: Linkedin, label: "LinkedIn", sub: "Connect", href: "https://linkedin.com/in/mohamed-gueye-32a945352", gradient: "from-blue-600 to-blue-800" },
              { icon: ExternalLink, label: "Portfolio", sub: "Visit site", href: "https://moeg.netlify.app/", gradient: "from-purple-600 to-purple-800" }
            ].map((social, i) => {
              const Icon = social.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className={`h-auto w-full py-6 bg-gradient-to-r ${social.gradient} hover:opacity-90 text-white rounded-2xl border-0`}
                    onClick={() => window.open(social.href, '_blank')}
                  >
                    <div className="flex items-center gap-4 w-full">
                      <Icon className="w-6 h-6" />
                      <div className="text-left flex-1">
                        <div className="font-bold">{social.label}</div>
                        <div className="text-xs text-white/70">{social.sub}</div>
                      </div>
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </Button>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Value Prop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-10">
              <h3 className="text-3xl font-black text-white mb-8 text-center">
                What I Bring
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { emoji: "🚀", title: "Full ML Stack", desc: "From data to deployment" },
                  { emoji: "⚡", title: "Production Ready", desc: "99.97% uptime, real metrics" },
                  { emoji: "🎯", title: "ROI Focused", desc: "Business impact driven" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1.4 + i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="text-5xl mb-4">{item.emoji}</div>
                    <h4 className="font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
