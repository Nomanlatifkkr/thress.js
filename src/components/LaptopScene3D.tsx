"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Sparkles, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function TechRings() {
  const groupRef = useRef<THREE.Group>(null);

  // Create an array of rings with different parameters
  const rings = [
    { radius: 3, tube: 0.1, color: "#06b6d4", speed: 0.5, rotation: [0, 0, 0] },
    { radius: 2.5, tube: 0.08, color: "#3b82f6", speed: -0.4, rotation: [Math.PI / 3, 0, 0] },
    { radius: 3.5, tube: 0.12, color: "#8b5cf6", speed: 0.3, rotation: [0, 0, Math.PI / 4] },
    { radius: 2, tube: 0.06, color: "#ec4899", speed: 0.6, rotation: [Math.PI / 4, Math.PI / 3, 0] },
    { radius: 4, tube: 0.09, color: "#22d3ee", speed: -0.2, rotation: [0, Math.PI / 2, 0] },
  ];

  return (
    <group ref={groupRef}>
      {rings.map((ring, i) => (
        <Ring key={i} {...ring} />
      ))}
    </group>
  );
}

interface RingProps {
  radius: number;
  tube: number;
  color: string;
  speed: number;
  rotation: [number, number, number];
}

function Ring({ radius, tube, color, speed, rotation }: RingProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotate each ring around its own axis
      meshRef.current.rotation.z += delta * speed;
      meshRef.current.rotation.x += delta * speed * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} rotation={rotation}>
      <torusGeometry args={[radius, tube, 32, 200]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
}

export default function LaptopScene3D() {
  return (
    <Canvas shadows className="rounded-2xl cursor-grab active:cursor-grabbing">
      <PerspectiveCamera makeDefault position={[6, 3, 8]} fov={45} />

      {/* Ambient and key lights */}
      <ambientLight intensity={0.3} />
      <spotLight position={[5, 8, 5]} angle={0.5} penumbra={0.5} intensity={1.5} color="#ffffff" />
      <pointLight position={[-3, 2, 4]} intensity={1} color="#06b6d4" />
      <pointLight position={[3, 1, 5]} intensity={0.8} color="#3b82f6" />
      <pointLight position={[0, -2, -3]} intensity={0.6} color="#ec4899" />

      {/* Environment for reflections */}
      <Environment preset="city" environmentIntensity={0.3} />

      {/* The animated tech rings */}
      <TechRings />

      {/* Floating particles */}
      <Sparkles count={400} scale={12} size={0.15} speed={0.5} color="#06b6d4" opacity={0.4} />
      <Sparkles count={200} scale={10} size={0.1} speed={0.3} color="#ec4899" opacity={0.3} />

      {/* Controls */}
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.8}
        rotateSpeed={0.5}
        maxPolarAngle={Math.PI / 1.8}
      />
    </Canvas>
  );
}