import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

interface props {
  type: string;
}

const parallax = ({ type }: props) => {
  const refs = useRef() as React.MutableRefObject<HTMLDivElement>;

  const { scrollYProgress } = useScroll({
    target: refs,
    offset: ["start start", "end start"],
  });

  const Ytext = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const Ybg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const Ystr = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div
      ref={refs}
      className="parallax"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg,#111132,#0c0c1d)"
            : "linear-gradient(180deg,#111132,#505064)",
      }}
    >
      <motion.h1 style={{ y: Ytext }}>
        {type === "services" ? (
          <>
            What <span className="ISpan">I</span> Know?
          </>
        ) : (
          <>
            What <span className="ISpan">I</span> Did?
          </>
        )}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        style={{
          y: Ybg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
        className="planets"
      ></motion.div>
      <motion.div style={{ x: Ystr }} className="stars"></motion.div>
    </div>
  );
};

export default parallax;
