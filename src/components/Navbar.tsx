"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ImageCollection from "./ImageCollection";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/50 backdrop-blur-sm" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <button 
            onClick={() => setLanguage("fr")} 
            className={`w-6 h-6 relative ${language === "fr" ? "opacity-100" : "opacity-50"} hover:opacity-100 transition-opacity`}
          >
            <Image src={ImageCollection.frFlag} alt="Français" fill className="object-contain" />
          </button>
          <button 
            onClick={() => setLanguage("en")} 
            className={`w-6 h-6 relative ${language === "en" ? "opacity-100" : "opacity-50"} hover:opacity-100 transition-opacity`}
          >
            <Image src={ImageCollection.enFlag} alt="English" fill className="object-contain" />
          </button>
        </div>
        <ul className="flex space-x-8 text-white">
          <li>
            <a
              href="#home"
              className="hover:text-primary transition-colors duration-300"
            >
              {t("nav.home")}
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-primary transition-colors duration-300"
            >
              {t("nav.profile")}
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-primary transition-colors duration-300"
            >
              {t("nav.skills")}
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="hover:text-primary transition-colors duration-300"
            >
              {t("nav.portfolio")}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-primary transition-colors duration-300"
            >
              {t("nav.contact")}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
