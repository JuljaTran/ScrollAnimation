import "./04_SimplePinning.css";
import testImage1 from "../../images/Street.jpg";

export default function PinningSimpleCSS() {
  return (
    <div className="pin-section">
        <div className="pin-wrapper">
            <div className="pin-visual">
                <img src={testImage1} alt="Feature visual" />
            </div>

            <div className="pin-content">
                <h1>CSS Pinning</h1>
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