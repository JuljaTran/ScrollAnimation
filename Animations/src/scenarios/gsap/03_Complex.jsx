import "../../styles/03_Complex.css"
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
      panelOneRef.current,
      panelTwoRef.current,
      panelThreeRef.current
    ];

    gsap.set(panels, {
      opacity: 0,
      y: 80,
      scale: 0.95
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true
      }
    });

    panels.forEach((panel) => {
      tl.to(panel, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1
      })
      .to(panel, {
        opacity: 0,
        y: -80,
        scale: 0.95,
        duration: 1
      });
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div className="complex-container" ref={containerRef}>
      <h1>GSAP Complex Scenario</h1>

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