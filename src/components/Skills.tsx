import SkillItem from "./SkillItem";
import Image from "next/image";
import ImageCollection from "./ImageCollection";
import ExperienceItem from "./ExperienceItem";
import { useLanguage } from "@/contexts/LanguageContext";
import React from "react";
import AnimatedElement from "./AnimatedElement";

export default function Skills() {
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
    <div
      id="skills"
      className="flex flex-col bg-black items-center py-10 px-4 sm:px-8 md:px-16 lg:px-36"
    >
      <AnimatedElement variant="fadeIn">
        <h2 className="mb-5 font-semibold text-2xl text-white">
          {t("skills.title")}
        </h2>
      </AnimatedElement>

      <AnimatedElement variant="fadeIn" delay={0.2}>
        <p className="font-semibold text-xl mb-3 text-center text-white">
          {t("skills.subtitle")}
        </p>
      </AnimatedElement>

      <AnimatedElement variant="fadeIn" delay={0.3}>
        <p className="text-[16px] max-w-[520px] text-center mx-auto mb-[60px] text-white">
          {formatText(t("skills.description"), {
            Angular: "<strong>Angular</strong>",
            NextJs: "<strong>NextJs</strong>",
          })}
        </p>
      </AnimatedElement>
      <AnimatedElement variant="fadeIn" delay={0.4}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
          <div className="flex flex-col gap-8 mt-16">
            <AnimatedElement variant="scale" delay={0.5}>
              <SkillItem skill="React" skillImage={ImageCollection.reactLogo} />
            </AnimatedElement>
            <AnimatedElement variant="scale" delay={0.6}>
              <SkillItem
                skill="Flutter"
                skillImage={ImageCollection.flutterLogo}
              />
            </AnimatedElement>
            <AnimatedElement variant="scale" delay={0.7}>
              <SkillItem skill="Git" skillImage={ImageCollection.gitLogo} />
            </AnimatedElement>
          </div>

          <div className="flex flex-col gap-8">
            <AnimatedElement variant="scale" delay={0.5}>
              <SkillItem
                skill="TypeScript"
                skillImage={ImageCollection.typescriptLogo}
              />
            </AnimatedElement>
            <AnimatedElement variant="scale" delay={0.6}>
              <SkillItem skill="Expo" skillImage={ImageCollection.expoLogo} />
            </AnimatedElement>
            <AnimatedElement variant="scale" delay={0.7}>
              <SkillItem skill="Jest" skillImage={ImageCollection.jestLogo} />
            </AnimatedElement>
            <AnimatedElement variant="scale" delay={0.8}>
              <SkillItem skill="Figma" skillImage={ImageCollection.figmaLogo} />
            </AnimatedElement>
          </div>

          <div className="flex flex-col gap-8 mt-16">
            <AnimatedElement variant="scale" delay={0.5}>
              <SkillItem
                skill="JavaScript"
                skillImage={ImageCollection.javascriptLogo}
              />
            </AnimatedElement>
            <AnimatedElement variant="scale" delay={0.6}>
              <SkillItem skill="HTML" skillImage={ImageCollection.htmlLogo} />
            </AnimatedElement>
            <AnimatedElement variant="scale" delay={0.7}>
              <SkillItem skill="CSS" skillImage={ImageCollection.cssLogo} />
            </AnimatedElement>
          </div>
        </div>
      </AnimatedElement>
      <hr className="w-2/3 mt-[60px] mb-[54px] border-[1px] border-grey/25" />
      <div className="flex flex-col lg:flex-row justify-between w-full gap-8 lg:gap-16 xl:gap-[478px]">
        <div className="w-full lg:w-1/3">
          <ExperienceItem
            description={t("experience.noesio")}
            isSchool={false}
            name="NOESIO"
            techs={["React Native", "Expo", "TypeScript", "React"]}
            year="2024"
          />
          <ExperienceItem
            description={t("experience.thales")}
            isSchool={false}
            name="THALES LAS FRANCE"
            techs={["Python", "C++"]}
            year="2023 - 2024"
          />
          <ExperienceItem
            description={t("experience.epita")}
            isSchool={true}
            name="EPITA"
            year="2019 - 2024"
          />
          <ExperienceItem
            description={t("experience.dorset")}
            isSchool={true}
            name="DORSET COLLEGE DUBLIN"
            year="2021"
          />
        </div>
        <div className="flex flex-col items-center w-full lg:w-2/5 mt-4">
          <div className="mb-6 flex justify-center">
            <Image
              src={ImageCollection.CVImage}
              alt="CV preview"
              width={434}
              className="max-w-[300px] lg:max-w-none"
            />
          </div>
          <a
            href="/CV_Leo_MERMET_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 lg:px-6 py-2 lg:py-3 bg-primary backdrop-blur-sm border rounded-lg hover:bg-primary/50 transition-all duration-300 text-black font-medium inline-block cursor-pointer mx-auto lg:mx-0"
          >
            <div className="flex flex-row items-center">
              <p className="font-semibold text-[20px]">{t("experience.cv")}</p>
              <Image
                src={ImageCollection.eyeIcon}
                alt="visualize icon"
                className="ml-2"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
