import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/05_LongPage.css";

gsap.registerPlugin(ScrollTrigger);

export default function LongPageGSAP() {
    const sectionsRef = useRef([]);

    useEffect(() => {
        sectionsRef.current.forEach(section => {
            gsap.fromTo(
                section,
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        end: "top 50%",
                        scrub: true
                    }
                }
            );
        });

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    return (
        <div className="longpage">
            <h1>GSAP Long Page Scenario</h1>

            {Array.from({ length: 30 }).map((_, index) => (
                <section
                    className="long-section"
                    key={index}
                    ref={el => sectionsRef.current[index] = el}
                >
                    <h2>Section {index + 1}</h2>
                    <p>Beispielinhalt für eine lange Scrollseite.</p>
                </section>
            ))}
        </div>
    );
}
