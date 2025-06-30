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
            width={600}
            height={600}
            className="rounded-full"
          />
        </AnimatedElement>
        <div className="text-black space-y-6 text-[20px]">
          <AnimatedElement variant="slideLeft" delay={0.3}>
            <p>
              {formatText(t("about.paragraph1"), {
                React: "<strong>React</strong>",
                "React Native": "<strong>React Native</strong>",
                Flutter: "<strong>Flutter</strong>",
                TypeScript: "<strong>TypeScript</strong>",
                "Rakuten et Thales": "<strong>Rakuten et Thales</strong>",
              })}
            </p>
          </AnimatedElement>

          <AnimatedElement variant="slideLeft" delay={0.4}>
            <p>
              {formatText(t("about.paragraph2"), {
                "qualité du code": "<strong>qualité du code</strong>",
                "l'accessibilité": "<strong>l'accessibilité</strong>",
                "expérience utilisateur":
                  "<strong>expérience utilisateur</strong>",
              })}
            </p>
          </AnimatedElement>

          <AnimatedElement variant="slideLeft" delay={0.5}>
            <p>
              {formatText(t("about.paragraph3"), {
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
