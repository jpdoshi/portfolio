import { BrowserRouter, Route, Routes } from "react-router";
import index from "./pages";
import about from "./pages/about";
import work from "./pages/work";
import skills from "./pages/skills";
import contact from "./pages/contact";
import Header from "./components/Header";
import ReactLenis, { useLenis } from "lenis/react";

const App = () => {
  useLenis();

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
