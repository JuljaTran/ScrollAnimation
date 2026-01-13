import "../../styles/02_Parallax.css"
import testImage1 from "../../images/Street.jpg";

export default function ParallaxCSS() {
    return (
        <div className="parallax-section">
            <h1>CSS Parallax</h1>
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