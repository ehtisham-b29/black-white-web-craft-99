import type { Route } from "./+types/home";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutStats from "@/components/AboutStats";
import ServicesGrid from "@/components/ServicesGrid";
import Testimonials from "@/components/Testimonials";
import TeamSection from "@/components/TeamSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Realz Solutions - AI-Powered SaaS, Apps & Automations" },
    { name: "description", content: "We build AI-powered SaaS, apps, and automations that keep you ahead of the curve in an increasingly digital world." },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <main>
        <Hero />
        <AboutStats />
        <ServicesGrid />
        <Testimonials />
        <TeamSection />
        <BlogSection />
        <ContactSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
