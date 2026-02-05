import "./04_Pinning.css"
import testImage1 from "../../images/Street.jpg"

export default function PinningCSS() {
    return (
        <div className="pin-section">
            <div className="pin-layout">
                <div className="pin-visual">
                    <img src={testImage1} alt="Feature visual" />
                </div>

                <div className="pin-content">
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