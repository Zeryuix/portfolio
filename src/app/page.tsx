import About from "@/components/About";
import Accueil from "@/components/Home";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function Main() {
  return (
    <div className="overflow-x-hidden">
      <Accueil />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}
