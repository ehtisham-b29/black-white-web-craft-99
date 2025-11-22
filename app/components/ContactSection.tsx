import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, Eye, FileText } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to Build with AI?
          </h2>
          <p className="text-base md:text-lg text-gray-400">
            Let's discuss your project and explore how AI can transform your business. Get started with a free consultation.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Tell Us About Your Project</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-white mb-2 block">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 bg-black border-gray-800 text-white placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-white mb-2 block">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 bg-black border-gray-800 text-white placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-white mb-2 block">
                    Company Name
                  </label>
                  <Input
                    name="company"
                    placeholder="Your company"
                    value={formData.company}
                    onChange={handleChange}
                    className="h-12 bg-black border-gray-800 text-white placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-white mb-2 block">
                    Project Idea <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Describe your project, goals, and how you envision AI helping your business..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="resize-none bg-black border-gray-800 text-white placeholder:text-gray-500"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-white hover:bg-gray-100 text-black font-semibold rounded-full"
                >
                  {isSubmitting ? "Sending..." : "Send Project Details"}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Right: Schedule a Call */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 rounded-2xl p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-4">Or Schedule a Call</h3>
              <p className="text-gray-400 text-sm mb-8">
                Book a 30-minute free consultation call to discuss your AI project in detail. We'll provide strategic insights and a custom solution proposal.
              </p>

              {/* Calendar Icon */}
              <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 my-8">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                  <Calendar className="w-10 h-10 text-black" />
                </div>
                <p className="text-white text-lg font-medium">
                  Ready to schedule your consultation?
                </p>
                <Button
                  className="bg-white hover:bg-gray-100 text-black font-semibold px-8 py-6 rounded-full"
                  onClick={() => window.open("https://calendly.com/realzsolutions/consultation", "_blank")}
                >
                  Open Calendly Scheduler
                </Button>
              </div>

              {/* Benefits List */}
              <div className="space-y-3 mt-auto">
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>30-minute free consultation</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <Eye className="w-4 h-4" />
                  <span>AI opportunity assessment</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <FileText className="w-4 h-4" />
                  <span>Custom solution proposal</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
