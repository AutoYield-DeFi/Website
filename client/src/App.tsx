import { Suspense, lazy } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Seo } from "@/components/shared/Seo";
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

// Lazy load pages for code splitting and better performance
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

// Loading fallback component with shimmer effect
function PageLoader() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
        <div className="animate-pulse">
          <div className="h-4 w-24 bg-muted rounded"></div>
        </div>
      </div>
    </div>
  );
}

// Error boundary fallback
function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
        <p className="text-muted-foreground mb-4">{error.message}</p>
        <button 
          onClick={resetErrorBoundary}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
}

function Router() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Suspense fallback={<PageLoader />}>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
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
          </ErrorBoundary>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <Seo />
        <Router />
        <Toaster />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;