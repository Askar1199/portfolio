import { motion, useInView } from "framer-motion";
import "./service.scss";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const service = () => {
  const refs = useRef() as React.MutableRefObject<HTMLDivElement>;

  const isInView = useInView(refs, { margin: "-100px" });
  return (
    <motion.div
      className="service"
      variants={variants}
      initial="initial"
      whileInView={"animate"}
      ref={refs}
      animate={isInView && "animate"}
      viewport={{ once: true }}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <b>Unique</b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Your </b>Business
          </h1>
          <button>What We Do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            voluptate incidunt officia. Nulla asperiores, quaerat ut totam
            accusamus sequi eos in enim dicta adipisci exercitationem nesciunt
            fugiat quis!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            voluptate incidunt officia. Nulla asperiores, quaerat ut totam
            accusamus sequi eos in enim dicta adipisci exercitationem nesciunt
            fugiat quis!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            voluptate incidunt officia. Nulla asperiores, quaerat ut totam
            accusamus sequi eos in enim dicta adipisci exercitationem nesciunt
            fugiat quis!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            voluptate incidunt officia. Nulla asperiores, quaerat ut totam
            accusamus sequi eos in enim dicta adipisci exercitationem nesciunt
            fugiat quis!
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default service;
