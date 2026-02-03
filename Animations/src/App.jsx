import './App.css'
import { useEffect } from 'react';
import { startAutoScroll, stopAutoScroll } from './autoScroll.js';
import TestLayout from './scenarios/TestLayout.jsx';
import ScrollProgressCSS from './scenarios/css/01_ScrollProgress.jsx';
import ScrollProgressGSAP from './scenarios/gsap/01_ScrollProgress.jsx';

import ParallaxCSS from './scenarios/css/02_Parallax.jsx';
import ParallaxGSAP from './scenarios/gsap/02_Parallax.jsx';

import ComplexCSS from './scenarios/css/03_Complex.jsx';
import ComplexGSAP from './scenarios/gsap/03_Complex.jsx';

import PinningCSS from './scenarios/css/04_Pinning.jsx';
import PinningGSAP from './scenarios/gsap/04_Pinning.jsx';

import LongPageCSS from './scenarios/css/05_LongPage.jsx';
import LongPageGSAP from './scenarios/gsap/05_LongPage.jsx';

function App() {
  const method = 'CSS'; // 'CSS' or 'GSAP'
  useEffect(() => {
    startAutoScroll(1)

    return () => stopAutoScroll()
  }, [])
  return (     
  <TestLayout>
        {/*method === 'CSS' && <ScrollProgressCSS />}
        {method === 'GSAP' && <ScrollProgressGSAP />*/}
        
        {/*method === 'CSS' && <ParallaxCSS />}
        {method === 'GSAP' && <ParallaxGSAP />*/}

        {/*{method === 'CSS' && <ComplexCSS />}
        {method === 'GSAP' && <ComplexGSAP />*/}

        {method === 'CSS' && <PinningCSS />}
        {method === 'GSAP' && <PinningGSAP />}

        {/*method === 'CSS' && <LongPageCSS />}
        {method === 'GSAP' && <LongPageGSAP />*/}
  </TestLayout>
  )
}

export default App
