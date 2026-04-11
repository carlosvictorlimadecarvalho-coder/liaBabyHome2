import Manta1 from "../assets/manta.jpeg";
import Manta2 from "../assets/manta (2).jpeg";
import Manta3 from "../assets/manta(3).jpeg";
import Manta4 from "../assets/manta(4).jpeg";
import Manta5 from "../assets/manta(5).jpeg";
import Manta6 from "../assets/manta (6).jpeg";
import Manta7 from "../assets/manta (7).jpeg";
import Manta8 from "../assets/manta (8).jpeg";



import { useState } from "react";
import Modal from "../Modal/Modal";

import { useRef } from "react";

function CarrosselMantas() {

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
                            <img src={produtoSelecionado.imagem2} controls></img>)}
    
                            {produtoSelecionado.imagem3 && (
                            <img src={produtoSelecionado.imagem3} controls></img>)}
                            
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

    <section id="mantas">
      <div className="container8">
        <h2 id="categoria6">Mantas em tricô</h2>

        <div className="carrossel3">
          <button className="prev2" onClick={prev}>◀</button>

          <div className="carroselInterno3" ref={carrosselRef}>
            <div className="card2" onClick={() => setProdutoSelecionado({
                              nome: "Mantas em tricô",
                              descricao: "Para as necessidades do seu bebê.",
                              imagem: Manta1
                          })
                        }>
              <img src={Manta1} alt="amamentar1" />
            </div>

            <div className="card2" onClick={() => setProdutoSelecionado({
                              nome: "Mantas em tricô",
                              descricao: "Para as necessidades do seu bebê.",
                              imagem: Manta2
                          })
                        }>
              <img src={Manta2} alt="amamentar2" />
            </div>

            <div className="card2" onClick={() => setProdutoSelecionado({
                              nome: "Mantas em tricô",
                              descricao: "Para as necessidades do seu bebê.",
                              imagem: Manta3
                          })
                        }>
              <img src={Manta3} alt="amamentar3" />
            </div>

            <div className="card2" onClick={() => setProdutoSelecionado({
                              nome: "Mantas em tricô",
                              descricao: "Para as necessidades do seu bebê.",
                              imagem: Manta4
                          })
                        }>
              <img src={Manta4}alt="amamentar4" />
            </div>
            
            <div className="card2" onClick={() => setProdutoSelecionado({
                              nome: "Mantas em tricô",
                              descricao: "Para as necessidades do seu bebê.",
                              imagem: Manta6,
                              imagem2: Manta7
                          })
                        }>
              <img src={Manta6} alt="amamentar6" />
            </div>
            <div className="card2" onClick={() => setProdutoSelecionado({
                              nome: "Mantas em tricô",
                              descricao: "Para as necessidades do seu bebê.",
                              imagem: Manta8
                          })
                        }>
              <img src={Manta8} alt="amamentar6" />
            </div>
          </div>

          <button className="next2" onClick={next}>▶</button>
        </div>
      </div>
    </section>
  </>
  );
}

export default CarrosselMantas;