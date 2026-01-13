import "../../styles/05_LongPage.css";

export default function LongPageCSS() {
    return (
        <div>
            <div className="longpage-container">
                <h1>CSS Long page</h1>
                {Array.from({ length: 30 }).map((_, index) => (
                    <section className="long-section" key={index}>
                        <h2>Section {index + 1}</h2>
                        <p>Beispielinhalt für eine lange Scrollseite.</p>
                    </section>
                ))}
            </div>
        </div>
    );
}
