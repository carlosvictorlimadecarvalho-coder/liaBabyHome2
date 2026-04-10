import "../styles/Home.css";
import Navbar from "../components/Navbar/Navbar";
import HorizontalScroll from "../pages/HorizontalScroll";
import Desejados from "../pages/Desejados";
import Mantas from "../pages/Mantas";
import Mantas2 from "../pages/Mantas2";
import KitBmaternidade from "./KitBMaternidade";



import { useState } from "react";
import Modal from "../Modal/Modal";




import Quarto from "../assets/quartoCopia.png";
import Trocador from "../assets/trocador.jpeg";
import TrocadorLado from "../assets/trocadorLado(1).jpeg";
import Ninho from "../assets/trocador2.jpeg";
import Amamentar from "../assets/amamentar.jpeg";
import Amamentar3 from "../assets/amamentar (3).jpeg";
import Amamentar4 from "../assets/amamentar(4).jpeg";
import Amamentar5 from "../assets/amamentar(5).jpeg";
import VideoCortinado from "../assets/video cortinado.mp4";
import Cortinado4 from "../assets/cortinado(4).jpeg";
import Cortinado3 from "../assets/cortinado(3).jpeg";
import Cortinado2 from "../assets/cortinado (2).jpeg";
import Cortinado from "../assets/cortinado.jpeg";
import Dossel from "../assets/dossel.jpeg";
import Dossel2 from "../assets/dossel (2).jpeg";
import Segura from "../assets/segura.jpeg";
import Segura2 from "../assets/seguranenem.jpeg";


export const Home = ()=>{
    const [produtoSelecionado, setProdutoSelecionado] = useState(null);
    return(
        <>
        {produtoSelecionado && (

    <Modal onClose={() => setProdutoSelecionado(null)}>
    <div className="card-modal">
        <div className="card-grande">
            <div className="modal-body">
                <img src={produtoSelecionado.imagem} alt="" />

                {produtoSelecionado.imagem2 && (
                <img src={produtoSelecionado.imagem2} controls></img>)}
                
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
                        imagem: Trocador,
                        imagem2: TrocadorLado
                        })
                    }>
                    <img src={Trocador} alt="trocador americano"/>
                    <p>Trocador Americano</p>
                </div>
            </div>
        </div>
    </section>



        {/*Amamentar*/}
    <section id="almofadaAma">
        <div className="container5">
            <h2 id="categoria3">Almofada de Amamentar</h2>
            <div className="cards6">
                <div className="cardAmamentar" onClick={() => setProdutoSelecionado({
                        nome: "Almofada de Amamentar",
                        descricao: "Ideal para apoiar o bebê durante a \n amamentação.",
                        imagem: Amamentar
                        })
                    }>
                    <img src={Amamentar} alt=""/>
                </div>
                <div className="cardAmamentar" onClick={() => setProdutoSelecionado({
                        nome: "Almofada de Amamentar",
                        descricao: "Ideal para apoiar o bebê durante a \n amamentação.",
                        imagem: Amamentar5
                        })
                    }>
                    <img src={Amamentar5} alt=""/>
                </div>
                <div className="cardAmamentar" onClick={() => setProdutoSelecionado({
                        nome: "Almofada de Amamentar",
                        descricao: "Ideal para apoiar o bebê durante a \n amamentação.",
                        imagem: Amamentar3
                        })
                    }>
                    <img src={Amamentar3} alt=""/>
                </div>
                <div className="cardAmamentar" onClick={() => setProdutoSelecionado({
                        nome: "Almofada de Amamentar",
                        descricao: "Ideal para apoiar o bebê durante a \n amamentação.",
                        imagem: Amamentar4
                        })
                    }>
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
                <div className="cardCortinado" onClick={() => setProdutoSelecionado({
                        nome: "Cortinado",
                        descricao: "Crie um ambiente aconchegante para \n seu bebê",
                        imagem: Cortinado2
                        })
                    }>
                    <img src={Cortinado2} alt="cortinado"/>
                </div>
                <div className="cardCortinado" onClick={() => setProdutoSelecionado({
                        nome: "Cortinado",
                        descricao: "Crie um ambiente aconchegante para \n seu bebê",
                        imagem: Cortinado
                        })
                    }>
                    <img src={Cortinado} alt="cortinado"/>
                </div>
                <div className="cardCortinado" onClick={() => setProdutoSelecionado({
                        nome: "Cortinado",
                        descricao: "Crie um ambiente aconchegante para \n seu bebê",
                        imagem: Cortinado3,
                        imagem2: '',
                        video: VideoCortinado
                        })
                    }>
                    <img src={Cortinado3} alt="cortinado"/>
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
                <div className="cardDossel" onClick={() => setProdutoSelecionado({
                        nome: "Dossel Meia Lua Dourado Duplo",
                        descricao: "Qualidade e segurança que seu bebê merece",
                        imagem: Dossel
                        })
                    }>
                    <img src={Dossel} alt="dossel"/>
                    <p>Dossel Meia Lua Dourado Duplo</p>
                </div>
                <div className="cardDossel" onClick={() => setProdutoSelecionado({
                        nome: "Dossel Meia Lua Simples",
                        descricao: "Qualidade e segurança que seu bebê merece",
                        imagem: Dossel2
                        })
                    }>
                    <img src={Dossel2} alt="dossel"/>
                    <p>Dossel Meia Lua Simples</p>
                </div>
                
            </div>
        </div>
    </section>



        <Mantas/>
        
        <Mantas2/>

        {/*Segura Neném*/}
        <section id="segura">
        <div className="container9">
            <h2 id="categoria7">Segura Neném</h2>
            <div className="cards4">
                <div className="cardSegura" onClick={() => setProdutoSelecionado({
                        nome: "Segura Neném",
                        descricao: "Ideal e confortável para seu bebê",
                        imagem: Segura                        
                    })
                    }>
                    <img src={Segura} alt="segura neném"/>
                </div>
                <div className="cardSegura" onClick={() => setProdutoSelecionado({
                        nome: "Segura Neném",
                        descricao: "Ideal e confortável para seu bebê",
                        imagem: Segura2                        
                    })
                    }>
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
                <div className="cardNinho" onClick={() => setProdutoSelecionado({
                        nome: "Ninho",
                        descricao: "Ideal e confortável para seu bebê",
                        imagem: Ninho                        
                    })
                    }>
                    <img src={Ninho} alt="ninho"/>
                </div>
            </div>
        </div>
    </section>




    <KitBmaternidade/>




    </>
    )
}
export default Home;