import "./03_Complex.css"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import testImage1 from "../../images/Street.jpg"
import testImage2 from "../../images/StreetFood01.jpg"
import testImage3 from "../../images/StreetFood02.jpg"

gsap.registerPlugin(ScrollTrigger);

export default function ComplexGSAP() {
  const containerRef = useRef(null);
  const panelOneRef = useRef(null);
  const panelTwoRef = useRef(null);
  const panelThreeRef = useRef(null);

  useEffect(() => {
    const panels = [
      { ref: panelOneRef, start: "top top", end: "50% top" },
      { ref: panelTwoRef, start: "50% top", end: "100% top" },
      { ref: panelThreeRef, start: "100% top", end: "150% top" },
    ];
// Panels erscheinen und verschwinden innerhalb des Containers
// Die Start- und Endpositionen werden pro Panel berechnet, um die Sequenz zu steuern
    panels.forEach((panel, i) => {
      gsap.to(panel, {
        opacity: 1,
        y: 0,
        scale: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: `${i * 100}vh top`,
          end: `${i * 100 + 100}vh top`,
          scrub: true
        }
      });
      gsap.to(panel, {
        opacity: 0,
        y: -80,
        scale: 0.95,
        scrollTrigger: {
          trigger: containerRef.current,
          start: `${i * 100 + 50}vh top`,
          end: `${i * 100 + 150}vh top`,
          scrub: true
        }
      });
    });


    // Cleanup
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="complex-container" ref={containerRef}>
      <h1>GSAP Complex</h1>

      <section className="panel panel-one" ref={panelOneRef}>
        <div className="panel-text">Feature One</div>
        <div className="panel-media">
          <img
            src={testImage1}
            alt="Test visual"
            className="panel-image"
          />
        </div>
      </section>

      <section className="panel panel-two" ref={panelTwoRef}>
        <div className="panel-text">Feature Two</div>
        <div className="panel-media">
          <img
            src={testImage2}
            alt="Test visual"
            className="panel-image"
          />
        </div>
      </section>

      <section className="panel panel-three" ref={panelThreeRef}>
        <div className="panel-text">Feature Three</div>
        <div className="panel-media">
          <img
            src={testImage3}
            alt="Test visual"
            className="panel-image"
          />
        </div>
      </section>
    </div>
  );
}