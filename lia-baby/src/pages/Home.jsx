import "../styles/Home.css";
import Navbar from "../components/Navbar/Navbar";
import HorizontalScroll from "../pages/HorizontalScroll";
import Desejados from "../pages/Desejados";
import Mantas from "../pages/Mantas"

import { useState } from "react";
import Modal from "../Modal/Modal";




import Quarto from "../assets/quartoCopia.png";
import Trocador from "../assets/trocador.jpeg";
import Ninho from "../assets/trocador2.jpeg";
import Amamentar from "../assets/amamentar.jpeg";
import Amamentar2 from "../assets/amamentar (2).jpeg";
import Amamentar3 from "../assets/amamentar (3).jpeg";
import Amamentar4 from "../assets/amamentar(4).jpeg";
import Cortinado2 from "../assets/cortinado (2).jpeg";
import Cortinado from "../assets/cortinado.jpeg";
import Dossel from "../assets/dossel.jpeg"
import Dossel2 from "../assets/dossel (2).jpeg"
import Segura from "../assets/segura.jpeg"
import Segura2 from "../assets/seguranenem.jpeg"
import KitBMat from "../assets/kit berço.jpeg"
import KitBMat2 from "../assets/kit berço (2).jpeg"
import KitBMat3 from "../assets/kit berço (3).jpeg"


export const Home = ()=>{
    const [produtoSelecionado, setProdutoSelecionado] = useState(null);
    return(
        <>
        <Navbar/>
        <header id="inicio">
            <div className="container">
                <div className="banner">
                    <img src={Quarto} alt="" />
                    <div className="overlay"></div>
                </div>
                <div className="titulo">
                    <p>O enxoval perfeito para <br/>receber quem você mais ama.</p>
                    <h3 className="more"><a href="#desejados">Mais →</a></h3>
                </div>
            </div>
        </header>


        <HorizontalScroll/>


        <Desejados />



            {/* Trocador */}
        
            
        
        <section id="trocador">
        <div className="container4">
            <h2 id="categoria2">Trocador</h2>
            <div className="cards">
                <div className="cardTrocador" 
                            onClick={() => setProdutoSelecionado({
                        nome: "Trocador Americano",
                        descricao: "Super confortável",
                        imagem: Trocador
                        })
                    }>
                    <img src={Trocador} alt="trocador americano"/>
                    <p>Trocador Americano</p>
                </div>
            </div>
        </div>
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
    </section>



        {/*Amamentar*/}
    <section id="almofadaAma">
        <div className="container5">
            <h2 id="categoria3">Almofada de Amamentar</h2>
            <div className="cards6">
                <div className="cardAmamentar">
                    <img src={Amamentar} alt=""/>
                </div>
                <div className="cardAmamentar">
                    <img src={Amamentar2} alt=""/>
                </div>
                <div className="cardAmamentar">
                    <img src={Amamentar3} alt=""/>
                </div>
                <div className="cardAmamentar">
                    <img src={Amamentar4} alt=""/>
                </div>
            </div>
        </div>
    </section>



        {/*Cortinado*/}
    <section id="cortinado">
        <div className="container6">
            <h2 id="categoria4">Cortinado</h2>
            <div className="cards2">
                <div className="cardCortinado">
                    <img src={Cortinado2} alt="trocador americano"/>
                </div>
                <div className="cardCortinado">
                    <img src={Cortinado} alt="trocador americano"/>
                </div>
                
            </div>
            <p>Mosquiteiro - Protege seu bebê</p>
        </div>
    </section>



        {/*Dossel*/}
    <section id="dossel">
        <div className="container7">
            <h2 id="categoria5">Dossel</h2>
            
            <div className="cards3">
                <div className="cardDossel">
                    <img src={Dossel} alt="dossel"/>
                    <p>Dossel Meia Lua Dourado Duplo</p>
                </div>
                <div className="cardDossel">
                    <img src={Dossel2} alt="dossel"/>
                    <p>Dossel Meia Lua Simples</p>
                </div>
                
            </div>
        </div>
    </section>



        <Mantas/>

        {/*Segura Neném*/}
        <section id="segura">
        <div className="container9">
            <h2 id="categoria7">Segura Neném</h2>
            <div className="cards4">
                <div className="cardSegura">
                    <img src={Segura} alt="segura neném"/>
                </div>
                <div className="cardSegura">
                    <img src={Segura2} alt="segura neném"/>
                </div>
            </div>
        </div>
    </section>



        {/*Ninho*/}
    <section id="ninho">
        <div className="container10">
            <h2 id="categoria8">Ninho</h2>
            <div className="cards5">
                <div className="cardNinho">
                    <img src={Ninho} alt=""/>
                </div>
            </div>
        </div>
    </section>


        {/* Kit - Maternidade */}
<section id="kitBercoMaternidade">
        <div className="container11">
            <h2 id="categoria9">Kit Berço Maternidade</h2>
            <div className="cards6">
                <div className="cardKitBerco">
                    <img src={KitBMat} alt="kit berço"/>
                </div>
                <div className="cardKitBerco">
                    <img src={KitBMat2} alt="kit berço"/>
                </div>
                <div className="cardKitBerco">
                    <img src={KitBMat3} alt="kit berço"/>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
export default Home;