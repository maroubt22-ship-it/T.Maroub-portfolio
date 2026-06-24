import { MapPin, Mail, Phone, Download, ChevronDown } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-forest-950"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-forest-800/20 blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full bg-earth-900/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #4ea275 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1 animate-[fadeInUp_0.8s_ease-out_forwards]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-800/50 border border-forest-700/50 mb-6">
              <span className="w-2 h-2 rounded-full bg-forest-400 animate-pulse" />
              <span className="text-forest-300 text-sm font-medium">
                Disponible pour un stage
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3">
              Taoufiq{' '}
              <span className="text-earth-400">Maroub</span>
            </h1>

            <p className="text-forest-300 text-lg sm:text-xl font-medium mb-6 leading-relaxed">
              {profile.title}
            </p>

            <p className="text-stone-400 text-base leading-relaxed mb-8 max-w-lg">
              {profile.tagline}
            </p>

            {/* Contact pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-forest-900 border border-forest-700 text-stone-300 text-sm hover:border-earth-500 hover:text-earth-300 transition-all duration-200"
              >
                <Mail size={14} />
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-forest-900 border border-forest-700 text-stone-300 text-sm hover:border-earth-500 hover:text-earth-300 transition-all duration-200"
              >
                <Phone size={14} />
                {profile.phone}
              </a>
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-forest-900 border border-forest-700 text-stone-300 text-sm">
                <MapPin size={14} />
                {profile.location}
              </span>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={profile.cv}
                download
                className="btn-gradient rounded-lg px-6"
              >
                <Download size={16} />
                Télécharger le CV
              </a>
              <button
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="btn-gradient rounded-lg px-6"
              >
                Me contacter
              </button>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-[fadeIn_1s_ease-out_forwards]">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-forest-500/30 to-earth-600/30 blur-2xl scale-110" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-forest-700/50 shadow-2xl shadow-forest-950/60">
                <img
                  src={profile.photo}
                  alt="Taoufiq Maroub"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-stone-500 animate-bounce">
        <ChevronDown size={20} />
      </div>
    </section>
  );
}
