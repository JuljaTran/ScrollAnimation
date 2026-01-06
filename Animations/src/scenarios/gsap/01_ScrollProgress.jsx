import "../../styles/01_ScrollProgress.css"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgressGSAP() {
    const progressRef = useRef(null)

    useEffect(() => {
        const animation = gsap.to(progressRef.current, {
            scaleX: 1,
            transformOrigin: "left center",
            ease: "none",
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            }
        });
        return () => {
            animation.scrollTrigger?.kill();
            animation.kill();
        }
    })

    return (
        <div className="progress-wrapper">
            <div className="progress-bar" ref={progressRef} />
            <h1>GSAP Testing</h1>
        </div>
    );
}