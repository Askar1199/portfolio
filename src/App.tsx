import { useState } from "react";
import "./app.scss"
import Navbar from "./components/navbar";
import Hero from "./components/hero/hero";

function App() {
  return (
    <>
      <header >
       <section>
         <Navbar />
         <Hero/>
        </section>
      </header>
      <section>trials</section>
      <section>trials</section>
      <section>trials</section>
      <section>trials</section>
    </>
  );
}

export default App;
