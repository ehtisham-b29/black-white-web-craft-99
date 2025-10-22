import { Link } from "react-router";
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";
import {
  Code2,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Shield,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet your specific business requirements and scale with your growth.",
      features: [
        "Enterprise Applications",
        "API Development",
        "System Integration",
        "Legacy Modernization",
        "Microservices Architecture",
        "Custom CRM/ERP Solutions"
      ],
      link: "/services/custom-software-development",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with the latest technologies and best practices.",
      features: [
        "E-commerce Platforms",
        "Content Management Systems",
        "Progressive Web Apps",
        "Performance Optimization",
        "SEO Optimization",
        "Responsive Design"
      ],
      link: "/services/web-development",
      gradient: "from-green-500/20 to-teal-500/20"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      features: [
        "iOS Development",
        "Android Development",
        "React Native",
        "Flutter Development",
        "App Store Deployment",
        "Mobile UI/UX Design"
      ],
      link: "/services/mobile-app-development",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Robust database design and optimization services to ensure your data is secure, accessible, and scalable.",
      features: [
        "Database Design",
        "Performance Tuning",
        "Data Migration",
        "Analytics Setup",
        "Backup & Recovery",
        "Database Security"
      ],
      link: "/services/database-solutions",
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Cloud infrastructure setup and management to ensure your applications are scalable, secure, and always available.",
      features: [
        "AWS/Azure/GCP Setup",
        "DevOps Automation",
        "Container Orchestration",
        "Monitoring & Logging",
        "Disaster Recovery",
        "Cloud Migration"
      ],
      link: "/services/cloud-services",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Comprehensive security audits and ongoing maintenance to keep your applications secure and up-to-date.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Code Reviews",
        "24/7 Monitoring",
        "Regular Updates",
        "Incident Response"
      ],
      link: "/services/security-maintenance",
      gradient: "from-yellow-500/20 to-orange-500/20"
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, technical requirements, and project scope to create a detailed roadmap."
    },
    {
      number: "02",
      title: "Design & Architecture",
      description: "Our team designs the system architecture and user experience, ensuring scalability and optimal performance."
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "Agile development with continuous testing ensures high-quality code and rapid iterations based on feedback."
    },
    {
      number: "04",
      title: "Deployment & Support",
      description: "Seamless deployment to production with comprehensive documentation and ongoing maintenance support."
    }
  ];

  const benefits = [
    "Experienced team with 3+ years in the industry",
    "Agile development methodology for flexibility",
    "Clean, maintainable, and scalable code",
    "Regular communication and progress updates",
    "Post-launch support and maintenance",
    "Competitive pricing with transparent quotes",
    "On-time delivery guaranteed",
    "100% client satisfaction focus"
  ];

  return (
    <div className="min-h-screen bg-primary">
      <Navigation />

      {/* Hero Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              From concept to deployment, we provide comprehensive IT services that transform your ideas into powerful digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-primary-foreground/5 via-primary-foreground/3 to-transparent backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-foreground/10 animate-fade-in"
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

                <div className="relative space-y-5">
                  {/* Icon */}
                  <div className={`${service.gradient} h-20 rounded-xl flex items-center justify-center border border-primary-foreground/10`}>
                    <service.icon className="w-10 h-10 text-primary-foreground" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-primary-foreground leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Divider */}
                  <div className="w-12 h-px bg-gradient-to-r from-primary-foreground/50 to-transparent"></div>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-primary-foreground/60 text-sm">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary-foreground" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <div className="pt-4">
                    <Link
                      to={service.link}
                      className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold py-2 px-5 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm w-full"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Our Development Process
            </h2>
            <p className="text-lg text-primary-foreground/70 max-w-3xl mx-auto leading-relaxed">
              A proven methodology that ensures successful project delivery from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-primary-foreground/5 via-primary-foreground/3 to-transparent backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-foreground/10 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/50 to-transparent animate-scan"></div>
                </div>

                <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-primary-foreground/40 group-hover:border-primary-foreground transition-all duration-500"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-primary-foreground/40 group-hover:border-primary-foreground transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-primary-foreground/40 group-hover:border-primary-foreground transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-primary-foreground/40 group-hover:border-primary-foreground transition-all duration-500"></div>

                <div className="relative text-center space-y-4">
                  <div className="text-6xl font-bold text-primary-foreground/20">{step.number}</div>
                  <h3 className="text-xl font-bold text-primary-foreground">{step.title}</h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Why Choose Realz Solutions?
            </h2>
            <p className="text-lg text-primary-foreground/70 max-w-3xl mx-auto leading-relaxed">
              We combine technical expertise with a customer-first approach to deliver exceptional results.
            </p>
          </div>

          <div className="group relative bg-gradient-to-br from-primary-foreground/5 via-primary-foreground/3 to-transparent backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-12 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-foreground/10">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/50 to-transparent animate-scan"></div>
            </div>

            <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-primary-foreground/40 group-hover:border-primary-foreground transition-all duration-500"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-primary-foreground/40 group-hover:border-primary-foreground transition-all duration-500"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-primary-foreground/40 group-hover:border-primary-foreground transition-all duration-500"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-primary-foreground/40 group-hover:border-primary-foreground transition-all duration-500"></div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1 text-primary-foreground" />
                  <span className="text-primary-foreground/80 leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
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
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with innovative technology solutions.
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-foreground/30"
              >
                Get Free Consultation
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

export default Services;
