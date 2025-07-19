import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";

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
    <section id="blog" className="py-24 bg-background">
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
            <Card className="overflow-hidden bg-gradient-card hover:shadow-xl transition-all duration-500 group cursor-pointer">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className={`${blogPosts[0].image} p-2`}>
                  <div className="h-full bg-muted/30 rounded-lg flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <User className="w-10 h-10 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">Featured Article</span>
                    </div>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {blogPosts[0].category}
                    </span>
                    <span className="text-xs text-muted-foreground">Featured</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {blogPosts[0].author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {blogPosts[0].date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {blogPosts[0].readTime}
                      </div>
                    </div>
                    <Button variant="ghost" className="group-hover:bg-primary group-hover:text-primary-foreground">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.slice(1).map((post, index) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <Card
                className="overflow-hidden bg-gradient-card hover:shadow-lg hover:scale-105 transition-all duration-300 group animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${post.image} p-2 h-48`}>
                  <div className="h-full bg-muted/30 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                  </div>
                </div>
              </Card>
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