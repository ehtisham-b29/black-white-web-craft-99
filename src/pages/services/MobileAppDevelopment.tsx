import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Smartphone, CheckCircle, Monitor, Users, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const MobileAppDevelopment = () => {
  const platforms = [
    {
      icon: Smartphone,
      title: "Native iOS Development",
      description: "High-performance apps built specifically for iOS using Swift and latest Apple technologies."
    },
    {
      icon: Smartphone,
      title: "Native Android Development",
      description: "Powerful Android applications using Kotlin/Java and Google's best practices."
    },
    {
      icon: Monitor,
      title: "Cross-Platform Development",
      description: "Cost-effective solutions using React Native and Flutter for both platforms."
    },
    {
      icon: Users,
      title: "UI/UX Design",
      description: "Intuitive, user-friendly interfaces that provide exceptional mobile experiences."
    }
  ];

  const benefits = [
    "Reach customers wherever they are",
    "Push notifications for direct engagement",
    "Offline functionality capabilities",
    "Access to device features (camera, GPS, etc.)",
    "App store visibility and discovery",
    "Enhanced brand presence",
    "Improved customer loyalty",
    "Data collection and analytics"
  ];

  const features = [
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Apps that load fast and run smoothly on all devices"
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Robust security measures to protect user data"
    },
    {
      icon: Users,
      title: "User Experience",
      description: "Intuitive interfaces that users love to interact with"
    }
  ];

  const technologies = [
    "React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Firebase", "AWS Mobile", "GraphQL", "REST APIs", "SQLite"
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
                <Smartphone className="w-12 h-12 text-primary-foreground" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">Mobile App Development</h1>
            </div>
            
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Transform your business with powerful mobile applications that engage users and drive growth. 
              We create native and cross-platform apps that deliver exceptional experiences on iOS and Android.
            </p>
            
            <Button variant="outline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Start Your App Project
            </Button>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Development Platforms</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We develop for all major mobile platforms using the most appropriate technology for your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <platform.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{platform.title}</h3>
                    <p className="text-muted-foreground">{platform.description}</p>
                  </div>
                </div>
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
              <h2 className="text-4xl font-bold text-foreground mb-6">Why Your Business Needs a Mobile App</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Mobile apps provide unique advantages that can significantly boost your business performance and customer engagement.
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
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our App Development Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From concept to App Store, we guide you through every step of the mobile app development journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Strategy & Planning", description: "Define objectives, target audience, and technical requirements" },
              { step: "2", title: "Design & Prototyping", description: "Create intuitive user interfaces and interactive prototypes" },
              { step: "3", title: "Development & Testing", description: "Build the app with rigorous testing throughout the process" },
              { step: "4", title: "Launch & Support", description: "Deploy to app stores and provide ongoing maintenance" }
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

      {/* Technologies Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Technologies We Use</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We leverage the latest mobile development technologies to create robust, scalable applications.
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
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Mobile App?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Let's turn your app idea into reality with a solution that your users will love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Get Free Consultation
            </Button>
            <Button variant="ghost" size="lg" className="text-primary-foreground border-primary-foreground hover:bg-white hover:text-black">
              View App Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MobileAppDevelopment;