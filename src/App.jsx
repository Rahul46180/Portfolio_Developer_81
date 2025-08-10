import React, { useEffect } from "react";
import Bundle from "./Component/Bundle";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, useScroll } from "motion/react";

const App = () => {
   const { scrollYProgress } = useScroll();
  useEffect(() => {
     AOS.init({ duration: 800, once: true });
  }, []);
  return (<>
    <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#ff0088",
                }}
            />
  <Bundle />
  </>
 );
};
export default App;
