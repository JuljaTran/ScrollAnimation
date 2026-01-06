import "../../styles/02_Parallax.css"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

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
        <div className="parallax-container">
            <h1>CSS Parallax Testing</h1>
            <div className="layer layer-back" ref={backRef}>Back</div>
            <div className="layer layer-middle" ref={middleRef}>Middle</div>
            <div className="layer layer-front" ref={frontRef}>Front</div>
        </div>
    );
}