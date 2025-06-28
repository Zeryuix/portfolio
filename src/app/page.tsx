import About from "@/components/About";
import Accueil from "@/components/Home";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";

export default function Main() {
  return (
    <div className="overflow-x-hidden">
      <Accueil />
      <About />
      <Skills />
      <Portfolio />
    </div>
  );
}
