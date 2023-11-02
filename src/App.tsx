import { useState } from "react";
import "./app.scss";
import Navbar from "./components/navbar";
import Hero from "./components/hero/hero";
import Parallax from "./components/parallax/parallax";
import Service from "./serviceC/service";
import Projects from "./projects";

function App() {
  return (
    <>
      <header>
        <section id="home">
          <Navbar />
          <Hero />
        </section>
      </header>
      <section>
        <Parallax type="services" />
      </section>
      <section>
        <Service />
      </section>
      <section>
        <Parallax type="portfolio" />
      </section>
      <Projects />
      <section>trials</section>
    </>
  );
}

export default App;
