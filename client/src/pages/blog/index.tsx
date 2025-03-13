import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { Link } from "wouter";
import { Helmet } from "react-helmet";

// Updated BLOG_POSTS to include image URLs.  Placeholder URLs are used here.  Replace with actual image URLs.
const BLOG_POSTS = [
  {
    slug: "welcome-to-autoyield",
    title: "Welcome to AutoYield: The Future of LP Management",
    excerpt: "Learn how AutoYield is revolutionizing liquidity provision with AI-powered automation.",
    date: "2024-03-05",
    image: "/images/welcome-to-autoyield.webp", // Placeholder image URL
    readTime: "5 min read"
  },
  {
    slug: "understanding-lp-basics",
    title: "LP Basics: A Guide for Beginners",
    excerpt: "Everything you need to know about liquidity provision, explained in simple terms.",
    date: "2024-03-04",
    image: "/images/lp-basics.webp", // Placeholder image URL
    readTime: "8 min read"
  }
];

export default function Blog() {
  return (
    <div className="pt-24 pb-16">
      <Helmet>
        <title>AutoYield Blog - DeFi Liquidity Management Insights</title>
        <meta name="description" content="Expert insights into DeFi liquidity provision, algorithmic trading strategies, and maximizing LP returns on Solana." />
        <meta property="og:title" content="AutoYield Blog - DeFi Liquidity Management Insights" />
        <meta property="og:description" content="Expert insights into DeFi liquidity provision, algorithmic trading strategies, and maximizing LP returns on Solana." />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4">AutoYield Blog</h1>
          <p className="text-lg text-muted-foreground">
            Expert insights into DeFi liquidity management and yield optimization
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid gap-8">
            {BLOG_POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="cursor-pointer transition-all hover:shadow-lg overflow-hidden">
                  <div className="aspect-[2/1] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-3 text-sm text-muted-foreground">
                      {format(new Date(post.date), 'MMMM d, yyyy')} • {post.readTime}
                    </div>
                    <h2 className="text-2xl font-bold mb-3 leading-tight hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}