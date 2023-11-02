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
      title: "React Commerce",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, necessitatibus. Atque, excepturi tenetur tempor",
      image:
        "https://images.pexels.com/photos/18563109/pexels-photo-18563109/free-photo-of-a-car-is-driving-down-the-road-at-night.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 2,
      title: "Restsuren webpage",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, necessitatibus. Atque, excepturi tenetur tempor",
      image:
        "https://images.pexels.com/photos/8667620/pexels-photo-8667620.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 3,
      title: "To-Do List App",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, necessitatibus. Atque, excepturi tenetur tempor",
      image:
        "https://images.pexels.com/photos/18503091/pexels-photo-18503091/free-photo-of-rural-life-19.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 4,
      title: "Weather App",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, necessitatibus. Atque, excepturi tenetur tempor",
      image:
        "https://images.pexels.com/photos/17887957/pexels-photo-17887957/free-photo-of-a-person-in-a-raincoat-sitting-on-the-lakeshore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
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
      <Sections item={items} />
    </div>
  );
};

export default project;
