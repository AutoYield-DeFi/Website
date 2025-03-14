import React from 'react';
import { Helmet } from "react-helmet-async";

export default function Legal() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Helmet>
        <title>Legal Information - AutoYield</title>
        <meta name="description" content="Terms of Service, Privacy Policy, and Risk Disclosures for AutoYield" />
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mb-6">Legal Information</h1>
        <div className="max-w-md mx-auto">
          <p className="text-xl text-muted-foreground mb-4">
            Our legal documentation is coming soon.
          </p>
          <p className="text-muted-foreground">
            We are currently finalizing our Terms of Service, Privacy Policy, and other legal documents.
          </p>
        </div>
      </div>
    </div>
  );
}