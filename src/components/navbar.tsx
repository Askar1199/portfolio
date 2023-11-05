import { motion } from "framer-motion";
import Sidebar from "./sidebar/sidebar";
import fb from "../assets/facebook.png";
import ins from "../assets/instagram.png";
import git from "../assets/github.png";
import lin from "../assets/linkedin.png";

const navbar = () => {
  return (
    <>
      <div className="nav ">
        <Sidebar />
        <div className="nav_wrapper">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Mohammed Askar
          </motion.span>
          <div className="social">
            <a
              href="https://www.facebook.com/profile.php?id=100007086048806"
              target="_blank"
            >
              <img src={fb} />
            </a>
            <a href="https://www.instagram.com/buri_buri___/" target="_blank">
              <img src={ins} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-askar-2aa92725a"
              target="_blank"
            >
              <img src={lin} />
            </a>
            <a href="https://github.com/Askar1199" target="_blank">
              <img src={git} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default navbar;
