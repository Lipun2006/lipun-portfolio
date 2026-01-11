import { Code2, Brain, Target, Sparkles } from 'lucide-react'; {/*demo for lipun*/}

const About = () => {
  const highlights = [
    { icon: Code2, title: 'Python Developer', description: 'Building strong foundations in Python programming' },
    { icon: Brain, title: 'ML Enthusiast', description: 'Learning Machine Learning fundamentals' },
    { icon: Target, title: 'Problem Solver', description: 'Developing analytical thinking skills' },
    { icon: Sparkles, title: 'Quick Learner', description: 'Passionate about continuous growth' },
  ];

  return (
    <section id="about" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-muted-foreground text-sm uppercase tracking-wider">— Who I am</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-foreground">About </span>
            <span className="gradient-text">Smruti darling</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Bio Text */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a <span className="text-foreground font-semibold">B.Tech CSE student</span> with a specialization in{' '}
              <span className="text-primary font-semibold">Artificial Intelligence & Machine Learning</span> at Sri Sri University, Cuttack, Odisha (2025–2029).
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              As a <span className="text-foreground font-semibold">fresher</span>, I'm deeply passionate about Python programming and exploring the fundamentals of Machine Learning. My journey in tech is focused on building a strong foundation in AI technologies.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I believe in continuous learning and growth. Every day presents a new opportunity to learn something exciting and move one step closer to becoming a skilled AI/ML engineer.
            </p>
            
            <div className="pt-4">
              <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                Let's Talk
              </a>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
