import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';

const projects = [
  {
    title: 'Motion-First Landing',
    description:
      'Animated landing page that blends 3D visuals with micro-interactions for a crisp, premium feel.',
    tags: ['React', 'Framer Motion', 'Spline'],
    link: '#',
  },
  {
    title: 'Design System UI',
    description:
      'Reusable, accessible component library built with Tailwind and Radix primitives.',
    tags: ['Tailwind', 'Radix', 'Accessibility'],
    link: '#',
  },
  {
    title: 'Creative Portfolio',
    description:
      'A fast, content-driven portfolio with delightful transitions and great typography.',
    tags: ['Vite', 'Content', 'SEO'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Selected work
          </h2>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">
            A mix of concept pieces and production-ready builds focused on clarity, performance, and play.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true, margin: '-100px' }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200/70 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 hover:shadow-lg hover:shadow-indigo-500/5"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  {p.title}
                </h3>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star size={16} fill="currentColor" />
                </div>
              </div>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                {p.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium rounded-full px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                Visit <ExternalLink size={16} />
              </div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-indigo-500/0 group-hover:to-indigo-500/5 transition" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
