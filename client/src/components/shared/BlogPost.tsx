import { useEffect, useRef } from "react";
import { ResponsiveImage } from "@/components/ui/responsive-image";

interface BlogPostProps {
  content: string;
  coverImage?: string;
  title: string;
}

export function BlogPost({ content, coverImage, title }: BlogPostProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    // Optimize images in blog content
    const images = contentRef.current.querySelectorAll('img');
    images.forEach(img => {
      // Add loading="lazy" for images below the fold
      img.setAttribute('loading', 'lazy');
      img.setAttribute('decoding', 'async');

      // Use native lazy loading with fallback
      if ('loading' in HTMLImageElement.prototype) {
        img.setAttribute('loading', 'lazy');
      }

      // Set explicit dimensions if available
      if (img.width && img.height) {
        img.setAttribute('width', img.width.toString());
        img.setAttribute('height', img.height.toString());
      }
    });
  }, [content]);

  return (
    <article className="max-w-4xl mx-auto">
      {coverImage && (
        <div className="mb-8 aspect-[16/9]">
          <ResponsiveImage
            src={coverImage}
            alt={title}
            className="rounded-lg shadow-lg"
            priority // Load cover image immediately as it's above the fold
          />
        </div>
      )}
      <div 
        ref={contentRef}
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}