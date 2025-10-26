import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient vignette that does not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white dark:from-neutral-950/70 dark:to-neutral-950" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200/60 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300">
            <span className="h-2 w-2 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400" />
            Interactive 3D • Modern • Playful
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Crafting delightful digital experiences
          </h1>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300 text-base sm:text-lg">
            I’m a frontend developer focused on building polished, interactive interfaces with a strong sense of motion and detail.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-neutral-900 text-white px-6 py-3 text-sm font-medium shadow-sm hover:opacity-90 dark:bg-white dark:text-neutral-900 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/70 backdrop-blur px-6 py-3 text-sm font-medium text-neutral-800 dark:text-neutral-100 hover:bg-white/90 dark:hover:bg-neutral-900"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
