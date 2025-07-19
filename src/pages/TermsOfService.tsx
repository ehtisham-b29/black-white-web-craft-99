import { ArrowLeft, Shield, Scale, FileText, Users, Globe, AlertTriangle, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      icon: Shield,
      content: `By accessing and using Realz Solutions' website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please discontinue use of our services immediately.`
    },
    {
      id: "services",
      title: "2. Our Services",
      icon: FileText,
      content: `Realz Solutions provides custom software development, web development, mobile application development, database solutions, cloud services, and security maintenance. All services are provided "as is" and subject to the specific terms outlined in individual service agreements.`
    },
    {
      id: "user-responsibilities",
      title: "3. User Responsibilities",
      icon: Users,
      content: `Users are responsible for providing accurate information, maintaining the confidentiality of their accounts, and using our services in compliance with applicable laws. You agree not to use our services for any unlawful purpose or in any way that could damage our reputation or operations.`
    },
    {
      id: "intellectual-property",
      title: "4. Intellectual Property Rights",
      icon: Scale,
      content: `All content, software, and materials provided by Realz Solutions remain our intellectual property unless explicitly transferred through a separate agreement. Clients retain ownership of their data and custom developments created specifically for them, as outlined in project contracts.`
    },
    {
      id: "privacy",
      title: "5. Privacy and Data Protection",
      icon: Shield,
      content: `We are committed to protecting your privacy and handling your data responsibly. Our data collection and processing practices are governed by our Privacy Policy, which forms an integral part of these terms. We implement industry-standard security measures to protect your information.`
    },
    {
      id: "limitation-liability",
      title: "6. Limitation of Liability",
      icon: AlertTriangle,
      content: `Realz Solutions' liability is limited to the maximum extent permitted by law. We are not liable for indirect, incidental, or consequential damages. Our total liability shall not exceed the amount paid by the client for the specific service in question.`
    },
    {
      id: "termination",
      title: "7. Termination",
      icon: Globe,
      content: `Either party may terminate services with appropriate notice as specified in individual service agreements. Upon termination, clients retain access to their data and deliverables as per the agreed terms. Some provisions of these terms shall survive termination.`
    },
    {
      id: "governing-law",
      title: "8. Governing Law",
      icon: Scale,
      content: `These terms are governed by and construed in accordance with applicable laws. Any disputes arising from these terms or our services shall be resolved through negotiation, mediation, or arbitration as specified in individual service agreements.`
    }
  ];

  const lastUpdated = "March 15, 2024";

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-hero">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 lg:mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center text-primary-foreground">
            <div className="flex items-center justify-center mb-6">
              <Scale className="w-12 h-12 mr-4" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Terms of Service
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Clear, transparent terms that protect both our clients and our business
            </p>
            <p className="text-sm text-primary-foreground/70 mt-4">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">Quick Navigation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors text-sm text-muted-foreground hover:text-foreground"
                >
                  <section.icon className="w-4 h-4 text-primary" />
                  {section.title}
                </a>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Table of Contents</h3>
                  <nav className="space-y-2">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="flex items-center gap-2 p-2 rounded text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      >
                        <section.icon className="w-4 h-4" />
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Need Help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Have questions about our terms? We're here to help.
                  </p>
                  <Link to="/#contact">
                    <Button size="sm" className="w-full">
                      Contact Us
                    </Button>
                  </Link>
                </Card>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="space-y-12">
                {/* Introduction */}
                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Welcome to Realz Solutions</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      These Terms of Service ("Terms") govern your use of Realz Solutions' website, services, and applications.
                      We've written these terms to be as clear and straightforward as possible, avoiding unnecessary legal jargon 
                      while ensuring we cover all the important aspects of our business relationship.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      By using our services, you're agreeing to these terms. We encourage you to read them carefully. 
                      If you have any questions, please don't hesitate to reach out to our team.
                    </p>
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
                      <p className="text-sm text-primary font-medium">
                        💡 <strong>Quick Summary:</strong> These terms explain what you can expect from us and what we expect from you. 
                        We're committed to transparency and building long-term partnerships with our clients.
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Terms Sections */}
                {sections.map((section, index) => (
                  <Card key={section.id} id={section.id} className="p-8 scroll-mt-24">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <section.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-foreground mb-2">{section.title}</h2>
                      </div>
                    </div>
                    
                    <div className="prose prose-lg max-w-none">
                      <p className="text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>
                      
                      {/* Additional details for specific sections */}
                      {section.id === "services" && (
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-muted/50 p-4 rounded-lg">
                            <h4 className="font-semibold text-foreground mb-2">Development Services</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Custom Software Development</li>
                              <li>• Web Application Development</li>
                              <li>• Mobile App Development</li>
                            </ul>
                          </div>
                          <div className="bg-muted/50 p-4 rounded-lg">
                            <h4 className="font-semibold text-foreground mb-2">Infrastructure Services</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Cloud Services & Migration</li>
                              <li>• Database Solutions</li>
                              <li>• Security & Maintenance</li>
                            </ul>
                          </div>
                        </div>
                      )}

                      {section.id === "user-responsibilities" && (
                        <div className="mt-6 bg-orange-50 border border-orange-200 rounded-lg p-4">
                          <h4 className="font-semibold text-orange-800 mb-2">Important Responsibilities:</h4>
                          <ul className="text-sm text-orange-700 space-y-1">
                            <li>• Provide accurate project requirements and feedback</li>
                            <li>• Maintain confidentiality of sensitive information</li>
                            <li>• Comply with all applicable laws and regulations</li>
                            <li>• Respect intellectual property rights</li>
                          </ul>
                        </div>
                      )}
                    </div>
                    
                    {index < sections.length - 1 && <Separator className="mt-8" />}
                  </Card>
                ))}

                {/* Contact Section */}
                <Card className="p-8 bg-primary/5 border-primary/20">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Questions About These Terms?</h2>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                      We believe in transparent communication. If you have any questions about these terms 
                      or need clarification on any point, our team is ready to help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/#contact">
                        <Button size="lg">
                          Contact Our Team
                        </Button>
                      </Link>
                      <Button variant="outline" size="lg">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Us
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      📧 legal@realzsolutions.com • 📞 Available Monday-Friday, 9 AM - 6 PM
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;