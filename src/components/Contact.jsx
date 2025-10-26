import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Let’s build something great
          </h2>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">
            I’m open to freelance work, collaborations, and full-time roles. Reach out and let’s talk about your idea.
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:opacity-90 dark:bg-white dark:text-neutral-900"
          >
            <Mail size={18} /> Send an email
          </a>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-800 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-800 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>

        <p className="mt-10 text-xs text-neutral-500 dark:text-neutral-500">
          © {new Date().getFullYear()} — Designed and built with care.
        </p>
      </div>
    </section>
  );
}
