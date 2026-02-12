import { useEffect } from 'react';
import { startAutoScroll, stopAutoScroll } from '../autoScroll.js';
import './TestLayout.css';
export default function TestLayout({ children }) {
  useEffect(() => {
    startAutoScroll(1, 15000); // Startet Auto-Scroll mit 1px pro Frame für 15 Sekunden
    return () => {
      stopAutoScroll(); // Stopp den Auto-Scroll, wenn die Komponente unmountet
    }
  }, [])
  return (
    <>
      <div className="test-layout">
        <header className="site-header">
          <section className="hero">
            <h1>Scroll Animation Test</h1>
            <p>Hero Section</p>
          </section>
        </header>

        <main className="content">
          <div className="content-inner">
            {children}
          </div>
        </main>

        <footer className="footer">
          <p>Footer Bereich</p>
        </footer>
      </div>
    </>
  );
}
