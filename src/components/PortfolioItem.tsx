import Image, { StaticImageData } from "next/image";
import ImageCollection from "./ImageCollection";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PortfolioItem({
  title,
  description,
  link,
  illustration,
  reverse = false,
  mockup = false,
  phoneIllustration = false,
}: {
  title: string;
  description: string | React.ReactNode;
  link: string;
  illustration: StaticImageData;
  reverse?: boolean;
  mockup?: boolean;
  phoneIllustration?: boolean;
}) {
  const { t } = useLanguage();
  const contentSection = (
    <div className="flex flex-col text-black">
      <h2 className={`text-4xl font-semibold ${reverse ? "self-end" : ""}`}>
        {title}
      </h2>
      <p className={`text-xl my-7 ${reverse ? "text-right" : ""}`}>
        {description}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-secondary font-semibold text-xl ${
          reverse ? "self-end" : ""
        }`}
      >
        <div className="w-fit">
          <div className="flex flex-row items-center">
            <p>
              {!!mockup
                ? `${t("portfolio.mockup.link")}`
                : `${t("portfolio.link")}`}
            </p>
            <Image
              src={ImageCollection.externalLinkIcon}
              alt="external link icon"
              height={24}
              width={24}
              className="ml-1"
            />
          </div>
          <hr className="border-[1.5px] border-secondary w-full" />
        </div>
      </a>
    </div>
  );

  const imageSection = (
    <Image
      src={illustration}
      alt={`${title} illustration`}
      className={`${reverse ? `${phoneIllustration ? "ml-28" : ""}` : `${phoneIllustration ? "mr-28" : ""}`}`}
    />
  );

  return (
    <div className="flex flex-row gap-80 items-center">
      {reverse ? imageSection : contentSection}
      {reverse ? contentSection : imageSection}
    </div>
  );
}
