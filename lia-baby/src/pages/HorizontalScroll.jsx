import Visao1 from "../assets/visoes1.png"
import Visao3 from "../assets/visoes3.png"
import { useEffect, useRef } from "react";

import "../styles/Horizontal.css"

function HorizontalScroll() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const content = contentRef.current;

      if (!section || !content) return;

      const scrollPosition = window.scrollY;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition <= sectionTop + sectionHeight
      ) {
        const scrollInside = scrollPosition - sectionTop;
        content.style.transform = `translateX(-${scrollInside}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container2">
      <section className="horizontal-section" ref={sectionRef}>
        <div className="sticky-wrapper">
          <div className="horizontal-content" ref={contentRef}>
            
            <div className="panel">
              <div className="card1-panel">
                <img src={Visao1} alt="" />
              </div>
            </div>

            <div className="panel">
              <div className="card3-panel">
                <img src={Visao3} alt="" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
export default HorizontalScroll;