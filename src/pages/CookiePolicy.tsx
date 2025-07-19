import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Clock, Cookie, Shield, Settings, Eye, BarChart } from "lucide-react";
const CookiePolicy = () => {
  const [activeSection, setActiveSection] = useState("");
  const sections = [{
    id: "overview",
    title: "What Are Cookies",
    icon: Cookie
  }, {
    id: "types",
    title: "Types of Cookies",
    icon: Settings
  }, {
    id: "usage",
    title: "How We Use Cookies",
    icon: Eye
  }, {
    id: "categories",
    title: "Cookie Categories",
    icon: BarChart
  }, {
    id: "management",
    title: "Managing Cookies",
    icon: Shield
  }, {
    id: "updates",
    title: "Policy Updates",
    icon: Clock
  }];
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Cookie className="w-5 h-5 text-primary" />
                Contents
              </h3>
              <nav className="space-y-2">
                {sections.map(section => <Button key={section.id} variant="ghost" onClick={() => scrollToSection(section.id)} className={`w-full justify-start text-left ${activeSection === section.id ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                    <section.icon className="w-4 h-4 mr-2" />
                    {section.title}
                  </Button>)}
              </nav>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto">
              
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Understanding how we use cookies to enhance your experience on our website.
              </p>
              <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  Last updated: December 2024
                </div>
              </div>
            </div>

            {/* What Are Cookies */}
            <section id="overview" className="scroll-mt-24">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Cookie className="w-6 h-6 text-primary" />
                  What Are Cookies
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Cookies are small text files that are placed on your device when you visit our website. 
                    They help us provide you with a better experience by remembering your preferences and 
                    understanding how you interact with our site.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    These files contain information that is transferred to your device's hard drive and 
                    stored there. They cannot run programs or deliver viruses to your computer.
                  </p>
                </div>
              </Card>
            </section>

            {/* Types of Cookies */}
            <section id="types" className="scroll-mt-24">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Settings className="w-6 h-6 text-primary" />
                  Types of Cookies We Use
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Essential Cookies</h3>
                    <Badge variant="secondary" className="mb-3">Required</Badge>
                    <p className="text-sm text-muted-foreground">
                      Necessary for the website to function properly. These cannot be disabled.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Performance Cookies</h3>
                    <Badge variant="outline" className="mb-3">Optional</Badge>
                    <p className="text-sm text-muted-foreground">
                      Help us understand how visitors interact with our website.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Functional Cookies</h3>
                    <Badge variant="outline" className="mb-3">Optional</Badge>
                    <p className="text-sm text-muted-foreground">
                      Enable enhanced functionality and personalization.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Marketing Cookies</h3>
                    <Badge variant="outline" className="mb-3">Optional</Badge>
                    <p className="text-sm text-muted-foreground">
                      Used to deliver relevant advertisements to you.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            {/* How We Use Cookies */}
            <section id="usage" className="scroll-mt-24">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Eye className="w-6 h-6 text-primary" />
                  How We Use Cookies
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Website Functionality</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Remember your preferences and settings</li>
                      <li>• Keep you logged in during your session</li>
                      <li>• Enable secure access to member areas</li>
                      <li>• Provide shopping cart functionality</li>
                    </ul>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Analytics and Performance</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Understand how visitors use our website</li>
                      <li>• Identify popular content and features</li>
                      <li>• Monitor website performance and loading times</li>
                      <li>• Detect and resolve technical issues</li>
                    </ul>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Marketing and Advertising</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Deliver relevant advertisements</li>
                      <li>• Measure advertising campaign effectiveness</li>
                      <li>• Personalize marketing content</li>
                      <li>• Prevent showing the same ads repeatedly</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </section>

            {/* Cookie Categories */}
            <section id="categories" className="scroll-mt-24">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <BarChart className="w-6 h-6 text-primary" />
                  Cookie Categories
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 font-semibold">Cookie Name</th>
                        <th className="text-left py-3 font-semibold">Purpose</th>
                        <th className="text-left py-3 font-semibold">Duration</th>
                        <th className="text-left py-3 font-semibold">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 font-mono text-sm">session_id</td>
                        <td className="py-3 text-sm">Maintain user session</td>
                        <td className="py-3 text-sm">Session</td>
                        <td className="py-3"><Badge variant="secondary">Essential</Badge></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 font-mono text-sm">preferences</td>
                        <td className="py-3 text-sm">Store user preferences</td>
                        <td className="py-3 text-sm">1 year</td>
                        <td className="py-3"><Badge variant="outline">Functional</Badge></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 font-mono text-sm">analytics_id</td>
                        <td className="py-3 text-sm">Website analytics</td>
                        <td className="py-3 text-sm">2 years</td>
                        <td className="py-3"><Badge variant="outline">Performance</Badge></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 font-mono text-sm">marketing_id</td>
                        <td className="py-3 text-sm">Personalized advertising</td>
                        <td className="py-3 text-sm">30 days</td>
                        <td className="py-3"><Badge variant="outline">Marketing</Badge></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </section>

            {/* Managing Cookies */}
            <section id="management" className="scroll-mt-24">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  Managing Your Cookie Preferences
                </h2>
                <div className="space-y-6">
                  <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                    <h3 className="font-semibold text-lg mb-3">Cookie Settings</h3>
                    <p className="text-muted-foreground mb-4">
                      You can control and manage cookies through our cookie preference center, 
                      available at the bottom of every page.
                    </p>
                    <Button className="bg-primary hover:bg-primary/90">
                      Manage Cookie Preferences
                    </Button>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Browser Settings</h3>
                    <p className="text-muted-foreground mb-4">
                      You can also manage cookies through your browser settings:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• <strong>Chrome:</strong> Settings → Privacy and security → Cookies</li>
                      <li>• <strong>Firefox:</strong> Options → Privacy & Security → Cookies</li>
                      <li>• <strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                      <li>• <strong>Edge:</strong> Settings → Cookies and site permissions</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <p className="text-sm text-amber-800">
                      <strong>Note:</strong> Disabling certain cookies may impact website functionality 
                      and your user experience.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            {/* Policy Updates */}
            <section id="updates" className="scroll-mt-24">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary" />
                  Policy Updates
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may update this Cookie Policy from time to time to reflect changes in our 
                    practices or for other operational, legal, or regulatory reasons.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    When we make changes, we will update the "Last updated" date at the top of this 
                    policy and notify you through appropriate channels.
                  </p>
                  
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3">Contact Us</h3>
                    <p className="text-muted-foreground mb-4">
                      If you have any questions about our use of cookies, please contact us:
                    </p>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Email: privacy@techforge.com</p>
                      <p>Phone: +1 (555) 123-4567</p>
                      <p>Address: 123 Tech Street, Innovation City, TC 12345</p>
                    </div>
                  </div>
                </div>
              </Card>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>;
};
export default CookiePolicy;