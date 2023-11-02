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
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, necessitatibus. Atque, excepturi tenetur tempor",
      image: "/restaurant.png",
      link: "https://askar1199.github.io/Restaurant_Website/",
    },
    {
      id: 2,
      title: "To-Do List App",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, necessitatibus. Atque, excepturi tenetur tempor",
      image: "/to_do.png",
      link: "https://to-do-list-rho-coral.vercel.app/",
    },
    {
      id: 3,
      title: "Weather App",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, necessitatibus. Atque, excepturi tenetur tempor",
      image: "/weather.png",
      link: "https://askar1199.github.io/Weather_App/",
    },
    {
      id: 4,
      title: "Expense Cart",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, necessitatibus. Atque, excepturi tenetur tempor",
      image: "/expense.png",
      link: "https://askar1199.github.io/Expense_Tracker/",
    },
  ];

  return (
    <div className="project" ref={refs}>
      <div className="progress">
        <h1>Featured works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Sections item={item} />
      ))}
    </div>
  );
};

export default project;
