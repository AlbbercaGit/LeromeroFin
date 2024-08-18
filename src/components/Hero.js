import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AnimacionEntrada from "./AnimacionEntrada";

const Hero = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const [showAnimation, setShowAnimation] = useState(false);
  const [navigationPath, setNavigationPath] = useState("");

  useEffect(() => {
    const headerElement = headerRef.current;

    // Asegúrate de que el header sea visible al cargar la página
    headerElement.scrollIntoView({ behavior: "smooth", block: "start" });

    // Añade el evento de finalización de animación
    const handleAnimationEnd = () => {
      headerElement.classList.add("hidden"); // Asegura que el elemento quede oculto y no ocupe espacio
    };

    headerElement.addEventListener("animationend", handleAnimationEnd);

    return () => {
      headerElement.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  const handleDelayedNavigation = (path) => {
    setShowAnimation(true);
    setTimeout(() => {
      navigate(path);
    }, 900);
  };

  const handleAnimationEnd = () => {
    setShowAnimation(false);
    navigate(navigationPath);
  };

  return (
    <main className=" max-h-[100vh]" id="Hero" ref={headerRef}>
      <div className="  h-[100vh] text-white w-full flex items-center justify-center flex-col  relative top-0 font-sans">
        <div className="flex flex-col w-full h-full items-center justify-center">
          <h1 className="text-white text-3xl flex h-3/5 w-full items-end justify-center m-10">
            ¿Y ahora que?
          </h1>
          <nav className="text-white flex h-2/5 w-full justify-center items-start text-2xl gap-10">
            <button
              className="font-sans py-2 px-4 underline-button2"
              onClick={() => handleDelayedNavigation("/Calendario")}
            >
              Reservas
            </button>
            <button
              className="font-sans py-2 px-4 underline-button2"
              onClick={() => handleDelayedNavigation("/Carta")}
            >
              Carta
            </button>
          </nav>
          <div className="flex flex-col h-full w-full  items-center justify-center text-xl bg-repeat-x ">
            <p className="h-full text-center flex justify-start items-center flex-col ">
              ¿Comemos? 
              
              <div className='flex justify-center items-center h-4/5 w-full '>
                <div className='flex justify-center items-center  bg-white h-2/5 w-[1px] min-h-6'><p></p></div>
              </div>
            </p>
          </div>
          <div className="flex flex-col h-2/5 w-full items-center justify-start text-xl bg-repeat-x bg-gradient"></div>
        </div>
      </div>
      {showAnimation && <AnimacionEntrada onAnimationEnd={handleAnimationEnd} />}
    </main>
  );
};

export default Hero;