"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleCloud() {
  const ref = useRef<THREE.Points>(null!);
  
  // Generate 3,000 points in a double-helix pattern
  const points = useMemo(() => {
    const p = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      // Create two main strands
      const t = (i / 3000) * Math.PI * 10; // 5 full rotations
      const strand = i % 2 === 0 ? 0 : Math.PI; // 180 degrees apart
      
      const r = 1.8 + Math.random() * 0.4;
      const x = Math.cos(t + strand) * r;
      const z = Math.sin(t + strand) * r;
      const y = (t / (Math.PI * 10)) * 10 - 5; // Spread on Y from -5 to 5
      
      // Add randomness/noise
      p[i * 3] = x + (Math.random() - 0.5) * 0.2;
      p[i * 3 + 1] = y + (Math.random() - 0.5) * 0.2;
      p[i * 3 + 2] = z + (Math.random() - 0.5) * 0.2;
    }
    return p;
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.15;
    ref.current.rotation.z += delta * 0.05;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#10b981"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.5} />
        <ParticleCloud />
      </Canvas>
      {/* Fade overlay for bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none" />
    </div>
  );
}
