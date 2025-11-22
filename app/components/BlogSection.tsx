import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "The Complete Guide to AI Integration for Business Growth in 2025",
    excerpt: "Discover how AI integration can transform your business in 2025. Learn strategic implementation frameworks, overcome common challenges, and unlock growth opportunities with expert guidance from Realz Solutions's AI consultancy team.",
    author: "Realz Solutions Team",
    date: "October 3, 2025",
    image: "/api/placeholder/400/300",
  },
  {
    title: "Building AI-Powered SaaS Platforms: Modern Development Guide for 2025",
    excerpt: "Learn how to build cutting-edge AI-powered SaaS platforms in 2025. Discover modern development frameworks, essential AI features, best practices, and monetization strategies with Realz Solutions's expert guide.",
    author: "Realz Solutions Development Team",
    date: "October 3, 2025",
    image: "/api/placeholder/400/300",
  },
  {
    title: "Multi-Agent AI Systems: The Future of Intelligent Business Automation",
    excerpt: "Discover how multi-agent AI systems are revolutionizing business automation. Learn about collaborative artificial intelligence, implementation strategies and real-world applications that drive unprecedented efficiency and innovation.",
    author: "Realz Solutions AI Team",
    date: "October 3, 2025",
    image: "/api/placeholder/400/300",
  },
];

const BlogSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < blogPosts.length - 1) {
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
          className="mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-white">Latest AI Insights</span>{" "}
                <span className="text-blue-500">& Trends</span>
              </h2>
              <p className="text-base md:text-lg text-gray-400 max-w-3xl">
                Stay ahead with our latest thoughts on AI, technology trends, and business transformation.
              </p>
            </div>
            <div className="lg:pt-2">
              <Button className="bg-white hover:bg-gray-100 text-black font-semibold shadow-lg text-base px-8 py-6 rounded-full">
                VIEW ALL BLOG POSTS
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 transition-all flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous blog post"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= blogPosts.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 transition-all flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next blog post"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Blog Cards */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * 33.333}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {blogPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="min-w-[calc(100%-0px)] sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)]"
                >
                  <div className="bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 rounded-2xl overflow-hidden h-full hover:border-gray-700 transition-all group">
                    {/* Image */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                      <div className="w-full h-full bg-gray-800/50"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta */}
                      <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold mb-3 text-white leading-tight">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>

                      {/* Read More Link */}
                      <button className="flex items-center gap-2 text-white text-sm font-medium group-hover:gap-3 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
