import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Accueil', href: '#hero' },
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Expérience', href: '#experience' },
  { label: 'Formation', href: '#education' },
  { label: 'Projets', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = links.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-forest-900/95 backdrop-blur-md shadow-lg shadow-forest-950/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-lg font-bold tracking-tight select-none" style={{
            perspective: '1000px',
          }}>
            <span className="inline-block" style={{
              transform: 'translateZ(20px)',
              textShadow: `
                2px 2px 0px rgba(0,0,0,0.3),
                4px 4px 0px rgba(0,0,0,0.2),
                6px 6px 0px rgba(0,0,0,0.1)
              `,
              color: '#f5deb3',
            }}>
              T<span className="text-earth-400">.</span>Maroub
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleClick(l.href)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 ${
                  active === l.href.slice(1)
                    ? 'text-earth-300 bg-forest-800/60'
                    : 'text-stone-300 hover:text-earth-300 hover:bg-forest-800/40'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-stone-300 hover:text-earth-300 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden bg-forest-900/97 backdrop-blur-md ${
          open ? 'max-h-screen py-4' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-4">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleClick(l.href)}
              className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                active === l.href.slice(1)
                  ? 'text-earth-300 bg-forest-800/60'
                  : 'text-stone-300 hover:text-earth-300 hover:bg-forest-800/40'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
