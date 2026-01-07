import "../../styles/03_Complex.css"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
export default function ComplexGSAP() {
    const containerRef = useRef(null);
    const boxOneRef = useRef(null);
    const boxTwoRef = useRef(null);
    const boxThreeRef = useRef(null);

    useEffect(() => {
        const animation = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: true
            }
        });

        animation
            .to(boxOneRef.current, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1
            })
            .to(boxOneRef.current, {
                opacity: 0,
                y: -50,
                scale: 0.8,
                duration: 1
            })
            .to(boxTwoRef.current, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1
            }, "<")
            .to(boxTwoRef.current, {
                opacity: 0,
                y: -50,
                scale: 0.8,
                duration: 1
            })
            .to(boxThreeRef.current, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1
            }, "<")
            .to(boxThreeRef.current, {
                opacity: 0,
                y: -50,
                scale: 0.8,
                duration: 1
            });

        return () => {
            animation.scrollTrigger?.kill();
            animation.kill();
        };
    }, []);

    return (
        <div className="complex-container" ref={containerRef}>
            <h1>GSAP Complex</h1>
            <div className="box box-one" ref={boxOneRef}>One</div>
            <div className="box box-two" ref={boxTwoRef}>Two</div>
            <div className="box box-three" ref={boxThreeRef}>Three</div>
        </div>
    );
}