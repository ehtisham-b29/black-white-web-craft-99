const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#testimonials" },
    { label: "Team", href: "#about" },
    { label: "Careers", href: "#contact" },
  ],
  resources: [
    { label: "Blog", href: "#faq" },
    { label: "AI Guides", href: "#faq" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const Footer = () => {
  const scrollToSection = (href: string) => {
    if (href === "#") return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          {/* Brand & Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-3xl font-bold text-white mb-6">
              Realz Solutions
            </h3>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              You dream it, We build it! We transform visionary ideas into cutting-edge AI solutions. From intelligent SaaS platforms to automated workflows, we empower businesses to lead the future with technology that thinks, adapts, and delivers beyond expectations.
            </p>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-bold text-xl mb-4">Stay Ahead with AI Insights</h4>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 rounded-full border border-gray-800 bg-black text-white placeholder:text-gray-600 focus:outline-none focus:border-gray-700 focus:ring-2 focus:ring-gray-700 text-sm transition-all"
                />
                <button className="px-7 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-all text-sm font-semibold whitespace-nowrap shadow-md hover:shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors text-base"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors text-base"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Realz Solutions. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              | www.realzsolutions.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
