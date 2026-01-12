import "../../styles/03_Complex.css"
import testImage1 from "../../images/Street.jpg"
import testImage2 from "../../images/StreetFood01.jpg"
import testImage3 from "../../images/StreetFood02.jpg"

export default function ComplexCSS() {
    return (
        <div className="complex-container">
            <h1>CSS Complex Scenario</h1>
            <section className="panel panel-one">
                <div className="panel-text">Feature One</div> 
                <div className="panel-media">
                    <img src={testImage1}
                    alt="Test visual"
                    className="panel-image">    
                    </img>
                </div>
            </section>

            <section className="panel panel-two">
                <div className="panel-text">Feature Two</div>
                <div className="panel-media">
                    <img src={testImage2}
                    alt="Test visual"
                    className="panel-image">    
                    </img>
                </div>
            </section>

            <section className="panel panel-three">
                <div className="panel-text">Feature Three</div>
                <div className="panel-media">
                    <img src={testImage3}
                    alt="Test visual"
                    className="panel-image">    
                    </img>
                </div>
            </section>
        </div>
    );
}