import Mantas1 from "../assets/mantas 2.jpeg";
import Mantas2 from "../assets/mantas 2 (2).jpeg";
import Mantas3 from "../assets/mantas 2 (3).jpeg";
import Mantas4 from "../assets/mantas 2 (4).jpeg";
import Mantas5 from "../assets/mantas 2 (5).jpeg";




import { useState } from "react";
import Modal from "../Modal/Modal";

import { useRef } from "react";

function CarrosselMantas2() {

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
        <h2 id="categoria6">Mantas</h2>

        <div className="carrossel3">
          <button className="prev2" onClick={prev}>◀</button>

          <div className="carroselInterno3" ref={carrosselRef}>
            <div className="card2" onClick={() => setProdutoSelecionado({
                              nome: "Pano de Xixi",
                              descricao: "Para as necessidades do seu bebê.",
                              imagem: Mantas1,
                              imagem2: Mantas2,
                          })
                        }>
              <img src={Mantas1} alt="amamentar1" />
            </div>

            <div className="card2" onClick={() => setProdutoSelecionado({
                              nome: "Pano de Xixi",
                              descricao: "Para as necessidades do seu bebê.",
                              imagem: Mantas3
                          })
                        }>
              <img src={Mantas3} alt="amamentar2" />
            </div>

            <div className="card2" onClick={() => setProdutoSelecionado({
                              nome: "Pano de Xixi",
                              descricao: "Para as necessidades do seu bebê.",
                              imagem: Mantas4,
                              imagem2: Mantas5
                          })
                        }>
              <img src={Mantas4} alt="amamentar3" />
            </div>

            <div className="card2" onClick={() => setProdutoSelecionado({
                              nome: "Pano de Xixi",
                              descricao: "Para as necessidades do seu bebê.",
                              imagem: Mantas5
                          })
                        }>
              <img src={Mantas5}alt="amamentar4" />
            </div>

            <div className="card2" onClick={() => setProdutoSelecionado({
                              nome: "Pano de Xixi",
                              descricao: "Para as necessidades do seu bebê.",
                              imagem: Manta5
                          })
                        }>
              <img src={Mantas5} alt="amamentar5" />
            </div>
          </div>

          <button className="next2" onClick={next}>▶</button>
        </div>
      </div>
    </section>
  </>
  );
}

export default CarrosselMantas2;