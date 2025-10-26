import { useState, useEffect } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navClass = scrolled
    ? 'backdrop-blur-md bg-white/60 dark:bg-neutral-900/60 shadow-sm'
    : 'bg-transparent';

  const LinkItem = ({ href, label }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors"
    >
      {label}
    </a>
  );

  return (
    <header className={`fixed top-0 inset-x-0 z-50 ${navClass}`}>
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 text-white">
            <Rocket size={18} />
          </div>
          <span className="text-sm font-semibold tracking-wide text-neutral-800 dark:text-neutral-100 group-hover:opacity-90">
            MyPortfolio
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <LinkItem href="#projects" label="Projects" />
          <LinkItem href="#contact" label="Contact" />
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-neutral-900 text-white px-4 py-2 text-sm font-medium hover:opacity-90 dark:bg-white dark:text-neutral-900 transition"
          >
            Let’s talk
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border-t border-neutral-200/60 dark:border-neutral-800/60">
          <LinkItem href="#projects" label="Projects" />
          <div>
            <LinkItem href="#contact" label="Contact" />
          </div>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-neutral-900 text-white px-4 py-2 text-sm font-medium hover:opacity-90 dark:bg-white dark:text-neutral-900 transition"
          >
            Let’s talk
          </a>
        </div>
      )}
    </header>
  );
}
