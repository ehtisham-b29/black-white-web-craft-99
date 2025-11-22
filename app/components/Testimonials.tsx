import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Star, Shield, Sparkles, Music } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    title: "AI-Powered Customer Service Platform Reduces Response Time by 75%",
    description: "Revolutionary multi-agent AI system transforms customer support operations for leading SaaS company, achieving 75% faster response times and 92% customer satisfaction.",
    roi: "450%",
    image: "/api/placeholder/400/300",
  },
  {
    title: "AI-Driven Manufacturing Optimization Increases Efficiency by 35%",
    description: "Advanced predictive analytics and computer vision system revolutionizes manufacturing operations, delivering 35% efficiency gains and preventing $2M in equipment failures.",
    roi: "380%",
    image: "/api/placeholder/400/300",
  },
  {
    title: "AI Document Processing Accelerates Legal Research by 80%",
    description: "Intelligent document analysis and extraction system transforms legal research workflow, reducing case preparation time by 80% and improving accuracy for top-tier law firm.",
    roi: "320%",
    image: "/api/placeholder/400/300",
  },
];

const clientTestimonials = [
  {
    quote: "Realz Solutions delivered an exceptional website for Rustic Vitals that perfectly captures our mineral expertise and brand identity. Their attention to detail and understanding of our business needs resulted in a professional platform that has significantly enhanced our online presence and client engagement.",
    name: "Masjood Abbasi",
    title: "CEO, Rustic Vitals",
    rating: 5,
  },
  {
    quote: "Working with Realz Solutions was a game-changer for our business. Their AI automation solutions transformed our workflows and delivered measurable ROI within the first quarter. Exceptional team with deep technical expertise.",
    name: "Sarah Chen",
    title: "CTO, TechFlow Inc.",
    rating: 5,
  },
  {
    quote: "The team at Realz Solutions exceeded all our expectations. They built a scalable AI-powered platform that handles millions of transactions daily. Their commitment to quality and innovation is unmatched.",
    name: "Michael Rodriguez",
    title: "VP Engineering, DataStream",
    rating: 5,
  },
];

const logos = [
  { name: "BrandDefense", icon: Shield },
  { name: "tuinkel", icon: Sparkles },
  { name: "MUSIC", icon: Music },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % clientTestimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + clientTestimonials.length) % clientTestimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-white">Success Stories</span>{" "}
                <span className="text-blue-500">& Case Studies</span>
              </h2>
              <p className="text-base md:text-lg text-gray-400 max-w-3xl">
                Real results from real projects. See how we've helped businesses transform with AI.
              </p>
            </div>
            <div className="lg:pt-2">
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-white hover:bg-gray-100 text-black font-semibold shadow-lg text-base px-8 py-6 rounded-full"
              >
                VIEW CASE STUDIES
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 transition-all flex items-center justify-center text-white"
            aria-label="Previous case study"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 transition-all flex items-center justify-center text-white"
            aria-label="Next case study"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Case Study Cards */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 rounded-2xl overflow-hidden h-full hover:border-gray-700 transition-all">
                    {/* Image Placeholder */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <div className="w-full h-full bg-gray-800/50"></div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-xl font-bold mb-4 text-white leading-tight">
                        {study.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {study.description}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-white font-bold text-lg">ROI: {study.roi}</span>
                        </div>
                        <button className="flex items-center gap-2 text-white text-sm font-medium hover:gap-3 transition-all group">
                          View Full Case Study
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
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
            Want Similar Results? Let's Talk
          </Button>
        </motion.div>

        {/* Client Testimonials Section */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Trusted By Industry Leaders
            </h2>
            <p className="text-base md:text-lg text-gray-400">
              Don't just take our word for it. Here's what our clients say about working with Realz Solutions.
            </p>
          </motion.div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-4xl mx-auto">
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-10 h-10 rounded-full bg-transparent border border-gray-700 hover:bg-gray-800/50 transition-all flex items-center justify-center text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-10 h-10 rounded-full bg-transparent border border-gray-700 hover:bg-gray-800/50 transition-all flex items-center justify-center text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Testimonial Card */}
            <motion.div
              key={testimonialIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 rounded-2xl p-12"
            >
              {/* Star Rating */}
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl text-white text-center mb-8 leading-relaxed">
                "{clientTestimonials[testimonialIndex].quote}"
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <p className="text-white font-bold text-lg mb-1">
                  {clientTestimonials[testimonialIndex].name}
                </p>
                <p className="text-gray-400 text-sm">
                  {clientTestimonials[testimonialIndex].title}
                </p>
              </div>
            </motion.div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {clientTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setTestimonialIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === testimonialIndex ? "bg-white w-8" : "bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Trusted by text and logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-20"
          >
            <p className="text-center text-gray-500 text-sm mb-8">
              Trusted by innovative companies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-12">
              {logos.map((logo, index) => {
                const IconComponent = logo.icon;
                return (
                  <motion.div
                    key={logo.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-2 opacity-40 hover:opacity-60 transition-opacity"
                  >
                    <div className="p-1.5 rounded bg-gray-800/30 border border-gray-700/50">
                      <IconComponent className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
                    </div>
                    <span className="text-sm font-semibold text-gray-400 tracking-wide">
                      {logo.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
