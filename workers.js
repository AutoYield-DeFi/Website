// This is a simple Cloudflare Worker entry point that serves static content
// from the dist directory. Wrangler will use this as the entry point for deployment.

export default {
  async fetch(request, env) {
    // Serve static assets from dist directory
    try {
      // This is a placeholder - Cloudflare Workers Sites will handle the static file serving
      return new Response("AutoYield Server", {
        headers: { "content-type": "text/plain" },
      });
    } catch (error) {
      return new Response(`Server Error: ${error.message}`, {
        status: 500,
      });
    }
  },
};