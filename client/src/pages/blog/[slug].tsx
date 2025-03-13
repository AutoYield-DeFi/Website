import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { format } from "date-fns";
import { BLOG_POSTS } from "@/lib/constants";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const post = BLOG_POSTS.find(p => p.slug === params?.slug);

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
        <meta property="og:title" content={`${post.title} - AutoYield Blog`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={`/blog/${post.slug}.webp`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} - AutoYield Blog`} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={`/blog/${post.slug}.webp`} />
      </Helmet>

      <article className="max-w-[44rem] mx-auto px-4 py-24">
        <header className="mb-16">
          <Link href="/blog">
            <div className="text-primary hover:text-primary/80 cursor-pointer inline-flex items-center mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </div>
          </Link>

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
        </header>

        <motion.div
          className="relative w-full aspect-[2/1] rounded-lg overflow-hidden mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img 
            src={`/blog/${post.slug}.webp`}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div 
          className="prose prose-lg prose-invert max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </motion.div>
      </article>
    </div>
  );
}