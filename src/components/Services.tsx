import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
      features: ["E-commerce Platforms", "Content Management", "Progressive Web Apps", "Performance Optimization"],
      link: "/services/web-development"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      features: ["iOS Development", "Android Development", "React Native", "Flutter Development"],
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
    <section id="services" className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we provide comprehensive IT services that transform your ideas into powerful digital solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 bg-gradient-card hover:bg-card-hover transition-all duration-500 hover:shadow-xl hover:scale-105 border border-border group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Subtle background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="flex items-center mb-6 relative z-10">
                <div className="p-4 bg-primary/10 rounded-xl mr-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button variant="minimal" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                <Link to={service.link}>
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <div className="bg-primary text-primary-foreground rounded-2xl p-12 shadow-xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Let's discuss how we can help transform your business with cutting-edge technology solutions.
            </p>
            <Button variant="outline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Get Free Consultation
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;