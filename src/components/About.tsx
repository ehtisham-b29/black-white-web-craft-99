import { Card } from "@/components/ui/card";
import { CheckCircle, Users, Award, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Projects Completed" },
    { icon: Award, value: "50+", label: "Happy Clients" },
    { icon: Clock, value: "5+", label: "Years Experience" },
    { icon: CheckCircle, value: "99%", label: "Success Rate" },
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We leverage cutting-edge technologies to create solutions that give you a competitive advantage.",
    },
    {
      title: "Quality Driven",
      description: "Every line of code is crafted with precision, tested thoroughly, and optimized for performance.",
    },
    {
      title: "Client Focused",
      description: "Your success is our success. We work closely with you throughout the entire development process.",
    },
    {
      title: "Agile Delivery",
      description: "Fast iterations, continuous feedback, and timely delivery without compromising on quality.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About TechForge
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a team of passionate developers, designers, and strategists dedicated to creating exceptional digital experiences that drive business growth.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-gradient-card hover:shadow-md transition-all duration-300 animate-scale-in">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Redesigned Main Content - Bento Box Style */}
        <div className="mb-20">
          {/* Main Hero Content Block */}
          <div className="relative bg-gradient-to-br from-primary to-primary-hover rounded-3xl p-12 lg:p-16 text-primary-foreground mb-8 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10 max-w-4xl">
              <div className="inline-flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                <div className="w-3 h-3 bg-primary-foreground rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Our Story</span>
              </div>
              
              <h3 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                Building the Future of
                <br />
                <span className="text-primary-foreground/80">Digital Solutions</span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <p className="text-xl text-primary-foreground/90 mb-6 leading-relaxed">
                    Founded with a vision to bridge the gap between technology and business needs, TechForge has grown into a trusted partner for companies looking to innovate and scale their digital presence.
                  </p>
                  <p className="text-lg text-primary-foreground/80 leading-relaxed">
                    Our multidisciplinary team combines technical expertise with business acumen to deliver solutions that not only meet your current needs but also position you for future growth.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-primary-foreground" />
                    <span className="text-primary-foreground/90">Certified development team</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-primary-foreground" />
                    <span className="text-primary-foreground/90">24/7 technical support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-primary-foreground" />
                    <span className="text-primary-foreground/90">Agile methodology</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-primary-foreground" />
                    <span className="text-primary-foreground/90">Post-launch maintenance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Experience Highlight */}
            <div className="lg:col-span-2 bg-gradient-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-foreground mb-2">5+ Years</h4>
                  <p className="text-muted-foreground">Of delivering exceptional digital solutions across various industries and technologies.</p>
                </div>
              </div>
            </div>

            {/* Team Expertise */}
            <div className="bg-gradient-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300 group">
              <div className="text-center">
                <div className="p-3 bg-primary/10 rounded-xl inline-flex mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">Expert Team</h4>
                <p className="text-muted-foreground text-sm">Skilled developers, designers, and strategists</p>
              </div>
            </div>

            {/* Success Rate */}
            <div className="bg-gradient-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300 group">
              <div className="text-center">
                <div className="p-3 bg-primary/10 rounded-xl inline-flex mb-4 group-hover:bg-primary/20 transition-colors">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">99% Success</h4>
                <p className="text-muted-foreground text-sm">Client satisfaction and project delivery rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="p-8 bg-gradient-card hover:shadow-md transition-all duration-300 animate-fade-in">
              <h4 className="text-xl font-semibold text-foreground mb-4">{value.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;