import { FolderGit2, ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Python Practice Projects',
      description: 'A collection of hands-on Python projects covering fundamental concepts like loops, functions, file handling, and OOP.',
      tags: ['Python', 'OOP', 'Fundamentals'],
      status: 'In Progress',
      image: 'https://ik.imagekit.io/casyqt2cx/python-programming-2CFJA44.jpg',
    },
    {
      title: 'Machine Learning Basics',
      description: 'Exploring basic ML algorithms including linear regression, classification, and data preprocessing techniques.',
      tags: ['Python', 'scikit-learn', 'ML'],
      status: 'Learning',
      image: '/placeholder.svg',
    },
    {
      title: 'Data Analysis Projects',
      description: 'Practice projects focused on data manipulation and visualization using pandas, numpy, and matplotlib.',
      tags: ['Pandas', 'NumPy', 'Matplotlib'],
      status: 'In Progress',
      image: '/placeholder.svg',
    },
  ];

  return (
    <section id="projects" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-muted-foreground text-sm uppercase tracking-wider">Case Study</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="text-foreground">MY</span>{' '}
              <span className="gradient-text">PROJECTS</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Academic and practice projects showcasing my learning journey in Python, ML, and data science.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FolderGit2 className="w-16 h-16 text-primary/20" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-card/80 backdrop-blur-sm text-xs font-medium text-muted-foreground border border-border">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded bg-secondary text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href="https://github.com/Lipun2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group/link"
                >
                  <span>See Details</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/Lipun2006"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-border hover:border-primary text-foreground hover:text-primary transition-all duration-300"
          >
            <Github size={20} />
            <span className="font-medium">View all projects on GitHub</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
