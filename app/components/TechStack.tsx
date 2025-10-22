import { Code2 } from "lucide-react";

const TechStack = () => {
  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "TypeScript", category: "Language" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Next.js", category: "Framework" },
    { name: "TensorFlow", category: "AI/ML" },
    { name: "Kubernetes", category: "DevOps" },
    { name: "GraphQL", category: "API" }
  ];

  return (
    <section className="py-20 bg-primary-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-2 mb-6">
            <Code2 className="w-4 h-4 text-primary-foreground" />
            <span className="text-xs text-primary-foreground/90 font-semibold uppercase tracking-wider">Our Tech Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Powered by <span className="text-primary-foreground/60">Modern Technology</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build scalable, secure, and high-performance solutions
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-primary-foreground/5 via-primary-foreground/3 to-transparent backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary-foreground/10 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Glowing corners */}
              <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-primary-foreground/40 group-hover:border-primary-foreground transition-all duration-500"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-primary-foreground/40 group-hover:border-primary-foreground transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-primary-foreground/40 group-hover:border-primary-foreground transition-all duration-500"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-primary-foreground/40 group-hover:border-primary-foreground transition-all duration-500"></div>

              <div className="relative text-center">
                <h3 className="text-lg font-bold text-primary-foreground mb-1">
                  {tech.name}
                </h3>
                <p className="text-xs text-primary-foreground/60">
                  {tech.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
