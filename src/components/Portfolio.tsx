import PortfolioItem from "./PortfolioItem";
import ImageCollection from "./ImageCollection";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const highlightTechs = (text: string, techs: string[]) => {
  let result = text;

  techs.forEach((tech) => {
    result = result.replace(
      new RegExp(tech, "g"),
      `<span class="font-semibold">${tech}</span>`
    );
  });

  return <span dangerouslySetInnerHTML={{ __html: result }} />;
};

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <div
      id="portfolio"
      className="flex flex-col bg-white items-center px-4 sm:px-8 md:px-16 lg:px-[124px] py-10"
    >
      <h2 className="text-black mb-[54px] font-semibold text-2xl">
        {t("portfolio.title")}
      </h2>
      <div className="flex flex-col gap-[120px] mb-20">
        <PortfolioItem
          description={highlightTechs(t("portfolio.urw.description"), [
            "React Native",
            "Expo",
            "TypeScript",
            "React",
            "WebViews",
          ])}
          illustration={ImageCollection.URWIllustration}
          link="https://play.google.com/store/apps/details?id=com.westfield.one&pli=1"
          title="URW"
          phoneIllustration={true}
        />
        <PortfolioItem
          description={highlightTechs(t("portfolio.newrest.description"), [
            "React Native",
            "Expo",
            "Typescript",
            "Figma",
          ])}
          illustration={ImageCollection.newrestIllustration}
          link="https://www.figma.com/proto/kfDVZLwSmdcZPuvGqOfkcs/Barista-v2?node-id=155-2&starting-point-node-id=155%3A2"
          title="Newrest"
          reverse={true}
          mockup={true}
        />
        <PortfolioItem
          description={highlightTechs(t("portfolio.epitatou.description"), [
            "Flutter",
            "Figma",
            "OCR",
            "IA",
          ])}
          illustration={ImageCollection.epitatouIllustration}
          link="https://www.figma.com/proto/jAnzlEhx8hIknm0RuWpOww/Maquettes-mobile-EPITATOU?node-id=1-3&starting-point-node-id=1%3A3"
          title="Epitatou"
          mockup={true}
          phoneIllustration={true}
        />
        <PortfolioItem
          description={highlightTechs(t("portfolio.rakuten.description"), [
            "React",
            "NextJS",
            "Material-UI",
            "Figma",
          ])}
          illustration={ImageCollection.rakutenIllustration}
          link="https://www.figma.com/proto/LUDBl7UXVv1WU0Es6fldfK/Rakuten-Back-Office?node-id=53-535&starting-point-node-id=53%3A535"
          title="Back-Office Rakuten"
          reverse={true}
          mockup={true}
        />
      </div>
    </div>
  );
}
