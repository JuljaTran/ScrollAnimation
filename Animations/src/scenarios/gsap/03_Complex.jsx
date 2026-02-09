import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./03_Complex.css"
import testImage1 from "../../images/Street.jpg"
import testImage2 from "../../images/StreetFood01.jpg"
import testImage3 from "../../images/StreetFood02.jpg"

gsap.registerPlugin(ScrollTrigger);

export default function ComplexGSAP() {
  const containerRef = useRef(null);

  useEffect(() => {
    const panels = containerRef.current.querySelectorAll(".panel");

    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      }
    })
    .fromTo(panels[0], { opacity: 0, yPercent: -40, scale: 0.9 }, { opacity: 1, yPercent: -50, scale: 1, ease: "none" })
    .to(panels[0], { opacity: 0, yPercent: -60, scale: 0.9, ease: "none" })
    .fromTo(panels[1], { opacity: 0, yPercent: -40, scale: 0.9 }, { opacity: 1, yPercent: -50, scale: 1, ease: "none" })
    .to(panels[1], { opacity: 0, yPercent: -60, scale: 0.9, ease: "none" })
    .fromTo(panels[2], { opacity: 0, yPercent: -40, scale: 0.9 }, { opacity: 1, yPercent: -50, scale: 1, ease: "none" })
    .to(panels[2], { opacity: 0, yPercent: -60, scale: 0.9, ease: "none" });
  }, []);
  return (
    <div className="complex-container" ref={containerRef}>
      <h1>GSAP Complex</h1>
      <section className="panel">
        <div className="panel-text">Feature One</div> 
        <div className="panel-media">
          <img src={testImage1} alt="Test visual" className="panel-image" />
        </div>
      </section>

      <section className="panel">
        <div className="panel-text">Feature Two</div>
        <div className="panel-media">
          <img src={testImage2} alt="Test visual" className="panel-image" />
        </div>
      </section>

      <section className="panel">
        <div className="panel-text">Feature Three</div>
        <div className="panel-media">
          <img src={testImage3} alt="Test visual" className="panel-image" />
        </div>
      </section>
    </div>
  );
}