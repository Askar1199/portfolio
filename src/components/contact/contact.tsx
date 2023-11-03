import { motion, useInView } from "framer-motion";
import "./contact.scss";
import { useRef } from "react";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const contact = () => {
  const refs = useRef() as React.MutableRefObject<HTMLDivElement>;
  const formRef = useRef() as React.MutableRefObject<HTMLFormElement>;

  const inView = useInView(refs, { margin: "-100px" });
  return (
    <>
      <motion.div
        className="contact"
        ref={refs}
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className="textContainer" variants={variants}>
          <motion.h1 variants={variants}>Let's work together</motion.h1>
          <motion.div className="item" variants={variants}>
            <h2>Mail</h2>
            <span>mdaskar40@gmail.com</span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2>Address</h2>
            <span>Hello street New York</span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2>phone</h2>
            <span>+91 7550104231</span>
          </motion.div>
        </motion.div>
        <div className="formContainer">
          <motion.div
            className="phoneSvg"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="450px"
              height="450px"
              viewBox="0 0 352 254"
              fill="none"
            >
              <motion.path
                // strokeWidth={0.2}
                initial={{ pathLength: 0 }}
                animate={inView && { pathLength: 1 }}
                transition={{ duration: 10 }}
                d="M352 0H66V79.375H0V254H154V206.375H352V0ZM132 15.875H330V31.75H132V15.875ZM88 15.875H110V31.75H88V15.875ZM88 238.125H66V222.25H88V238.125ZM132 206.375H22V95.25H132V206.375ZM330 190.5H154V79.375H88V47.625H330V190.5Z"
                fill="none"
                fill-opacity="0.6"
              />
            </svg>
          </motion.div>
          <motion.form
            ref={formRef}
            action=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
          >
            <input type="text" required placeholder="Name" />
            <input type="email" required placeholder="Email" />
            <textarea rows={8} placeholder="Message" />
            <button>Submit</button>
          </motion.form>
        </div>
      </motion.div>
    </>
  );
};

export default contact;
