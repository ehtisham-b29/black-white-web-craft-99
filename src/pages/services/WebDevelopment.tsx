import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Globe, CheckCircle, Palette, Smartphone, Zap, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const WebDevelopment = () => {
  const services = [
    {
      icon: Palette,
      title: "Custom Web Design",
      description: "Beautiful, responsive designs that reflect your brand and engage your audience."
    },
    {
      icon: Smartphone,
      title: "Responsive Development",
      description: "Websites that work perfectly on all devices, from desktop to mobile."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast loading times and smooth user experiences."
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Built-in SEO best practices to help your site rank higher in search results."
    }
  ];

  const features = [
    "Modern, responsive design",
    "Content Management Systems",
    "E-commerce integration",
    "Progressive Web Apps (PWA)",
    "API integrations",
    "Security best practices",
    "Analytics and tracking",
    "Ongoing maintenance and support"
  ];

  const technologies = [
    "React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS", "Node.js", "WordPress", "Shopify", "Strapi"
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
                <Globe className="w-12 h-12 text-primary-foreground" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">Web Development</h1>
            </div>
            
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Create stunning, high-performance websites that captivate your audience and drive business growth. 
              From simple landing pages to complex web applications, we build digital experiences that convert.
            </p>
            
            <Button variant="outline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive web development services tailored to your business objectives.
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

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Everything You Need for Success</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our web development solutions include all the features and functionality needed to establish a strong online presence.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Project Timeline</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm font-bold text-primary">1</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Planning & Design</h4>
                    <p className="text-sm text-muted-foreground">1-2 weeks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm font-bold text-primary">2</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Development</h4>
                    <p className="text-sm text-muted-foreground">3-6 weeks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm font-bold text-primary">3</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Testing & Launch</h4>
                    <p className="text-sm text-muted-foreground">1 week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Technologies We Master</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We use cutting-edge technologies to build fast, secure, and scalable web solutions.
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
          <h2 className="text-4xl font-bold mb-6">Ready to Launch Your Website?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Let's create a website that not only looks amazing but also drives real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Get Free Quote
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

export default WebDevelopment;