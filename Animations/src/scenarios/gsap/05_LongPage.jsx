import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import "./05_LongPage.css";
import testImage1 from "../../images/Street.jpg";
import testImage2 from "../../images/StreetFood01.jpg";
import testImage3 from "../../images/StreetFood02.jpg";


gsap.registerPlugin(ScrollTrigger);

export default function LongPageGSAP() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.to(section, {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 30%",
          scrub: true
        }
      });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const images = [testImage1, testImage2, testImage3];

  return (
    <div className="longpage-container">
      <h1>GSAP Long Page</h1>

      {Array.from({ length: 30 }).map((_, index) => (
        <section
          className="long-section"
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
        >
          <img
            src={images[index % images.length]}
            alt="Visual"
          />
          <div className="text">
            <h2>Section {index + 1}</h2>
            <p>
              Beispielinhalt für eine lange Storytelling-Seite mit Bild- und Textkombinationen.
            </p>
          </div>
        </section>
      ))}
    </div>
  );
}