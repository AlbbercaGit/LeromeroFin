import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import { Link, useLocation,useNavigate } from "react-router-dom";
import AnimacionEntrada from "./AnimacionEntrada";


const Header = () => {
  const location = useLocation();
  const [forceUpdate, setForceUpdate] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();
  const [showAnimation, setShowAnimation] = useState(false);
  const [navigationPath, setNavigationPath] = useState("");

  const [animationKey, setAnimationKey] = useState(0);

  const handleRenderAnimation = () => {
      setAnimationKey(prevKey => prevKey + 1);
  };

  useEffect(() => {
    const elemento = document.getElementById('Carta') || document.getElementById('Calendario')|| document.getElementById('Hero');


    if (elemento) {
      const estilo = window.getComputedStyle(elemento);
      const colorDeFondo = estilo.backgroundColor;
      console.log('El color de fondo es:', colorDeFondo);
      setIsDark(colorDeFondo === 'rgb(255, 255, 240)');
    }
  }, [location, forceUpdate]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {

    setIsOpen(!isOpen);
    const elemento = document.getElementById('header') || document.getElementById('menu') ||document.getElementById('Carta') || document.getElementById('Calendario')|| document.getElementById('Hero');

    if (!isOpen) {
      console.log("Abierto");
      // elemento.style.overflow = 'auto';

    } else {
      console.log("Cerrado");
      // elemento.style.overflow = 'hidden';


    }
  };

  const handleLinkClick = () => {
    setForceUpdate(prev => !prev);
  };
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
    <header
      id="header"
      className={` h-[10vh] p-4 bg-transparent font-sans border-b ital relative z-20 ${
        isDark ? 'text-black border-none  bg-gradientcarta' : 'text-white border-white'
      }`}
    >
      <div className=" container h-full grid grid-cols-3 items-center px-4">
        <div className="flex justify-start"></div>
        <div className="flex justify-center col-span-1">
          <h1 className="text-2xl font-bold">LeRomer</h1>
          
        </div>
        <div className="flex justify-end">
          <button
            onClick={toggleMenu}
            id="menu"
            className={`text-2xl md:hidden transition-transform duration-300 ease-in-out z-20 ${
              isDark ? 'text-black' : 'text-white'
            }`}
          >
            <span
              className={`block w-6 h-0.5 transform transition-transform duration-300 ease-in-out ${
                isOpen ? 'rotate-45 translate-y-1.5' : ''
              } ${isDark ? 'bg-black' : 'bg-white'}`}
            />
            <span
              className={`block w-6 h-0.5 my-1 transition-opacity duration-300 ease-in-out ${
                isOpen ? 'opacity-0' : ''
              } ${isDark ? 'bg-black' : 'bg-white'}`}
            />
            <span
              className={`block w-6 h-0.5 transform transition-transform duration-300 ease-in-out ${
                isOpen ? '-rotate-45 -translate-y-1.5' : ''
              } ${isDark ? 'bg-black' : 'bg-white'}`}
            />
          </button>
        </div>
        <nav className="hidden md:flex md:items-center col-span-3 justify-center">
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="hover:underline">
                Reservar
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={`fixed inset-0 bg-transparent backdrop-blur-md transition-opacity duration-700 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0'
        } ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'} flex items-center justify-center`}
      >
        <div className={`relative w-full h-4/5 flex items-center justify-center ${isDark ? 'text-black border-black' : 'text-white border-white'}`}>
          <nav className="flex flex-col items-center text-center text-2xl">
            <ul className="space-y-4">
              <li className={``}>
                <button
                  to="/"
                  className={`text-3xl font-sans py-2 px-4  ${isDark ? 'text-black border-black underline-buttondark' : 'text-white border-white underline-button'}`}
                  onClick={() => {
                    toggleMenu();
                    handleLinkClick();
                    handleRenderAnimation();
                    handleDelayedNavigation("/");
                  }}
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  to="/Calendario"
                  className={`text-3xl font-sans py-2 px-4  ${isDark ? 'text-black border-black underline-buttondark' : 'text-white border-white underline-button'}`}
                  onClick={() => {
                    toggleMenu();
                    handleLinkClick();
                    handleRenderAnimation();
                    handleDelayedNavigation("/Calendario");
                  }}                >
                  Reservar
                </button>
              </li>
              <li>
                <button
                  to="/Carta"
                  className={`text-3xl font-sans py-2 px-4  ${isDark ? 'text-black border-black underline-buttondark' : 'text-white border-white underline-button'}`}
                  onClick={() => {
                    toggleMenu();
                    handleLinkClick();
                    handleRenderAnimation();
                    handleDelayedNavigation("/Carta");
                  }}                >
                  Carta
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {showAnimation && <AnimacionEntrada onAnimationEnd={handleAnimationEnd} key={animationKey}/>}

    </header>
  );
};

export default Header;