import { Header, Footer, ShapeDivider } from "@/components/Import";
import {
  Home,
  About,
  Education,
  Licenses,
  Projects,
  Contact,
} from "@/sections/Import";
import { useEffect } from "react";
import { Poppins, Inter } from "next/font/google";
import AOS from "aos"; // AOS
import "aos/dist/aos.css"; // You can also use <link> for styles

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// selected font
const { className } = poppins;

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header font={className} />
      <main className={className}>
        <Home />
        <About />
        <ShapeDivider id={"education"} type={"section-white"} />
        <Education />
        <ShapeDivider id={"licenses"} type={"section-slate"} />
        <Licenses />
        <ShapeDivider id={"projects"} type={"section-white"} />
        <Projects />
        <ShapeDivider id={"contact"} type={"section-slate"} />
        <Contact />
        <ShapeDivider id={"footer"} type={"footer-b"} />
        {/* <UnderConstruction id="about" title="About" /> */}
        {/* <UnderConstruction  id="about" title="About" /> */}
      </main>
      <Footer />
    </>
  );
}
