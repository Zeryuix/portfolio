import SkillItem from "./SkillItem";
import Image from "next/image";
import ImageCollection from "./ImageCollection";
import ExperienceItem from "./ExperienceItem";
import { useLanguage } from "@/contexts/LanguageContext";
import React from "react";

export default function Skills() {
  const { t } = useLanguage();

  const formatText = (text: string, replacements: { [key: string]: string }) => {
    let formattedText = text;
    Object.entries(replacements).forEach(([key, value]) => {
      formattedText = formattedText.replace(key, value);
    });
    return <span dangerouslySetInnerHTML={{ __html: formattedText }} />;
  };

  return (
    <div id="skills" className="flex flex-col bg-black items-center py-10 px-36">
      <h2 className="mb-5 font-semibold text-2xl">{t("skills.title")}</h2>
      <p className="font-semibold text-xl mb-3 text-center">
        {t("skills.subtitle")}
      </p>
      <p className="text-[16px] max-w-[520px] text-center mx-auto mb-[60px]">
        {formatText(t("skills.description"), {
          "Angular": "<strong>Angular</strong>",
          "NextJs": "<strong>NextJs</strong>"
        })}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
        <div className="flex flex-col gap-8 mt-16">
          <SkillItem skill="React" skillImage={ImageCollection.reactLogo} />
          <SkillItem skill="Flutter" skillImage={ImageCollection.flutterLogo} />
          <SkillItem skill="Git" skillImage={ImageCollection.gitLogo} />
        </div>

        <div className="flex flex-col gap-8">
          <SkillItem
            skill="TypeScript"
            skillImage={ImageCollection.typescriptLogo}
          />
          <SkillItem skill="Expo" skillImage={ImageCollection.expoLogo} />
          <SkillItem skill="Jest" skillImage={ImageCollection.jestLogo} />
          <SkillItem skill="Figma" skillImage={ImageCollection.figmaLogo} />
        </div>

        <div className="flex flex-col gap-8 mt-16">
          <SkillItem
            skill="JavaScript"
            skillImage={ImageCollection.javascriptLogo}
          />
          <SkillItem skill="HTML" skillImage={ImageCollection.htmlLogo} />
          <SkillItem skill="CSS" skillImage={ImageCollection.cssLogo} />
        </div>
      </div>
      <hr className="w-2/3 mt-[60px] mb-[54px] border-[1px] border-grey/25" />
      <div className="flex flex-row justify-between w-full gap-[478px]">
        <div className="w-1/3">
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
        <div className="flex flex-col items-center w-2/5 mt-4">
          <div className="mb-6">
            <Image src={ImageCollection.CVImage} alt="CV preview" width={434} />
          </div>
          <a
            href="/CV_Leo_MERMET_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary backdrop-blur-sm border rounded-lg hover:bg-primary/50 transition-all duration-300 text-black font-medium inline-block cursor-pointer"
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
