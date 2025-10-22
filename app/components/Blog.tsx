import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Link } from "react-router";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Software Development",
      excerpt: "Explore how artificial intelligence is revolutionizing the way we build software, from automated code generation to intelligent testing.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Technology",
      image: "bg-gradient-to-br from-blue-500/20 to-purple-500/20"
    },
    {
      id: 2,
      title: "Building Scalable Mobile Applications",
      excerpt: "Learn the best practices for developing mobile apps that can handle millions of users while maintaining optimal performance.",
      author: "Michael Chen",
      date: "March 12, 2024", 
      readTime: "8 min read",
      category: "Mobile Development",
      image: "bg-gradient-to-br from-green-500/20 to-teal-500/20"
    },
    {
      id: 3,
      title: "Cloud Security: Best Practices for 2024",
      excerpt: "Comprehensive guide to securing your cloud infrastructure and protecting your applications from emerging threats.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Security",
      image: "bg-gradient-to-br from-red-500/20 to-orange-500/20"
    },
    {
      id: 4,
      title: "React vs Vue: Which Framework to Choose?",
      excerpt: "An in-depth comparison of the two most popular frontend frameworks to help you make the right choice for your project.",
      author: "David Kumar",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "Web Development",
      image: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20"
    },
    {
      id: 5,
      title: "Database Optimization Techniques",
      excerpt: "Master the art of database performance tuning with advanced optimization strategies that can improve your app's speed by 300%.",
      author: "Lisa Thompson",
      date: "March 5, 2024",
      readTime: "9 min read",
      category: "Database",
      image: "bg-gradient-to-br from-purple-500/20 to-pink-500/20"
    },
    {
      id: 6,
      title: "The Rise of Low-Code Development",
      excerpt: "Discover how low-code platforms are democratizing software development and what it means for the future of programming.",
      author: "Alex Park",
      date: "March 3, 2024",
      readTime: "4 min read",
      category: "Trends",
      image: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20"
    }
  ];

  const categories = ["All", "Technology", "Mobile Development", "Security", "Web Development", "Database", "Trends"];

  return (
    <section id="blog" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Latest Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, best practices, and insights from the world of technology and software development.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16 animate-scale-in">
          <Link to={`/blog/${blogPosts[0].id}`}>
            <div className="group relative bg-gradient-to-br from-primary-foreground/5 via-primary-foreground/3 to-transparent backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 lg:p-12 transition-all duration-500 cursor-pointer overflow-hidden hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary-foreground/10">
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

              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Side - Featured Badge & Image Area */}
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-green-400/20 border border-green-400/30 rounded-full px-4 py-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-primary-foreground/90 font-semibold uppercase tracking-wider">Featured Article</span>
                  </div>

                  <div className="text-8xl font-bold text-primary-foreground/10">01</div>

                  <div className="flex items-center gap-3 text-xs text-primary-foreground/80">
                    <div className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-3 py-1.5">
                    <span className="text-[10px] text-primary-foreground/90 font-semibold uppercase tracking-wider">{blogPosts[0].category}</span>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-primary-foreground leading-tight">
                    {blogPosts[0].title}
                  </h3>

                  <p className="text-primary-foreground/60 text-base leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>

                  <div className="w-16 h-px bg-gradient-to-r from-primary-foreground/50 to-transparent"></div>

                  <button className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-foreground/30 group/btn">
                    <span className="text-xs">Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.slice(1).map((post, index) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <div
                className="group relative bg-gradient-to-br from-primary-foreground/5 via-primary-foreground/3 to-transparent backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 transition-all duration-500 cursor-pointer overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-primary-foreground/10 animate-fade-in"
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

                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-foreground/0 via-primary-foreground/5 to-primary-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>

                {/* Holographic edge glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]"></div>
                </div>

                <div className="relative space-y-5">
                  {/* Badge and Read Time */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-3 py-1.5">
                      <span className="text-[10px] text-primary-foreground/90 font-semibold uppercase tracking-wider">{post.category}</span>
                    </span>
                    <span className="text-xs text-primary-foreground/60">{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-primary-foreground leading-tight line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-primary-foreground/60 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Divider */}
                  <div className="w-12 h-px bg-gradient-to-r from-primary-foreground/50 to-transparent"></div>

                  {/* Author and Date */}
                  <div className="flex items-center justify-between text-xs text-primary-foreground/80">
                    <div className="flex items-center gap-2">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <Card className="p-8 bg-gradient-hero text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest insights, tutorials, and industry news delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
              />
              <Button variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Subscribe
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Blog;