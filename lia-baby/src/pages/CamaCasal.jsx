import Cama1 from "../assets/cama-casal.jpeg";
import Cama2 from "../assets/cama-casal (2).jpeg";
import Cama3 from "../assets/cama-casal (3).jpeg";
import Cama4 from "../assets/cama-casal (4).jpeg";
import Cama5 from "../assets/cama-casal (5).jpeg";
import Cama6 from "../assets/cama-casal (6).jpeg";
import Cama7 from "../assets/cama-casal (7).jpeg";
import Cama8 from "../assets/cama-casal (8).jpeg";
import CamaVideo from "../assets/cama-casal.mp4";



import { useState } from "react";
import Modal from "../Modal/Modal";

import { useRef } from "react";

function CarrosselCamaCasal() {

  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const carrosselRef = useRef(null);

  const next = () => {
    carrosselRef.current.scrollLeft += 380;
  };

  const prev = () => {
    carrosselRef.current.scrollLeft -= 380;
  };

  return (
    <>
    {produtoSelecionado && (
        
            <Modal onClose={() => setProdutoSelecionado(null)}>
                <div className="card-modal">
                    <div className="card-grande">
                        <div className="modal-body">
                            <img src={produtoSelecionado.imagem} alt="" />
            
                            {produtoSelecionado.imagem2 && (
                            <img src={produtoSelecionado.imagem2} alt=""></img>)}
    
                            {produtoSelecionado.imagem3 && (
                            <img src={produtoSelecionado.imagem3} alt=""></img>)}
                            
                            {produtoSelecionado.video && (
                            <video src={produtoSelecionado.video} controls></video>)}
            
                            <div className="objetos-card">
                                <h3>{produtoSelecionado.nome}</h3>
                                <p>{produtoSelecionado.descricao}</p>
                            </div>
                        </div>
                    </div>
                </div>
                </Modal>
        )}

    <section id="CamaCasal">
      <div className="container8">
        <h2 id="categoria6">Cama de Casal</h2>

        <div className="carrossel3">
          <button className="prev2" onClick={prev}>◀</button>

          <div className="carroselInterno3" ref={carrosselRef}>
            <div className="card2" onClick={() => setProdutoSelecionado({
                              nome: "Kit Cama de Casal",
                              descricao: "Conforto e sofisticação.",
                              imagem: Cama1,
                              imagem2: Cama2,
                          })
                        }>
              <img src={Cama1} alt="amamentar1"/>
            </div>

            <div className="card2" onClick={() => setProdutoSelecionado({
                              nome: "Kit Cama de Casal",
                              descricao: "Conforto e sofisticação.",
                              imagem: Cama6,
                              imagem2: Cama7,
                              video: CamaVideo
                          })
                        }>
              <img src={Cama6} alt="amamentar2" />
            </div>

            <div className="card2" onClick={() => setProdutoSelecionado({
                              nome: "Kit Cama de Casal",
                              descricao: "Conforto e sofisticação.",
                              imagem: Cama3,
                              imagem2: Cama4,
                          })
                        }>
              <img src={Cama3} alt="amamentar2" />
            </div>
            <div className="card2" onClick={() => setProdutoSelecionado({
                              nome: "Kit Cama de Casal",
                              descricao: "Conforto e sofisticação.",
                              imagem: Cama8
                          })
                        }>
              <img src={Cama8} alt="amamentar2" />
            </div>
          </div>

          <button className="next2" onClick={next}>▶</button>
        </div>
      </div>
    </section>
  </>
  );
}

export default CarrosselCamaCasal;