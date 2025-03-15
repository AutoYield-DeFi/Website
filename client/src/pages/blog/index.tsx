import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { useLocation } from "wouter";
import { Helmet } from "react-helmet";
import { BLOG_POSTS } from "@/lib/constants";
import { useCallback, useMemo } from "react";

export default function Blog() {
  const [location, setLocation] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const activeTag = searchParams.get('tag');

  const filteredPosts = useMemo(() => {
    if (!activeTag) return BLOG_POSTS;
    return BLOG_POSTS.filter(post => post.tags.includes(activeTag));
  }, [activeTag]);

  // Handle tag click more explicitly to ensure it works
  const handleTagClick = useCallback((tag: string, e: React.MouseEvent) => {
    // Prevent the default behavior and stop propagation
    e.preventDefault();
    e.stopPropagation(); 
    
    // Toggle tag filter using direct navigation
    const params = new URLSearchParams(window.location.search);
    if (params.get('tag') === tag) {
      params.delete('tag');
    } else {
      params.set('tag', tag);
    }
    
    // Use direct window location for more reliable navigation
    window.location.href = `/blog?${params.toString()}`;
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-64 h-64 bg-primary/10 rounded-full filter blur-2xl"></div>
      </div>
      
      <Helmet>
        <title>{activeTag ? `${activeTag} Articles - AutoYield Blog` : 'AutoYield Blog - DeFi Liquidity Management Insights'}</title>
        <meta name="description" content={`Expert insights into ${activeTag || 'DeFi liquidity provision'}, algorithmic trading strategies, and maximizing LP returns on Solana.`} />
        <meta name="keywords" content="DeFi, Liquidity Management, Solana, Automated Trading, Yield Optimization" />
        <link rel="canonical" href={`https://autoyield.fi/blog${activeTag ? `?tag=${activeTag}` : ''}`} />
      </Helmet>

      <div className="container mx-auto px-4 py-24">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            {activeTag ? `${activeTag} Articles` : 'Latest Articles'}
          </h1>
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
          {filteredPosts.map((post, index) => (
            <a key={post.slug} href={`/blog/${post.slug}`} className="no-underline">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Card className="h-full overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.15)] bg-background/50 backdrop-blur-sm">
                  <div className="aspect-[16/9] overflow-hidden rounded-t-md relative">
                    {post.imageSrc ? (
                      <img 
                        src={post.imageSrc} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/30">
                        {post.icon && (
                          <div className="relative">
                            <div className="absolute inset-0 blur-xl bg-primary/20 rounded-full"></div>
                            <post.icon className="w-12 h-12 text-primary relative z-10" />
                          </div>
                        )}
                      </div>
                    )}
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70"></div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex gap-2 flex-wrap mb-4">
                      {post.tags.map(tag => (
                        <Badge 
                          key={tag} 
                          variant="secondary" 
                          className={`cursor-pointer ${
                            activeTag === tag ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
                          } hover:bg-primary/20`}
                          onClick={(e) => handleTagClick(tag, e)}
                        >
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
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}