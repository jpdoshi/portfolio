import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Experience />
    </>
  );
};

export default Home;
