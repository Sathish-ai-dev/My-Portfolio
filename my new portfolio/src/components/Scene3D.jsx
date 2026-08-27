import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Float,
  Stars
} from '@react-three/drei'
import { EffectComposer, Bloom, DepthOfField, Vignette } from '@react-three/postprocessing'
import * as THREE from 'three'

function AnimatedSphere({ position, color, speed = 1 }) {
  const meshRef = useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.position.y = position[1] + Math.sin(time * speed) * 0.3
    meshRef.current.rotation.x = time * 0.2
    meshRef.current.rotation.z = time * 0.1
  })

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </Sphere>
    </Float>
  )
}

function ParticleField() {
  const particlesRef = useRef()
  const particleCount = 500

  const positions = new Float32Array(particleCount * 3)
  const colors = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 50
    positions[i * 3 + 1] = (Math.random() - 0.5) * 50
    positions[i * 3 + 2] = (Math.random() - 0.5) * 50

    // Color palette blues
    const colorChoice = Math.random()
    if (colorChoice < 0.33) {
      colors[i * 3] = 0.89 // #E3F2FD
      colors[i * 3 + 1] = 0.95
      colors[i * 3 + 2] = 0.99
    } else if (colorChoice < 0.66) {
      colors[i * 3] = 0.56 // #90CAF9
      colors[i * 3 + 1] = 0.79
      colors[i * 3 + 2] = 0.98
    } else {
      colors[i * 3] = 0.13 // #2196F3
      colors[i * 3 + 1] = 0.59
      colors[i * 3 + 2] = 0.95
    }
  }

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    particlesRef.current.rotation.y = time * 0.05
    particlesRef.current.rotation.x = time * 0.02
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default function Scene3D() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#2196F3" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#90CAF9" />
      <spotLight
        position={[0, 15, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        color="#E3F2FD"
      />

      {/* 3D Elements */}
      <AnimatedSphere position={[-3, 0, -5]} color="#2196F3" speed={0.5} />
      <AnimatedSphere position={[3, 0, -5]} color="#90CAF9" speed={0.8} />
      <AnimatedSphere position={[0, -2, -8]} color="#0D47A1" speed={1.2} />

      {/* Particle Field */}
      <ParticleField />

      {/* Stars */}
      <Stars
        radius={50}
        depth={50}
        count={1000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      {/* Post-processing Effects */}
      <EffectComposer disableNormalPass>
        <Bloom
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          height={300}
          opacity={1.5}
        />
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
          height={480}
        />
        <Vignette eskil={false} offset={0.1} darkness={0.5} />
      </EffectComposer>

      {/* Controls (disabled for fixed background) */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  )
}
