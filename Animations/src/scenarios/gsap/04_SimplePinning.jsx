import "./04_SimplePinning.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import testImage1 from "../../images/Street.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function PinningSimpleGSAP() {

    useEffect(() => {
        const trigger = ScrollTrigger.create({
            trigger: ".pin-section",
            start: "top top",
            end: "bottom bottom",
            pin: ".pin-visual",
            pinSpacing: true
       });
       
       return () => trigger.kill();
    }, []);

  return (
    <div className="pin-section">
        <div className="pin-wrapper">
            <div className="pin-visual">
                <img src={testImage1} alt="Feature visual" />
            </div>

            <div className="pin-content">
                <h1>GSAP Pinning</h1>
                <section className="step">
                <h2>Text One</h2>
                <p>Kurze Beschreibung</p>
                </section>
                <section className="step">
                <h2>Text Two</h2>
                <p>Kurze Beschreibung</p>
                </section>
                <section className="step">
                <h2>Text Three</h2>
                <p>Kurze Beschreibung</p>
                </section>
            </div>
        </div>
    </div>
  );
}