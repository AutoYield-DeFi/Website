import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { BLOG_POSTS } from "@/lib/constants";

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AutoYield Blog - DeFi Liquidity Management Insights</title>
        <meta name="description" content="Expert insights into DeFi liquidity provision, algorithmic trading strategies, and maximizing LP returns on Solana." />
        <meta property="og:title" content="AutoYield Blog - DeFi Liquidity Management Insights" />
        <meta property="og:description" content="Expert insights into DeFi liquidity provision, algorithmic trading strategies, and maximizing LP returns on Solana." />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="container mx-auto px-4 py-24">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest Articles</h1>
          <p className="text-lg text-muted-foreground">
            Expert insights into DeFi liquidity management and yield optimization
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {BLOG_POSTS.map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Card className="h-full overflow-hidden border-border hover:border-primary/50 transition-colors duration-300">
                  <div className="aspect-[16/9] overflow-hidden bg-accent/50">
                    <div className="w-full h-full flex items-center justify-center">
                      {post.icon && <post.icon className="w-12 h-12 text-primary opacity-50" />}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex gap-2 flex-wrap mb-4">
                      {post.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="mb-3 text-sm text-muted-foreground">
                      <time dateTime={post.date}>
                        {format(new Date(post.date), 'MMMM d, yyyy')}
                      </time>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </motion.article>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}