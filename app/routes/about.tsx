import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";
import { Users, Award, Clock, CheckCircle, Target, Lightbulb, Shield, Zap } from "lucide-react";

const AnimatedCounter = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = end / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={counterRef} className="text-5xl font-bold text-primary-foreground mb-2">
      {count}{suffix}
    </div>
  );
};

const About = () => {
  const stats = [
    { icon: Users, value: 400, suffix: "+", label: "Projects Completed" },
    { icon: Award, value: 100, suffix: "+", label: "Happy Clients" },
    { icon: Clock, value: 3, suffix: "+", label: "Years Experience" },
    { icon: CheckCircle, value: 99, suffix: "%", label: "Success Rate" },
  ];

  const values = [
    {
      icon: Target,
      title: "Mission Driven",
      description: "We're committed to delivering innovative solutions that transform businesses and drive real results."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Staying ahead of technology trends to provide cutting-edge solutions using the latest tools and frameworks."
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Every line of code is tested, reviewed, and optimized to ensure the highest standards of quality and security."
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Agile methodology ensures rapid development cycles while maintaining exceptional quality and attention to detail."
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Technology Officer",
      expertise: "Full-Stack Development & Architecture",
      description: "10+ years building scalable enterprise solutions with expertise in cloud infrastructure and modern frameworks.",
      skills: ["Cloud Architecture", "System Design", "Team Leadership"]
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      expertise: "AI & Machine Learning",
      description: "Specializes in developing intelligent systems and AI-powered applications that drive innovation.",
      skills: ["TensorFlow", "Python", "Data Science"]
    },
    {
      name: "Emily Rodriguez",
      role: "Senior Designer",
      expertise: "UI/UX & Product Design",
      description: "Creates beautiful, user-centric designs that enhance engagement and deliver exceptional experiences.",
      skills: ["Figma", "User Research", "Prototyping"]
    },
    {
      name: "David Park",
      role: "DevOps Engineer",
      expertise: "Infrastructure & Automation",
      description: "Ensures reliable deployments and scalable infrastructure with modern DevOps practices and tools.",
      skills: ["Docker", "Kubernetes", "CI/CD"]
    }
  ];

  const timeline = [
    {
      year: "2022",
      title: "Company Founded",
      description: "Started with a vision to transform businesses through innovative technology solutions."
    },
    {
      year: "2023",
      title: "Rapid Growth",
      description: "Expanded team to 15+ professionals and delivered 100+ successful projects across various industries."
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Recognized as a leading software development company with 99% client satisfaction rate."
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Expanding into AI and blockchain solutions, aiming to serve 500+ clients globally."
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
              About Realz Solutions
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              We are a team of passionate developers, designers, and strategists dedicated to creating
              exceptional digital experiences that drive business growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-primary-foreground/5 via-primary-foreground/3 to-transparent backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-foreground/10 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/50 to-transparent animate-scan"></div>
                </div>

                <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-primary-foreground/40 group-hover:border-primary-foreground transition-all duration-500"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-primary-foreground/40 group-hover:border-primary-foreground transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-primary-foreground/40 group-hover:border-primary-foreground transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-primary-foreground/40 group-hover:border-primary-foreground transition-all duration-500"></div>

                <div className="relative">
                  <stat.icon className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  <p className="text-primary-foreground/70 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Our Story
            </h2>
            <p className="text-lg text-primary-foreground/70 max-w-3xl mx-auto leading-relaxed">
              From humble beginnings to industry recognition, our journey is defined by innovation,
              dedication, and a commitment to excellence.
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
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

                <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-primary-foreground/10 rounded-full flex items-center justify-center border-2 border-primary-foreground/20">
                      <span className="text-2xl font-bold text-primary-foreground">{item.year}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary-foreground mb-2">{item.title}</h3>
                    <p className="text-primary-foreground/70 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Our Values
            </h2>
            <p className="text-lg text-primary-foreground/70 max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do and drive our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
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

                <div className="relative text-center">
                  <div className="inline-flex p-4 bg-primary-foreground/10 rounded-2xl mb-4">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-foreground mb-3">{value.title}</h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-primary-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Talented professionals who bring expertise, passion, and innovation to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
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

                <div className="relative space-y-4">
                  <div className="relative">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary-foreground/10 to-primary-foreground/5 rounded-2xl flex items-center justify-center border border-primary-foreground/20">
                      <div className="text-4xl font-bold text-primary-foreground/20">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-foreground text-primary rounded-full flex items-center justify-center font-bold text-xs">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-lg font-bold text-primary-foreground mb-1">{member.name}</h3>
                    <p className="text-xs text-primary-foreground/70 font-medium uppercase tracking-wide mb-2">{member.role}</p>
                  </div>

                  <div className="flex justify-center">
                    <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-3 py-1.5">
                      <span className="text-[10px] text-primary-foreground/90 font-semibold uppercase tracking-wider">{member.expertise}</span>
                    </div>
                  </div>

                  <p className="text-primary-foreground/60 text-sm leading-relaxed text-center">
                    {member.description}
                  </p>

                  <div className="flex flex-wrap gap-2 justify-center pt-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-primary-foreground/5 border border-primary-foreground/10 rounded text-[10px] text-primary-foreground/80 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
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
                Ready to Work Together?
              </h2>
              <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with innovative technology solutions.
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-foreground/30"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
