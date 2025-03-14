import React from 'react';
import { Helmet } from "react-helmet-async";

function Legal() {
  return (
    <div>
      <Helmet>
        <title>Legal Information - AutoYield</title>
        <meta name="description" content="Terms of Service, Privacy Policy, and Risk Disclosures for AutoYield" />
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <div>Legal Page</div>
    </div>
  );
}

export default Legal;