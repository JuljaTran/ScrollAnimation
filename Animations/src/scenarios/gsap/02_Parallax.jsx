import "./02_Parallax.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import testImage1 from "../../images/Street.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxGSAP() {
  const backRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(backRef.current, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax-section",
          start: "top top",
          end: "bottom bottom",
          scrub: true
        }
      });

      gsap.to(contentRef.current, {
        y: -300,
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax-section",
          start: "top top",
          end: "bottom bottom",
          scrub: true
        }
      });
    }, []);

    return () => ctx.revert();
  }, []);

  return (
    <div className="parallax-section">
      <h1>GSAP Parallax</h1>

      <div className="parallax-background" ref={backRef}>
        <img src={testImage1} alt="Background visual" />
      </div>

      <div className="parallax-content" ref={contentRef}>
        <h1>Parallax Headline</h1>
        <p>
          Beispieltext für eine typische Hero oder Storytelling Sektion,
          bei der sich Bild und Text unterschiedlich zur Scrollposition bewegen.
        </p>
      </div>
    </div>
  );
}
