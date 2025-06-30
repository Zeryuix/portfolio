import Image, { StaticImageData } from "next/image";
import ImageCollection from "./ImageCollection";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedElement from "./AnimatedElement";
import { motion } from "framer-motion";

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
    <div className={`flex flex-col text-black ${reverse ? "items-end" : ""}`}>
      <AnimatedElement
        variant={reverse ? "slideLeft" : "slideRight"}
        delay={0.2}
      >
        <h2 className={`text-4xl font-semibold ${reverse ? "text-right" : ""}`}>
          {title}
        </h2>
      </AnimatedElement>

      <AnimatedElement
        variant={reverse ? "slideLeft" : "slideRight"}
        delay={0.3}
      >
        <p className={`text-xl my-7 ${reverse ? "text-right" : ""}`}>
          {description}
        </p>
      </AnimatedElement>

      <AnimatedElement
        variant={reverse ? "slideLeft" : "slideRight"}
        delay={0.4}
      >
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-secondary font-semibold text-xl`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-fit">
            <div className="flex flex-row items-center">
              <p>
                {!!mockup
                  ? `${t("portfolio.mockup.link")}`
                  : `${t("portfolio.link")}`}
              </p>
              <motion.div
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Image
                  src={ImageCollection.externalLinkIcon}
                  alt="external link icon"
                  height={24}
                  width={24}
                  className="ml-1"
                />
              </motion.div>
            </div>
            <hr className="border-[1.5px] border-secondary w-full" />
          </div>
        </motion.a>
      </AnimatedElement>
    </div>
  );

  const imageSection = (
    <AnimatedElement variant={reverse ? "slideRight" : "slideLeft"} delay={0.2}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        <Image
          src={illustration}
          alt={`${title} illustration`}
          className={`${reverse ? `${phoneIllustration ? "lg:ml-28" : ""}` : `${phoneIllustration ? "lg:mr-28" : ""}`} max-w-[300px] lg:max-w-none`}
        />
      </motion.div>
    </AnimatedElement>
  );

  return (
    <div
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} justify-between items-center w-full gap-8 md:gap-12`}
    >
      {contentSection}
      {imageSection}
    </div>
  );
}
