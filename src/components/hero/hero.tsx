import { motion } from "framer-motion";
import "./hero.scss";

const textV = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition:{
        duration:1,
        staggerChildren:0.1,
    }
  },
  scrollBtn:{
    opacity:0,
    y:10,
    transition:{
        duration:2,
        repeat:Infinity
    }
  }
};

const slideV = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    opacity: 1,
    transition: {
      duration: 20,
      repeat:Infinity,
      repeatType:"mirror"
    },
  },
};


const hero = () => {
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
              <motion.button variants={textV}>
                See The Latest Works
              </motion.button>
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
