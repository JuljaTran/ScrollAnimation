import "../../styles/02_Parallax.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import testImage1 from "../../images/Street.jpg";

gsap.registerPlugin(ScrollTrigger);
export default function ParallaxGSAP() {
    const backRef = useRef(null);
    const middleRef = useRef(null);
    const frontRef = useRef(null);

    useEffect (() => {
        const animation = [
            gsap.to(backRef.current, {
                y: -100,
                ease: "none",
                scrollTrigger: {
                    trigger: document.body,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                }
            }),
            gsap.to(middleRef.current, {
                y: -200,
                ease: "none",
                scrollTrigger: {
                    trigger: document.body,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                }
            }),
            gsap.to(frontRef.current, {
                y: -300,
                ease: "none",
                scrollTrigger: {
                    trigger: document.body,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                }
            })
        ];

        return() => {
            animation.forEach(animation => {
                animation.scrollTrigger?.kill();
                animation.kill();
            });
        };
    })

    return (
        <div className="parallax-section">
            <h1>GSAP Parallax</h1>
            <div className="parallax-background">
                <img src={testImage1} alt="Background visual" />
            </div>

            <div className="parallax-content">
                <h1>Parallax Headline</h1>
                <p>
                    Beispieltext für eine typische Hero oder Storytelling Sektion,
                    bei der sich Bild und Text unterschiedlich zur Scrollposition bewegen.
                </p>
            </div>
        </div>
    );
}