import { ReactNode } from "react";
import { ArrowRight, Zap } from "lucide-react";

interface HeroSectionProps {
  children: ReactNode;
}

const HeroSection = ({ children }: HeroSectionProps) => {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-float">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 backdrop-blur-sm rounded-full px-4 py-2 border border-cyan-500/30">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Next-Gen Performance</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Miuyses
              </span>
              <br />
              <span className="text-slate-200">3D Laptop</span>
              <span className="text-cyan-400"> Experience</span>
            </h1>

            <p className="text-slate-300 text-lg max-w-lg">
              Ultra HD LCD displays, immersive 3D visuals, and AI-powered performance.
              The future of mobile computing is here — <span className="text-cyan-400 font-semibold">Miuyses</span>.
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-white flex items-center gap-2 shadow-lg shadow-cyan-500/30 hover:scale-105 transition">
                Shop Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
              <button className="px-8 py-4 border border-slate-600 rounded-full font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-400 transition">
                Watch Demo
              </button>
            </div>

            <div className="flex gap-8 pt-6">
              <div><div className="text-2xl font-bold text-white">4K+</div><div className="text-slate-400 text-sm">Ultra HD LCD</div></div>
              <div><div className="text-2xl font-bold text-white">120Hz</div><div className="text-slate-400 text-sm">Smooth Refresh</div></div>
              <div><div className="text-2xl font-bold text-white">3D</div><div className="text-slate-400 text-sm">Immersive Tech</div></div>
            </div>
          </div>

          <div className="relative h-[500px] lg:h-[600px] w-full">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;