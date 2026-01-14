import React from "react";
import Hero from "./components/Hero";
import ProjectIntro from "./components/ProjectIntro";
import BrandConcept from "./components/BrandConcept";
import Applications from "./components/Applications";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="bg-brand-carbon min-h-screen text-white selection:bg-brand-orange selection:text-black font-body">
      <Hero />
      <ProjectIntro />
      <BrandConcept />
      <Applications />
      <Footer />
    </div>
  );
}

export default App;
