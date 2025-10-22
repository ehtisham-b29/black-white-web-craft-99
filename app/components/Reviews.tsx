import { Star, Quote, MapPin, Sparkles, Globe } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Chris Pearson",
      role: "CEO, Tap-in Global",
      rating: 5,
      comment: "Realz Solutions developed our traveling safety system with exceptional precision and innovation. The platform ensures traveler security in real-time, and their team's dedication to safety protocols was remarkable. This has revolutionized how we protect our global travelers.",
      image: "CP",
      project: "Traveling Safety System",
      icon: MapPin,
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      name: "Erin",
      role: "Dermatologist & App Founder",
      rating: 5,
      comment: "The Skin Analyzer App exceeded all our expectations. Realz Solutions integrated advanced AI technology to provide accurate skin analysis with intuitive user experience. Their expertise in healthcare tech and attention to detail made this project a huge success.",
      image: "ER",
      project: "Skin Analyzer App",
      icon: Sparkles,
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      name: "Haile Bolden",
      role: "Managing Director, Telphi Consulting",
      rating: 5,
      comment: "Working with Realz Solutions on our corporate website was a phenomenal experience. They delivered a sleek, professional platform that perfectly represents our consulting brand. The modern design and seamless functionality have significantly improved our online presence and client engagement.",
      image: "HB",
      project: "Telphi Consulting Website",
      icon: Globe,
      gradient: "from-green-500/20 to-teal-500/20"
    }
  ];

  return (
    <section id="reviews" className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Client Reviews
          </h2>
          <p className="text-base text-primary-foreground/70 max-w-2xl mx-auto">
            See what our clients say about working with us
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => {
            const IconComponent = review.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-primary-foreground/5 via-primary-foreground/3 to-transparent backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-foreground/10 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Futuristic scan line animation */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/50 to-transparent animate-scan"></div>
                </div>

                {/* Glowing corners */}
                <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-primary-foreground/40 group-hover:border-primary-foreground group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-500"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-primary-foreground/40 group-hover:border-primary-foreground group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-primary-foreground/40 group-hover:border-primary-foreground group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-primary-foreground/40 group-hover:border-primary-foreground group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-500"></div>

                {/* Gradient overlay matching project theme */}
                <div className={`absolute inset-0 bg-gradient-to-br ${review.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl`}></div>

                {/* Animated grid background */}
                <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500" style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                                   linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}></div>

                <div className="relative space-y-5">
                  {/* Project Icon & Badge */}
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${review.gradient} border border-primary-foreground/20`}>
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    {/* Star Rating */}
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary-foreground text-primary-foreground" />
                      ))}
                    </div>
                  </div>

                  {/* Project Name */}
                  <div>
                    <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-3 py-1.5 mb-3">
                      <span className="text-[10px] text-primary-foreground/90 font-semibold uppercase tracking-wider">{review.project}</span>
                    </div>
                  </div>

                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-primary-foreground/20" />

                  {/* Review Text */}
                  <p className="text-primary-foreground/70 text-sm leading-relaxed min-h-[120px]">
                    {review.comment}
                  </p>

                  {/* Divider */}
                  <div className="w-12 h-px bg-gradient-to-r from-primary-foreground/50 to-transparent"></div>

                  {/* Reviewer Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center border border-primary-foreground/20 flex-shrink-0 group-hover:border-primary-foreground/40 transition-all duration-500">
                      <span className="text-sm font-bold text-primary-foreground">{review.image}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary-foreground">{review.name}</h4>
                      <p className="text-xs text-primary-foreground/60">{review.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
