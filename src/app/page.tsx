"use client";

import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import CTASection from "../components/CTASection";
import ShopSection from '../components/ShopSection'
// Dynamically import the 3D scene to avoid SSR issues with WebGL
const LaptopScene3D = dynamic(() => import("../components/LaptopScene3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] flex items-center justify-center bg-slate-900/50 rounded-2xl">
      <div className="animate-pulse text-cyan-400 text-lg">Loading 3D Experience...</div>
    </div>
  ),
});

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navbar />
      <HeroSection>
        <LaptopScene3D />
      </HeroSection>
      <FeaturesSection />
      <ShopSection/>
      <CTASection />
      <Footer />
    </main>
  );
}