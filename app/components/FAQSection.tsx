import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to develop an AI-powered application?",
    answer:
      "The timeline varies based on complexity, but typical projects range from 4-16 weeks. Simple AI integrations can be completed in 4-6 weeks, while complex multi-agent systems may take 12-16 weeks. We provide detailed timelines during our initial consultation.",
  },
  {
    question: "What AI technologies do you specialize in?",
    answer:
      "We specialize in cutting-edge AI technologies including Large Language Models (GPT-4, Claude), multi-agent systems, computer vision, natural language processing, machine learning frameworks (TensorFlow, PyTorch), and AI automation tools. Our expertise spans across modern AI platforms and custom model development.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes! We offer comprehensive 24/7 support and maintenance packages to ensure your AI solutions continue to perform optimally. This includes system monitoring, regular updates, bug fixes, performance optimization, and feature enhancements as your business grows.",
  },
  {
    question: "What's included in your free consultation?",
    answer:
      "Our free 30-minute consultation includes a thorough discussion of your business needs, AI opportunity assessment, strategic recommendations, technical feasibility analysis, and a custom solution proposal with estimated timelines and costs. No obligations, just valuable insights for your AI journey.",
  },
  {
    question: "How do you ensure data security and privacy?",
    answer:
      "We implement enterprise-grade security measures including end-to-end encryption, secure API architecture, compliance with GDPR, HIPAA and SOC 2 standards, regular security audits, and strict data access controls. Your data privacy and security are our top priorities throughout the development and deployment process.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-gray-400">
            Everything you need to know about working with Realz Solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-800 rounded-xl px-6 bg-gradient-to-br from-gray-900/50 to-black hover:border-gray-700 transition-all"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5 text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
