import "./04_Pinning.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import testImage1 from "../../images/Street.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function PinningGSAP() {
    const sectionRef = useRef(null);
    const visualContainerRef = useRef(null);

    useEffect(() => {
        const trigger = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: () => "+=" + sectionRef.current.scrollHeight,
            pin: visualContainerRef.current,
            pinSpacing: true,
            scrub: true
        });

        return () => trigger.kill();
    }, []);

    return (
        <div className="pin-section" ref={sectionRef}>
            <div className="pin-layout">
                <div className="pin-visual-wrapper">
                    <div className="pin-visual-container" ref={visualContainerRef}>
                        <img src={testImage1} alt="Feature visual" />
                    </div>
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
