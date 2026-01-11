import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'My Projects', href: '#projects', subtitle: 'See all my projects' },
  { name: 'About Me', href: '#about', subtitle: 'Learn about myself' },
  { name: 'Contact me', href: '#contact', subtitle: 'Get in touch' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="text-xl font-bold text-foreground flex items-center gap-2 font-['Space_Grotesk']">
            <span className="text-muted-foreground italic">it's me</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="group">
                <div className="flex items-center gap-2">
                  <span className="text-primary text-lg">◆</span>
                  <div>
                    <span className="text-primary text-sm font-medium block">{link.name}</span>
                    <span className="text-muted-foreground text-xs">{link.subtitle}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-3 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-primary">◆</span>
                  <div>
                    <span className="text-foreground font-medium block">{link.name}</span>
                    <span className="text-muted-foreground text-sm">{link.subtitle}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
