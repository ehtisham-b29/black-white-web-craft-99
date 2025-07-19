import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-primary-foreground/30 rounded-xl rotate-12 animate-pulse"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 border-2 border-primary-foreground/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 border-2 border-primary-foreground/30 rotate-45 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 border border-primary-foreground/20 rounded-lg rotate-45 animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="animate-fade-in">
          <div className="mb-8">
            <span className="inline-block px-6 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-sm font-medium text-primary-foreground/90 border border-primary-foreground/20">
              🚀 Transforming Ideas into Digital Reality
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
            Digital Solutions
            <br />
            <span className="bg-gradient-to-r from-primary-foreground to-primary-foreground/70 bg-clip-text text-transparent">That Transform</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed font-light">
            We craft exceptional <span className="font-semibold">software</span>, <span className="font-semibold">websites</span>, and <span className="font-semibold">mobile applications</span> that drive business growth and digital innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Button variant="outline" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Start Your Project
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="ghost" size="xl" className="text-primary-foreground border-primary-foreground hover:bg-white hover:text-black">
              View Our Work
            </Button>
          </div>

          {/* Enhanced Service Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-slide-up">
            <div className="group flex flex-col items-center p-8 bg-primary-foreground/5 rounded-2xl backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-500 hover:scale-105">
              <div className="p-4 bg-primary-foreground/10 rounded-2xl mb-6 group-hover:bg-primary-foreground/20 transition-all duration-300">
                <Code className="w-12 h-12 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-foreground">Software Development</h3>
              <p className="text-primary-foreground/80 text-center leading-relaxed">Custom enterprise solutions built with cutting-edge technologies and scalable architecture</p>
            </div>
            
            <div className="group flex flex-col items-center p-8 bg-primary-foreground/5 rounded-2xl backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-500 hover:scale-105" style={{animationDelay: '0.2s'}}>
              <div className="p-4 bg-primary-foreground/10 rounded-2xl mb-6 group-hover:bg-primary-foreground/20 transition-all duration-300">
                <Globe className="w-12 h-12 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-foreground">Web Development</h3>
              <p className="text-primary-foreground/80 text-center leading-relaxed">High-performance websites that engage users and convert visitors into customers</p>
            </div>
            
            <div className="group flex flex-col items-center p-8 bg-primary-foreground/5 rounded-2xl backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-500 hover:scale-105" style={{animationDelay: '0.4s'}}>
              <div className="p-4 bg-primary-foreground/10 rounded-2xl mb-6 group-hover:bg-primary-foreground/20 transition-all duration-300">
                <Smartphone className="w-12 h-12 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-foreground">Mobile Apps</h3>
              <p className="text-primary-foreground/80 text-center leading-relaxed">Native and cross-platform mobile experiences that users love to interact with</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;