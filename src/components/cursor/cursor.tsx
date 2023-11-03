import { useEffect, useState } from "react";
import "./cursor.scss"
import { motion } from "framer-motion";

const cursor = () => {
    const [Position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(()=>{
        const handleMouseMove = (event: MouseEvent) => {
          setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return ()=>{
            window.removeEventListener("mousemove", handleMouseMove);
        }
    },[])

  return <motion.div className="cursor" animate={{x:Position.x,y:Position.y}}></motion.div>;
}

export default cursor