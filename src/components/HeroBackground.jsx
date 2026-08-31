import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

// Blob mesh that morphs subtly
function Blob({ position, color, speed = 0.5, scale = 1 }) {
  const meshRef = useRef()
  const matRef = useRef()

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime()
    meshRef.current.rotation.x = Math.sin(t * speed * 0.4) * 0.15
    meshRef.current.rotation.y = Math.cos(t * speed * 0.35) * 0.15
    const s = 1 + Math.sin(t * speed) * 0.06
    meshRef.current.scale.set(s * scale, s * scale, s * scale)

    if (matRef.current) {
      matRef.current.emissiveIntensity =
        0.35 + Math.sin(t * speed * 0.8) * 0.15
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[1, 48, 48]} />
        <meshStandardMaterial
          ref={matRef}
          color={color}
          roughness={0.2}
          metalness={0.3}
          emissive={color}
          emissiveIntensity={0.4}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  )
}

// Network of drifting particles
function Particles({ count = 300 }) {
  const pointsRef = useRef()
  const positions = useRef(
    Array.from({ length: count * 3 }, () => (Math.random() - 0.5) * 22),
  ).current

  const colors = useRef(
    Array.from({ length: count * 3 }, () => {
      const c = new THREE.Color(0x5fd4f0)
      return c.r * 0.6 + Math.random() * 0.4
    }),
  ).current

  const velocities = useRef(
    Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 0.004,
      y: (Math.random() - 0.5) * 0.004,
      z: (Math.random() - 0.5) * 0.004,
    })),
  ).current

  useFrame(() => {
    if (!pointsRef.current) return
    const pos = pointsRef.current.geometry.attributes.position.array
    for (let i = 0; i < count; i++) {
      pos[i * 3] += velocities[i].x
      pos[i * 3 + 1] += velocities[i].y
      pos[i * 3 + 2] += velocities[i].z

      if (Math.abs(pos[i * 3]) > 11) velocities[i].x *= -1
      if (Math.abs(pos[i * 3 + 1]) > 11) velocities[i].y *= -1
      if (Math.abs(pos[i * 3 + 2]) > 11) velocities[i].z *= -1
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

// Scene rendered inside the Canvas (can safely use R3F hooks like useFrame)
function Scene({ active }) {
  const groupRef = useRef()

  useFrame(({ pointer, camera }) => {
    if (groupRef.current && active) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.08,
        0.04,
      )
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        pointer.y * 0.08,
        0.04,
      )
    }
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 7, 0.01)
  })

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} />
      <pointLight position={[-5, -4, 2]} intensity={1} color="#1E6FEB" />
      <group ref={groupRef}>
        <Blob
          position={[-4, 0.5, -2]}
          color="#1E6FEB"
          speed={0.6}
          scale={1.6}
        />
        <Blob
          position={[4.2, -1.2, -3]}
          color="#5FD4F0"
          speed={0.5}
          scale={1.1}
        />
        <Blob
          position={[2, 2.6, -5]}
          color="#0A1F44"
          speed={0.4}
          scale={2.2}
        />
        <Particles count={350} />
      </group>
    </>
  )
}

export default function HeroBackground({ active }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 300)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ${
        ready ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 7], fov: 55 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Scene active={active} />
      </Canvas>

      {/* Gradient overlays to blend 3D with page background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-graphite/90" />
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(ellipse_at_center,rgba(10,31,68,0.2),rgba(18,20,28,0.6))]" />
    </div>
  )
}
