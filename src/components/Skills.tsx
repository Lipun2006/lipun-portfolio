import { Terminal, BrainCircuit, Lightbulb, Database, GitBranch, Cpu, Sparkles } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'Python', icon: Terminal, level: 75 },
    { name: 'Machine Learning', icon: BrainCircuit, level: 50 },
    { name: 'Problem Solving', icon: Lightbulb, level: 70 },
    { name: 'Data Structures', icon: Database, level: 55 },
    { name: 'Git & GitHub', icon: GitBranch, level: 60 },
    { name: 'AI Fundamentals', icon: Cpu, level: 45 },
  ];

  const marqueeSkills = ['PYTHON', 'MACHINE LEARNING', 'TENSORFLOW', 'DATA SCIENCE', 'AI', 'DEEP LEARNING', 'GIT', 'PROBLEM SOLVING'];

  return (
    <section id="skills" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-muted-foreground text-sm uppercase tracking-wider">— Technical Skills</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-foreground">My </span>
            <span className="gradient-text">Expertise</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <skill.icon className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{skill.name}</h3>
                  <span className="text-sm text-primary font-medium">{skill.level}%</span>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${skill.level}%`,
                    background: 'var(--gradient-primary)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Marquee */}
        <div className="py-4 border-y border-border overflow-hidden">
          <div className="animate-marquee flex whitespace-nowrap">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center gap-12 px-6">
                {marqueeSkills.map((skill, index) => (
                  <div key={`${setIndex}-${index}`} className="flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground font-medium text-sm tracking-wider">{skill}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
