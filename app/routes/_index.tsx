import type { MetaFunction } from "react-router";
import Navigation from "~/components/Navigation";
import Hero from "~/components/Hero";
import About from "~/components/About";
import Services from "~/components/Services";
import Reviews from "~/components/Reviews";
import Stats from "~/components/Stats";
import Projects from "~/components/Projects";
import Contact from "~/components/Contact";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Realz Solutions - Custom Software Development & IT Services" },
    { name: "description", content: "Transform your business with custom software solutions, web development, mobile apps, cloud services, and more. Expert development team delivering innovative solutions." },
  ];
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Stats />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
