import "../../styles/02_Parallax.css"
export default function ParallaxCSS() {
    return (
        <div className="parallax-container">
            <h1>CSS Parallax Testing</h1>
            <div className="layer layer-back">Back</div>
            <div className="layer layer-middle">Middle</div>
            <div className="layer layer-front">Front</div>
        </div>
    );
}