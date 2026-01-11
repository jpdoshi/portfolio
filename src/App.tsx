import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import index from "./pages";
import about from "./pages/about";
import work from "./pages/work";
import skills from "./pages/skills";
import contact from "./pages/contact";
import Header from "./components/Header";
import ReactLenis, { useLenis } from "lenis/react";
import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useLenis();

  useEffect(() => {
    Aos.init({ duration: 400, delay: 250 });
  }, []);

  return (
    <ReactLenis root options={{ duration: 1.5 }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={index} />
          <Route path="/about" Component={about} />
          <Route path="/work" Component={work} />
          <Route path="/skills" Component={skills} />
          <Route path="/contact" Component={contact} />
        </Routes>
      </BrowserRouter>
    </ReactLenis>
  );
};

export default App;
