import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Home from "@/Sections/Home";
import About from "@/Sections/About";
import Education from "@/Sections/Education";
import Licenses from "@/Sections/Licenses";
import Projects from "@/Sections/Projects";
import UnderConstruction from "@/Sections/UnderConstuction";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
import { Poppins, Inter } from "next/font/google";
import ShapeDivider from "@/Components/Divider";

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
        <ShapeDivider id={"footer"} type={"footer"} />
        {/* <UnderConstruction id="about" title="About" /> */}
        {/* <UnderConstruction  id="about" title="About" /> */}
      </main>
      <Footer />
    </>
  );
}
