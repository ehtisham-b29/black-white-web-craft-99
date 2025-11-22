import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain } from "lucide-react";

const stats = [
  { value: 50, suffix: "+", label: "AI Projects" },
  { value: 100, suffix: "%", label: "Success Rate" },
  { value: 24, suffix: "/7", label: "Support" },
];

const CountUp = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const AboutStats = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-gray-400 mb-4 tracking-wider uppercase">About Realz Solutions</p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Transforming</span>
              <br />
              <span className="text-white">Ideas into AI</span>
              <br />
              <span className="text-white">Reality</span>
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                We are a cutting-edge AI development company specializing in building intelligent solutions that transform businesses. Our mission is to democratize AI technology and make it accessible to companies of all sizes.
              </p>

              <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                With deep expertise in machine learning, neural networks, and modern software development, we craft bespoke AI solutions that drive real business value and competitive advantage.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-left"
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-white hover:bg-gray-100 text-black font-semibold shadow-lg hover-lift text-base px-8 py-6 rounded-full group"
            >
              Let's Build the Future Together
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Right Image/Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 overflow-hidden flex items-center justify-center">
              {/* AI Brain Placeholder - You can replace this with actual 3D visualization */}
              <div className="relative">
                <Brain className="w-64 h-64 text-cyan-400/20" strokeWidth={0.5} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-10 left-10 w-24 h-24 border border-gray-600/30 rounded-lg"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 border border-gray-600/30 rounded-lg"></div>
              <div className="absolute top-1/2 right-10 w-16 h-16 border border-gray-600/30 rounded-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
