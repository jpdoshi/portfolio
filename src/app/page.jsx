import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Experience />
      <Footer />
    </>
  );
};

export default Home;
