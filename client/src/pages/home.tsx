import React, { Suspense, lazy } from "react";
import { defaultMeta } from "@/lib/metadata";
import { Helmet } from "react-helmet";

// Lazy load heavy components
const Hero = lazy(() => import("@/components/sections/hero"));
const Benefits = lazy(() => import("@/components/sections/benefits"));
const FAQ = lazy(() => import("@/components/sections/faq"));
const WaitlistForm = lazy(() => import("@/components/sections/waitlist-form"));

// Loading component for suspense fallback
const SectionLoader = () => (
  <div className="min-h-[300px] flex items-center justify-center">
    <div className="h-8 w-8 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
  </div>
);

// Wrap Home component with React.memo to prevent unnecessary re-renders
const Home = React.memo(() => {
  return (
    <>
      <Helmet>
        <title>{defaultMeta.title}</title>
        <meta name="description" content={defaultMeta.description} />
        <meta name="keywords" content={defaultMeta.keywords} />
        {/* Add viewport meta for better mobile rendering */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        {/* Add preconnect for external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Helmet>

      <div className="pt-16">
        <Suspense fallback={<SectionLoader />}>
          <Hero />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Benefits />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <WaitlistForm />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <FAQ />
        </Suspense>
      </div>
    </>
  );
});

Home.displayName = 'Home';

export default Home;