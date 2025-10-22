import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import { 
  Code2, 
  Globe, 
  Smartphone, 
  Database, 
  Cloud, 
  Shield,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet your specific business requirements and scale with your growth.",
      features: ["Enterprise Applications", "API Development", "System Integration", "Legacy Modernization"],
      link: "/services/custom-software-development"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with the latest technologies and best practices.",
      features: ["E-commerce Platforms", "Content Management", "Progressive Web Apps", "Performance Optimization", "SEO Optimization"],
      link: "/services/web-development"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      features: ["iOS Development", "Android Development", "React Native", "Flutter Development", "App Store Deployment"],
      link: "/services/mobile-app-development"
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Robust database design and optimization services to ensure your data is secure, accessible, and scalable.",
      features: ["Database Design", "Performance Tuning", "Data Migration", "Analytics Setup"],
      link: "/services/database-solutions"
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Cloud infrastructure setup and management to ensure your applications are scalable, secure, and always available.",
      features: ["AWS/Azure Setup", "DevOps Automation", "Monitoring", "Disaster Recovery"],
      link: "/services/cloud-services"
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Comprehensive security audits and ongoing maintenance to keep your applications secure and up-to-date.",
      features: ["Security Audits", "Code Reviews", "24/7 Monitoring", "Regular Updates"],
      link: "/services/security-maintenance"
    },
  ];

  return (
    <section id="services" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="animate-fade-in max-w-5xl mx-auto">
          <div className="group relative bg-gradient-to-br from-primary-foreground/5 via-primary-foreground/3 to-transparent backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-12 lg:p-16 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-primary-foreground/10">
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

            <div className="relative text-center space-y-8">
              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                Ready to Start Your Project?
              </h2>

              {/* Description */}
              <p className="text-lg text-primary-foreground/70 max-w-3xl mx-auto leading-relaxed">
                From concept to deployment, we provide comprehensive IT services that transform your ideas into powerful digital solutions.
              </p>

              {/* Divider */}
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary-foreground/50 to-transparent mx-auto"></div>

              {/* CTA Button */}
              <button className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold py-4 px-10 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-foreground/30 group/btn">
                <span className="text-base">Get Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;