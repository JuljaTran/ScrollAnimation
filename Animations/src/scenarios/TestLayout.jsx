import '../styles/TestLayout.css';
export default function TestLayout({ children }) {
  return (
    <>
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
    </>
  );
}
