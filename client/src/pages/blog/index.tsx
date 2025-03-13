import { motion } from "framer-motion";
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
          className="max-w-2xl mx-auto space-y-12"
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
                className="block p-6 rounded-lg hover:bg-accent/5 transition-colors"
              >
                <div className="mb-2 text-sm text-muted-foreground">
                  <time dateTime={post.date}>
                    {format(new Date(post.date), 'MMMM d, yyyy')}
                  </time>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold mb-3 leading-tight text-foreground hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {post.excerpt}
                </p>
              </motion.article>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}