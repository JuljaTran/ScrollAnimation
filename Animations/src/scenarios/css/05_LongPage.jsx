import "../../styles/05_LongPage.css";

export default function LongPageCSS() {
    return (
        <div>
            <div className="longpage-container">
                <h1>CSS Long page</h1>
                {Array.from({ length: 30 }).map((_, index) => (
                    <div className="item" key={index}>
                        Item {index + 1}
                    </div>
                ))}
            </div>
        </div>
    );
}
