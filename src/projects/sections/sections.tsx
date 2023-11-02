import { useRef } from "react";
import "../project.scss";
import { motion, useScroll, useTransform } from "framer-motion";

interface props {
  item: {
    id: number;
    title: string;
    desc: string;
    image: string;
    link:string
  };
}

const sections = ({ item }: props) => {
  const refs = useRef() as React.MutableRefObject<HTMLDivElement>;

   const { scrollYProgress } = useScroll({
     target: refs,
   });

   const y= useTransform(
     scrollYProgress,
     [0, 1],
     [-300, 300]
   );

  return (
    <>
       <section key={item.id}>
          <div className="container">
            <div className="wrapper" >
              <div className="imgContainer" ref={refs}>
                <img src={item.image} alt="" />
              </div>
              <motion.div className="textContainer" style={{ y }}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <a href={`${item.link}`} target="_blank">See Demo</a>
              </motion.div>
            </div>
          </div>
        </section>
    </>
  );
};

export default sections;
