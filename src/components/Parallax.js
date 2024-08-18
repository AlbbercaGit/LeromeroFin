import React, { useState, useEffect, useRef } from "react";

import "../style.css"; 

const Parallax = () => {
  const [scale, setScale] = useState(1);
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
    
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerTop = containerRect.top + scrollTop;
      const containerHeight = containerRect.height;
    
      const containerCenter = containerTop + containerHeight / 2;
      const windowCenter = scrollTop + windowHeight / 2;
    
      if (windowCenter <= 1450.1796875 && windowCenter <= 1450.1796875) {
        const distanceFromCenter = Math.abs(windowCenter - containerCenter);
        const visibilityRatio = Math.max(1 - distanceFromCenter / (windowHeight / 2), 0);
    

    
        const scaleLimit = 2 + visibilityRatio * 3;
        if (scaleLimit >= 5.1) {
          console.log("La imagen ha alcanzado el 100% del height/width del contenedor.");
          // Realiza alguna acción cuando la imagen esté completamente visible
        }
        setScale(scaleLimit);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="h-[100vh]  flex justify-center items-center overflow-hidden">
      <div
        ref={containerRef}
        id="Parallax"
        className="bg-izq bg-cover w-1/5 h-1/5 rounded-md transition-transform duration-[0s] ease-in-out"
        style={{ transform: `scale(${scale})` }}
      ></div>
      
    </main>
  );
};

export default Parallax;