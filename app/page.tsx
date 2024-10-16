import Image from "next/image";
import Hero from "./components/main/Hero";
import Skills from "./components/main/Skills";
// import Encription from "./components/main/Encription";
import Contact from "./components/main/Contact";
import Projet from "./components/main/Projet";

export default function Home() {
  return (
   <main className="h-full w-full">
    <div className="flex flex-col gap-20">
      <Hero/>
      <Skills/>
      {/* <Encription/> */}
      <Projet/>
      <Contact/>
    </div>
   </main>
  );
}
