import '../styles/TestLayout.css';
import { useEffect } from "react"
import { startAutoScroll, stopAutoScroll } from "../autoScroll"
export default function TestLayout({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0)

    const timeout = setTimeout(() => {
      startAutoScroll(1)
    }, 1000)

    return () => {
      clearTimeout(timeout)
      stopAutoScroll()
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
