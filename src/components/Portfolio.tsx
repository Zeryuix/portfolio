import PortfolioItem from "./PortfolioItem";
import ImageCollection from "./ImageCollection";
import React from "react";

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
  return (
    <div className="flex flex-col bg-white items-center px-[124px] py-10">
      <h2 className="text-black mb-[54px] font-semibold text-2xl">
        📁 Portfolio
      </h2>
      <div className="flex flex-col gap-[120px] mb-20">
        <PortfolioItem
          description={highlightTechs(
            `Application mobile grand public pour les centres commerciaux Westfield,
        permettant aux utilisateurs de consulter les actualités, événements, offres et services
        de plus de 60 centres à travers le monde. Développée avec React Native, Expo et TypeScript,
        l'application intègre également des contenus web construits en React via des WebViews, et
        est utilisée par plus d'un million d'utilisateurs à l'international.`,
            ["React Native", "Expo", "TypeScript", "React", "WebViews"]
          )}
          illustration={ImageCollection.URWIllustration}
          link="https://play.google.com/store/apps/details?id=com.westfield.one&pli=1"
          title="URW"
          phoneIllustration={true}
        />
        <PortfolioItem
          description={highlightTechs(
            `Application destinée aux baristas à bord des trains afin de calculer leurs 
        bonus de rémunération en fonction de leurs ventes et de leurs objectifs de ventes. 
        Développée avec React Native, Expo et Typescript et maquettes réalisées sur Figma.`,
            ["React Native", "Expo", "Typescript", "Figma"]
          )}
          illustration={ImageCollection.newrestIllustration}
          link="https://www.figma.com/proto/kfDVZLwSmdcZPuvGqOfkcs/Barista-v2?node-id=155-2&starting-point-node-id=155%3A2"
          title="Newrest"
          reverse={true}
          mockup={true}
        />
        <PortfolioItem
          description={highlightTechs(
            `Application mobile conçue pour accompagner les étudiants de première année à
            l'EPITA dans leur apprentissage. Elle permet de consulter des cours, de s'entraîner avec
            des exercices, de collaborer en groupe via des "rooms", et d'ajouter du contenu via OCR
            et résumés générés par IA. Développée avec Flutter, avec des maquettes réalisées sur Figma,
            l'app propose une expérience simple et mobile-first pensée pour le quotidien étudiant.`,
            ["Flutter", "Figma", "OCR", "IA"]
          )}
          illustration={ImageCollection.epitatouIllustration}
          link="https://www.figma.com/proto/jAnzlEhx8hIknm0RuWpOww/Maquettes-mobile-EPITATOU?node-id=1-3&starting-point-node-id=1%3A3"
          title="Epitatou"
          mockup={true}
          phoneIllustration={true}
        />
        <PortfolioItem
          description={highlightTechs(
            `Développement d'un back-office web interne pour la visualisation et l'analyse 
        des messages échangés entre utilisateurs sur la plateforme Rakuten C2C. L'interface permet 
        d'explorer les conversations via tableaux et graphiques dynamiques. Projet réalisé en 
        collaboration avec la cheffe d'équipe C2C de Rakuten France, réalisée en React, NextJS et 
        Material-UI avec maquettes réalisées sur Figma.`,
            ["React", "NextJS", "Material-UI", "Figma"]
          )}
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
