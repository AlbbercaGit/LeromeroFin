import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../style.css";

const Parallax = () => {
  const SECTION_HEIGHT = 1500;
  const CenterImage = () => {
    // Puede ser que te haga falta usar scrollYprogress
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, SECTION_HEIGHT +500], [1, 0]);
    const bacgroundSize = useTransform(scrollY, [0, 100], ["170%", "100%"]);

    return (
      <main className="relative w-full h-[150vh] bg-red-600">
        <motion.div className="sticky top-0 h-screen w-full">
          style=
          {{
            // opacity,
            bacgroundimage:"url('')",
          }}
        </motion.div>
      </main>
    );
  };
};

export default Parallax;
