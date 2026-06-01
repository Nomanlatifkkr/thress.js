"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Sparkles, PerspectiveCamera } from "@react-three/drei";
import LaptopModel from "./LaptopModel";
import AnimatedKeywords from "./AnimatedKeywords";

export default function LaptopScene3D() {
  return (
    <Canvas shadows className="rounded-2xl cursor-grab active:cursor-grabbing">
      <PerspectiveCamera makeDefault position={[4, 2.5, 6]} fov={50} />
      <ambientLight intensity={0.6} />
      <spotLight position={[5, 5, 5]} angle={0.4} penumbra={0.8} intensity={1.2} castShadow />
      <pointLight position={[-3, 2, 4]} intensity={0.8} color="#06b6d4" />
      <pointLight position={[3, 1, 5]} intensity={0.5} color="#3b82f6" />
      <directionalLight position={[2, 4, 2]} intensity={1} castShadow />

      <Environment preset="city" environmentIntensity={0.4} />
      <LaptopModel />
      <AnimatedKeywords />
      <Sparkles count={600} scale={10} size={0.2} speed={0.4} color="#06b6d4" opacity={0.5} />

      <OrbitControls
        enableZoom={true}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1}
        rotateSpeed={0.8}
        maxPolarAngle={Math.PI / 2.3}
      />
    </Canvas>
  );
}