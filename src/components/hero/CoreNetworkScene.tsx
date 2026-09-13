"use client";

import { useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, Line, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { SYSTEM_NODES, fibonacciSphere } from "./nodeData";

const ACCENT = "#7a77ff";
const NODE_RADIUS = 1.65;

function Node({
  position,
  label,
  index,
}: {
  position: [number, number, number];
  label: string;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);
  const basePos = useMemo(() => new THREE.Vector3(...position), [position]);

  useFrame(({ clock }) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const t = clock.getElapsedTime();
    mesh.position.y = basePos.y + Math.sin(t * 0.6 + index * 1.4) * 0.06;
    const targetScale = hovered ? 1.6 : 1;
    mesh.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.15);
  });

  return (
    <group position={[basePos.x, basePos.y, basePos.z]}>
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false);
        }}
      >
        <octahedronGeometry args={[0.13, 0]} />
        <meshStandardMaterial
          color={hovered ? "#ffffff" : ACCENT}
          emissive={ACCENT}
          emissiveIntensity={hovered ? 1.6 : 0.65}
          roughness={0.35}
          metalness={0.3}
        />
      </mesh>

      <Html center distanceFactor={7} style={{ pointerEvents: "none" }}>
        <span
          style={{
            fontFamily: "var(--font-mono-jetbrains), ui-monospace, monospace",
            fontSize: 9.5,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: hovered ? "#ffffff" : "rgba(237,237,240,0.58)",
            whiteSpace: "nowrap",
            transform: "translateY(20px)",
            display: "block",
            transition: "color 0.2s ease, opacity 0.2s ease",
            opacity: hovered ? 1 : 0.8,
            textShadow: hovered ? "0 0 12px rgba(122,119,255,0.8)" : "none",
          }}
        >
          {label}
        </span>
      </Html>
    </group>
  );
}

function Core() {
  const shellRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (shellRef.current) shellRef.current.rotation.y += delta * 0.18;
    if (shellRef.current) shellRef.current.rotation.x += delta * 0.06;
    if (coreRef.current) {
      const t = coreRef.current.rotation.z + delta * 0.4;
      coreRef.current.rotation.z = t;
      const s = 1 + Math.sin(t * 1.3) * 0.04;
      coreRef.current.scale.setScalar(s);
    }
  });

  return (
    <group>
      <mesh ref={shellRef}>
        <icosahedronGeometry args={[0.58, 1]} />
        <meshStandardMaterial
          color={ACCENT}
          emissive={ACCENT}
          emissiveIntensity={0.4}
          wireframe
          transparent
          opacity={0.45}
        />
      </mesh>
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color="#0d0d14"
          emissive={ACCENT}
          emissiveIntensity={1.1}
          roughness={0.25}
          metalness={0.55}
        />
      </mesh>
      <pointLight color={ACCENT} intensity={6} distance={4.5} decay={2} />
    </group>
  );
}

function Edges({ nodePositions }: { nodePositions: [number, number, number][] }) {
  return (
    <>
      {nodePositions.map((pos, i) => (
        <Line
          key={i}
          points={[[0, 0, 0], pos]}
          color={ACCENT}
          transparent
          opacity={0.18}
          lineWidth={1}
        />
      ))}
    </>
  );
}

type CoreNetworkSceneProps = {
  quality: "high" | "low";
  reduceMotion: boolean;
  scrollRef: React.MutableRefObject<number>;
};

export default function CoreNetworkScene({
  quality,
  reduceMotion,
  scrollRef,
}: CoreNetworkSceneProps) {
  const rootRef = useRef<THREE.Group>(null);
  const autoY = useRef(0);
  const smooth = useRef({ x: 0, y: 0 });

  const nodePositions = useMemo(
    () => fibonacciSphere(SYSTEM_NODES.length, NODE_RADIUS, 0.62),
    [],
  );

  useFrame((state, delta) => {
    const root = rootRef.current;
    if (!root) return;

    if (reduceMotion) return;

    const scrollT = scrollRef.current;
    smooth.current.x = THREE.MathUtils.damp(smooth.current.x, state.pointer.x, 4, delta);
    smooth.current.y = THREE.MathUtils.damp(smooth.current.y, state.pointer.y, 4, delta);

    autoY.current += delta * (0.055 + scrollT * 0.09);
    root.rotation.y = autoY.current + smooth.current.x * 0.25;
    root.rotation.x = smooth.current.y * 0.15;

    const scale = 1 - scrollT * 0.12;
    root.scale.setScalar(scale);
    root.position.y = scrollT * -0.4;
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 4, 5]} intensity={0.6} color="#e8e8ff" />
      <directionalLight position={[-4, -2, -3]} intensity={0.25} color={ACCENT} />

      <group ref={rootRef}>
        <Core />
        <Edges nodePositions={nodePositions} />
        {SYSTEM_NODES.map((label, i) => (
          <Node key={label} label={label} position={nodePositions[i]} index={i} />
        ))}
      </group>

      {quality === "high" && (
        <Sparkles
          count={140}
          scale={7}
          size={1.4}
          speed={0.25}
          opacity={0.35}
          color={ACCENT}
          noise={1}
        />
      )}
      {quality === "low" && (
        <Sparkles
          count={40}
          scale={6}
          size={1.2}
          speed={0.15}
          opacity={0.25}
          color={ACCENT}
        />
      )}
    </>
  );
}
