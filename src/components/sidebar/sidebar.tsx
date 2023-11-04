import { motion } from "framer-motion";
import React, { useState } from "react";
import "./sidebar.scss"

const sidebar = () => {
  const [btn, setBtn] = useState(false);
  const items =["Home","Services","Projects","Contact","About"]

  const click = () => {
    setBtn((current) => !current);
  };

  const varients = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(20px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <>
      <motion.div className="sidebar" animate={btn ? "open" : "closed"}>
        <motion.div className="bg" variants={varients}>
          <div className="links">{items.map((map,ind)=>(
            <a href={`/${map}`} key={ind}>{map}</a>
          ))}</div>
        </motion.div>

        <button className="buttons" onClick={click}>
          <svg width="23" height="23" viewBox="0 0 23 23">
            <motion.path
              strokeWidth="3"
              stroke="black"
              strokeLinecap="round"
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <motion.path
              strokeWidth="3"
              stroke="black"
              strokeLinecap="round"
              d="M 2 9.423 L 20 9.423"
              variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
            />
            <motion.path
              strokeWidth="3"
              stroke="black"
              strokeLinecap="round"
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </button>
      </motion.div>
    </>
  );
};

export default sidebar;
