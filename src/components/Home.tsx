import Image from "next/image";
import backgroundImage from "../assets/accueil-background.svg";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center relative">
      <Image
        src={backgroundImage}
        alt="Background"
        fill
        className="object-cover z-0"
        priority
      />
      <div className="z-10 flex flex-col items-center justify-center text-white">
        <p className="text-[40px] font-bold mb-5">Léo Mermet</p>
        <p className="text-2xl mb-[74px]">Ingénieur développeur front-end</p>
        <button className="px-6 py-3 bg-primary backdrop-blur-sm border rounded-lg hover:bg-primary/50 transition-all duration-300 text-black text-xl">
          Qui suis-je ?
        </button>
      </div>
    </div>
  );
}
