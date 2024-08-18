import React,{useState} from "react";
import { Calendar } from "@nextui-org/calendar";
// import {Select, SelectItem} from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/select";
import { Button, ButtonGroup } from "@nextui-org/button";
import { parseDate } from "@internationalized/date";
import AnimacionSalida from "./AnimacionSalida";

// import { Input } from "@nextui-org/input";
import style from "../style.css";
import { MdOutlineTableRestaurant } from "react-icons/md";

const Calendario = () => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [count, setCount] = useState(1);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 1 ? count - 1 : 1);
  const handleButtonClick = () => {
    if (isCalendarVisible) {
      setIsCalendarVisible(false);
    } else {
      setIsCalendarVisible(true);
    }  };

  const animals = [
    { key: "dog", label: "Dog" },
    { key: "cat", label: "Cat" },
    { key: "bird", label: "Bird" },
    // Agrega más animales según sea necesario
  ];

  return (
    
    <main  className=" h-auto flex flex-col justify-center items-center bg-paper-texture font-sans "id="Calendario">
           <AnimacionSalida />
 <div className="min-h-[80vh] w-full flex flex-col justify-center items-center italic gap-5 ">

      <div className="h-[10vh] flex items-center justify-center ">
        <h2 className=" text-center font-light underlinecarta text-2xl  w-full">
          ¿Te apetece pasarte un rato?
        </h2>
        </div>
        <div className=" px-2 flex h-[6vh] w-[85%] space-x-1 items-center justify-center rounded-xl border border-black font-sans font-light text-sm ">
        
          <p className=" w-4/5">¿Cuantos Seremos?</p>
          <Button
            isIconOnly
            className=" bg-transparent p-0 m-0 text-xl "
            size="md"
            onClick={decrement}

          >
            -
          </Button>
          <input
          value={count}
          className="pointer-events-none bg-paper-texture w-5  text-center read-only border-none"
            X
          ></input>
          <Button
            isIconOnly
            className="  p-0 m-0  bg-transparent text-xl"
            size="md"
            onClick={increment}

          >
            +
          </Button>
        </div>
        <div className=" px-2 flex h-[6vh] w-[85%] space-x-1 items-center justify-center rounded-xl border border-black font-sans font-light text-sm">
          <p className="w-full">¿Donde comemos?</p>
          <Button className="w-auto bg-transparent flex text-base p-0 mx-0" size="sm">
            <p className=" underline-button flex justify-center text-sm items-center p-0 mx-0">
              Terraza
            </p>
          </Button>
          <Button className="w-auto bg-transparent flex p-0 mx-0" size="sm">
            <p className="underline-button flex justify-center text-sm items-center gap-2">
              Salón
            </p>
          </Button>
        </div>
        <div className=" px-2 flex h-[6vh] w-[85%] space-x-1 items-center justify-center rounded-xl border border-black font-sans font-light text-sm">
          <p className="w-full">¿En que turno?</p>
          <Button className="w-auto p-0 mx-0  bg-transparent flex text-sm" size="sm"             onClick={handleButtonClick}
          >
            <p className=" underline-button flex justify-center items-center gap-2">
              Comida
            </p>
          </Button>
          <Button className="w-auto p-0 bg-transparent flex " size="sm" onClick={handleButtonClick}>
            <p className="underline-button flex justify-center text-sm items-center gap-2">
              Cena
            </p>
          </Button>
          <Button className="w-auto bg-transparent flex p-0 mx-0" size="sm" onClick={handleButtonClick}>
            <p className="underline-button flex justify-center text-sm items-center gap-2">
              Ver Todo
            </p>
          </Button>
        </div>
        <div className=" h-auto flex w-[85%] items-center justify-center rounded  font-sans font-light text-xs ">
          <p className="w-full flex justify-center text-center">
            Si viene con un niño y necesita trona añadalo como una persona más.
          </p>
        </div>

        <div className={`p-0 m-0 ${isCalendarVisible ? 'flex' : 'hidden'}  w-full h-[35vh] items-center justify-center rounded font-sans font-light text-base  `}>
          <Calendar className="h-[35vh] " aria-label="Date (No Selection)" />
        </div>
        <div className={` py-1 mb-5 ${isCalendarVisible ? 'flex' : 'hidden'} w-3/5  flex-col items-center  rounded  font-sans font-light text-sm`}>
          <p className="w-full flex  text-left">
            Tenemos hueco
          </p>
          <p className="w-full flex text-center">
            Me temo que hoy no
          </p>
          
        </div>
      </div>
    </main>
  );
};

export default Calendario;
