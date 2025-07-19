import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Database, CheckCircle, BarChart, Shield, Zap, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DatabaseSolutions = () => {
  const services = [
    {
      icon: Database,
      title: "Database Design & Architecture",
      description: "Custom database schemas optimized for your specific business requirements and data relationships."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Fine-tune queries, indexes, and database configurations for maximum speed and efficiency."
    },
    {
      icon: RefreshCw,
      title: "Data Migration & Integration",
      description: "Seamlessly migrate data between systems and integrate multiple data sources."
    },
    {
      icon: BarChart,
      title: "Analytics & Reporting",
      description: "Set up data warehouses and business intelligence solutions for actionable insights."
    }
  ];

  const benefits = [
    "Improved application performance",
    "Scalable data architecture",
    "Enhanced data security and compliance",
    "Reduced database maintenance costs",
    "Better data consistency and integrity",
    "Real-time analytics capabilities",
    "Automated backup and recovery",
    "24/7 monitoring and support"
  ];

  const databaseTypes = [
    {
      title: "Relational Databases",
      description: "PostgreSQL, MySQL, SQL Server for structured data with complex relationships",
      technologies: ["PostgreSQL", "MySQL", "SQL Server", "Oracle"]
    },
    {
      title: "NoSQL Databases",
      description: "MongoDB, Cassandra, DynamoDB for flexible, scalable document and key-value storage",
      technologies: ["MongoDB", "Cassandra", "DynamoDB", "Redis"]
    },
    {
      title: "Cloud Databases",
      description: "Managed database services for reduced maintenance and automatic scaling",
      technologies: ["AWS RDS", "Azure SQL", "Google Cloud SQL", "Firebase"]
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
                <Database className="w-12 h-12 text-primary-foreground" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">Database Solutions</h1>
            </div>
            
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Unlock the full potential of your data with robust, scalable database solutions. 
              We design, optimize, and maintain databases that power your applications and drive informed business decisions.
            </p>
            
            <Button variant="outline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Optimize Your Database
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Database Services We Provide</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive database solutions to ensure your data is secure, accessible, and performing at its best.
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

      {/* Database Types Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Database Technologies</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We work with all major database technologies to find the perfect fit for your use case.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {databaseTypes.map((type, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-foreground mb-4">{type.title}</h3>
                <p className="text-muted-foreground mb-6">{type.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {type.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Benefits of Professional Database Management</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Professional database management ensures your data infrastructure supports your business growth while maintaining security and performance.
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
              <h3 className="text-2xl font-bold text-foreground mb-6">Performance Metrics</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Query Speed Improvement</span>
                  <span className="text-2xl font-bold text-primary">Up to 10x</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Storage Optimization</span>
                  <span className="text-2xl font-bold text-primary">30-50%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Uptime Guarantee</span>
                  <span className="text-2xl font-bold text-primary">99.9%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Response Time</span>
                  <span className="text-2xl font-bold text-primary">&lt; 100ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Database Optimization Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to database design and optimization that ensures optimal performance and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Assessment & Analysis", description: "Analyze current database structure, performance bottlenecks, and requirements" },
              { step: "2", title: "Design & Planning", description: "Create optimized database schema and migration strategy" },
              { step: "3", title: "Implementation", description: "Execute database changes with minimal downtime and data integrity" },
              { step: "4", title: "Monitoring & Maintenance", description: "Ongoing performance monitoring and proactive maintenance" }
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

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Database?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Let's analyze your current database setup and create a solution that scales with your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Get Database Audit
            </Button>
            <Button variant="ghost" size="lg" className="text-primary-foreground border-primary-foreground hover:bg-white hover:text-black">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DatabaseSolutions;