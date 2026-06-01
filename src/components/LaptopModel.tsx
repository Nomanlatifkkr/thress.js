"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, Group, MeshStandardMaterial } from "three";
import { Box, Cylinder } from "@react-three/drei";

export default function LaptopModel() {
  const groupRef = useRef<Group>(null);
  const screenMeshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    // Gentle floating animation
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 1.5) * 0.05;
    }
    
    // Screen glow animation – safely check if material exists
    if (screenMeshRef.current) {
      const material = screenMeshRef.current.material as MeshStandardMaterial;
      if (material) {
        const intensity = 0.5 + Math.sin(clock.getElapsedTime() * 2) * 0.2;
        material.emissiveIntensity = intensity;
      }
    }
  });

  return (
    <group ref={groupRef} dispose={null}>
      {/* Base / keyboard part */}
      <Box args={[2.8, 0.15, 2]} position={[0, -0.2, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#1a1f2e" metalness={0.8} roughness={0.3} />
      </Box>

      {/* Trackpad */}
      <Box args={[0.8, 0.05, 1.1]} position={[0, -0.12, 0.5]} castShadow>
        <meshStandardMaterial color="#2a2f3e" metalness={0.4} roughness={0.5} />
      </Box>

      {/* Keyboard keys (simplified) */}
      {Array.from({ length: 50 }).map((_, i) => {
        const row = Math.floor(i / 10);
        const col = i % 10;
        return (
          <Box
            key={i}
            args={[0.14, 0.05, 0.14]}
            position={[-1.3 + col * 0.26, -0.1, 0.5 - row * 0.22]}
            castShadow
          >
            <meshStandardMaterial color="#3a3f4e" metalness={0.2} />
          </Box>
        );
      })}

      {/* Screen lid */}
      <group position={[0, 0.2, -0.9]} rotation={[0.6, 0, 0]}>
        {/* Lid back */}
        <Box args={[2.9, 0.08, 1.8]} position={[0, 0.95, 0]} castShadow receiveShadow>
          <meshStandardMaterial color="#11151f" metalness={0.9} roughness={0.2} />
        </Box>
        
        {/* Screen panel – attach ref to this mesh */}
        <Box
          ref={screenMeshRef}
          args={[2.6, 0.05, 1.5]}
          position={[0, 0.95, 0.05]}
          castShadow
        >
          <meshStandardMaterial
            color="#0a4d8c"
            emissive="#06b6d4"
            emissiveIntensity={0.6}
            metalness={0.9}
            roughness={0.1}
          />
        </Box>
        
        {/* Simple 3D text indicator on screen */}
        <group position={[0, 0.9, 0.12]}>
          <mesh>
            <boxGeometry args={[0.8, 0.05, 0.2]} />
            <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.3} />
          </mesh>
        </group>
      </group>

      {/* Hinge cylinders */}
      <Cylinder args={[0.08, 0.08, 2.8, 8]} position={[0, 0.12, -0.8]} rotation={[0, 0, 0]}>
        <meshStandardMaterial color="#2a2f3e" metalness={0.8} />
      </Cylinder>

      {/* Glowing logo on lid back */}
      <Box args={[0.5, 0.02, 0.5]} position={[0, 1.35, -0.45]} rotation={[0.6, 0, 0]}>
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.5} />
      </Box>
    </group>
  );
}