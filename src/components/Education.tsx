import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const Education = () => {
  const timeline = [
    {
      duration: '2025 - 2029',
      role: 'B.Tech CSE (AI & ML)',
      company: 'Sri Sri University',
      location: 'Cuttack, Odisha',
      current: true,
    },
  ];

  return (
    <section id="education" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-muted-foreground text-sm uppercase tracking-wider">Academic Journey</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">EDUCATION</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Education Card */}
          <div className="group p-8 md:p-12 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500">
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              {/* Icon */}
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                <GraduationCap className="text-primary" size={40} />
              </div>

              <div className="flex-1">
                {/* Title */}
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    B.Tech in Computer Science Engineering
                  </h3>
                  <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    Currently Pursuing
                  </span>
                </div>

                <p className="text-xl text-primary font-medium mb-6">
                  Specialization in AI & Machine Learning
                </p>

                {/* Details Grid */}
                <div className="grid sm:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <BookOpen className="text-primary flex-shrink-0" size={20} />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Institution</p>
                      <p className="text-foreground font-medium">Sri Sri University</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="text-primary flex-shrink-0" size={20} />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                      <p className="text-foreground font-medium">Cuttack, Odisha</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="text-primary flex-shrink-0" size={20} />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Duration</p>
                      <p className="text-foreground font-medium">2025 – 2029</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  Pursuing a comprehensive four-year degree program focusing on Artificial Intelligence and Machine Learning. The curriculum covers core computer science fundamentals along with specialized courses in AI, deep learning, natural language processing, and data science.
                </p>
              </div>
            </div>
          </div>

          {/* Experience Timeline (for future use) */}
          <div className="mt-12 flex items-center justify-center">
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-12 h-px bg-border" />
              <span className="text-sm uppercase tracking-wider">More achievements coming soon</span>
              <div className="w-12 h-px bg-border" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
