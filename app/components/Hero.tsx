import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import { ArrowRight, Code, Smartphone, Globe, Sparkles, Zap, Layers } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -right-20 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4 md:pt-6">
        <div className="text-center animate-fade-in">
          {/* Main Heading - Single Line */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight tracking-tight">
            <span className="text-primary-foreground">Digital Solutions </span>
            <span className="bg-gradient-to-r from-primary-foreground via-primary-foreground/80 to-primary-foreground/60 bg-clip-text text-transparent">
              That Transform
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg lg:text-xl mb-8 text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            We build cutting-edge <span className="font-bold text-primary-foreground border-b-2 border-primary-foreground/50">SaaS platforms</span>, <span className="font-bold text-primary-foreground border-b-2 border-primary-foreground/50">AI-powered products</span>, and <span className="font-bold text-primary-foreground border-b-2 border-primary-foreground/50">enterprise solutions</span> that transform your business and accelerate growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="ghost"
              size="xl"
              className="bg-primary-foreground text-primary hover:bg-primary hover:text-primary-foreground border-none shadow-2xl hover:shadow-primary-foreground/20 hover:scale-105 transition-all duration-300 group"
            >
              Start Your Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Link to="/projects">
              <Button
                variant="ghost"
                size="xl"
                className="bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary border-2 border-primary-foreground/30 hover:border-primary-foreground shadow-2xl hover:shadow-primary-foreground/20 hover:scale-105 transition-all duration-300"
              >
                View Our Work
              </Button>
            </Link>
          </div>

          {/* Professional Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {/* Card 1 - Software Development */}
            <div className="group relative bg-gradient-to-br from-primary-foreground/5 via-primary-foreground/3 to-transparent backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 transition-all duration-500 cursor-pointer overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-primary-foreground/10">
              {/* Futuristic scan line animation */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/50 to-transparent animate-scan"></div>
              </div>

              {/* Glowing corners */}
              <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-primary-foreground/40 group-hover:border-primary-foreground group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-500"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-primary-foreground/40 group-hover:border-primary-foreground group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-primary-foreground/40 group-hover:border-primary-foreground group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-500"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-primary-foreground/40 group-hover:border-primary-foreground group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-500"></div>

              {/* Animated grid background */}
              <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }}></div>

              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-foreground/0 via-primary-foreground/5 to-primary-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>

              {/* Holographic edge glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]"></div>
              </div>

              <div className="relative space-y-5">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-green-400/20 border border-green-400/30 rounded-full px-3 py-1.5">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-[10px] text-primary-foreground/90 font-semibold uppercase tracking-wider">Most Popular</span>
                </div>

                {/* Title with number */}
                <div>
                  <div className="text-5xl font-bold text-primary-foreground/10 mb-2">01</div>
                  <h3 className="text-2xl font-bold text-primary-foreground leading-tight">
                    Software Development
                  </h3>
                </div>

                {/* Description */}
                <p className="text-primary-foreground/60 text-sm leading-relaxed">
                  Enterprise-grade solutions with cutting-edge tech. Scalable, secure, and built to last.
                </p>

                {/* Divider */}
                <div className="w-12 h-px bg-gradient-to-r from-primary-foreground/50 to-transparent"></div>

                {/* Features List */}
                <ul className="space-y-2.5">
                  <li className="flex items-center gap-3 text-xs text-primary-foreground/80">
                    <div className="w-1.5 h-1.5 bg-primary-foreground/60 rounded-full"></div>
                    <span>Custom Architecture</span>
                  </li>
                  <li className="flex items-center gap-3 text-xs text-primary-foreground/80">
                    <div className="w-1.5 h-1.5 bg-primary-foreground/60 rounded-full"></div>
                    <span>Cloud-Native Design</span>
                  </li>
                  <li className="flex items-center gap-3 text-xs text-primary-foreground/80">
                    <div className="w-1.5 h-1.5 bg-primary-foreground/60 rounded-full"></div>
                    <span>24/7 Support</span>
                  </li>
                </ul>

                {/* CTA Button */}
                <button className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-foreground/30 group/btn">
                  <span className="text-xs">Explore Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Card 2 - Web Development */}
            <div className="group relative bg-gradient-to-br from-primary-foreground/5 via-primary-foreground/3 to-transparent backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 transition-all duration-500 cursor-pointer overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-primary-foreground/10">
              {/* Futuristic scan line animation */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/50 to-transparent animate-scan"></div>
              </div>

              {/* Glowing corners */}
              <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-primary-foreground/40 group-hover:border-primary-foreground group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-500"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-primary-foreground/40 group-hover:border-primary-foreground group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-primary-foreground/40 group-hover:border-primary-foreground group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-500"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-primary-foreground/40 group-hover:border-primary-foreground group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-500"></div>

              {/* Animated grid background */}
              <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }}></div>

              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-foreground/0 via-primary-foreground/5 to-primary-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>

              {/* Holographic edge glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]"></div>
              </div>

              <div className="relative space-y-5">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-3 py-1.5">
                  <Zap className="w-3 h-3 text-primary-foreground/80" />
                  <span className="text-[10px] text-primary-foreground/90 font-semibold uppercase tracking-wider">Fast Delivery</span>
                </div>

                {/* Title with number */}
                <div>
                  <div className="text-5xl font-bold text-primary-foreground/10 mb-2">02</div>
                  <h3 className="text-2xl font-bold text-primary-foreground leading-tight">
                    Web Development
                  </h3>
                </div>

                {/* Description */}
                <p className="text-primary-foreground/60 text-sm leading-relaxed">
                  High-converting websites that turn visitors into customers. Blazing fast performance.
                </p>

                {/* Divider */}
                <div className="w-12 h-px bg-gradient-to-r from-primary-foreground/50 to-transparent"></div>

                {/* Features List */}
                <ul className="space-y-2.5">
                  <li className="flex items-center gap-3 text-xs text-primary-foreground/80">
                    <div className="w-1.5 h-1.5 bg-primary-foreground/60 rounded-full"></div>
                    <span>Responsive Design</span>
                  </li>
                  <li className="flex items-center gap-3 text-xs text-primary-foreground/80">
                    <div className="w-1.5 h-1.5 bg-primary-foreground/60 rounded-full"></div>
                    <span>SEO Optimized</span>
                  </li>
                  <li className="flex items-center gap-3 text-xs text-primary-foreground/80">
                    <div className="w-1.5 h-1.5 bg-primary-foreground/60 rounded-full"></div>
                    <span>Performance First</span>
                  </li>
                </ul>

                {/* CTA Button */}
                <button className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-foreground/30 group/btn">
                  <span className="text-xs">View Websites</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Card 3 - Mobile Apps */}
            <div className="group relative bg-gradient-to-br from-primary-foreground/5 via-primary-foreground/3 to-transparent backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 transition-all duration-500 cursor-pointer overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-primary-foreground/10">
              {/* Futuristic scan line animation */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/50 to-transparent animate-scan"></div>
              </div>

              {/* Glowing corners */}
              <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-primary-foreground/40 group-hover:border-primary-foreground group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-500"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-primary-foreground/40 group-hover:border-primary-foreground group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-primary-foreground/40 group-hover:border-primary-foreground group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-500"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-primary-foreground/40 group-hover:border-primary-foreground group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-500"></div>

              {/* Animated grid background */}
              <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }}></div>

              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-foreground/0 via-primary-foreground/5 to-primary-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>

              {/* Holographic edge glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]"></div>
              </div>

              <div className="relative space-y-5">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-3 py-1.5">
                  <Layers className="w-3 h-3 text-primary-foreground/80" />
                  <span className="text-[10px] text-primary-foreground/90 font-semibold uppercase tracking-wider">Cross-Platform</span>
                </div>

                {/* Title with number */}
                <div>
                  <div className="text-5xl font-bold text-primary-foreground/10 mb-2">03</div>
                  <h3 className="text-2xl font-bold text-primary-foreground leading-tight">
                    Mobile Apps
                  </h3>
                </div>

                {/* Description */}
                <p className="text-primary-foreground/60 text-sm leading-relaxed">
                  Native iOS & Android apps users love. Seamless experiences across all devices.
                </p>

                {/* Divider */}
                <div className="w-12 h-px bg-gradient-to-r from-primary-foreground/50 to-transparent"></div>

                {/* Features List */}
                <ul className="space-y-2.5">
                  <li className="flex items-center gap-3 text-xs text-primary-foreground/80">
                    <div className="w-1.5 h-1.5 bg-primary-foreground/60 rounded-full"></div>
                    <span>iOS & Android</span>
                  </li>
                  <li className="flex items-center gap-3 text-xs text-primary-foreground/80">
                    <div className="w-1.5 h-1.5 bg-primary-foreground/60 rounded-full"></div>
                    <span>React Native</span>
                  </li>
                  <li className="flex items-center gap-3 text-xs text-primary-foreground/80">
                    <div className="w-1.5 h-1.5 bg-primary-foreground/60 rounded-full"></div>
                    <span>App Store Ready</span>
                  </li>
                </ul>

                {/* CTA Button */}
                <button className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-foreground/30 group/btn">
                  <span className="text-xs">Start Building</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 cursor-pointer group">
          <span className="text-xs text-primary-foreground/60 uppercase tracking-wider group-hover:text-primary-foreground transition-colors">Scroll</span>
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center group-hover:border-primary-foreground/60 transition-colors">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2 group-hover:bg-primary-foreground transition-colors"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
