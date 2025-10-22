import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "hello@realzsolutions.com",
      link: "mailto:hello@realzsolutions.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "123 Tech Street, Digital City",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? Get in touch with us today and let's discuss how we can help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 animate-fade-in">
            <h3 className="text-2xl font-semibold text-primary-foreground mb-8">Get In Touch</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="p-3 bg-primary-foreground/10 rounded-lg mr-4">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-primary-foreground mb-1">{item.title}</h4>
                    <a
                      href={item.link}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <Card className="p-6 bg-primary text-primary-foreground">
              <h4 className="text-lg font-semibold mb-3">Why Choose Realz Solutions?</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/90">
                <li>• Free initial consultation</li>
                <li>• Transparent pricing</li>
                <li>• Agile development process</li>
                <li>• 24/7 support included</li>
                <li>• Money-back guarantee</li>
              </ul>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-scale-in">
            <div className="group relative bg-gradient-to-br from-primary-foreground/5 via-primary-foreground/3 to-transparent backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 transition-all duration-500 overflow-hidden">
              {/* Futuristic scan line animation */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/50 to-transparent animate-scan"></div>
              </div>

              {/* Glowing corners */}
              <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-primary-foreground/40 transition-all duration-500"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-primary-foreground/40 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-primary-foreground/40 transition-all duration-500"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-primary-foreground/40 transition-all duration-500"></div>

              {/* Animated grid background */}
              <div className="absolute inset-0 opacity-[0.02] transition-opacity duration-500" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }}></div>

              <form onSubmit={handleSubmit} className="space-y-6 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-foreground/90 mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      className="w-full bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/40"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-foreground/90 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/40"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-primary-foreground/90 mb-2">
                      Company (Optional)
                    </label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Your company name"
                      className="w-full bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/40"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-primary-foreground/90 mb-2">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      className="w-full p-3 pr-10 border border-primary-foreground/20 rounded-lg bg-primary-foreground/5 text-primary-foreground focus:border-primary-foreground/40 focus:outline-none appearance-none cursor-pointer [&>option]:bg-primary [&>option]:text-primary-foreground"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 0.75rem center',
                        backgroundSize: '1.25rem'
                      }}
                    >
                      <option value="" className="bg-primary text-primary-foreground">Select budget range</option>
                      <option value="5k-10k" className="bg-primary text-primary-foreground">$5,000 - $10,000</option>
                      <option value="10k-25k" className="bg-primary text-primary-foreground">$10,000 - $25,000</option>
                      <option value="25k-50k" className="bg-primary text-primary-foreground">$25,000 - $50,000</option>
                      <option value="50k+" className="bg-primary text-primary-foreground">$50,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-primary-foreground/90 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    className="w-full p-3 pr-10 border border-primary-foreground/20 rounded-lg bg-primary-foreground/5 text-primary-foreground focus:border-primary-foreground/40 focus:outline-none appearance-none cursor-pointer [&>option]:bg-primary [&>option]:text-primary-foreground"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 0.75rem center',
                      backgroundSize: '1.25rem'
                    }}
                  >
                    <option value="" className="bg-primary text-primary-foreground">Select a service</option>
                    <option value="software" className="bg-primary text-primary-foreground">Custom Software Development</option>
                    <option value="web" className="bg-primary text-primary-foreground">Web Development</option>
                    <option value="mobile" className="bg-primary text-primary-foreground">Mobile App Development</option>
                    <option value="consulting" className="bg-primary text-primary-foreground">Technical Consulting</option>
                    <option value="other" className="bg-primary text-primary-foreground">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-foreground/90 mb-2">
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    className="w-full h-32 resize-none bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/40"
                    required
                  />
                </div>

                <button type="submit" className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold py-2 px-5 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-foreground/30 group/btn">
                  <Send className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  <span className="text-sm">Send Message</span>
                </button>

                <p className="text-xs text-primary-foreground/60 text-center">
                  We'll get back to you within 24 hours. Your information is kept confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;