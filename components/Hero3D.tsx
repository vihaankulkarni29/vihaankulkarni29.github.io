"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleCloud() {
  const ref = useRef<THREE.Points>(null!);
  
  // Generate 8,000 points in a sprawling disk/galaxy pattern
  const points = useMemo(() => {
    const p = new Float32Array(8000 * 3);
    const colors = new Float32Array(8000 * 3);
    const colorZinc = new THREE.Color("#52525b");
    const colorEmerald = new THREE.Color("#047857");

    for (let i = 0; i < 8000; i++) {
      // Dispend in a large, thin disk
      const angle = Math.random() * Math.PI * 2;
      const radius = 2 + Math.random() * 15; // Sprawl from 2 to 15
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = (Math.random() - 0.5) * 1.5; // Thin vertical sprawl
      
      p[i * 3] = x;
      p[i * 3 + 1] = y;
      p[i * 3 + 2] = z;

      // Mix colors
      const mixedColor = Math.random() > 0.3 ? colorZinc : colorEmerald;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }
    return { positions: p, colors };
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.04; // Very slow rotation
    ref.current.rotation.x += delta * 0.01;
  });

  return (
    <Points ref={ref} positions={points.positions} colors={points.colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 5, 12], fov: 45 }}>
        <fog attach="fog" args={["#000000", 2, 18]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <ParticleCloud />
      </Canvas>
      {/* Bottom fade into section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950 pointer-events-none" />
    </div>
  );
}
