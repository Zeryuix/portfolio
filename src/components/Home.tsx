import Image from "next/image";
import backgroundImage from "../assets/accueil-background.svg";
import { useState } from "react";

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      id="home"
      className="flex flex-col w-full h-screen items-center justify-center relative bg-gray-900"
    >
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover z-0"
          priority
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div className="z-10 flex flex-col items-center justify-center text-white">
        <p className="text-[40px] font-bold mb-5">Léo Mermet</p>
        <p className="text-2xl mb-[74px]">Ingénieur développeur front-end</p>
        <a
          href="#about"
          className="px-6 py-3 bg-primary backdrop-blur-sm border rounded-lg hover:bg-primary/50 transition-all duration-300 text-black text-xl inline-block cursor-pointer"
        >
          Qui suis-je ?
        </a>
      </div>
    </div>
  );
}
