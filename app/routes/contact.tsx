import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Globe } from "lucide-react";

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
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      description: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "123 Tech Street, Digital City, DC 12345",
      link: "#",
      description: "Come say hello at our office"
    },
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on complexity and scope. Simple projects take 2-4 weeks, while complex enterprise solutions can take 3-6 months. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you offer post-launch support?",
      answer: "Yes! We provide comprehensive post-launch support including bug fixes, updates, and maintenance. We offer various support packages to fit your needs and budget."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with modern technologies including React, Node.js, Python, React Native, AWS, and more. Our team stays updated with the latest frameworks and tools to deliver cutting-edge solutions."
    },
    {
      question: "How do you handle project pricing?",
      answer: "We offer transparent, competitive pricing. After understanding your requirements, we provide a detailed quote with no hidden fees. We also offer flexible payment plans for larger projects."
    }
  ];

  return (
    <div className="min-h-screen bg-primary">
      <Navigation />

      {/* Hero Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your ideas into reality? Let's discuss how we can help your business grow with innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              {/* Contact Information Cards */}
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-bold text-primary-foreground mb-6">Contact Information</h2>

                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-primary-foreground/5 via-primary-foreground/3 to-transparent backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary-foreground/10"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/50 to-transparent animate-scan"></div>
                    </div>

                    <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-primary-foreground/40 group-hover:border-primary-foreground transition-all duration-500"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-primary-foreground/40 group-hover:border-primary-foreground transition-all duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-primary-foreground/40 group-hover:border-primary-foreground transition-all duration-500"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-primary-foreground/40 group-hover:border-primary-foreground transition-all duration-500"></div>

                    <div className="relative flex items-start gap-4">
                      <div className="p-3 bg-primary-foreground/10 rounded-lg flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-bold text-primary-foreground mb-1">{item.title}</h3>
                        <a
                          href={item.link}
                          className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm font-medium block mb-1"
                        >
                          {item.value}
                        </a>
                        <p className="text-primary-foreground/60 text-xs">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="group relative bg-gradient-to-br from-primary-foreground/5 via-primary-foreground/3 to-transparent backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6 transition-all duration-500 animate-fade-in">
                <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-primary-foreground/40"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-primary-foreground/40"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-primary-foreground/40"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-primary-foreground/40"></div>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-primary-foreground" />
                    <h3 className="text-lg font-bold text-primary-foreground">Business Hours</h3>
                  </div>
                  <div className="space-y-3">
                    {businessHours.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm text-primary-foreground/70">{item.day}</span>
                        <span className="text-sm text-primary-foreground font-medium">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="group relative bg-gradient-to-br from-primary-foreground/5 via-primary-foreground/3 to-transparent backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6 transition-all duration-500 animate-fade-in">
                <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-primary-foreground/40"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-primary-foreground/40"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-primary-foreground/40"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-primary-foreground/40"></div>

                <div className="relative">
                  <h3 className="text-lg font-bold text-primary-foreground mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3 text-sm text-primary-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-foreground">•</span>
                      <span>Free initial consultation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-foreground">•</span>
                      <span>Transparent pricing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-foreground">•</span>
                      <span>Agile development process</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-foreground">•</span>
                      <span>24/7 support included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-foreground">•</span>
                      <span>99% client satisfaction rate</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-2 animate-scale-in">
              <div className="group relative bg-gradient-to-br from-primary-foreground/5 via-primary-foreground/3 to-transparent backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 lg:p-12 transition-all duration-500 overflow-hidden">
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

                <div className="relative">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-primary-foreground mb-2">Send Us a Message</h2>
                    <p className="text-primary-foreground/70">Fill out the form below and we'll get back to you within 24 hours.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-primary-foreground/90 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="John Doe"
                          className="w-full bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/40"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-primary-foreground/90 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          className="w-full bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/40"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-primary-foreground/90 mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          className="w-full bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/40"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-primary-foreground/90 mb-2">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          type="text"
                          placeholder="Your Company"
                          className="w-full bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/40"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-primary-foreground/90 mb-2">
                        Project Details *
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        className="w-full h-32 resize-none bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/40"
                        required
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="terms"
                        className="mt-1"
                        required
                      />
                      <label htmlFor="terms" className="text-sm text-primary-foreground/70">
                        I agree to the{" "}
                        <a
                          href="/terms-of-service"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold underline text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                        >
                          Terms of Service
                        </a>
                        {" "}and{" "}
                        <a
                          href="/privacy-policy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold underline text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                        >
                          Privacy Policy
                        </a>
                        . I consent to receiving communications from Realz Solutions.
                      </label>
                    </div>

                    <button type="submit" className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-foreground/30 group/btn">
                      <Send className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      <span>Send Message</span>
                    </button>

                    <p className="text-xs text-primary-foreground/60">
                      We'll get back to you within 24 hours. Your information is kept confidential.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-primary-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Got questions? We've got answers. Here are some common questions about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-primary-foreground/5 via-primary-foreground/3 to-transparent backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary-foreground/10 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/50 to-transparent animate-scan"></div>
                </div>

                <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-primary-foreground/40 group-hover:border-primary-foreground transition-all duration-500"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-primary-foreground/40 group-hover:border-primary-foreground transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-primary-foreground/40 group-hover:border-primary-foreground transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-primary-foreground/40 group-hover:border-primary-foreground transition-all duration-500"></div>

                <div className="relative">
                  <h3 className="text-lg font-bold text-primary-foreground mb-3">{faq.question}</h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
