"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import type * as THREE from "three"
import { motion } from "framer-motion"

interface InteractiveParticlesProps {
  mousePosition: { x: number; y: number }
}

function InteractiveParticles({ mousePosition }: InteractiveParticlesProps) {
  const ref = useRef<THREE.Points>(null)

  const particles = useMemo(() => {
    const positions = new Float32Array(1000 * 3)
    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return positions
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05

      const targetX = (mousePosition.x / window.innerWidth - 0.5) * 2
      const targetY = -(mousePosition.y / window.innerHeight - 0.5) * 2

      // Smoothly move particles towards the mouse
      state.camera.position.x += (targetX - state.camera.position.x) * 0.05
      state.camera.position.y += (targetY - state.camera.position.y) * 0.05
      state.camera.lookAt(0, 0, 0)
    }
  })

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#3b82f6" size={0.025} sizeAttenuation={true} depthWrite={false} opacity={0.7} />
    </Points>
  )
}

interface HeroEffectsProps {
  mousePosition: { x: number; y: number }
}

export function HeroEffects({ mousePosition }: HeroEffectsProps) {
  return (
    <div className="absolute inset-0 -z-10">
      {/* 3D Interactive Particles */}
      <Canvas camera={{ position: [0, 0, 5] }}>
        <InteractiveParticles mousePosition={mousePosition} />
      </Canvas>
    </div>
  )
}
