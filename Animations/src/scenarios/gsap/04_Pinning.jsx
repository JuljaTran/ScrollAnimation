import "../../styles/04_Pinning.css"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import testImage1 from "../../images/Street.jpg"

gsap.registerPlugin(ScrollTrigger);

export default function PinningGSAP() {
    const sectionRef = useRef(null);
    const visualRef = useRef(null);

    useEffect(() => {
        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            pin: visualRef.current,
            pinSpacing: true,
            scrub: true
        });

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    return (
        <div className="pin-section gsap-pinning" ref={sectionRef}>
            <h1>GSAP Pinning</h1>
            <div className="pin-layout">
                <div className="pin-visual" ref={visualRef}>
                    <img src={testImage1} alt="Feature visual" />
                </div>

                <div className="pin-content">
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

