import React from 'react';
import { Helmet } from "react-helmet-async";

export default function Legal() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <Helmet>
        <title>Legal Information - AutoYield</title>
        <meta name="description" content="Terms of Service, Privacy Policy, and Risk Disclosures for AutoYield" />
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <div style={{textAlign: 'center'}}>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}>Legal Information</h1>
        <p style={{
          fontSize: '1.25rem',
          marginBottom: '1rem'
        }}>
          Our legal documentation is coming soon.
        </p>
        <p>
          We are currently finalizing our Terms of Service, Privacy Policy, and other legal documents.
        </p>
      </div>
    </div>
  );
}