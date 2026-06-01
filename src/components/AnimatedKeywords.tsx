"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Sphere } from "@react-three/drei";
import { Group } from "three";

const keywords = [
  { text: "Miuyses", color: "#06b6d4", radius: 2.8, speed: 0.6 },
  { text: "LCD", color: "#60a5fa", radius: 3.2, speed: 0.5 },
  { text: "3D", color: "#c084fc", radius: 3.0, speed: 0.7 },
  { text: "Antiona", color: "#f472b6", radius: 3.5, speed: 0.4 },
  { text: "Ultra HD", color: "#34d399", radius: 2.5, speed: 0.8 },
  { text: "120Hz", color: "#fbbf24", radius: 3.8, speed: 0.55 },
];

export default function AnimatedKeywords() {
  const groupRef = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {keywords.map((kw, idx) => {
        const angle = (idx / keywords.length) * Math.PI * 2;
        const x = Math.cos(angle) * kw.radius;
        const z = Math.sin(angle) * kw.radius;
        return (
          <Text
            key={idx}
            position={[x, 0.5 + Math.sin(angle * 2) * 0.3, z]}
            fontSize={0.4}
            color={kw.color}
            anchorX="center"
            anchorY="middle"
            // REMOVED the font prop – now uses default system font
            outlineWidth={0.02}
            outlineColor="#000000"
          >
            {kw.text}
          </Text>
        );
      })}
      {/* Central glowing orb */}
      <Sphere args={[0.25, 32, 32]} position={[0, 0.3, 0]}>
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={1.2} />
      </Sphere>
    </group>
  );
}