"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import type * as THREE from "three"
import { useMemo, useRef } from "react"

function Starfield() {
  const ref = useRef<THREE.Points>(null)

  const particles = useMemo(() => {
    const positions = new Float32Array(5000 * 3)
    for (let i = 0; i < 5000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100
    }
    return positions
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15
      ref.current.rotation.y -= delta / 20
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
          <PointMaterial
            transparent
            color="#FFD600"
            size={0.02}
            sizeAttenuation={true}
            depthWrite={false}
            opacity={0.15}
          />
        </Points>
    </group>
  )
}

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-20">
      {/* 3D Starfield */}
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Starfield />
      </Canvas>

      {/* Vertical Lines */}
      <div className="absolute inset-0 flex justify-between pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"
            style={{ animation: `fade 5s infinite alternate ${i * 0.3}s` }}
          />
        ))}
      </div>

      {/* Static Gradient & Noise */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a1a] to-black" />
      <style jsx global>{`
        @keyframes fade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
