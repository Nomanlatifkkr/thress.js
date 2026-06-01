import { Cpu, Battery, Eye, Fan, Shield, Layers } from "lucide-react";

const features = [
  { icon: Eye, title: "3D LCD Display", desc: "Glasses-free 3D with 4K resolution" },
  { icon: Cpu, title: "AI Processor", desc: "Next-gen chip for real-time rendering" },
  { icon: Battery, title: "All-Day Battery", desc: "Up to 15 hours of intense use" },
  { icon: Fan, title: "Vapor Chamber", desc: "Silent and efficient cooling" },
  { icon: Shield, title: "Quantum Security", desc: "Biometric + AI threat detection" },
  { icon: Layers, title: "Miuyses OS", desc: "Optimized for 3D workflows" },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Experience the Future
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Cutting-edge specs that redefine what a laptop can do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition" />
              <feat.icon className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feat.title}</h3>
              <p className="text-slate-400">{feat.desc}</p>
            </div>
          ))}
        </div>

        {/* Animated keywords row */}
        <div className="mt-20 flex flex-wrap justify-center gap-8 text-2xl font-bold overflow-hidden">
          {["Miuyses", "LCD", "3D", "Antiona", "Ultra HD", "120Hz"].map((word, i) => (
            <span
              key={i}
              className="inline-block animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;