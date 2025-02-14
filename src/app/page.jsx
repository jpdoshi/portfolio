import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About />
    </>
  );
};

export default Home;
