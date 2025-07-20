import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigationClick = (sectionId: string) => {
    if (location.pathname === '/') {
      // Already on home page, just scroll to section
      scrollToSection(sectionId);
    } else {
      // Navigate to home page first, then scroll to section
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  };

  const quickLinks = [
    { name: "Home", sectionId: "home" },
    { name: "Services", sectionId: "services" },
    { name: "About", sectionId: "about" },
    { name: "Contact", sectionId: "contact" },
  ];

  const services = [
    { name: "Software Development", href: "/services/custom-software-development" },
    { name: "Web Development", href: "/services/web-development" }, 
    { name: "Mobile Apps", href: "/services/mobile-app-development" },
    { name: "Cloud Services", href: "/services/cloud-services" },
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@realzsolutions.com", label: "Email" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Realz Solutions</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              Transforming businesses through innovative technology solutions. We build software, websites, and mobile applications that drive growth and success.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigationClick(link.sectionId)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
              © 2024 Realz Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;