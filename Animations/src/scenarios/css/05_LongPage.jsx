import "../../styles/05_LongPage.css";

export default function LongPageCSS() {
    return (
        <div>
            <h1>CSS Long page</h1>
            <div className="longpage-container">
                {Array.from({ length: 30 }).map((_, index) => (
                    <div className="item" key={index}>
                        Item {index + 1}
                    </div>
                ))}
            </div>
        </div>
    );
}
