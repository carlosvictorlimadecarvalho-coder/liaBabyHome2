import "../styles/Home.css"
import Xixi from "../assets/pano xixi.jpeg"
import Boca from "../assets/pano de boca.jpeg";
import Segura from "../assets/segura.jpeg"
import Tapete from "../assets/tapete.jpeg";
import Amamentar2 from "../assets/amamentar (2).jpeg";
import Trocador from "../assets/trocador.jpeg";
import Ninho from "../assets/trocador2.jpeg";
import toalhaFlor from "../assets/toalhaFlor.jpeg"

import { useState } from "react";
import Modal from "../Modal/Modal";

import { useRef } from "react";

function Carrossel() {
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
      
          <div className="card-grande">
          <img src={produtoSelecionado.imagem} alt="" />
  
          <div className="objetos-card">
              <h3>{produtoSelecionado.nome}</h3>
              <p>{produtoSelecionado.descricao}</p>
          </div>
          </div>
      </Modal>
  )}
    
    <section id="desejados">
      <h2 id="categoria1">Desejados</h2>

      <div className="centro">
        <div className="container3">
          <div className="carrossel">

            <button className="prev" onClick={handlePrev}>◀</button>

            <div className="carroselInterno" ref={carrosselRef}>

              <div className="card" 
            onClick={() => setProdutoSelecionado({
                nome: "Pano de Xixi",
                descricao: "Para as necessidades do seu bebê.",
                imagem: Xixi
            })
          }>
                <img src={Xixi} alt="" />
                <p>Cueiro - Pano de Xixi</p>
              </div>

              <div className="card"
              onClick={() => setProdutoSelecionado({
                nome: "Pano de Boca",
                descricao: "Para as necessidades do seu bebê.",
                imagem: Boca
            })
          }>
                <img src={Boca} alt="" />
                <p>Cueiro - Pano de Boca</p>
              </div>

              <div className="card"
              onClick={() => setProdutoSelecionado({
                nome: "Segura Neném",
                descricao: "Para as necessidades do seu bebê.",
                imagem: Segura
            })
          }>
                <img src={Segura} alt="" />
                <p>Segura Neném</p>
              </div>

              <div className="card"
              onClick={() => setProdutoSelecionado({
                nome: "Tapete Bubbly",
                descricao: "",
                imagem: Tapete
            })
          }>
                <img src={Tapete} alt="" />
                <p>Tapete Bubbly</p>
              </div>

              <div className="card"
              onClick={() => setProdutoSelecionado({
                nome: "Almofada de Amamentar",
                descricao: "Para as necessidades do seu bebê.",
                imagem: Amamentar2
            })
          }>
                <img src={Amamentar2} alt="" />
                <p>Almofada de Amamentar</p>
              </div>

              <div className="card"
              onClick={() => setProdutoSelecionado({
                nome: "Trocador Americano",
                descricao: "Para as necessidades do seu bebê.",
                imagem: Trocador
            })
          }>
                <img src={Trocador} alt="" />
                <p>Trocador Americano</p>
              </div>

              <div className="card"
              onClick={() => setProdutoSelecionado({
                nome: "Ninho",
                descricao: "Para as necessidades do seu bebê.",
                imagem: Ninho
            })
          }>
                <img src={Ninho} alt="" />
                <p>Ninho</p>
              </div>

              <div className="card"
              onClick={() => setProdutoSelecionado({
                nome: "Tapete Lorena Canals Flores",
                descricao: "Para as necessidades do seu bebê.",
                imagem: toalhaFlor
            })
          }>
                <img src={toalhaFlor} alt="" />
                <p>Tapete Lorena Canals Flores</p>
              </div>

            </div>

            <button className="next" onClick={handleNext}>▶</button>

          </div>
        </div>
      </div>
    </section>
  </>);
}

export default Carrossel;