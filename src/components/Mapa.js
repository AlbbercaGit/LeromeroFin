import React from 'react';
import {Image} from "@nextui-org/image";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const Visitanos = () => {
    const containerStyle = {
        width: '100%',
        height: '400px'
      };
      
      const center = {
        lat: 39.7667, // Latitud de Almenara, Castelló
        lng: -0.2167  // Longitud de Almenara, Castelló
      };
  return (
 <main >
<div className="h-[65vh] w-full flex justify-center items-center font-sans flex-col ">
<div className="w-4/5 h-[12vh] flex justify-center items-center flex-col p-5 ">
    <p className='font-bold'>Como llegar</p>
    <p className='text-center'>Av. del País Valencià, 5, 12590 Almenara, Castelló</p>
    </div>
    <div className="w-4/5 h-[12vh] flex justify-center items-center flex-col p-5 my-5">
    <p className='font-bold'>Horario</p>
    <p>Lunes cerrado.</p>
    <p>M-D 9:30 - 22:00</p>
    </div>
    <div className="w-[90%] h-[36vh] flex justify-center items-center  flex-col  my-10">
    <iframe className='w-full h-full rounded-xl shadow-lg'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.81627927975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1f9f4b0e6e0!2sAv.%20del%20Pa%C3%ADs%20Valenci%C3%A0%2C%205%2C%2012590%20Almenara%2C%20Castell%C3%B3!5e0!3m2!1sen!2ses!4v1633021234567!5m2!1sen!2ses"

        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
</div>

 </main>
  );
};

export default Visitanos;
