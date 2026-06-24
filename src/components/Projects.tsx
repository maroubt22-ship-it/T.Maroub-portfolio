import { FolderOpen } from 'lucide-react';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-earth-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Réalisations
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-forest-900">
            Projets Académiques
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-forest-500 to-earth-500" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group bg-white border border-earth-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-earth-100 hover:border-forest-300 transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-forest-50 border border-forest-200 flex items-center justify-center mb-4 group-hover:bg-forest-600 group-hover:border-forest-600 transition-all duration-300">
                <FolderOpen
                  size={22}
                  className="text-forest-600 group-hover:text-white transition-colors duration-300"
                />
              </div>

              <h3 className="font-bold text-forest-900 text-base mb-1 leading-snug">
                {p.title}
              </h3>
              <p className="text-earth-600 text-xs font-semibold mb-3">{p.org}</p>
              <p className="text-stone-600 text-sm leading-relaxed flex-1">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-forest-50 text-forest-700 border border-forest-200 group-hover:bg-forest-100 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
