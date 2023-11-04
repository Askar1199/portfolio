import { useState } from "react";
import "./app.scss";
import Navbar from "./components/navbar";
import Hero from "./components/hero/hero";
import Parallax from "./components/parallax/parallax";
import Service from "./components/serviceC/service";
import Projects from "./projects";
import Contact from "./components/contact/contact";
import Cursor from "./components/cursor";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Cursor />
      <header>
        <section>
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
      <section>
        <Contact />
      </section>
    </>
  );
}

export default App;
