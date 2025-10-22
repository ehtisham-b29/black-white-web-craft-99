import type { MetaFunction } from "react-router";
import { Users, Linkedin, Mail, Github } from "lucide-react";
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Our Team - Realz Solutions" },
    { name: "description", content: "Meet the talented team behind Realz Solutions - experts in software development, AI, and digital innovation." },
  ];
};

export default function Team() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      image: "SJ",
      bio: "15+ years in tech leadership and business strategy. Passionate about building innovative solutions.",
      linkedin: "#",
      email: "sarah@realzsolutions.com",
      github: "#"
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      image: "MC",
      bio: "Expert in AI/ML and cloud architecture. Former tech lead at Fortune 500 companies.",
      linkedin: "#",
      email: "michael@realzsolutions.com",
      github: "#"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      image: "ER",
      bio: "Product strategist with a focus on user-centric design and SaaS platforms.",
      linkedin: "#",
      email: "emily@realzsolutions.com",
      github: "#"
    },
    {
      name: "David Park",
      role: "Lead Developer",
      image: "DP",
      bio: "Full-stack developer specializing in React, Node.js, and cloud infrastructure.",
      linkedin: "#",
      email: "david@realzsolutions.com",
      github: "#"
    },
    {
      name: "Lisa Anderson",
      role: "UX/UI Designer",
      image: "LA",
      bio: "Creative designer focused on crafting beautiful, intuitive user experiences.",
      linkedin: "#",
      email: "lisa@realzsolutions.com",
      github: "#"
    },
    {
      name: "James Wilson",
      role: "Marketing Director",
      image: "JW",
      bio: "Growth strategist with expertise in digital marketing and brand development.",
      linkedin: "#",
      email: "james@realzsolutions.com",
      github: "#"
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary-foreground/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 text-primary-foreground" />
              <span className="text-xs text-primary-foreground/90 font-semibold uppercase tracking-wider">Meet Our Team</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              The People Behind <span className="text-primary-foreground/60">Innovation</span>
            </h1>
            <p className="text-xl text-primary-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Our diverse team of experts brings together decades of experience in software development,
              design, and digital strategy to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
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

                {/* Animated grid background */}
                <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500" style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                                   linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}></div>

                <div className="relative space-y-5">
                  {/* Avatar */}
                  <div className="flex justify-center">
                    <div className="w-24 h-24 bg-primary-foreground/10 rounded-full flex items-center justify-center border-2 border-primary-foreground/20 group-hover:border-primary-foreground/40 transition-all duration-500">
                      <span className="text-2xl font-bold text-primary-foreground">{member.image}</span>
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-primary-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary-foreground/60 font-medium">
                      {member.role}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-12 h-px bg-gradient-to-r from-primary-foreground/50 to-transparent mx-auto"></div>

                  {/* Bio */}
                  <p className="text-primary-foreground/70 text-sm leading-relaxed text-center">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3 pt-2">
                    <a
                      href={member.linkedin}
                      className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4 text-primary-foreground" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4 text-primary-foreground" />
                    </a>
                    <a
                      href={member.github}
                      className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4 text-primary-foreground" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-primary-foreground/5 via-primary-foreground/3 to-transparent backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Join Our Team
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8">
              We're always looking for talented individuals to join our mission. Check out our open positions.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}
