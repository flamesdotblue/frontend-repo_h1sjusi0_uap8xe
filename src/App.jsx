import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      {/* Global background accents */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.18),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.16),transparent_40%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
