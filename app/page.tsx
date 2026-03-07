import Navbar from "@/app/components/layout/navbar";
import Hero from "@/app/components/sections/hero";
import Services from "@/app/components/sections/services";
import Pricing from "@/app/components/sections/pricing";
import About from "@/app/components/sections/about";
import Contact from "@/app/components/sections/contact";
import Footer from "@/app/components/layout/footer";
import Image from "next/image";
import FloatingContact from "@/app/components/ui/floating-contact";

export default function Home() {
  return (
    <>
    
    <Navbar />
        <main>
          <Hero />
          <Services />
          <Pricing />
          <About />
          <Contact />
        </main>
        <Footer />
         <FloatingContact />
    </>
  );
}
