import Image from "next/image";
import ImageCollection from "./ImageCollection";
import { useLanguage } from "@/contexts/LanguageContext";
import React from "react";
import AnimatedElement from "./AnimatedElement";

export default function About() {
  const { t } = useLanguage();

  const formatText = (
    text: string,
    replacements: { [key: string]: string }
  ) => {
    let formattedText = text;
    Object.entries(replacements).forEach(([key, value]) => {
      formattedText = formattedText.replace(key, value);
    });
    return <span dangerouslySetInnerHTML={{ __html: formattedText }} />;
  };

  return (
    <div id="about" className="flex flex-col bg-white items-center py-10 px-36">
      <AnimatedElement variant="fadeIn">
        <h2 className="text-black mb-[54px] font-semibold text-2xl">
          👋 {t("about.title")}
        </h2>
      </AnimatedElement>
      <div className="flex flex-row justify-between gap-44 items-center">
        <AnimatedElement variant="slideRight" delay={0.2}>
          <Image
            src={ImageCollection.profilImage}
            alt={"Profil Image"}
            width={1000}
            height={1000}
            className="rounded-full shadow-[4px_4px_8px_0_rgba(13,39,80,0.25)_,_-12px_-12px_38px_0_rgba(255,255,255,1)]"
          />
        </AnimatedElement>
        <div className="text-black space-y-6 text-[20px]">
          <AnimatedElement variant="slideLeft" delay={0.3}>
            <p>
              {formatText(t("about.paragraph1"), {
                "Léo Mermet": "<strong>Léo Mermet</strong>",
                EPITA: "<strong>EPITA</strong>",
                "intuitives, performantes et bien pensées":
                  "<strong>intuitives, performantes et bien pensées</strong>",
                Figma: "<strong>Figma</strong>",
              })}
            </p>
          </AnimatedElement>

          <AnimatedElement variant="slideLeft" delay={0.4}>
            <p>
              {formatText(t("about.paragraph2"), {
                Rakuten: "<strong>Rakuten</strong>",
                Thales: "<strong>Thales</strong>",
                Noesio: "<strong>Noesio</strong>",
                Expo: "<strong>Expo</strong>",
                "React Native": "<strong>React Native</strong>",
                "tests, CI/CD, code review, intégration de tracking":
                  "<strong>tests, CI/CD, code review, intégration de tracking</strong>",
              })}
            </p>
          </AnimatedElement>

          <AnimatedElement variant="slideLeft" delay={0.5}>
            <p>
              {formatText(t("about.paragraph3"), {
                React: "<strong>React</strong>",
                "React Native": "<strong>React Native</strong>",
                Typescript: "<strong>Typescript</strong>",
                Flutter: "<strong>Flutter</strong>",
                "lisibilité du code": "<strong>lisibilité du code</strong>",
                "collaboration avec les équipes produit et design":
                  "<strong>collaboration avec les équipes produit et design</strong>",
                "qualité de l'expérience utilisateur":
                  "<strong>qualité de l'expérience utilisateur</strong>",
              })}
            </p>
          </AnimatedElement>

          <AnimatedElement variant="slideLeft" delay={0.6}>
            <p>
              {formatText(t("about.paragraph4"), {
                "progresser techniquement et humainement":
                  "<strong>progresser techniquement et humainement</strong>",
                "ambitieux et utiles": "<strong>ambitieux et utiles</strong>",
              })}
            </p>
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
}
