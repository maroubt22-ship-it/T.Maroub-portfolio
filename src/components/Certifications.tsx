import { Award, CheckCircle2 } from 'lucide-react';
import { certifications } from '../data/portfolio';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-forest-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-forest-400 font-semibold text-sm uppercase tracking-widest mb-2">
            Accréditations
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Certifications
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-forest-500 to-earth-500" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {certifications.map((group, i) => (
            <div
              key={i}
              className="bg-forest-900/60 border border-forest-800 rounded-2xl p-6 hover:border-earth-600/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-forest-950/50"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-earth-900/60 border border-earth-700/50 flex items-center justify-center shrink-0">
                  <Award size={18} className="text-earth-400" />
                </div>
                <h3 className="text-earth-300 font-bold text-sm leading-snug">{group.issuer}</h3>
              </div>

              <ul className="space-y-3">
                {group.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={15}
                      className="text-forest-500 mt-0.5 shrink-0"
                    />
                    <div>
                      <p className="text-stone-200 text-sm font-medium leading-snug">
                        {item.name}
                      </p>
                      <p className="text-stone-500 text-xs mt-0.5">{item.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
