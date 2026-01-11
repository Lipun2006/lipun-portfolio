import { Lightbulb, Layout, Rocket, Target, ArrowRight } from 'lucide-react';

const Services = () => {
  const offerings = [
    {
      icon: Lightbulb,
      title: 'AI & ML SOLUTIONS',
      description: 'Building intelligent systems using Python and machine learning.',
    },
    {
      icon: Layout,
      title: 'DATA ANALYSIS',
      description: 'Extracting insights from data to drive informed decisions.',
    },
    {
      icon: Target,
      title: 'PROBLEM SOLVING',
      description: 'Analytical thinking to tackle complex technical challenges.',
    },
  ];

  return (
    <section id="services" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-muted-foreground text-sm uppercase tracking-wider">— My Services ?</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="text-foreground">WHAT I'M</span>
              <br />
              <span className="gradient-text">OFFERING</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-6">
            <p className="text-muted-foreground max-w-sm text-sm">
              Currently focused on Python and Machine Learning, I'm eager to apply my skills to real-world projects and internship opportunities.
            </p>
            <a href="#contact" className="btn-primary whitespace-nowrap flex items-center gap-2">
              <span>ALL SERVICES</span>
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {offerings.map((item, index) => (
            <div
              key={item.title}
              className="group p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <item.icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 tracking-wide">{item.title}</h3>
              <p className="text-muted-foreground mb-6">{item.description}</p>
              <a href="#contact" className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                <span>READ MORE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="flex items-center mt-16">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-wider rotate-90 origin-center translate-y-8">Scroll Down</span>
            <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent mt-12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
