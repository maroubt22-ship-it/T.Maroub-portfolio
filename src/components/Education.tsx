import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { education } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-forest-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-forest-400 font-semibold text-sm uppercase tracking-widest mb-2">
            Parcours académique
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Formation
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-forest-500 to-earth-500" />
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-forest-500 via-earth-500 to-transparent" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <div key={i} className="relative pl-16">
                {/* Dot */}
                <div className="absolute left-[18px] top-5 w-5 h-5 rounded-full bg-forest-950 border-2 border-forest-400 shadow-md shadow-forest-400/30 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-forest-400" />
                </div>

                <div className="group bg-forest-900/60 border border-forest-800 rounded-2xl p-6 hover:border-earth-600/60 hover:shadow-xl hover:shadow-forest-950/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-white text-lg">{edu.degree}</h3>
                        {edu.note && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-forest-500/20 text-forest-300 border border-forest-500/30 animate-pulse">
                            {edu.note}
                          </span>
                        )}
                      </div>
                      <p className="text-earth-400 font-semibold mt-1">{edu.school}</p>
                    </div>
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-forest-800 flex items-center justify-center">
                      <GraduationCap size={18} className="text-forest-400" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-3 text-sm text-stone-400">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {edu.period}
                    </span>
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
