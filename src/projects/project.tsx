import { useRef } from "react";
import "./project.scss";
import Sections from "./sections/sections";
import { motion, useScroll, useSpring } from "framer-motion";

const project = () => {
  const refs = useRef() as React.MutableRefObject<HTMLDivElement>;

  const { scrollYProgress } = useScroll({
    target: refs,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const items = [
    {
      id: 1,
      title: "Restaurant webpage",
      desc: "HTML | CSS | JAVASCRIPT | JQUERY",
      image: "./restaurant.png",
      link: "https://askar1199.github.io/Restaurant_Website/",
    },
    {
      id: 2,
      title: "To-Do List App",
      desc: "REACT | TYPESCRIPT | HTML | CSS",
      image: "./to_do.png",
      link: "https://to-do-list-rho-coral.vercel.app/",
    },
    {
      id: 3,
      title: "Weather App",
      desc: "HTML | CSS | REACT | TYPESCRIPT",
      image: "./weather.png",
      link: "https://askar1199.github.io/Weather_App/",
    },
    {
      id: 4,
      title: "Expense Cart",
      desc: "HTML | CSS | BOOTSTRAP | REACT | TYPESCRIPT",
      image: "./expense.png",
      link: "https://askar1199.github.io/Expense_Tracker/",
    },
  ];

  return (
    <div className="project" ref={refs} id="Projects">
      <div className="progress">
        <h1>Featured works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Sections item={item} key={item.id} />
      ))}
    </div>
  );
};

export default project;
