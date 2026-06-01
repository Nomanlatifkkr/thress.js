"use client";

import { Cpu, Battery, Eye, Fan, Shield, Layers } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Eye, title: "3D LCD Display", desc: "Glasses-free 3D with 4K resolution" },
  { icon: Cpu, title: "AI Processor", desc: "Next-gen chip for real-time rendering" },
  { icon: Battery, title: "All-Day Battery", desc: "Up to 15 hours of intense use" },
  { icon: Fan, title: "Vapor Chamber", desc: "Silent and efficient cooling" },
  { icon: Shield, title: "Quantum Security", desc: "Biometric + AI threat detection" },
  { icon: Layers, title: "Miuyses OS", desc: "Optimized for 3D workflows" },
];

// Card entrance animation – slide up + fade
const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// Keywords stagger – slide in from left/right and stop
const keywordVariants = {
  hidden: { opacity: 0, x: -80 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-slate-950/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Experience the Future
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Cutting-edge specs that redefine what a laptop can do.
          </p>
        </motion.div>

        {/* Feature cards – staggered appearance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition" />
              <feat.icon className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feat.title}</h3>
              <p className="text-slate-400">{feat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Animated keywords row – flowing in from left */}
        <div className="mt-20 flex flex-wrap justify-center gap-8 text-2xl font-bold overflow-hidden">
          {["Miuyses", "LCD", "3D", "Antiona", "Ultra HD", "120Hz"].map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={keywordVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400"
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;