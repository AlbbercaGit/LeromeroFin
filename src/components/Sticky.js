import React, { useEffect } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import "../style.css";

const Sticky = () => {
  const SECTION_HEIGHT = 1000;
  const START_HEIGHT = 920; // Altura en la que comienza a cambiar el clipPath

  const { scrollY } = useScroll();
  const opacity = useTransform(
    scrollY,
    [3500, SECTION_HEIGHT * 5],
    [1, 0]
  );

  const clip1 = useTransform(
    scrollY,
    [START_HEIGHT, SECTION_HEIGHT * 2],
    [25, 0]
  );
  const clip2 = useTransform(
    scrollY,
    [START_HEIGHT, SECTION_HEIGHT * 2],
    [75, 100]
  );

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const parallax = document.querySelector(".parallax");
  //     const scrollPosition = window.pageY; // Corregido a pageYOffset
  //     parallax.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  //   };

  useEffect(() => {
    const handleScroll = () => {
      const parallax = document.querySelector(".parallax");
      if (parallax) {
        const scrollPosition = window.pageY; // Corregido a pageYOffset
        parallax.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    
    <main className="relative w-full h-[370vh] bg-paper-texture font-sans">
      <div className="position absolute  w-full h-[25vh]  flex flex-col items-center justify-center">
      <h1 className=" text-xl text-center ">¿Cansado de la rutina?</h1>
      <h2 className="text-lg  text-center ">¡Ven y desconecta!</h2>
      </div>
      <motion.div
        className="sticky top-0 h-screen w-full parallax bg-izq bg-cover sm:bg-fixed flex items-end bg-center bg-no-repeat"
        style={{
          clipPath,
          opacity,
          willChange: "clip-path, opacity",
        }}
      >
                    <div className="flex flex-col w-full  items-center h-[20vh] pb-32 justify-center  text-white bg-gradient-border-bot ">
                    <h2 className="text-sm font-light  px-5 text-left w-full ">Tu otra casa*</h2>

      <h2 className="text-sm font-light  px-5 text-left w-full ">¿Como no vas a desconectar con este ambiente?</h2>
      {/* <h2 className="text-lg  text-center "></h2> */}
      </div>
      </motion.div>
    </main>
  );
};

export default Sticky;
