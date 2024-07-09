"use client";
import { useState } from "react";

export default function ImageUpload({ onImageUpload }) {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      onImageUpload(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="bg-blue-200 h-full w-1/4">
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && <img src={image} alt="Uploaded" width="200" />}
    </div>
  );
}
