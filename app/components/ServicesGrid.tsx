import { motion } from "framer-motion";
import {
  Building2,
  Globe,
  Smartphone,
  Palette,
  Workflow,
  Settings,
  Lightbulb,
  GraduationCap,
} from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Building2,
    title: "AI-powered SaaS Platforms",
    description: "End-to-end SaaS development with integrated AI capabilities for intelligent automation and insights.",
    showLearnMore: false,
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive web applications built with the latest frameworks and AI integration.",
    showLearnMore: true,
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile apps with native AI capabilities and seamless user experiences.",
    showLearnMore: false,
  },
  {
    icon: Palette,
    title: "UI/UX Designing",
    description: "User-centered design with AI-enhanced interfaces that adapt to user behavior and preferences.",
    showLearnMore: false,
  },
  {
    icon: Workflow,
    title: "Multi-AI Agent",
    description: "Complex AI orchestrations with multiple specialized agents working in harmony to solve business challenges.",
    showLearnMore: false,
  },
  {
    icon: Settings,
    title: "AI Automations",
    description: "Streamline your workflows with intelligent automation solutions that save time and reduce operational costs.",
    showLearnMore: false,
  },
  {
    icon: Lightbulb,
    title: "AI Consultancy",
    description: "Strategic guidance on implementing AI solutions tailored to your business needs and industry.",
    showLearnMore: false,
  },
  {
    icon: GraduationCap,
    title: "AI Training & Development",
    description: "Empower your team with hands-on AI training programs and expert-led workshops for skill development.",
    showLearnMore: false,
  },
];

const ServicesGrid = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 px-6 bg-[#000000]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Our AI-Centric Services
          </h2>
          <p className="text-base md:text-lg text-gray-400">
            From concept to deployment, we deliver comprehensive AI solutions tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="p-8 h-full border border-gray-800 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black hover:border-gray-700 transition-all duration-300 flex flex-col">
                <div className="mb-6 p-3 rounded-lg bg-black border border-gray-800 w-fit">
                  <service.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>
                {service.showLearnMore && (
                  <button className="flex items-center text-white text-sm font-medium group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-16"
        >
          <Button
            onClick={() => scrollToSection("#contact")}
            className="bg-white hover:bg-gray-100 text-black font-semibold shadow-lg hover-lift text-base px-10 py-6 rounded-full"
          >
            Book a Free Consultation Call
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
