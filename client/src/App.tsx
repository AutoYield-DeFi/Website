import { Suspense, lazy, startTransition, useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Seo } from "@/components/shared/Seo";

// Prefetch function for route-based code splitting
const prefetchRoute = (route: string) => {
  startTransition(() => {
    switch (route) {
      case '/':
        import("@/pages/home");
        break;
      case '/features':
        import("@/pages/features");
        break;
      case '/docs':
        import("@/pages/docs");
        break;
      case '/blog':
        import("@/pages/blog");
        break;
      case '/about':
        import("@/pages/about");
        break;
      case '/glossary':
        import("@/pages/glossary");
        break;
      case '/defi101':
        import("@/pages/defi101");
        break;
      case '/legal':
        import("@/pages/legal");
        break;
    }
  });
};

// Lazy load components with descriptive chunk names
const Home = lazy(() => import("@/pages/home" /* webpackChunkName: "home" */));
const Features = lazy(() => import("@/pages/features" /* webpackChunkName: "features" */));
const Docs = lazy(() => import("@/pages/docs" /* webpackChunkName: "docs" */));
const Blog = lazy(() => import("@/pages/blog" /* webpackChunkName: "blog" */));
const BlogPost = lazy(() => import("@/pages/blog/[slug]" /* webpackChunkName: "blog-post" */));
const About = lazy(() => import("@/pages/about" /* webpackChunkName: "about" */));
const Glossary = lazy(() => import("@/pages/glossary" /* webpackChunkName: "glossary" */));
const DeFi101 = lazy(() => import("@/pages/defi101" /* webpackChunkName: "defi101" */));
const Legal = lazy(() => import("@/pages/legal" /* webpackChunkName: "legal" */));
const NotFound = lazy(() => import("@/pages/not-found" /* webpackChunkName: "not-found" */));

// Optimize loading component
function PageLoader() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}

function Router() {
  const [location] = useLocation();

  // Prefetch adjacent routes
  useEffect(() => {
    const adjacentRoutes = {
      '/': ['/features', '/docs'],
      '/features': ['/', '/docs'],
      '/docs': ['/features', '/blog'],
      '/blog': ['/docs', '/about'],
      '/about': ['/blog', '/glossary'],
      '/glossary': ['/about', '/defi101'],
      '/defi101': ['/glossary', '/legal'],
      '/legal': ['/defi101', '/'],
    };

    // Prefetch adjacent routes based on current location
    const routesToPrefetch = adjacentRoutes[location as keyof typeof adjacentRoutes] || [];
    routesToPrefetch.forEach(prefetchRoute);
  }, [location]);

  const Layout = lazy(() => import("@/components/layout"));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Suspense fallback={<PageLoader />}>
        <Layout>
          <main>
            <Suspense fallback={<PageLoader />}>
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/features" component={Features} />
                <Route path="/docs" component={Docs} />
                <Route path="/blog" component={Blog} />
                <Route path="/blog/:slug" component={BlogPost} />
                <Route path="/about" component={About} />
                <Route path="/glossary" component={Glossary} />
                <Route path="/defi101" component={DeFi101} />
                <Route path="/legal" component={Legal} />
                <Route component={NotFound} />
              </Switch>
            </Suspense>
          </main>
        </Layout>
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Seo />
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;