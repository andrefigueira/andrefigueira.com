import { Background } from "@/components/Background";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Polyxmedia } from "@/components/Polyxmedia";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Background />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Intro />
          <Work />
          <About />
          <Polyxmedia />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
