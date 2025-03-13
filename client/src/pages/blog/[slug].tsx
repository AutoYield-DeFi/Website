import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
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
    <>
      <Helmet>
        <title>{post.title} - AutoYield Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={`${post.title} - AutoYield Blog`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} - AutoYield Blog`} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
      </Helmet>

      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/blog">
              <div className="text-primary hover:text-primary/80 cursor-pointer inline-flex items-center mb-8">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </div>
            </Link>

            <div className="aspect-[2/1] overflow-hidden rounded-lg mb-8">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg prose-invert max-w-none">
              <h1 className="text-4xl font-bold mb-4 !mt-0">{post.title}</h1>
              <div className="text-sm text-muted-foreground mb-8">
                {format(new Date(post.date), 'MMMM d, yyyy')} • {post.readTime}
              </div>

              <div 
                className="leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </motion.div>
        </div>
      </article>
    </>
  );
}