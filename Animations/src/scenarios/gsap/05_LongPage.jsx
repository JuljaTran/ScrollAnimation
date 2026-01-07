import "../../styles/05_LongPage.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LongPageGSAP() {
    const itemsRef = useRef([]);

    useEffect(() => {
        itemsRef.current.forEach((item, index) => {
            gsap.fromTo(
                item,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 90%",   
                        end: "top 10%",     
                        scrub: true
                    }
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div>
            <h1>GSAP Long page</h1>
            <div className="longpage-container">
                {Array.from({ length: 30 }).map((_, index) => (
                    <div
                        className="item"
                        key={index}
                        ref={el => itemsRef.current[index] = el}
                    >
                        Item {index + 1}
                    </div>
                ))}
            </div>
        </div>
    );
}
