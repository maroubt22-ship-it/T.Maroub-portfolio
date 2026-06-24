import { skillCategories, languages } from '../data/portfolio';

const categoryIcons: Record<string, string> = {
  'IA & Automation': '🤖',
  'Infrastructure & Cloud': '☁️',
  'Réseaux & Sécurité': '🔒',
  'Programmation': '💻',
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-forest-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-forest-400 font-semibold text-sm uppercase tracking-widest mb-2">
            Savoir-faire
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Compétences
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-forest-500 to-earth-500" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((cat) => (
            <div
              key={cat.label}
              className="bg-forest-900/60 border border-forest-800 rounded-2xl p-6 hover:border-earth-600/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-forest-950/50"
            >
              <div className="text-2xl mb-3">{categoryIcons[cat.label]}</div>
              <h3 className="text-earth-300 font-bold text-sm uppercase tracking-wide mb-4">
                {cat.label}
              </h3>
              <ul className="space-y-2">
                {cat.skills.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-stone-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-500 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="bg-forest-900/60 border border-forest-800 rounded-2xl p-8">
          <h3 className="text-earth-300 font-bold text-sm uppercase tracking-wide mb-6">
            Langues
          </h3>
          <div className="grid sm:grid-cols-3 gap-8">
            {languages.map((l) => (
              <div key={l.lang}>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-white font-semibold">{l.lang}</span>
                  <span className="text-stone-400 text-sm">{l.level}</span>
                </div>
                <div className="h-2 rounded-full bg-forest-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-forest-500 to-earth-500 transition-all duration-1000"
                    style={{ width: `${l.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
