import Image from "next/image";
import ImageCollection from "./ImageCollection";

export default function About() {
  return (
    <div id="about" className="flex flex-col bg-white items-center py-10 px-36">
      <h2 className="text-black mb-[54px] font-semibold text-2xl">
        👋 À propos de moi
      </h2>
      <div className="flex flex-row justify-between gap-44 items-center">
        <Image
          src={ImageCollection.profilImage}
          alt={"Profil Image"}
          width={256}
          height={256}
          className="rounded-full"
        ></Image>
        <div className="text-black space-y-6 text-[20px]">
          <p>
            Je m'appelle <strong>Léo Mermet</strong>, développeur front-end web
            & mobile récemment diplômé de l'<strong>EPITA</strong>, passionné
            par la création d'interfaces{" "}
            <strong>intuitives, performantes et bien pensées</strong>. J'ai une
            appétence pour le design et un œil critique sur l'UX/UI de mes
            applications. J'apprécie concevoir moi-même les maquettes de mes
            projets sur <strong>Figma</strong>.
          </p>

          <p>
            Durant mes études, j'ai eu l'opportunité de travailler sur des
            projets concrets pour des entreprises comme
            <strong> Rakuten</strong> et <strong>Thales</strong>, puis de
            rejoindre <strong>Noesio</strong>, une ESN où j'étais le développeur
            front d'une équipe agile. J'y ai contribué à des applications
            mobiles à grande échelle avec <strong>Expo</strong> et{" "}
            <strong>React Native</strong>, en appliquant des bonnes pratiques :{" "}
            <strong>tests, CI/CD, code review, intégration de tracking</strong>,
            et respect des bonnes pratiques UX.
          </p>

          <p>
            Je suis à l'aise sur des stacks modernes :{" "}
            <strong>React, React Native, Typescript, Flutter</strong>, avec une
            attention particulière à la{" "}
            <strong>
              lisibilité du code, à la collaboration avec les équipes produit et
              design
            </strong>
            , et à la <strong>qualité de l'expérience utilisateur</strong>.
            Autonome, curieux et rigoureux, j'aime apprendre en continu et
            travailler en équipe.
          </p>

          <p>
            Aujourd'hui, je suis à l'écoute d'opportunités où je pourrai
            continuer à <strong>progresser techniquement et humainement</strong>
            , au sein de projets <strong>ambitieux et utiles</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
