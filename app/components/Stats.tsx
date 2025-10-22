import { TrendingUp, Users, Globe, Award } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: "500+",
      label: "Projects Completed",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Users,
      number: "98%",
      label: "Client Satisfaction",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Globe,
      number: "50+",
      label: "Countries Served",
      gradient: "from-green-500/20 to-teal-500/20"
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
      gradient: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-primary-foreground/5 via-primary-foreground/3 to-transparent backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-foreground/10 animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glowing corners */}
                <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-primary-foreground/40 group-hover:border-primary-foreground group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-500"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-primary-foreground/40 group-hover:border-primary-foreground group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-primary-foreground/40 group-hover:border-primary-foreground group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-primary-foreground/40 group-hover:border-primary-foreground group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-500"></div>

                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl`}></div>

                <div className="relative">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${stat.gradient} border border-primary-foreground/20`}>
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Number */}
                  <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                    {stat.number}
                  </div>

                  {/* Label */}
                  <div className="text-sm text-primary-foreground/70 font-medium">
                    {stat.label}
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

export default Stats;
