import Manta1 from "../assets/manta.jpeg";
import Manta2 from "../assets/manta (2).jpeg";
import Manta3 from "../assets/manta(3).jpeg";
import Manta4 from "../assets/manta(4).jpeg";
import Manta5 from "../assets/manta(5).jpeg";



import { useRef } from "react";

function CarrosselMantas() {
  const carrosselRef = useRef(null);

  const next = () => {
    carrosselRef.current.scrollLeft += 380;
  };

  const prev = () => {
    carrosselRef.current.scrollLeft -= 380;
  };

  return (
    <section id="mantas">
      <div className="container8">
        <h2 id="categoria6">Mantas em tricô</h2>

        <div className="carrossel3">
          <button className="prev2" onClick={prev}>◀</button>

          <div className="carroselInterno3" ref={carrosselRef}>
            <div className="card2">
              <img src={Manta1} alt="amamentar1" />
            </div>

            <div className="card2">
              <img src={Manta2} alt="amamentar2" />
            </div>

            <div className="card2">
              <img src={Manta3} alt="amamentar3" />
            </div>

            <div className="card2">
              <img src={Manta4}alt="amamentar4" />
            </div>

            <div className="card2">
              <img src={Manta5} alt="amamentar5" />
            </div>
          </div>

          <button className="next2" onClick={next}>▶</button>
        </div>
      </div>
    </section>
  );
}

export default CarrosselMantas;