import { Link } from "react-router";
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";
import { ExternalLink, Github, ArrowRight, Calendar, Users, Code } from "lucide-react";

const Projects = () => {
  const categories = ["All", "Web Development", "Mobile Development", "SaaS Platform", "Enterprise Software", "IoT Solution"];

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A comprehensive e-commerce solution with real-time inventory management, payment processing, and analytics dashboard. Built for a retail company looking to expand their online presence.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "bg-gradient-to-br from-blue-500/20 to-purple-500/20",
      liveUrl: "#",
      githubUrl: "#",
      duration: "4 months",
      team: "6 developers",
      codeLines: "50,000+",
      fullDescription: "Developed a full-featured e-commerce platform with advanced filtering, wishlist functionality, secure payment integration, and comprehensive admin dashboard for inventory and order management.",
      challenges: "Handling high traffic during sales events, implementing secure payment processing, real-time inventory synchronization.",
      results: "300% increase in online sales, 99.9% uptime, processed $2M+ in transactions."
    },
    {
      title: "AI-Powered Analytics Tool",
      category: "SaaS Platform",
      description: "Machine learning-based analytics platform that provides predictive insights and automated reporting for businesses. Helps companies make data-driven decisions.",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
      image: "bg-gradient-to-br from-green-500/20 to-teal-500/20",
      liveUrl: "#",
      githubUrl: "#",
      duration: "6 months",
      team: "8 developers",
      codeLines: "75,000+",
      fullDescription: "Built an AI-powered analytics platform with machine learning models for predictive analysis, automated report generation, and interactive data visualization dashboards.",
      challenges: "Training accurate ML models, processing large datasets efficiently, creating intuitive data visualizations.",
      results: "Used by 500+ businesses, 95% prediction accuracy, 10x faster reporting."
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "Secure mobile banking application with biometric authentication, real-time transactions, and financial planning tools. Designed for a modern digital banking experience.",
      technologies: ["React Native", "Node.js", "AWS", "Redis"],
      image: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
      liveUrl: "#",
      githubUrl: "#",
      duration: "5 months",
      team: "7 developers",
      codeLines: "60,000+",
      fullDescription: "Developed a comprehensive mobile banking solution with biometric authentication, instant transfers, bill payments, investment tracking, and personal finance management tools.",
      challenges: "Ensuring bank-level security, real-time transaction processing, cross-platform consistency.",
      results: "100,000+ downloads, 4.8-star rating, zero security breaches."
    },
    {
      title: "Healthcare Management System",
      category: "Enterprise Software",
      description: "Complete healthcare management solution with patient records, appointment scheduling, and telemedicine capabilities. Streamlines hospital and clinic operations.",
      technologies: ["Vue.js", "Django", "PostgreSQL", "Docker"],
      image: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
      liveUrl: "#",
      githubUrl: "#",
      duration: "8 months",
      team: "10 developers",
      codeLines: "100,000+",
      fullDescription: "Created an end-to-end healthcare management system with electronic health records, appointment scheduling, telemedicine video calls, prescription management, and billing integration.",
      challenges: "HIPAA compliance, integration with existing systems, handling sensitive patient data.",
      results: "Deployed in 15 hospitals, managing 50,000+ patient records, 40% reduction in administrative time."
    },
    {
      title: "Real Estate Platform",
      category: "Web Development",
      description: "Property listing platform with advanced search, virtual tours, and integrated CRM for real estate agencies. Modernizes property browsing and sales process.",
      technologies: ["Next.js", "Express", "MongoDB", "Cloudinary"],
      image: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
      liveUrl: "#",
      githubUrl: "#",
      duration: "5 months",
      team: "6 developers",
      codeLines: "55,000+",
      fullDescription: "Built a modern real estate platform with property listings, advanced search filters, 360° virtual tours, mortgage calculator, agent CRM, and lead management system.",
      challenges: "Implementing virtual tours, handling large image galleries, complex search functionality.",
      results: "10,000+ property listings, 2,000+ active agents, 50% faster property sales."
    },
    {
      title: "Logistics Tracking System",
      category: "IoT Solution",
      description: "Real-time logistics and fleet management system with GPS tracking, route optimization, and delivery analytics. Improves operational efficiency for logistics companies.",
      technologies: ["Angular", "Spring Boot", "MySQL", "Google Maps API"],
      image: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20",
      liveUrl: "#",
      githubUrl: "#",
      duration: "7 months",
      team: "9 developers",
      codeLines: "80,000+",
      fullDescription: "Developed a comprehensive logistics management system with real-time GPS tracking, AI-powered route optimization, delivery scheduling, driver management, and analytics dashboard.",
      challenges: "Real-time GPS data processing, route optimization algorithms, scalability for large fleets.",
      results: "Tracking 500+ vehicles, 30% fuel savings, 25% faster deliveries."
    },
    {
      title: "EdTech Learning Platform",
      category: "SaaS Platform",
      description: "Online learning platform with video courses, interactive quizzes, progress tracking, and certification. Makes education accessible and engaging.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS S3"],
      image: "bg-gradient-to-br from-indigo-500/20 to-purple-500/20",
      liveUrl: "#",
      githubUrl: "#",
      duration: "6 months",
      team: "7 developers",
      codeLines: "65,000+",
      fullDescription: "Created an interactive learning platform with video hosting, course management, quizzes and assessments, progress tracking, certificates, and payment integration.",
      challenges: "Video streaming optimization, handling concurrent users, engaging user experience.",
      results: "50,000+ students enrolled, 1,000+ courses, 90% completion rate."
    },
    {
      title: "Restaurant Management System",
      category: "Enterprise Software",
      description: "All-in-one restaurant management solution with POS, inventory, staff scheduling, and online ordering. Streamlines restaurant operations end-to-end.",
      technologies: ["React", "Express", "MySQL", "Socket.io"],
      image: "bg-gradient-to-br from-red-500/20 to-orange-500/20",
      liveUrl: "#",
      githubUrl: "#",
      duration: "5 months",
      team: "6 developers",
      codeLines: "58,000+",
      fullDescription: "Built a complete restaurant management system with POS terminal, kitchen display system, inventory management, staff scheduling, table reservations, and online ordering integration.",
      challenges: "Real-time order synchronization, offline mode support, multi-location management.",
      results: "Used by 100+ restaurants, 40% faster service, 95% order accuracy."
    },
    {
      title: "Social Media Dashboard",
      category: "SaaS Platform",
      description: "Unified social media management dashboard for scheduling posts, analytics, and engagement tracking across multiple platforms.",
      technologies: ["Vue.js", "Laravel", "Redis", "PostgreSQL"],
      image: "bg-gradient-to-br from-pink-500/20 to-rose-500/20",
      liveUrl: "#",
      githubUrl: "#",
      duration: "4 months",
      team: "5 developers",
      codeLines: "45,000+",
      fullDescription: "Developed a social media management tool with multi-platform posting, content calendar, analytics dashboard, hashtag suggestions, and team collaboration features.",
      challenges: "API rate limiting, scheduling accuracy, multi-platform compatibility.",
      results: "5,000+ active users, managing 20,000+ social accounts, 60% time savings."
    }
  ];

  return (
    <div className="min-h-screen bg-primary">
      <Navigation />

      {/* Hero Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Case Studies <span className="text-blue-500">| Our Projects</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful projects across various industries and technologies. Each project showcases our commitment to excellence and innovation.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-5 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full text-sm font-semibold text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
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

                  {/* Project Stats */}
                  <div className="grid grid-cols-3 gap-3 py-3">
                    <div className="text-center">
                      <Calendar className="w-4 h-4 text-primary-foreground/40 mx-auto mb-1" />
                      <p className="text-[10px] text-primary-foreground/80 font-medium">{project.duration}</p>
                    </div>
                    <div className="text-center">
                      <Users className="w-4 h-4 text-primary-foreground/40 mx-auto mb-1" />
                      <p className="text-[10px] text-primary-foreground/80 font-medium">{project.team}</p>
                    </div>
                    <div className="text-center">
                      <Code className="w-4 h-4 text-primary-foreground/40 mx-auto mb-1" />
                      <p className="text-[10px] text-primary-foreground/80 font-medium">{project.codeLines}</p>
                    </div>
                  </div>

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

                  {/* Full Description */}
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-xs font-bold text-primary-foreground/90 mb-1">Project Overview</h4>
                      <p className="text-primary-foreground/60 text-xs leading-relaxed">{project.fullDescription}</p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-primary-foreground/90 mb-1">Key Challenges</h4>
                      <p className="text-primary-foreground/60 text-xs leading-relaxed">{project.challenges}</p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-primary-foreground/90 mb-1">Results & Impact</h4>
                      <p className="text-primary-foreground/60 text-xs leading-relaxed">{project.results}</p>
                    </div>
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

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="group relative bg-gradient-to-br from-primary-foreground/5 via-primary-foreground/3 to-transparent backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-12 text-center transition-all duration-500 hover:shadow-2xl hover:shadow-primary-foreground/10">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/50 to-transparent animate-scan"></div>
            </div>

            <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-primary-foreground/40 group-hover:border-primary-foreground transition-all duration-500"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-primary-foreground/40 group-hover:border-primary-foreground transition-all duration-500"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-primary-foreground/40 group-hover:border-primary-foreground transition-all duration-500"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-primary-foreground/40 group-hover:border-primary-foreground transition-all duration-500"></div>

            <div className="relative">
              <h2 className="text-4xl font-bold text-primary-foreground mb-4">
                Have a Project in Mind?
              </h2>
              <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can bring your vision to life with cutting-edge technology and innovative solutions.
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-foreground/30"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
