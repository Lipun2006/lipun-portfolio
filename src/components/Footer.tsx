import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Lipun2006', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/lipun-pradhan-5b9a21238', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:lipunpradhan930@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold text-foreground mb-2 inline-block font-['Space_Grotesk']">
              <span className="italic text-muted-foreground">it's me</span>{' '}
              <span className="gradient-text">Lipun</span>
            </a>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Lipun Pradhan. All rights reserved.
            </p>
          </div>

          {/* Made with love */}
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Built with <Heart size={14} className="text-primary fill-primary animate-pulse" /> and passion for AI
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
            
            {/* Back to top */}
            <a
              href="#home"
              className="p-3 rounded-full bg-primary text-primary-foreground hover:opacity-80 transition-opacity ml-4"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
