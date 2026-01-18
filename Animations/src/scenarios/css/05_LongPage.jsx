import "./05_LongPage.css";
import testImage1 from "../../images/Street.jpg";
import testImage2 from "../../images/StreetFood01.jpg";
import testImage3 from "../../images/StreetFood02.jpg";

export default function LongPageCSS() {
  const images = [testImage1, testImage2, testImage3];
  
  return (
      <div className="longpage-container">
        <h1>CSS Long Page</h1>

        {Array.from({ length: 30 }).map((_, index) => (
          <section className="long-section" key={index}>
            <img
              src={images[index % images.length]}
              alt={`Visual ${index + 1}`}
            />
            <div className="text">
              <h2>Section {index + 1}</h2>
              <p>
                Beispielinhalt für eine scrollbasierte Storytelling-Sektion, wie sie
                häufig auf umfangreichen Marketing- oder Produktseiten eingesetzt wird.
              </p>
            </div>
          </section>
        ))}
      </div>
    );
  }
