import { ArrowDown, Github, Linkedin, Mail, Youtube, Facebook, Twitter, Sparkles, Check } from 'lucide-react';

const Hero = () => {
  const highlights = [
    'Passionate about AI & ML',
    'Building intelligent solutions',
    'Continuous learner & innovator',
  ];

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-20" style={{ background: 'var(--gradient-glow)' }} />
      
      {/* Decorative Elements */}
      <div className="absolute top-32 left-20 hidden lg:block">
        <div className="w-8 h-8 border-2 border-primary/30 rotate-45 animate-float" style={{ animationDelay: '0s' }} />
      </div>
      <div className="absolute top-48 right-32 hidden lg:block">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-1 h-8 bg-muted-foreground/20" style={{ height: `${16 + i * 4}px` }} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-40 left-1/4 hidden lg:block">
        <Sparkles className="text-accent w-6 h-6 animate-sparkle" />
      </div>

      <div className="section-container relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Wave Emoji */}
            <div className="animate-fade-up mb-6">
              <span className="text-4xl">👋</span>
            </div>

            {/* Name */}
            <h1 className="animate-fade-up animate-delay-100 text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-foreground">Hello!</span>{' '}
              <span className="gradient-text">I'm Lipun</span>
            </h1>

            {/* Title with line */}
            <div className="animate-fade-up animate-delay-200 flex items-center gap-4 mb-8">
              <div className="line-accent" />
              <p className="text-xl md:text-2xl text-foreground font-medium">
                AI & ML Enthusiast
              </p>
              <Sparkles className="text-accent w-5 h-5" />
            </div>

            {/* Description */}
            <p className="animate-fade-up animate-delay-300 text-muted-foreground text-lg mb-6 max-w-lg">
              Hello! I'm Lipun. I'm a{' '}
              <span className="text-foreground font-semibold">Python developer</span>,{' '}
              <span className="text-foreground font-semibold">ML enthusiast</span>,{' '}
              problem solver & passionate learner.
            </p>

            {/* Highlights */}
            <div className="animate-fade-up animate-delay-400 space-y-3 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-up animate-delay-500 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Let's Talk
              </a>
              <a href="#projects" className="btn-outline">
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative animate-fade-up">
              {/* Profile Image Container */}
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full animate-glow-pulse" />
                
                {/* Image Frame */}
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 relative z-10">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary to-card flex items-center justify-center">
                    <span className="text-8xl md:text-9xl font-bold gradient-text">LP</span>
                  </div>
                </div>

                {/* Speech Bubble */}
                <div className="absolute bottom-8 -left-4 md:bottom-16 md:-left-8 z-20">
                  <div className="speech-bubble animate-float" style={{ animationDelay: '1s' }}>
                    <span className="text-foreground font-medium italic">Hello</span>
                  </div>
                </div>

                {/* Decorative curved line */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-full" />
                <div className="absolute top-8 -right-8 w-3 h-3 bg-accent rounded-full animate-sparkle" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Marquee */}
      <div className="absolute bottom-0 left-0 right-0 py-6 bg-gradient-to-r from-primary via-accent to-primary overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center gap-8 px-4">
              {['PYTHON', 'MACHINE LEARNING', 'DATA SCIENCE', 'AI', 'PROBLEM SOLVING', 'TENSORFLOW', 'DEEP LEARNING'].map((skill, index) => (
                <div key={`${setIndex}-${index}`} className="flex items-center gap-4">
                  <Sparkles className="w-5 h-5 text-background" />
                  <span className="text-background font-bold text-lg tracking-wider">{skill}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Social Links at bottom */}
      <div className="absolute bottom-24 left-0 right-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a href="https://github.com/Lipun2006" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-4 h-4" />
                <span className="text-sm uppercase tracking-wide">Github</span>
              </a>
              <a href="https://linkedin.com/in/lipun-pradhan-5b9a21238" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-4 h-4" />
                <span className="text-sm uppercase tracking-wide">LinkedIn</span>
              </a>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <div className="w-32 h-px bg-border" />
              <a href="mailto:lipunpradhan930@gmail.com" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                lipunpradhan930@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
