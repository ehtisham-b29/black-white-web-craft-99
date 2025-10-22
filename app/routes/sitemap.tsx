import { Link } from "react-router";
import { ArrowRight, Home, Briefcase, Users, FileText, Mail, Settings } from "lucide-react";
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";

const Sitemap = () => {
  const sections = [
    {
      title: "Main Pages",
      icon: Home,
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/#about" },
        { name: "Services", path: "/#services" },
        { name: "Case Studies", path: "/#projects" },
        { name: "Client Reviews", path: "/#reviews" },
        { name: "Contact", path: "/#contact" },
      ]
    },
    {
      title: "Services",
      icon: Briefcase,
      links: [
        { name: "Custom Software Development", path: "/services/custom-software-development" },
        { name: "Web Development", path: "/services/web-development" },
        { name: "Mobile App Development", path: "/services/mobile-app-development" },
        { name: "Database Solutions", path: "/services/database-solutions" },
        { name: "Cloud Services", path: "/services/cloud-services" },
        { name: "Security & Maintenance", path: "/services/security-maintenance" },
      ]
    },
    {
      title: "Projects",
      icon: FileText,
      links: [
        { name: "All Projects", path: "/projects" },
        { name: "E-Commerce Platform", path: "/projects/e-commerce-platform" },
        { name: "AI Analytics Tool", path: "/projects/ai-analytics-tool" },
        { name: "Mobile Banking App", path: "/projects/mobile-banking-app" },
        { name: "Healthcare Management System", path: "/projects/healthcare-system" },
        { name: "Real Estate Platform", path: "/projects/real-estate-platform" },
        { name: "Logistics Tracking System", path: "/projects/logistics-tracking" },
      ]
    },
    {
      title: "Legal & Policies",
      icon: Settings,
      links: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms-of-service" },
        { name: "Cookie Policy", path: "/cookie-policy" },
        { name: "Sitemap", path: "/sitemap" },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-primary">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Sitemap
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Navigate through all the pages and sections of our website
          </p>
        </div>

        {/* Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-primary-foreground/5 via-primary-foreground/3 to-transparent backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-foreground/10 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Futuristic scan line animation */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/50 to-transparent animate-scan"></div>
              </div>

              {/* Glowing corners */}
              <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-primary-foreground/40 group-hover:border-primary-foreground group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-500"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-primary-foreground/40 group-hover:border-primary-foreground group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-primary-foreground/40 group-hover:border-primary-foreground group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-500"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-primary-foreground/40 group-hover:border-primary-foreground group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-500"></div>

              {/* Animated grid background */}
              <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }}></div>

              <div className="relative">
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary-foreground/10 rounded-lg">
                    <section.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary-foreground">{section.title}</h2>
                </div>

                {/* Divider */}
                <div className="w-12 h-px bg-gradient-to-r from-primary-foreground/50 to-transparent mb-6"></div>

                {/* Links */}
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.path}
                        className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors group/link"
                      >
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-16">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-foreground/30 group"
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sitemap;
