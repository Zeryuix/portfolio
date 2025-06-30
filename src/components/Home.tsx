import Image from "next/image";
import ImageCollection from "./ImageCollection";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedElement from "./AnimatedElement";
import { motion } from "framer-motion";

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
        <AnimatedElement variant="slideUp" delay={0.2}>
          <p className="text-[32px] md:text-[40px] font-bold mb-3 md:mb-5 text-center">Léo Mermet</p>
        </AnimatedElement>
        
        <AnimatedElement variant="slideUp" delay={0.4}>
          <p className="text-xl md:text-2xl mb-[40px] md:mb-[74px] text-center px-4">{t("home.title")}</p>
        </AnimatedElement>
        
        <AnimatedElement variant="scale" delay={0.6}>
          <motion.a
            href="#about"
            className="px-5 md:px-6 py-2 md:py-3 bg-primary backdrop-blur-sm border rounded-lg hover:bg-primary/50 transition-all duration-300 text-black text-lg md:text-xl inline-block cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("home.button")}
          </motion.a>
        </AnimatedElement>
      </div>
    </div>
  );
}
