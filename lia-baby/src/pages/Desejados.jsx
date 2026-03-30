import "../styles/Home.css"
import Xixi from "../assets/pano xixi.jpeg"
import Boca from "../assets/pano de boca.jpeg";
import Segura from "../assets/segura.jpeg"
import Tapete from "../assets/tapete.jpeg";
import Amamentar2 from "../assets/amamentar (2).jpeg";
import Trocador from "../assets/trocador.jpeg";
import Trocador2 from "../assets/trocador2.jpeg";
import toalhaFlor from "../assets/toalhaFlor.jpeg"

import { useRef } from "react";

function Carrossel() {
  const carrosselRef = useRef(null);

  const handleNext = () => {
    carrosselRef.current.scrollLeft += 380;
  };

  const handlePrev = () => {
    carrosselRef.current.scrollLeft -= 380;
  };

  return (
    <section id="desejados">
      <h2 id="categoria1">Desejados</h2>

      <div className="centro">
        <div className="container3">
          <div className="carrossel">

            <button className="prev" onClick={handlePrev}>◀</button>

            <div className="carroselInterno" ref={carrosselRef}>

              <div className="card">
                <img src={Xixi} alt="" />
                <p>Cueiro - Pano de Xixi</p>
              </div>

              <div className="card">
                <img src={Boca} alt="" />
                <p>Cueiro - Pano de Boca</p>
              </div>

              <div className="card">
                <img src={Segura} alt="" />
                <p>Segura Neném</p>
              </div>

              <div className="card">
                <img src={Tapete} alt="" />
                <p>Tapete Bubbly</p>
              </div>

              <div className="card">
                <img src={Amamentar2} alt="" />
                <p>Almofada de Amamentar</p>
              </div>

              <div className="card">
                <img src={Trocador} alt="" />
                <p>Trocador Americano</p>
              </div>

              <div className="card">
                <img src={Trocador2} alt="" />
                <p>Ninho</p>
              </div>

              <div className="card">
                <img src={toalhaFlor} alt="" />
                <p>Tapete Lorena Canals Flores</p>
              </div>

            </div>

            <button className="next" onClick={handleNext}>▶</button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Carrossel;