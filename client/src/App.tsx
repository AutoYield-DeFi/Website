import { Suspense, lazy } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Seo } from "@/components/shared/Seo";

// Lazy load pages
const Layout = lazy(() => import("@/components/layout"));
const Home = lazy(() => import("@/pages/home"));
const Features = lazy(() => import("@/pages/features"));
const Docs = lazy(() => import("@/pages/docs"));
const Blog = lazy(() => import("@/pages/blog"));
const BlogPost = lazy(() => import("@/pages/blog/[slug]"));
const About = lazy(() => import("@/pages/about"));
const Glossary = lazy(() => import("@/pages/glossary"));
const DeFi101 = lazy(() => import("@/pages/defi101"));
const Legal = lazy(() => import("@/pages/legal"));
const NotFound = lazy(() => import("@/pages/not-found"));

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
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Suspense fallback={<PageLoader />}>
        <Layout>
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