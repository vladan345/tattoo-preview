"use client";
import { useState } from "react";
import ImageUpload from "@/components/ImageUpload";
import MainCanvas from "../3d/Canvas";

export default function Home() {
  const [image, setImage] = useState(null);
  return (
    <main className="flex items-stretch h-screen">
      <MainCanvas image={image} />
      <ImageUpload onImageUpload={setImage} />
    </main>
  );
}
