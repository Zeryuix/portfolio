import Image from "next/image";
import ImageCollection from "./ImageCollection";
import { useLanguage } from "@/contexts/LanguageContext";
import React from "react";

export default function About() {
  const { t } = useLanguage();

  const formatText = (text: string, replacements: { [key: string]: string }) => {
    let formattedText = text;
    Object.entries(replacements).forEach(([key, value]) => {
      formattedText = formattedText.replace(key, value);
    });
    return <span dangerouslySetInnerHTML={{ __html: formattedText }} />;
  };

  return (
    <div id="profile" className="flex flex-col bg-white items-center py-10 px-36">
      <h2 className="text-black mb-[54px] font-semibold text-2xl">
        👋 {t("about.title")}
      </h2>
      <div className="flex flex-row justify-between gap-44 items-center">
        <Image
          src={ImageCollection.profilImage}
          alt={"Profil Image"}
          width={256}
          height={256}
          className="rounded-full"
        />
        <div className="text-black space-y-6 text-[20px]">
          <p>
            {formatText(t("about.paragraph1"), {
              "React": "<strong>React</strong>",
              "React Native": "<strong>React Native</strong>",
              "Flutter": "<strong>Flutter</strong>",
              "TypeScript": "<strong>TypeScript</strong>",
              "Rakuten et Thales": "<strong>Rakuten et Thales</strong>"
            })}
          </p>

          <p>
            {formatText(t("about.paragraph2"), {
              "qualité du code": "<strong>qualité du code</strong>",
              "l'accessibilité": "<strong>l'accessibilité</strong>",
              "expérience utilisateur": "<strong>expérience utilisateur</strong>"
            })}
          </p>

          <p>
            {formatText(t("about.paragraph3"), {
              "progresser techniquement et humainement": "<strong>progresser techniquement et humainement</strong>",
              "ambitieux et utiles": "<strong>ambitieux et utiles</strong>"
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
