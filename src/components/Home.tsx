import Image from "next/image";
import ImageCollection from "./ImageCollection";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { t } = useLanguage();

  return (
    <div
      id="home"
      className="flex flex-col w-full h-screen items-center justify-center relative bg-gray-900"
    >
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <Image
          src={ImageCollection.backgroundImage}
          alt="Background"
          fill
          className="object-cover z-0"
          priority
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div className="z-10 flex flex-col items-center justify-center text-white">
        <p className="text-[40px] font-bold mb-5">Léo Mermet</p>
        <p className="text-2xl mb-[74px]">{t("home.title")}</p>
        <a
          href="#about"
          className="px-6 py-3 bg-primary backdrop-blur-sm border rounded-lg hover:bg-primary/50 transition-all duration-300 text-black text-xl inline-block cursor-pointer"
        >
          {t("home.button")}
        </a>
      </div>
    </div>
  );
}
