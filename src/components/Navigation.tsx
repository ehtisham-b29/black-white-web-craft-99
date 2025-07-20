import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigationClick = (sectionId: string) => {
    setIsMenuOpen(false);
    
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

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      // Already on home page, scroll to top/hero
      scrollToSection('home');
    } else {
      // Navigate to home page
      navigate('/');
    }
  };

  const navItems = [
    { name: "Home", sectionId: "home" },
    { name: "Services", sectionId: "services" },
    { name: "About", sectionId: "about" },
    { name: "Blog", sectionId: "blog" },
    { name: "Contact", sectionId: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={handleLogoClick}
              className="text-2xl font-bold text-foreground hover:opacity-80 transition-opacity cursor-pointer"
            >
              Realz Solutions
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigationClick(item.sectionId)}
                  className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm" onClick={() => handleNavigationClick('contact')}>
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigationClick(item.sectionId)}
                  className="text-muted-foreground hover:text-foreground block px-3 py-2 text-base font-medium transition-colors w-full text-left"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button variant="hero" className="w-full" onClick={() => handleNavigationClick('contact')}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;