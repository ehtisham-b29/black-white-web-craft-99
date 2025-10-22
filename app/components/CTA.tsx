import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router";

const CTA = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
        backgroundSize: '30px 30px'
      }}></div>

      {/* Scan lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/50 to-transparent animate-scan"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative bg-gradient-to-br from-primary-foreground/10 via-primary-foreground/5 to-transparent backdrop-blur-sm border border-primary-foreground/30 rounded-3xl p-12 md:p-16 overflow-hidden group">
          {/* Glowing corners */}
          <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary-foreground/50 group-hover:border-primary-foreground group-hover:shadow-[0_0_12px_rgba(255,255,255,0.6)] transition-all duration-500"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-primary-foreground/50 group-hover:border-primary-foreground group-hover:shadow-[0_0_12px_rgba(255,255,255,0.6)] transition-all duration-500"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-primary-foreground/50 group-hover:border-primary-foreground group-hover:shadow-[0_0_12px_rgba(255,255,255,0.6)] transition-all duration-500"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary-foreground/50 group-hover:border-primary-foreground group-hover:shadow-[0_0_12px_rgba(255,255,255,0.6)] transition-all duration-500"></div>

          {/* Content */}
          <div className="relative text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-foreground/20 blur-xl rounded-full"></div>
                <div className="relative p-4 bg-primary-foreground/10 rounded-2xl border border-primary-foreground/30">
                  <Sparkles className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Ready to Transform Your <br />
              <span className="text-primary-foreground/70">Business?</span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can help you achieve your goals with innovative technology solutions
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <button className="group/btn inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold py-4 px-10 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-foreground/20 w-full sm:w-auto">
                  <span>Get Started Now</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>

              <Link to="/projects">
                <button className="inline-flex items-center justify-center gap-2 bg-transparent text-primary-foreground border-2 border-primary-foreground/30 hover:border-primary-foreground hover:bg-primary-foreground/10 font-semibold py-4 px-10 rounded-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                  <span>View Our Work</span>
                </button>
              </Link>
            </div>

            {/* Trust Badge */}
            <div className="mt-10 pt-10 border-t border-primary-foreground/20">
              <p className="text-sm text-primary-foreground/60">
                Trusted by <span className="font-bold text-primary-foreground">500+ companies</span> worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
