import { motion } from "framer-motion";
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

const LogosSection = () => {
  return (
    <section className="px-6 bg-[#0a0a0a] pb-2">
      <div className="max-w-7xl mx-auto mt-3">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {logos.map((logo, index) => {
            const IconComponent = logo.icon;
            return (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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

export default LogosSection;
