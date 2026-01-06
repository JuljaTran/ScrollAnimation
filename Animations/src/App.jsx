import './App.css'
import ScrollProgressCSS from './scenarios/css/01_ScrollProgress.jsx';
import ScrollProgressGSAP from './scenarios/gsap/01_ScrollProgress.jsx';

function App() {
  const method = 'CSS'; // 'CSS' or 'GSAP'
  return (     
    <>
      <div>
        <h1>Scroll-Animation test environment</h1>
        {method === 'CSS' && <ScrollProgressCSS />}
        {method === 'GSAP' && <ScrollProgressGSAP />}
        <section className="section">Start </section>
        <section className="section">Scroll</section>
        <section className="section">End</section>
      </div>
    </>
  )
}

export default App
