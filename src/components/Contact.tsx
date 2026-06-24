import { Mail, Phone, MapPin, Send, Download } from 'lucide-react';
import { useState } from 'react';
import { profile } from '../data/portfolio';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const apiUrl = import.meta.env.VITE_CONTACT_API_URL ?? '/api/contact';

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));

    if (status !== 'idle') {
      setStatus('idle');
      setFeedback('');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (status === 'sending') {
      return;
    }

    setStatus('sending');
    setFeedback('');

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const payload = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(payload?.message ?? 'Impossible d\'envoyer le message.');
      }

      setStatus('sent');
      setFeedback(payload?.message ?? 'Message envoyé avec succès.');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Une erreur inattendue est survenue.';
      setStatus('error');
      setFeedback(message);
    }
  };

  return (
    <section id="contact" className="py-24 bg-earth-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-earth-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Disponible pour collaborer
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-forest-900">Contact</h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-forest-500 to-earth-500" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-forest-900 font-bold text-xl mb-3">
                Prenons contact
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Je suis activement à la recherche d'un stage en Intelligence Artificielle ou
                Infrastructures Digitales. N'hésitez pas à me contacter.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
                {
                  icon: Phone,
                  label: 'Téléphone',
                  value: profile.phone,
                  href: `tel:${profile.phoneDial}`,
                },
                { icon: MapPin, label: 'Localisation', value: profile.location, href: undefined },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-forest-100 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-forest-600" />
                  </div>
                  <div>
                    <p className="text-stone-500 text-xs">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        aria-label={`Call Taoufiq Maroub at ${profile.phone}`}
                        title={`Call Taoufiq Maroub at ${profile.phone}`}
                        className="text-forest-900 font-medium text-sm hover:text-earth-600 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-forest-900 font-medium text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={profile.cv}
              download
              className="btn-gradient px-5 py-3 rounded-xl text-sm"
            >
              <Download size={16} />
              Télécharger le CV
            </a>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-forest-900 mb-1.5">
                  Nom complet
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 rounded-xl border border-earth-300 bg-white text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-forest-900 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-earth-300 bg-white text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-forest-900 mb-1.5">
                Message
              </label>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => updateField('message', e.target.value)}
                placeholder="Votre message..."
                className="w-full px-4 py-3 rounded-xl border border-earth-300 bg-white text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all resize-none text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-gradient px-6 py-3 rounded-xl text-sm"
            >
              <Send size={16} />
              {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>

            {feedback ? (
              <p
                className={`text-sm font-medium ${status === 'error' ? 'text-red-600' : 'text-forest-700'}`}
              >
                {feedback}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
