import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

const CTASection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-6 bg-[#000000]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Small Label */}
          <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest mb-6">
            REACH OUT ANYTIME
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Automate Smarter?
            <br />
            Let's Build Together!
          </h2>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-gray-400 mb-10">
            Schedule a Call and Begin Automating
          </p>

          {/* CTA Button */}
          <Button
            onClick={() => scrollToSection("#contact")}
            className="bg-white hover:bg-gray-100 text-black font-semibold shadow-lg text-base px-10 py-6 rounded-full mb-16 group"
          >
            Book A Free Call
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Social Media Section */}
          <div className="mt-16">
            <p className="text-gray-400 text-sm mb-6">
              Connect with us on social media
            </p>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <a
                href="https://twitter.com/realzsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full border border-gray-800 bg-transparent hover:bg-gray-900 flex items-center justify-center transition-all group"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://linkedin.com/company/realzsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full border border-gray-800 bg-transparent hover:bg-gray-900 flex items-center justify-center transition-all group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://instagram.com/realzsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full border border-gray-800 bg-transparent hover:bg-gray-900 flex items-center justify-center transition-all group"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center justify-center gap-3 text-gray-400">
              <Mail className="w-5 h-5" />
              <a
                href="mailto:hello@realzsolutions.com"
                className="text-base hover:text-white transition-colors"
              >
                hello@realzsolutions.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
