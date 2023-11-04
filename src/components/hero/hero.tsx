import { motion, Variants } from "framer-motion";
import React from "react";
import "./hero.scss";

const textV = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollBtn: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const slideV: Variants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    opacity: 1,
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const hero = () => {
   const handleDownload = (
     event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
   ) => {
     event.preventDefault();

     const resumePath = "/Askar_resume.pdf"; // Update the path accordingly
     const link = document.createElement("a");
     link.href = resumePath;
     link.download = "AskarResume.pdf";
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);
   };

  return (
    <>
      <div className="hero">
        <div className="wrapper">
          <motion.div
            className="textCont"
            variants={textV}
            initial="initial"
            animate="animate"
          >
            <motion.h2 variants={textV}>Mohammed Askar</motion.h2>
            <motion.h1 variants={textV}>
              Web developer and UI designer
            </motion.h1>
            <motion.div className="btns" variants={textV}>
              <motion.a href="#" variants={textV} onClick={handleDownload}>
                Download Resume
              </motion.a>
              <motion.button variants={textV}>Contact Me</motion.button>
            </motion.div>
            <motion.img
              src="/scroll.png"
              alt=""
              variants={textV}
              animate="scrollBtn"
            />
          </motion.div>
        </div>
        <motion.div
          className="slideText"
          variants={slideV}
          initial="initial"
          animate="animate"
        >
          Frontend Developer
        </motion.div>
        <div className="imageCont">
          <img src="/hero.png" alt="hero image" />
        </div>
      </div>
    </>
  );
};

export default hero;
