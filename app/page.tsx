import Navbar from "@/app/components/layout/navbar";
import Hero from "@/app/components/sections/hero";
import Services from "@/app/components/sections/services";
import Pricing from "@/app/components/sections/pricing";
import About from "@/app/components/sections/about";
import Contact from "@/app/components/sections/contact";
import Footer from "@/app/components/layout/footer";
import Image from "next/image";
import FloatingContact from "@/app/components/ui/floating-contact";
import HomeSeoText from "./components/sections/home-seo-text";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <HomeSeoText />
        <Pricing />
        <About />
        <Contact />
      </main>

      <FloatingContact />
    </>
  );
}
