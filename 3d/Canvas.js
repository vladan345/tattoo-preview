"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

export default function MainCanvas({ image }) {
  return (
    <div className="w-3/4 h-full bg-dark-sky-blue border-r border-red-900">
      <Canvas>
        <Environment preset="sunset" />
        <OrbitControls makeDefault />
        <Scene image={image} />
      </Canvas>
    </div>
  );
}
