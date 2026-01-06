import './App.css'
import ScrollProgressCSS from './scenarios/css/01_ScrollProgress.jsx';
import ScrollProgressGSAP from './scenarios/gsap/01_ScrollProgress.jsx';

import ParallaxCSS from './scenarios/css/02_Parallax.jsx';
import ParallaxGSAP from './scenarios/gsap/02_Parallax.jsx';
function App() {
  const method = 'GSAP'; // 'CSS' or 'GSAP'
  return (     
    <>
      <div>
        <h1>Scroll-Animation test environment</h1>
        {/*method === 'CSS' && <ScrollProgressCSS />}
        {method === 'GSAP' && <ScrollProgressGSAP />*/}
        
        {method === 'CSS' && <ParallaxCSS />}
        {method === 'GSAP' && <ParallaxGSAP />}
        <section className="section">Start </section>
        <section className="section">Scroll</section>
        <section className="section">End</section>
      </div>
    </>
  )
}

export default App
