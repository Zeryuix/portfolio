"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "fr" | "en";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

type Translations = {
  [key: string]: {
    fr: string;
    en: string;
  };
};

const translations: Translations = {
  // Navigation
  "nav.home": {
    fr: "Accueil",
    en: "Home",
  },
  "nav.profile": {
    fr: "Profil",
    en: "Profile",
  },
  "nav.skills": {
    fr: "Compétences",
    en: "Skills",
  },
  "nav.portfolio": {
    fr: "Portfolio",
    en: "Portfolio",
  },
  "nav.contact": {
    fr: "Contact",
    en: "Contact",
  },
  // Home
  "home.title": {
    fr: "Ingénieur développeur front-end",
    en: "Front-end Developer Engineer",
  },
  "home.button": {
    fr: "Qui suis-je ?",
    en: "Who am I?",
  },
  // About
  "about.title": {
    fr: "À propos de moi",
    en: "About me",
  },
  "about.paragraph1": {
    fr: "Je m'appelle Léo Mermet, développeur front-end web & mobile récemment diplômé de l'EPITA, passionné par la création d'interfaces intuitives, performantes et bien pensées. J'ai une appétence pour le design et un œil critique sur l'UX/UI de mes applications. J'apprécie concevoir moi-même les maquettes de mes projets sur Figma.",
    en: "My name is Léo Mermet, a web & mobile front-end developer recently graduated from EPITA, passionate about creating intuitive, performant, and well-designed interfaces. I have an appetite for design and a critical eye on the UX/UI of my applications. I enjoy designing my project mockups myself using Figma.",
  },
  "about.paragraph2": {
    fr: "Durant mes études, j'ai eu l'opportunité de travailler sur des projets concrets pour des entreprises comme Rakuten et Thales, puis de rejoindre Noesio, une ESN où j'étais le développeur front d'une équipe agile. J'y ai contribué à des applications mobiles à grande échelle avec Expo et React Native, en appliquant des bonnes pratiques  : tests, CI/CD, code review, intégration de tracking, et respect des bonnes pratiques UX.",
    en: "During my studies, I had the opportunity to work on concrete projects for companies like Rakuten and Thales, then joined Noesio, an ESN where I was the front-end developer in an agile team. I contributed to large-scale mobile applications with Expo and React Native, applying best practices: testing, CI/CD, code review, tracking integration, and adherence to UX best practices.",
  },
  "about.paragraph3": {
    fr: "Je suis à l'aise sur des stacks modernes : React, React Native, Typescript, Flutter, avec une attention particulière à la lisibilité du code, à la collaboration avec les équipes produit et design, et à la qualité de l'expérience utilisateur. Autonome, curieux et rigoureux, j'aime apprendre en continu et travailler en équipe.",
    en: "I am comfortable with modern stacks: React, React Native, Typescript, Flutter, with particular attention to code readability, collaboration with product and design teams, and the quality of the user experience. Autonomous, curious, and rigorous, I enjoy continuous learning and teamwork.",
  },
  "about.paragraph4": {
    fr: "Aujourd'hui, je suis à l'écoute d'opportunités où je pourrai continuer à progresser techniquement et humainement, au sein de projets ambitieux et utiles.",
    en: "Today, I am open to opportunities where I can continue to grow technically and personally, within ambitious and meaningful projects.",
  },
  // Skills
  "skills.title": {
    fr: "👨‍💻 Compétences",
    en: "👨‍💻 Skills",
  },
  "skills.subtitle": {
    fr: "Mes compétences évoluent en permanence.",
    en: "My skills are constantly evolving.",
  },
  "skills.description": {
    fr: "Je continue d'apprendre chaque jour grâce à une veille régulière, aussi bien technique que design. J'ai récemment commencé à me former sur Angular, et ce site est réalisé avec NextJs !",
    en: "I continue to learn every day through regular technical and design monitoring. I recently started learning Angular, and this site is built with NextJs!",
  },
  // Experience
  "experience.noesio": {
    fr: "Chez Noesio, j'ai intégré une équipe agile en tant qu'unique développeur front-end sur un projet mobile d'envergure pour les centres commerciaux Westfield (URW), utilisés par plus d'un million de clients. Mon rôle consistait à concevoir, développer et maintenir l'application mobile en React Native, tout en respectant les bonnes pratiques de qualité logicielle.",
    en: "At Noesio, I joined an agile team as the sole front-end developer on a major mobile project for Westfield shopping centers (URW), used by more than a million customers. My role was to design, develop, and maintain the mobile application in React Native, while adhering to software quality best practices.",
  },
  "experience.thales": {
    fr: "Chez Thales, j'ai intégré une équipe R&D travaillant sur un système de fusion multi-capteurs. Ma mission principale consistait à travailler sur le module d'évaluation des performances des radars de surveillance.",
    en: "At Thales, I joined an R&D team working on a multi-sensor fusion system. My main mission was to work on the performance evaluation module for surveillance radars.",
  },
  "experience.epita": {
    fr: "École d'ingénieur en informatique",
    en: "Computer Science Engineering School",
  },
  "experience.dorset": {
    fr: "Semestre en Irlande",
    en: "Semester in Ireland",
  },
  "experience.cv": {
    fr: "Visualiser CV",
    en: "View Resume",
  },
  // Portfolio
  "portfolio.title": {
    fr: "📁 Portfolio",
    en: "📁 Portfolio",
  },
  "portfolio.urw.description": {
    fr: "Application mobile grand public pour les centres commerciaux Westfield, permettant aux utilisateurs de consulter les actualités, événements, offres et services de plus de 60 centres à travers le monde. Développée avec React Native, Expo et TypeScript, l'application intègre également des contenus web construits en React via des WebViews, et est utilisée par plus d'un million d'utilisateurs à l'international.",
    en: "Public mobile application for Westfield shopping centers, allowing users to view news, events, offers, and services from more than 60 centers worldwide. Developed with React Native, Expo, and TypeScript, the application also integrates web content built in React via WebViews, and is used by more than a million users internationally.",
  },
  "portfolio.newrest.description": {
    fr: "Application destinée aux baristas à bord des trains afin de calculer leurs bonus de rémunération en fonction de leurs ventes et de leurs objectifs de ventes. Développée avec React Native, Expo et Typescript et maquettes réalisées sur Figma.",
    en: "Application for baristas on trains to calculate their remuneration bonuses based on their sales and sales targets. Developed with React Native, Expo, and TypeScript, with mockups created in Figma.",
  },
  "portfolio.epitatou.description": {
    fr: "Application mobile conçue pour accompagner les étudiants de première année à l'EPITA dans leur apprentissage. Elle permet de consulter des cours, de s'entraîner avec des exercices, de collaborer en groupe via des \"rooms\", et d'ajouter du contenu via OCR et résumés générés par IA. Développée avec Flutter, avec des maquettes réalisées sur Figma, l'app propose une expérience simple et mobile-first pensée pour le quotidien étudiant.",
    en: 'Mobile application designed to support first-year EPITA students in their learning. It allows them to consult courses, practice with exercises, collaborate in groups via "rooms", and add content via OCR and AI-generated summaries. Developed with Flutter, with mockups created in Figma, the app offers a simple, mobile-first experience designed for student daily life.',
  },
  "portfolio.rakuten.description": {
    fr: "Développement d'un back-office web interne pour la visualisation et l'analyse des messages échangés entre utilisateurs sur la plateforme Rakuten C2C. L'interface permet d'explorer les conversations via tableaux et graphiques dynamiques. Projet réalisé en collaboration avec la cheffe d'équipe C2C de Rakuten France, réalisée en React, NextJS et Material-UI avec maquettes réalisées sur Figma.",
    en: "Development of an internal web back-office for visualizing and analyzing messages exchanged between users on the Rakuten C2C platform. The interface allows exploring conversations via dynamic tables and charts. Project carried out in collaboration with the C2C team leader of Rakuten France, developed in React, NextJS, and Material-UI with mockups created in Figma.",
  },
  "portfolio.link": {
    fr: "Lien",
    en: "Link",
  },
  "portfolio.mockup.link": {
    fr: "Lien maquettes",
    en: "Mockup link",
  },
  // Contact
  "contact.title": {
    fr: "📩 Contact",
    en: "📩 Contact",
  },
  "contact.description": {
    fr: "Une opportunité, une question ou simplement envie d'échanger ? N'hésitez pas à me laisser un message, je vous répondrai rapidement.",
    en: "An opportunity, a question, or simply want to chat? Feel free to leave me a message, I will respond quickly.",
  },
  "contact.success": {
    fr: "Votre message a bien été envoyé ! Je vous répondrai dans les plus brefs délais.",
    en: "Your message has been sent! I will respond as soon as possible.",
  },
  "contact.error": {
    fr: "Une erreur est survenue lors de l'envoi du message",
    en: "An error occurred while sending the message",
  },
  "contact.send": {
    fr: "Envoyer",
    en: "Send",
  },
  "contact.sending": {
    fr: "Envoi en cours...",
    en: "Sending...",
  },
  // Input
  "input.name": {
    fr: "Nom",
    en: "Name",
  },
  "input.email": {
    fr: "Email",
    en: "Email",
  },
  "input.message": {
    fr: "Message",
    en: "Message",
  },
  "input.required": {
    fr: "Ce champ est requis",
    en: "This field is required",
  },
  "input.name.error": {
    fr: "Le nom doit contenir au moins 2 caractères",
    en: "The name must contain at least 2 characters",
  },
  "input.email.error": {
    fr: "Veuillez entrer une adresse email valide",
    en: "Please enter a valid email address",
  },
  "input.message.error": {
    fr: "Le message doit contenir au moins 10 caractères",
    en: "The message must contain at least 10 characters",
  },
  // Footer
  "footer.copyright": {
    fr: "LÉO MERMET ©2025",
    en: "LÉO MERMET ©2025",
  },
  // Language
  "language": {
    fr: "fr",
    en: "en",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
