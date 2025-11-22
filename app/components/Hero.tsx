import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Shield, Sparkles, Music } from "lucide-react";

const logos = [
  {
    name: "BrandDefense",
    icon: Shield,
    bgColor: "bg-gray-800/30",
  },
  {
    name: "tuinkel",
    icon: Sparkles,
    bgColor: "bg-gray-800/30",
  },
  {
    name: "MUSIC",
    icon: Music,
    bgColor: "bg-gray-800/30",
  },
];

const Hero = () => {
  const [particles, setParticles] = useState<{ x: number; y: number; size: number; delay: number }[]>([]);

  useEffect(() => {
    // Generate random particles for background effect
    const newParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-6 overflow-hidden bg-[#0a0a0a]">
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-10"
        >
          <span className="text-white">Where Vision</span>
          <br />
          <span className="text-gray-300">Meets Velocity</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto px-4"
        >
          We build AI-powered SaaS, apps, and automations that keep you ahead of the curve in an increasingly digital world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("#contact")}
            className="bg-white hover:bg-gray-100 text-black font-semibold shadow-lg hover-lift text-lg px-10 py-6 rounded-full"
          >
            Book a Free Consultation
          </Button>
          <Button
            size="lg"
            variant="ghost"
            onClick={() => scrollToSection("#services")}
            className="border-2 border-white/20 text-white hover:bg-white/10 text-lg px-10 py-6 rounded-full"
          >
            Learn More
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-gray-500 mb-6"
        >
          Trusted by innovative companies worldwide
        </motion.p>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {logos.map((logo, index) => {
            const IconComponent = logo.icon;
            return (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="flex items-center justify-center"
              >
                <div className="flex items-center gap-2 opacity-50 hover:opacity-70 transition-opacity duration-300">
                  <div className={`p-1.5 rounded ${logo.bgColor} border border-gray-700/50`}>
                    <IconComponent className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-semibold text-gray-400 tracking-wide">
                    {logo.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
