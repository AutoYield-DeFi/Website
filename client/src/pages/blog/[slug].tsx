import { useRoute, Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { BLOG_POSTS } from "@/lib/constants";
import { Helmet } from "react-helmet";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const [, setLocation] = useLocation();
  const post = BLOG_POSTS.find(p => p.slug === params?.slug);

  const handleTagClick = (tag: string, e: React.MouseEvent) => {
    e.preventDefault();
    setLocation(`/blog?tag=${tag}`);
  };

  if (!post) {
    return (
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Post not found</h1>
            <Link href="/blog">
              <div className="text-primary hover:text-primary/80 cursor-pointer inline-flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{post.title} - AutoYield Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <link rel="canonical" href={`https://autoyield.fi/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:tag" content={post.tags.join(',')} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "datePublished": post.date,
            "keywords": post.tags.join(',')
          })}
        </script>
      </Helmet>

      <article className="max-w-[44rem] mx-auto px-4 py-24">
        <header className="mb-12">
          <Link href="/blog">
            <div className="text-primary hover:text-primary/80 cursor-pointer inline-flex items-center mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </div>
          </Link>

          <div className="flex gap-2 flex-wrap mb-6">
            {post.tags.map(tag => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="cursor-pointer bg-primary/10 text-primary hover:bg-primary/20"
                onClick={(e) => handleTagClick(tag, e)}
              >
                {tag}
              </Badge>
            ))}
          </div>

          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {post.title}
          </motion.h1>

          <motion.div 
            className="text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <time dateTime={post.date}>
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </time>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </motion.div>

          <motion.div
            className="aspect-video w-full rounded-lg overflow-hidden mb-12 bg-accent/50 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {post.icon && (
              <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/20">
                <post.icon className="w-24 h-24 text-primary opacity-50" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#9333ea,#06b6d4)] opacity-10" />
              </div>
            )}
          </motion.div>
        </header>

        <motion.div 
          className="prose prose-lg prose-invert max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div 
            className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-4 
                     [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-8 [&>h3]:mb-3
                     [&>p]:mb-6 [&>p]:leading-7
                     [&>ul]:mb-6 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-2"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>
      </article>
    </div>
  );
}