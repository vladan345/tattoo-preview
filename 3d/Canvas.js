"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

export default function MainCanvas() {
  return (
    <div className="w-[100vw] h-[100dvh] bg-dark-sky-blue fixed top-0 left-0">
      <Canvas>
        <Environment preset="sunset" />
        <OrbitControls makeDefault />
        <Scene />
      </Canvas>
    </div>
  );
}
