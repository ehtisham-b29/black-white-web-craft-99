import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Eye, Lock, Database, Users, Mail } from "lucide-react";
const PrivacyPolicy = () => {
  const sections = [{
    id: "information-we-collect",
    title: "Information We Collect",
    icon: Database,
    content: [{
      subtitle: "Personal Information",
      text: "We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This may include your name, email address, phone number, and company information."
    }, {
      subtitle: "Usage Information",
      text: "We automatically collect certain information about how you use our website and services, including your IP address, browser type, operating system, referring URLs, and pages visited."
    }, {
      subtitle: "Cookies and Tracking",
      text: "We use cookies and similar tracking technologies to analyze trends, administer the website, track users' movements, and gather demographic information."
    }]
  }, {
    id: "how-we-use-information",
    title: "How We Use Your Information",
    icon: Eye,
    content: [{
      subtitle: "Service Provision",
      text: "We use your information to provide, maintain, and improve our services, process transactions, and communicate with you about your account or our services."
    }, {
      subtitle: "Communication",
      text: "We may use your contact information to send you technical notices, updates, security alerts, and administrative messages."
    }, {
      subtitle: "Analytics and Improvement",
      text: "We analyze usage patterns to understand how our services are used and to improve user experience and functionality."
    }]
  }, {
    id: "information-sharing",
    title: "Information Sharing and Disclosure",
    icon: Users,
    content: [{
      subtitle: "Service Providers",
      text: "We may share your information with third-party service providers who perform services on our behalf, such as hosting, data analysis, and customer service."
    }, {
      subtitle: "Legal Requirements",
      text: "We may disclose your information if required to do so by law or in response to valid requests by public authorities."
    }, {
      subtitle: "Business Transfers",
      text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction."
    }]
  }, {
    id: "data-security",
    title: "Data Security",
    icon: Lock,
    content: [{
      subtitle: "Security Measures",
      text: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
    }, {
      subtitle: "Data Encryption",
      text: "We use industry-standard encryption to protect sensitive data during transmission and storage."
    }, {
      subtitle: "Access Controls",
      text: "We limit access to personal information to employees and contractors who need it to perform their job functions."
    }]
  }, {
    id: "your-rights",
    title: "Your Rights and Choices",
    icon: Shield,
    content: [{
      subtitle: "Access and Correction",
      text: "You have the right to access, update, or correct your personal information. You can do this by logging into your account or contacting us directly."
    }, {
      subtitle: "Data Portability",
      text: "You have the right to request a copy of your personal information in a structured, machine-readable format."
    }, {
      subtitle: "Deletion",
      text: "You can request that we delete your personal information, subject to certain legal and operational requirements."
    }, {
      subtitle: "Opt-Out",
      text: "You can opt out of receiving promotional communications from us by following the unsubscribe instructions in those communications."
    }]
  }];
  const contactInfo = {
    email: "privacy@techforge.com",
    address: "123 Tech Street, Innovation City, TC 12345",
    phone: "+1 (555) 123-4567"
  };
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mx-0 my-[8px] py-[8px]">
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use our services.
            </p>
            <div className="text-sm text-primary-foreground/60">
              Last updated: January 1, 2024
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Table of Contents</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {sections.map((section, index) => <a key={section.id} href={`#${section.id}`} className="flex items-center p-4 bg-card border border-border rounded-lg hover:bg-card-hover hover:border-border-strong transition-all duration-200 group">
                <section.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground mr-3 flex-shrink-0" />
                <span className="font-medium text-foreground group-hover:text-primary">
                  {index + 1}. {section.title}
                </span>
              </a>)}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {sections.map((section, index) => <div key={section.id} id={section.id} className="scroll-mt-24">
                <div className="flex items-center mb-8">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">
                    {index + 1}. {section.title}
                  </h2>
                </div>
                
                <div className="space-y-8">
                  {section.content.map((item, itemIndex) => <div key={itemIndex} className="bg-card border border-border rounded-lg p-6 hover:border-border-strong transition-colors">
                      <h3 className="text-xl font-semibold text-foreground mb-4">
                        {item.subtitle}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.text}
                      </p>
                    </div>)}
                </div>
              </div>)}

            {/* Contact Section */}
            <div id="contact-us" className="scroll-mt-24">
              <div className="flex items-center mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  Contact Us
                </h2>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-8">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center md:text-left">
                    <h4 className="font-semibold text-foreground mb-2">Email</h4>
                    <a href={`mailto:${contactInfo.email}`} className="text-primary hover:text-primary-hover transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                  
                  <div className="text-center md:text-left">
                    <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                    <a href={`tel:${contactInfo.phone}`} className="text-primary hover:text-primary-hover transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                  
                  <div className="text-center md:text-left">
                    <h4 className="font-semibold text-foreground mb-2">Address</h4>
                    <p className="text-muted-foreground">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Updates Section */}
            <div className="bg-secondary border border-border rounded-lg p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Changes to This Privacy Policy
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default PrivacyPolicy;