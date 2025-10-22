import { Card } from "~/components/ui/card";
import { CheckCircle, Users, Award, Clock } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const AnimatedCounter = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000; // 2 seconds
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
    <div ref={counterRef} className="text-3xl font-bold text-primary-foreground mb-2">
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

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Technology Officer",
      expertise: "Full-Stack Development & Architecture",
      description: "10+ years building scalable enterprise solutions with expertise in cloud infrastructure and modern frameworks.",
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      expertise: "AI & Machine Learning",
      description: "Specializes in developing intelligent systems and AI-powered applications that drive innovation.",
    },
    {
      name: "Emily Rodriguez",
      role: "Senior Designer",
      expertise: "UI/UX & Product Design",
      description: "Creates beautiful, user-centric designs that enhance engagement and deliver exceptional experiences.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            About Realz Solutions
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-3xl mx-auto leading-relaxed">
            We are a team of passionate developers, designers, and strategists dedicated to creating exceptional digital experiences that drive business growth.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
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
                {/* Profile Picture with Number Badge */}
                <div className="relative">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-foreground/10 to-primary-foreground/5 rounded-2xl flex items-center justify-center border border-primary-foreground/20 group-hover:border-primary-foreground/40 transition-colors duration-500">
                    <div className="text-6xl font-bold text-primary-foreground/20">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-primary-foreground text-primary rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    0{index + 1}
                  </div>
                </div>

                {/* Name and Role */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-primary-foreground leading-tight mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-foreground/70 text-xs font-medium uppercase tracking-wide">{member.role}</p>
                </div>

                {/* Divider */}
                <div className="w-12 h-px bg-gradient-to-r from-primary-foreground/50 to-transparent mx-auto"></div>

                {/* Expertise Badge */}
                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-3 py-1.5">
                    <span className="text-[10px] text-primary-foreground/90 font-semibold uppercase tracking-wider">{member.expertise}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-primary-foreground/60 text-sm leading-relaxed text-center">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;