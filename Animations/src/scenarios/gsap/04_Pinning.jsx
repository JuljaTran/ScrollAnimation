import "../../styles/04_Pinning.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PinningGSAP() {
    const pinRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const animation = ScrollTrigger.create({
            animation: containerRef.current,
            start: "top top",
            end: "+=800",
            pin: pinRef.current,
            scrub: true
        });

        return () => {
            animation.kill();
        };
    }, []);

    return (
        <div className="pin-container" ref={containerRef}>
            <div className="pin-element" ref={pinRef}>Pinned</div>
            <div className="content">
                <p>Filler Content</p>
                <p>Filler Content</p>
                <p>Filler Content</p>
                <p>Filler Content</p>
            </div>
        </div>
    );
}
