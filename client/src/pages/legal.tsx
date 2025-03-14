import { Helmet } from "react-helmet-async";

export default function Legal() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <Helmet>
        <title>Legal Information - AutoYield</title>
        <meta name="description" content="Terms of Service, Privacy Policy, and Risk Disclosures for AutoYield" />
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Legal Information</h1>
          <p className="text-xl text-muted-foreground">
            Our legal documentation is currently being reviewed and will be available soon.
          </p>
          <p className="mt-4 text-muted-foreground">
            Please check back later for our Terms of Service, Privacy Policy, and Risk Disclosures.
          </p>
        </div>
      </div>
    </div>
  );
}