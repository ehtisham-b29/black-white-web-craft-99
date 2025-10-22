import { useState, useEffect } from "react";
import { Button } from "~/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigationClick = (sectionId: string, isPage: boolean = false) => {
    setIsMenuOpen(false);

    if (isPage) {
      // Navigate to dedicated page
      navigate(`/${sectionId}`);
    } else if (location.pathname === '/') {
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
    { name: "About", sectionId: "about", isPage: true },
    { name: "Services", sectionId: "services", isPage: true },
    { name: "Case Studies", sectionId: "projects", isPage: true },
    { name: "Blog", sectionId: "blog", isPage: true },
    { name: "Team", sectionId: "team", isPage: true },
  ];

  return (
    <>
      {/* Full-width Black Background */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-primary">
        {/* Floating Navigation Card */}
        <nav className="px-4 sm:px-6 lg:px-8 pt-6 pb-6">
          <div className="max-w-6xl mx-auto">
            {/* Main Floating Card */}
            <div
              className={`
                relative bg-background/95 backdrop-blur-md rounded-2xl border border-border
                shadow-lg transition-all duration-500 ease-in-out
                ${scrolled ? 'shadow-xl scale-[0.98]' : 'shadow-md'}
              `}
            >
              {/* Desktop Layout */}
              <div className="hidden md:flex items-center justify-between px-8 py-4">
                {/* Logo - Left */}
                <button
                  onClick={handleLogoClick}
                  className="text-xl font-bold text-foreground hover:text-primary transition-all duration-300 cursor-pointer group"
                >
                  <span className="relative">
                    Realz Solutions
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </button>

                {/* Navigation - Center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="flex items-center gap-1 bg-muted/50 rounded-full px-2 py-2">
                    {navItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavigationClick(item.sectionId, item.isPage)}
                        className="relative px-5 py-2 text-sm font-bold text-foreground hover:text-primary transition-all duration-300 rounded-full hover:bg-background group cursor-pointer"
                      >
                        {item.name}
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4"></span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA Button - Right */}
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => handleNavigationClick('contact', true)}
                  className="rounded-lg px-6"
                >
                  Book Free Consultation
                </Button>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <button
                  onClick={handleLogoClick}
                  className="text-lg font-bold text-foreground hover:opacity-80 transition-opacity cursor-pointer"
                >
                  Realz Solutions
                </button>

                {/* Mobile menu button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="rounded-full"
                >
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>

              {/* Mobile Navigation Dropdown */}
              {isMenuOpen && (
                <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md rounded-b-2xl animate-slide-up">
                  <div className="px-4 py-4 space-y-2">
                    {navItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavigationClick(item.sectionId, item.isPage)}
                        className="w-full text-left px-4 py-3 text-sm font-bold text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-300"
                      >
                        {item.name}
                      </button>
                    ))}
                    <div className="pt-2">
                      <Button
                        variant="default"
                        className="w-full rounded-lg"
                        onClick={() => handleNavigationClick('contact', true)}
                      >
                        Book Free Consultation
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>

      {/* Spacer to prevent content from going under navbar */}
      <div className="h-24"></div>
    </>
  );
};

export default Navigation;