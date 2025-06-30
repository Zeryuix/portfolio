"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ImageCollection from "./ImageCollection";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

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
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white">
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
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm">
          <ul className="flex flex-col items-center py-4 space-y-4 text-white">
            <li>
              <a
                href="#home"
                className="hover:text-primary transition-colors duration-300"
                onClick={closeMenu}
              >
                {t("nav.home")}
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-primary transition-colors duration-300"
                onClick={closeMenu}
              >
                {t("nav.profile")}
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-primary transition-colors duration-300"
                onClick={closeMenu}
              >
                {t("nav.skills")}
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="hover:text-primary transition-colors duration-300"
                onClick={closeMenu}
              >
                {t("nav.portfolio")}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-primary transition-colors duration-300"
                onClick={closeMenu}
              >
                {t("nav.contact")}
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
