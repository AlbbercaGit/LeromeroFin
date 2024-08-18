import React from "react";
import "../style.css"; // Asegúrate de tener este archivo para estilos personalizados
// import Galeria from './components/Galeria';
import Galeria from "./Galeria";
import {Image} from "@nextui-org/image";
import Header from "./Header";
import AnimacionSalida from "./AnimacionSalida";



const Carta = () => {
  const images = [
    "https://raw.githubusercontent.com/AlbbercaGit/videos/c1797ab9d5b3f8fe534d4dc24a9c5c86c0df3af8/a5.jpg",
    "https://raw.githubusercontent.com/AlbbercaGit/videos/c1797ab9d5b3f8fe534d4dc24a9c5c86c0df3af8/a1.jpg",
    "https://raw.githubusercontent.com/AlbbercaGit/videos/c1797ab9d5b3f8fe534d4dc24a9c5c86c0df3af8/a3.jpg",
    "https://raw.githubusercontent.com/AlbbercaGit/videos/c1797ab9d5b3f8fe534d4dc24a9c5c86c0df3af8/a4.jpg",
    "https://raw.githubusercontent.com/AlbbercaGit/videos/12383d43a2c6599858a66d2e2c08a025e67f380d/img/img2/a11.jpg",
    "https://raw.githubusercontent.com/AlbbercaGit/videos/12383d43a2c6599858a66d2e2c08a025e67f380d/img/img2/a12.jpg",
  ];
  const images2 = [
    "https://raw.githubusercontent.com/AlbbercaGit/videos/12383d43a2c6599858a66d2e2c08a025e67f380d/img/img2/b12.jpg",
    "https://raw.githubusercontent.com/AlbbercaGit/videos/c1797ab9d5b3f8fe534d4dc24a9c5c86c0df3af8/img/b1.jpg",
    "https://raw.githubusercontent.com/AlbbercaGit/videos/c1797ab9d5b3f8fe534d4dc24a9c5c86c0df3af8/img/b2.jpg",
    "https://raw.githubusercontent.com/AlbbercaGit/videos/c1797ab9d5b3f8fe534d4dc24a9c5c86c0df3af8/img/b3.jpg",
    "https://raw.githubusercontent.com/AlbbercaGit/videos/12383d43a2c6599858a66d2e2c08a025e67f380d/img/img2/b11.jpg",
    "https://raw.githubusercontent.com/AlbbercaGit/videos/12383d43a2c6599858a66d2e2c08a025e67f380d/img/img2/b13.jpg",
  ];
  const images3 = [
    "https://raw.githubusercontent.com/AlbbercaGit/videos/12383d43a2c6599858a66d2e2c08a025e67f380d/img/img2/c12.jpg",

    "https://raw.githubusercontent.com/AlbbercaGit/videos/c1797ab9d5b3f8fe534d4dc24a9c5c86c0df3af8/img/c3.jpg",
    "https://raw.githubusercontent.com/AlbbercaGit/videos/c1797ab9d5b3f8fe534d4dc24a9c5c86c0df3af8/img/c1.jpg",
    "https://raw.githubusercontent.com/AlbbercaGit/videos/12383d43a2c6599858a66d2e2c08a025e67f380d/img/img2/d11.jpg",
    "https://raw.githubusercontent.com/AlbbercaGit/videos/12383d43a2c6599858a66d2e2c08a025e67f380d/img/img2/c11.jpg",
  ];
  const images4 = [
    "https://raw.githubusercontent.com/AlbbercaGit/videos/c1797ab9d5b3f8fe534d4dc24a9c5c86c0df3af8/img/p3.jpg",
    "https://raw.githubusercontent.com/AlbbercaGit/videos/c1797ab9d5b3f8fe534d4dc24a9c5c86c0df3af8/img/p4.jpg",
    "https://raw.githubusercontent.com/AlbbercaGit/videos/12383d43a2c6599858a66d2e2c08a025e67f380d/img/img2/p11.jpg",
  ];
  const huevos = [
    "https://raw.githubusercontent.com/AlbbercaGit/videos/c1797ab9d5b3f8fe534d4dc24a9c5c86c0df3af8/a2.jpg",
  ];
  const galeriaClass = huevos.length === 1 ? "spanfuera" : "";

  const verde = [
    "https://raw.githubusercontent.com/AlbbercaGit/videos/c1797ab9d5b3f8fe534d4dc24a9c5c86c0df3af8/img/c1.jpg",
  ];

  return (
    
    <main id="Carta" className=" px-8 pt-5 bg-paper-texture text-black font-sans border-b bg-gradient-border">
<AnimacionSalida />
      <div className="container mx-auto">
        {/* Sección "Picoteamos algo antes?" */}
        <div className="mb-4">
          <h2 className="text-center font-light mb-10 underlinecarta text-2xl italic w-full">
            Picoteamos algo antes?
          </h2>
          <div className="price-container mb-3 text-lg">
            <span className="pr-4">
              Tabla de Jamon
              <br />
              <p className="font-thin fontlig text-sm">
                Una tabla de jamon que esperabas?
              </p>
            </span>
            <span className="price">2€</span>
          </div>
          <div className="price-container mb-3 text-lg">
            <span className="pr-4">
              Patatas LeRomer
              <br />
              <p className="font-light text-sm">
                Patatas a lo pobre con nuestra salsa secreta y cientos de cosas
                más.
              </p>
            </span>
            <span className="price">3€</span>
          </div>
          <div className="price-container mb-3 text-lg">
            <span className="pr-4">
              Degustacion De Quesos
              <br />
              <p className="font-light text-sm">
                Tabla de quesos franceses, italianos y de nuestra tierra.
              </p>
            </span>
            <span className="price">5€</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Galeria images={images} />
        </div>{" "}
        {/* Sección "Verde Y Fresco" */}
        <div className="mb-4">
          <h2 className="text-center w-full items-center font-light my-4 underlinecarta text-2xl italic ">
            Verde Y Fresco
          </h2>
          <div className="price-container mb-3 text-lg">
            <span className="pr-4">
              Ensalada de Burrata con Limón
              <br />
              <p className="font-light text-sm">
                Burrata fresca con un toque de limón y albahaca.
              </p>
            </span>
            <span className="price">7€</span>
          </div>
        </div>
        <div>
          <Galeria images={verde} />
        </div>
        {/* Sección "Que no hay huevos?" */}
        <div className="mb-4">
          <h2 className="text-center w-full items-center font-light my-4 underlinecarta text-2xl italic ">
            Que no hay huevos?
          </h2>
          <div className="price-container mb-3 text-lg ">
            <span className="pr-4 ">
              Huevo poche trufado y salsa de setas
              <br />
              <p className="font-light text-sm">
                Huevo pochado con trufa y una suave salsa de setas.
              </p>
            </span>
            <span className="price">8€</span>
          </div>
        </div>
        <div>
          <Galeria className={galeriaClass} images={huevos} />
        </div>
        {/* Sección "Seguimos Compartiendo o cada uno a lo suyo?" */}
        <div className="mb-4">
          <h2 className="text-center w-full items-center font-light my-4 underlinecarta text-2xl italic ">
            Seguimos Compartiendo o cada uno a lo suyo?
          </h2>
          <div className="price-container mb-3 text-lg">
            <span className="pr-4">
              Croquetas de cecina y queso azul
              <br />
              <p className="font-light text-sm">
                Deliciosas croquetas rellenas de cecina y queso azul.
              </p>
            </span>
            <span className="price">9€</span>
          </div>
          <div className="price-container mb-3 text-lg">
            <span className="pr-4">
              Mollete de Carilleras Orientales
              <br />
              <p className="font-light text-sm">
                Mollete relleno de carilleras con un toque oriental.
              </p>
            </span>
            <span className="price">10€</span>
          </div>
          <div className="price-container mb-3 text-lg">
            <span className="pr-4">
              Morro de Pulpo
              <br />
              <p className="font-light text-sm">
                Pulpo a la parrilla con especias mediterráneas.
              </p>
            </span>
            <span className="price">12€</span>
          </div>
          <div className="price-container mb-3 text-lg">
            <span className="pr-4">
              Alcachofas cecina y foie
              <br />
              <p className="font-light text-sm">
                Alcachofas tiernas con cecina y foie.
              </p>
            </span>
            <span className="price">11€</span>
          </div>
          <div className="price-container mb-3 text-lg">
            <span className="pr-4">
              Alitas de pollo rebozadas
              <br />
              <p className="font-light text-sm">
                Alitas crujientes con un toque especial.
              </p>
            </span>
            <span className="price">6€</span>
          </div>
          <div className="price-container mb-3 text-lg">
            <span className="pr-4">
              Mar y montaña de chipirón y Papada
              <br />
              <p className="font-light text-sm">
                Combinación perfecta de chipirón y papada de cerdo.
              </p>
            </span>
            <span className="price">14€</span>
          </div>
        </div>
        <div>
          <Galeria images={images2} />
        </div>
        {/* Sección "Rematamos y ya lo tenemos Bien" */}
        <div className="mb-4">
          <h2 className="text-center w-full items-center font-light my-4 underlinecarta text-2xl italic ">
            Rematamos y ya lo tenemos Bien
          </h2>
          <div className="price-container mb-3 text-lg">
            <span className="pr-4">
              Lomo alto de vaca
              <br />
              <p className="font-light text-sm">
                Jugoso lomo alto de vaca a la parrilla.
              </p>
            </span>
            <span className="price">20€</span>
          </div>
          <div className="price-container mb-3 text-lg pr-4">
            <span className="pr-4">
              Abanico ibérico de Bellota y Chimichurri
              <br />
              <p className="font-light text-sm">
                Abanico ibérico con chimichurri casero.
              </p>
            </span>
            <span className="price">25€</span>
          </div>
          <div className="price-container mb-3 text-lg">
            <span className="pr-4">
              Bacalao y manitas
              <br />
              <p className="font-light text-sm">
                Bacalao confitado con manitas de cerdo.
              </p>
            </span>
            <span className="price">22€</span>
          </div>
        </div>
        <div>
          <Galeria images={images3} />
        </div>
        {/* Sección "Y para el niño que tenéis?" */}
        <div className="mb-4">
          <h2 className="text-center w-full items-center font-light my-4 underlinecarta text-2xl italic ">
            Y para el niño que tenéis?
          </h2>
          <div className="price-container mb-3 text-lg">
            <span className="pr-4">
              Llonganises de Emilio
              <br />
              <p className="font-light text-sm">
                Llonganises artesanas de la casa Emilio.
              </p>
            </span>
            <span className="price">5€</span>
          </div>
          <div className="price-container mb-3 text-lg">
            <span className="pr-4">
              Varitas de merluza
              <br />
              <p className="font-light text-sm">
                Varitas crujientes de merluza fresca.
              </p>
            </span>
            <span className="price">6€</span>
          </div>
          <div className="price-container  text-lg mb-3">
            <span className="pr-4">
              Tortilla de lo que quieras
              <br />
              <p className="font-light text-sm">
                Tortilla personalizada con patatas fritas.
              </p>
            </span>
            <span className="price">7€</span>
          </div>
          <span className="mt-10 text-lg  font-semibold">
            Todo Con Patatas Fritas*
          </span>
        </div>
        <div>
          <Galeria images={images4} />
        </div>
      </div>

    </main>
  );
};

export default Carta;
