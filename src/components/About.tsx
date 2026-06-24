import { Brain, Network, Shield, Code2 } from 'lucide-react';
import { profile } from '../data/portfolio';

const pillars = [
  { icon: Brain, label: 'Intelligence Artificielle', desc: 'Formation qualifiante en cours' },
  { icon: Network, label: 'Réseaux & Infrastructures', desc: 'CCNA certifié' },
  { icon: Shield, label: 'Cybersécurité', desc: 'OWASP, Fortinet, Kali' },
  { icon: Code2, label: 'Automatisation', desc: 'n8n, PowerShell, Python' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-earth-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Qui suis-je ?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-forest-900">
            À propos de moi
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-forest-500 to-earth-500" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-stone-700 text-lg leading-relaxed mb-6">
              {profile.summary}
            </p>
            <p className="text-stone-600 leading-relaxed">
              Motivé, curieux et dynamique, je suis prêt à m'investir pleinement dans des
              projets concrets alliant <strong className="text-forest-700">IA</strong> et{' '}
              <strong className="text-forest-700">infrastructures digitales</strong>.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {pillars.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="group p-5 rounded-2xl bg-white border border-earth-200 hover:border-forest-400 hover:shadow-lg hover:shadow-forest-100 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-forest-100 flex items-center justify-center mb-3 group-hover:bg-forest-600 transition-colors duration-300">
                  <Icon size={20} className="text-forest-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="font-semibold text-forest-900 text-sm mb-1">{label}</p>
                <p className="text-stone-500 text-xs">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
