import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Cloud, CheckCircle, Server, Shield, Zap, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CloudServices = () => {
  const services = [
    {
      icon: Server,
      title: "Cloud Infrastructure Setup",
      description: "Design and implement scalable cloud infrastructure tailored to your business needs."
    },
    {
      icon: Zap,
      title: "DevOps & Automation",
      description: "Streamline your development workflow with CI/CD pipelines and automated deployments."
    },
    {
      icon: Monitor,
      title: "Monitoring & Analytics",
      description: "Real-time monitoring and analytics to ensure optimal performance and uptime."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Implement robust security measures and ensure compliance with industry standards."
    }
  ];

  const benefits = [
    "Reduced infrastructure costs",
    "Automatic scaling based on demand",
    "Enhanced security and compliance",
    "99.9% uptime guarantee",
    "Global content delivery",
    "Disaster recovery solutions",
    "24/7 monitoring and support",
    "Pay-as-you-use pricing model"
  ];

  const cloudProviders = [
    {
      title: "Amazon Web Services (AWS)",
      description: "Comprehensive cloud platform with 200+ services for computing, storage, and databases",
      services: ["EC2", "S3", "RDS", "Lambda", "CloudFront", "Route 53"]
    },
    {
      title: "Microsoft Azure",
      description: "Enterprise-grade cloud platform with strong integration for Microsoft technologies",
      services: ["Virtual Machines", "Blob Storage", "SQL Database", "Functions", "CDN", "DNS"]
    },
    {
      title: "Google Cloud Platform",
      description: "Modern cloud platform with advanced AI/ML capabilities and global infrastructure",
      services: ["Compute Engine", "Cloud Storage", "Cloud SQL", "Cloud Functions", "CDN", "DNS"]
    }
  ];

  const solutions = [
    {
      icon: Server,
      title: "Infrastructure as Code",
      description: "Automated infrastructure provisioning and management using tools like Terraform and CloudFormation."
    },
    {
      icon: Zap,
      title: "Serverless Architecture",
      description: "Build applications without managing servers using functions and managed services."
    },
    {
      icon: Monitor,
      title: "Container Orchestration",
      description: "Deploy and manage containerized applications using Kubernetes and Docker."
    }
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
                <Cloud className="w-12 h-12 text-primary-foreground" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">Cloud Services</h1>
            </div>
            
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Migrate to the cloud and unlock unlimited scalability, enhanced security, and reduced costs. 
              We help businesses leverage cloud technologies to accelerate growth and innovation.
            </p>
            
            <Button variant="outline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Start Cloud Migration
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Cloud Services We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              End-to-end cloud solutions designed to modernize your infrastructure and accelerate your digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Cloud Platforms We Work With</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're certified experts in all major cloud platforms, ensuring you get the best solution for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cloudProviders.map((provider, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-foreground mb-4">{provider.title}</h3>
                <p className="text-muted-foreground mb-6">{provider.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground mb-3">Key Services:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {provider.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full text-center"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Modern Cloud Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Leverage cutting-edge cloud technologies to build scalable, resilient applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="p-4 bg-primary/10 rounded-xl w-fit mx-auto mb-6">
                  <solution.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{solution.title}</h3>
                <p className="text-muted-foreground">{solution.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Why Move to the Cloud?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Cloud migration offers numerous benefits that can transform your business operations and reduce IT overhead.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Migration Timeline</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm font-bold text-primary">1</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Assessment & Planning</h4>
                    <p className="text-sm text-muted-foreground">2-3 weeks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm font-bold text-primary">2</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Infrastructure Setup</h4>
                    <p className="text-sm text-muted-foreground">1-2 weeks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm font-bold text-primary">3</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Data Migration</h4>
                    <p className="text-sm text-muted-foreground">1-3 weeks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm font-bold text-primary">4</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Testing & Go-Live</h4>
                    <p className="text-sm text-muted-foreground">1 week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Move to the Cloud?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Let's assess your current infrastructure and create a cloud migration strategy that minimizes risk and maximizes benefits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Get Cloud Assessment
            </Button>
            <Button variant="ghost" size="lg" className="text-primary-foreground border-primary-foreground hover:bg-white hover:text-black">
              View Success Stories
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudServices;