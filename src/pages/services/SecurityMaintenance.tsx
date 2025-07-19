import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Shield, CheckCircle, Search, Monitor, RefreshCw, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SecurityMaintenance = () => {
  const services = [
    {
      icon: Search,
      title: "Security Audits",
      description: "Comprehensive security assessments to identify vulnerabilities and security gaps in your applications."
    },
    {
      icon: Shield,
      title: "Penetration Testing",
      description: "Ethical hacking to discover security weaknesses before malicious attackers do."
    },
    {
      icon: Monitor,
      title: "24/7 Monitoring",
      description: "Continuous monitoring of your applications and infrastructure for security threats and performance issues."
    },
    {
      icon: RefreshCw,
      title: "Regular Updates",
      description: "Scheduled maintenance, security patches, and feature updates to keep your systems current."
    }
  ];

  const securityFeatures = [
    "Vulnerability assessments",
    "Code security reviews",
    "Data encryption implementation",
    "Access control management",
    "Compliance auditing (GDPR, HIPAA, SOC 2)",
    "Incident response planning",
    "Security training for your team",
    "Backup and disaster recovery"
  ];

  const maintenanceServices = [
    {
      icon: Monitor,
      title: "Proactive Monitoring",
      description: "Real-time monitoring of system performance, uptime, and security metrics with instant alerts."
    },
    {
      icon: RefreshCw,
      title: "Regular Updates",
      description: "Scheduled security patches, dependency updates, and feature enhancements."
    },
    {
      icon: AlertTriangle,
      title: "Issue Resolution",
      description: "Quick identification and resolution of bugs, performance issues, and security vulnerabilities."
    }
  ];

  const stats = [
    { label: "Average Response Time", value: "< 15 min" },
    { label: "Uptime Guarantee", value: "99.9%" },
    { label: "Security Incidents Prevented", value: "1000+" },
    { label: "Systems Under Management", value: "500+" }
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
                <Shield className="w-12 h-12 text-primary-foreground" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">Security & Maintenance</h1>
            </div>
            
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Protect your digital assets and ensure optimal performance with our comprehensive security audits and ongoing maintenance services. 
              Keep your applications secure, updated, and running smoothly 24/7.
            </p>
            
            <Button variant="outline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Get Security Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Security & Maintenance Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive protection and maintenance solutions to keep your applications secure and performing at their best.
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

      {/* Security Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Comprehensive Security Coverage</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our security services cover all aspects of application and infrastructure security to protect your business from modern threats.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              {maintenanceServices.map((service, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Track Record</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Numbers that demonstrate our commitment to security and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Security Assessment Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to identifying and addressing security vulnerabilities in your applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Discovery", description: "Map out your applications, infrastructure, and data flows" },
              { step: "2", title: "Assessment", description: "Identify vulnerabilities using automated tools and manual testing" },
              { step: "3", title: "Analysis", description: "Evaluate risks and prioritize security improvements" },
              { step: "4", title: "Remediation", description: "Implement security fixes and establish ongoing monitoring" }
            ].map((phase, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-lg font-bold text-primary mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{phase.title}</h3>
                <p className="text-muted-foreground text-sm">{phase.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Plans Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Maintenance Plans</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the maintenance plan that best fits your needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Basic",
                price: "Starting at $500/month",
                features: ["Monthly security updates", "Performance monitoring", "Basic support (business hours)", "Quarterly reports"]
              },
              {
                title: "Professional",
                price: "Starting at $1,200/month",
                features: ["Weekly security updates", "24/7 monitoring", "Priority support", "Monthly security audits", "Incident response"]
              },
              {
                title: "Enterprise",
                price: "Custom pricing",
                features: ["Real-time updates", "Dedicated security team", "24/7 support", "Weekly audits", "Custom compliance", "SLA guarantees"]
              }
            ].map((plan, index) => (
              <Card key={index} className={`p-8 ${index === 1 ? 'border-primary shadow-lg' : ''}`}>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.title}</h3>
                  <p className="text-primary font-semibold mb-6">{plan.price}</p>
                  <ul className="space-y-3 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={index === 1 ? "default" : "outline"} 
                    className="w-full mt-6"
                  >
                    Choose Plan
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Secure Your Applications Today</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Don't wait for a security breach. Let's assess your current security posture and implement comprehensive protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Get Free Security Audit
            </Button>
            <Button variant="ghost" size="lg" className="text-primary-foreground border-primary-foreground hover:bg-white hover:text-black">
              View Security Reports
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SecurityMaintenance;