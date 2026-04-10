import KitBMat from "../assets/kit berço.jpeg";
import KitBMat2 from "../assets/kit berço (2).jpeg";
import KitBMat3 from "../assets/kit berço (3).jpeg";
import KitBMat4 from "../assets/kit berço (4).jpeg";
import KitBMat5 from "../assets/kit berço (5).jpeg";
import KitBMat6 from "../assets/kit berço (6).jpeg";
import KitBMat7 from "../assets/kit berço (7).jpeg";
import KitBMat8 from "../assets/kit berço (8).jpeg";
import KitBMat9 from "../assets/kit berço (9).jpeg";
import KitBMat10 from "../assets/kit berço (10).jpeg";
import KitBMat11 from "../assets/kit berço (11).jpeg";
import KitBMat12 from "../assets/kit berço (12).jpeg";
import KitBMat13 from "../assets/kit berço (13).jpeg";
import KitBMat13Video from "../assets/kit berço (13).mp4";


import { useState } from "react";
import Modal from "../Modal/Modal";

import { useRef } from "react";

function KitBmaternidade() {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
    
    
  
    const carrosselRef = useRef(null);
  
    const handleNext = () => {
      carrosselRef.current.scrollLeft += 380;
    };
  
    const handlePrev = () => {
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
      
      <section id="kitBercoMaternidade">
  
        <div className="centro">
          <div className="container11">
            <h2 id="categoria9">Kit Berço Maternidade</h2>
            <div className="carrossel4">
  
              <button className="prev" onClick={handlePrev}>◀</button>
  
              <div className="carroselInterno4" ref={carrosselRef}>
  
                <div className="card3" 
              onClick={() => setProdutoSelecionado({
                  nome: "Kit Berço Maternidade",
                  descricao: "Conforto e estilo para o berço do seu bebê.",
                  imagem: KitBMat
              })
            }>
                  <img src={KitBMat} alt="" />
                </div>
  
                <div className="card3"
                onClick={() => setProdutoSelecionado({
                  nome: "Kit Berço Maternidade",
                  descricao: "Conforto e estilo para o berço do seu bebê.",
                  imagem: KitBMat9,
                  imagem2: KitBMat8,
                  imagem3: KitBMat7
              })
            }>
                  <img src={KitBMat9} alt="" />
                </div>
  
                <div className="card3"
                onClick={() => setProdutoSelecionado({
                  nome: "Kit Berço Maternidade",
                  descricao: "Conforto e estilo para o berço do seu bebê.",
                  imagem: KitBMat3
              })
            }>
                  <img src={KitBMat3} alt="" />
                </div>
  
                <div className="card3"
                onClick={() => setProdutoSelecionado({
                  nome: "Kit Berço Maternidade",
                  descricao: "Conforto e estilo para o berço do seu bebê.",
                  imagem: KitBMat13,
                  video: KitBMat13Video
              })
            }>
                  <img src={KitBMat13} alt="" />
                </div>
  
                <div className="card3"
                onClick={() => setProdutoSelecionado({
                  nome: "Kit Berço Maternidade",
                  descricao: "Conforto e estilo para o berço do seu bebê.",
                  imagem: KitBMat6
              })
            }>
                  <img src={KitBMat6} alt="" />
                </div>

                <div className="card3"
                onClick={() => setProdutoSelecionado({
                  nome: "Kit Berço Maternidade",
                  descricao: "Conforto e estilo para o berço do seu bebê.",
                  imagem: KitBMat10,
                  imagem2: KitBMat11,
                  imagem3: KitBMat12
              })
            }>
                  <img src={KitBMat10} alt="" />
                </div>
  
              </div>
  
              <button className="next" onClick={handleNext}>▶</button>
  
            </div>
          </div>
        </div>
      </section>
    </>
    );
}

export default KitBmaternidade;