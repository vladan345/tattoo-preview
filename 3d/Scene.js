"use client";
import { useTexture } from "@react-three/drei";

export default function Scene({ image }) {
  const texture = useTexture(image ?? "/placeholder.jpg");

  return (
    <>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </>
  );
}
