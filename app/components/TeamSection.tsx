import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const founder = {
  name: "Inam H",
  role: "CEO",
  bio: "Visionary leader driving innovation in artificial intelligence and automation solutions.",
  image: "/api/placeholder/150/150",
  linkedin: "#",
};

const team = [
  {
    name: "Saifullah Rahu",
    role: "Senior AI Engineer",
    bio: "Expert AI engineer specializing in multi-agent systems and LLMs, with deep expertise in neural network architectures for cutting-edge AI solutions.",
    image: "/api/placeholder/150/150",
  },
  {
    name: "Alisha Rana",
    role: "Project Manager",
    bio: "Expert project manager with a focus on specializing in AI project coordination and ensuring seamless delivery of complex technical solutions.",
    image: "/api/placeholder/150/150",
  },
  {
    name: "Mohsin Ali",
    role: "Senior Software Developer",
    bio: "Expert full-stack developer with extensive experience in building scalable web applications and modern development practices.",
    image: "/api/placeholder/150/150",
  },
  {
    name: "Muhammad Talha",
    role: "Lead UI/UX Designer",
    bio: "Creative UI/UX designer specializing in AI-intuitive user interfaces and exceptional user experiences for AI-powered applications.",
    image: "/api/placeholder/150/150",
  },
];

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const nextSlide = () => {
    if (currentIndex < team.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            The Brains Behind Realz Solutions
          </h2>
          <p className="text-base md:text-lg text-gray-400">
            Meet our team of AI experts, developers, and visionaries who are passionate about building the future.
          </p>
        </motion.div>

        {/* Founder Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto mb-20"
        >
          <div className="bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 rounded-2xl p-8 text-center hover:border-gray-700 transition-all">
            {/* Avatar */}
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
              <div className="w-full h-full bg-gray-700"></div>
            </div>

            {/* Name & Role */}
            <h3 className="text-xl font-bold text-white mb-2">{founder.name}</h3>
            <p className="text-gray-400 text-sm mb-4">{founder.role}</p>

            {/* Bio */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {founder.bio}
            </p>

            {/* LinkedIn Link */}
            <a
              href={founder.linkedin}
              className="inline-flex items-center gap-2 text-white text-sm font-medium hover:text-gray-300 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Our Expert Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Our Expert Team
          </h3>

          {/* Team Carousel */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 transition-all flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous team member"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              disabled={currentIndex >= team.length - 1}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 transition-all flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next team member"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Team Cards */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{ x: `-${currentIndex * 25}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {team.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="min-w-[calc(100%-0px)] sm:min-w-[calc(50%-12px)] lg:min-w-[calc(25%-18px)]"
                  >
                    <div className="bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 rounded-2xl p-6 h-full hover:border-gray-700 transition-all">
                      {/* Avatar */}
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
                        <div className="w-full h-full bg-gray-700"></div>
                      </div>

                      {/* Name & Role */}
                      <h4 className="text-lg font-bold text-white text-center mb-2">
                        {member.name}
                      </h4>
                      <p className="text-gray-400 text-sm text-center mb-4">
                        {member.role}
                      </p>

                      {/* Bio */}
                      <p className="text-gray-400 text-xs leading-relaxed text-center">
                        {member.bio}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-gray-400 text-base mb-6">
            Ready to work with our amazing team?
          </p>
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

export default TeamSection;
