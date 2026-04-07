import { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import Foto from "../../assets/image.png"

function Navbar() {
  const [ativo, setAtivo] = useState(false);

  const hamburguerRef = useRef(null);
  const navbar2Ref = useRef(null);

  function toggleMenu() {
    setAtivo(!ativo);
  }

  useEffect(() => {
    function handleClick(e) {
      if (
        navbar2Ref.current &&
        !navbar2Ref.current.contains(e.target) &&
        hamburguerRef.current &&
        !hamburguerRef.current.contains(e.target)
      ) {
        setAtivo(false);
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <nav>
        <div className="navbar">
          <img src={Foto} alt="Minha foto" id="logoInicio"/>

          <div className="item">
            <a href="#inicio">Inicio</a>
          </div>
          <div className="item">
            <a href="#desejados">Produtos</a>
          </div>
          <div className="item">
            <a href="/">Sobre</a>
          </div>

          <div className="posicaoHamburguer">
            <div
              id="hamburguer"
              ref={hamburguerRef}
              onClick={toggleMenu}
            >
              ☰
            </div>
          </div>
        </div>
      </nav>

      <div className="navbarContainer">
        <div
          id="navbar2"
          ref={navbar2Ref}
          className={ativo ? "ativo" : ""}
          >
          <div className="item2"><a href="#trocador">Trocador</a></div>
          <div className="item2"><a href="#almofadaAma">Almofada</a></div>
          <div className="item2"><a href="#cortinado">Cortinado</a></div>
          <div className="item2"><a href="#dossel">Dossel</a></div>
          <div className="item2"><a href="#mantas">Mantas</a></div>
          <div className="item2"><a href="#segura">Segura neném</a></div>
          <div className="item2"><a href="#ninho">Ninho</a></div>
          <div className="item2"><a href="#kitBercoMaternidade">Kit Berço Maternidade</a></div>
          <div className="item2"><a href="/">Kit Cama</a></div>
          <div className="item2"><a href="/">Kit Berço</a></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;