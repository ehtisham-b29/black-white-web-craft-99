import { ExternalLink, Github, ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A comprehensive e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "bg-gradient-to-br from-blue-500/20 to-purple-500/20",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AI-Powered Analytics Tool",
      category: "SaaS Platform",
      description: "Machine learning-based analytics platform that provides predictive insights and automated reporting for businesses.",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
      image: "bg-gradient-to-br from-green-500/20 to-teal-500/20",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "Secure mobile banking application with biometric authentication, real-time transactions, and financial planning tools.",
      technologies: ["React Native", "Node.js", "AWS", "Redis"],
      image: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Healthcare Management System",
      category: "Enterprise Software",
      description: "Complete healthcare management solution with patient records, appointment scheduling, and telemedicine capabilities.",
      technologies: ["Vue.js", "Django", "PostgreSQL", "Docker"],
      image: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Real Estate Platform",
      category: "Web Development",
      description: "Property listing platform with advanced search, virtual tours, and integrated CRM for real estate agencies.",
      technologies: ["Next.js", "Express", "MongoDB", "Cloudinary"],
      image: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Logistics Tracking System",
      category: "IoT Solution",
      description: "Real-time logistics and fleet management system with GPS tracking, route optimization, and delivery analytics.",
      technologies: ["Angular", "Spring Boot", "MySQL", "Google Maps API"],
      image: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20 animate-fade-in">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                Our Projects <span className="text-blue-500">| Case Studies</span>
              </h2>
            </div>
            <a
              href="/projects"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-foreground/30 group whitespace-nowrap"
            >
              <span className="text-sm">VIEW ALL PROJECTS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
          <p className="text-lg text-primary-foreground/80 max-w-3xl leading-relaxed">
            Explore our portfolio of successful projects across various industries and technologies. Each project showcases our commitment to excellence and innovation.
          </p>
        </div>

        {/* Projects Grid - Show only first 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.slice(0, 3).map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-primary-foreground/5 via-primary-foreground/3 to-transparent backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 transition-all duration-500 cursor-pointer overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-primary-foreground/10 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Futuristic scan line animation */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/50 to-transparent animate-scan"></div>
              </div>

              {/* Glowing corners */}
              <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-primary-foreground/40 group-hover:border-primary-foreground group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-500"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-primary-foreground/40 group-hover:border-primary-foreground group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-primary-foreground/40 group-hover:border-primary-foreground group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-500"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-primary-foreground/40 group-hover:border-primary-foreground group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-500"></div>

              {/* Animated grid background */}
              <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }}></div>

              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-foreground/0 via-primary-foreground/5 to-primary-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>

              {/* Holographic edge glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]"></div>
              </div>

              <div className="relative space-y-5">
                {/* Project Image/Preview */}
                <div className={`${project.image} h-48 rounded-xl flex items-center justify-center relative overflow-hidden border border-primary-foreground/10`}>
                  {/* Image placeholder with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-foreground/10 via-primary-foreground/5 to-transparent"></div>

                  {/* Project number overlay */}
                  <div className="relative z-10 text-center">
                    <div className="text-7xl font-bold text-primary-foreground/20 mb-2">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                    <div className="w-16 h-16 mx-auto bg-primary-foreground/10 rounded-full flex items-center justify-center border border-primary-foreground/20">
                      <ExternalLink className="w-8 h-8 text-primary-foreground/40" />
                    </div>
                  </div>

                  {/* Decorative grid pattern */}
                  <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                                     linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                  }}></div>
                </div>

                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-3 py-1.5">
                  <span className="text-[10px] text-primary-foreground/90 font-semibold uppercase tracking-wider">{project.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-primary-foreground leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-primary-foreground/60 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Divider */}
                <div className="w-12 h-px bg-gradient-to-r from-primary-foreground/50 to-transparent"></div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary-foreground/5 border border-primary-foreground/10 rounded text-[10px] text-primary-foreground/80 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-2">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-xs w-full"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>View Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
