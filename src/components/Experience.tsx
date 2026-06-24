import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experiences } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-earth-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Parcours
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-forest-900">
            Expérience Professionnelle
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-forest-500 to-earth-500" />
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-forest-400 via-earth-400 to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-earth-500 border-4 border-earth-100 shadow-lg md:-translate-x-2 top-6" />

                {/* Spacer for timeline alignment */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="ml-10 md:ml-0 md:w-1/2 group">
                  <div className="bg-white border border-earth-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-earth-100 hover:border-forest-300 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-bold text-forest-900 text-lg leading-tight">
                          {exp.role}
                        </h3>
                        <p className="text-earth-600 font-semibold mt-0.5">{exp.company}</p>
                      </div>
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-forest-50 flex items-center justify-center border border-forest-200">
                        <Briefcase size={18} className="text-forest-600" />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-4 text-sm text-stone-500">
                      <span className="flex items-center gap-1">
                        <MapPin size={13} />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={13} />
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-1.5 mb-4">
                      {exp.tasks.map((t, j) => (
                        <li key={j} className="flex items-start gap-2 text-stone-600 text-sm">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-forest-400 shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full text-xs font-medium bg-forest-50 text-forest-700 border border-forest-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
