import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AnimacionEntrada from "./AnimacionEntrada";

const Visitanos = () => {
  const navigate = useNavigate();
  const [showAnimation, setShowAnimation] = useState(false);
  const [navigationPath, setNavigationPath] = useState("");
  const [animationKey, setAnimationKey] = useState(0);


  const handleDelayedNavigation = (path) => {
    setShowAnimation(true);
    setNavigationPath(path);
    setTimeout(() => {
      navigate(path);
    }, 700);
  };

  const handleAnimationEnd = () => {
    setAnimationKey(prevKey => prevKey + 1);
    setShowAnimation(false);
    navigate(navigationPath);

  };

  return (
    <main>
      <div className=" w-full h-[80vh] flex justify-evenly items-center flex-col font-sans">
        <div className=" w-4/5  h-[30vh] flex justify-center items-center text-center flex-col">
          <h2 className="text-center font-light mb-5 underlinecarta text-3xl  w-auto">
            Nuestra propuesta
          </h2>
          <p className="p-2 mb-5">
            Te invitamos a descubrir los auténticos sabores de nuestra tierra,
            donde cada plato cuenta una historia y cada bocado es un viaje.
            Sumérgete en esta experiencia que combina lo mejor de la cocina
            local con un toque moderno.
          </p>
          <button
            className="w-auto flex justify-center text-xl items-center underlinecarta font-bold"
            onClick={() => handleDelayedNavigation("/Carta")}
          >
            Carta
          </button>
        </div>
        <div className=" w-full h-[40vh] flex justify-center items-center text-center flex-col">
          <h2 className="w-full flex justify-center items-center text-center font-light text-2xl">
            Tu mesa te espera
          </h2>

          <p className="w-auto flex justify-center items-center text-center font-light mb-5 text-3xl">
            Siente la diferencia
          </p>
          <button
            className="w-auto flex justify-center items-center text-xl underlinecarta font-bold"
            onClick={() => handleDelayedNavigation("/Calendario")}
          >
            Reservar
          </button>
        </div>
      </div>
      {showAnimation && <AnimacionEntrada onAnimationEnd={handleAnimationEnd} key={animationKey} />}
    </main>
  );
};

export default Visitanos;