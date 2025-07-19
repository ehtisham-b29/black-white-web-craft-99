import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Code2, CheckCircle, Users, Clock, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CustomSoftwareDevelopment = () => {
  const benefits = [
    "Tailored solutions that fit your exact business needs",
    "Scalable architecture that grows with your business",
    "Full ownership of source code and intellectual property",
    "Seamless integration with existing systems",
    "Ongoing support and maintenance",
    "Cost-effective in the long run"
  ];

  const process = [
    {
      icon: Users,
      title: "Discovery & Planning",
      description: "We analyze your requirements, understand your business goals, and create a detailed project roadmap."
    },
    {
      icon: Code2,
      title: "Design & Development",
      description: "Our expert developers build your solution using cutting-edge technologies and industry best practices."
    },
    {
      icon: Shield,
      title: "Testing & Quality Assurance",
      description: "Rigorous testing ensures your software is secure, reliable, and performs optimally under all conditions."
    },
    {
      icon: Zap,
      title: "Deployment & Support",
      description: "We deploy your solution and provide ongoing support to ensure smooth operation and continuous improvement."
    }
  ];

  const technologies = [
    "React", "Node.js", "Python", "Java", ".NET", "PostgreSQL", "MongoDB", "AWS", "Docker", "Kubernetes"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/#services" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <div className="p-4 bg-primary-foreground/10 rounded-xl mr-6">
                <Code2 className="w-12 h-12 text-primary-foreground" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">Custom Software Development</h1>
            </div>
            
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Transform your unique business challenges into competitive advantages with our bespoke software solutions. 
              We create powerful, scalable applications that are designed specifically for your organization's needs.
            </p>
            
            <Button variant="outline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Why Choose Custom Software?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Off-the-shelf solutions might not fit your unique processes. Custom software gives you complete control and flexibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-card rounded-lg border border-border">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Development Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="p-4 bg-primary/10 rounded-xl w-fit mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Technologies We Use</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We leverage the latest technologies and frameworks to build robust, scalable solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-primary/10 text-primary rounded-full font-medium hover:bg-primary/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Custom Solution?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Let's discuss your project requirements and create a solution that perfectly fits your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Get Free Consultation
            </Button>
            <Button variant="ghost" size="lg" className="text-primary-foreground border-primary-foreground hover:bg-white hover:text-black">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomSoftwareDevelopment;