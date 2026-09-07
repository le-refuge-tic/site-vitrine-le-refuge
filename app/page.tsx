import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenu" className="relative z-10 flex-1">
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
