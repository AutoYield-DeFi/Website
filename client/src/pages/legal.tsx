import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

function Legal() {
  const [activeTab, setActiveTab] = useState("terms");

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <Helmet>
        <title>Legal Information - AutoYield</title>
        <meta name="description" content="Terms of Service, Privacy Policy, and Risk Disclosures for AutoYield" />
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl font-bold mb-8">Legal Information</h1>
          
          <Tabs defaultValue="terms" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="terms">Terms of Service</TabsTrigger>
              <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
            </TabsList>
            
            <TabsContent value="terms" className="mt-6">
              <div className="space-y-6 text-muted-foreground">
                <h2 className="text-2xl font-semibold text-foreground">Terms of Service</h2>
                <p className="mt-2">
                  Last Updated: March 15, 2025
                </p>
                
                <div className="space-y-4">
                  <section>
                    <h3 className="text-xl font-medium text-foreground mb-2">1. Introduction</h3>
                    <p>
                      Welcome to AutoYield ("we," "our," or "us"). By accessing or using the AutoYield platform, website, mobile application, or any of our services (collectively, the "Services"), you agree to be bound by these Terms of Service.
                    </p>
                  </section>
                  
                  <section>
                    <h3 className="text-xl font-medium text-foreground mb-2">2. Eligibility</h3>
                    <p>
                      You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that you meet the eligibility requirements and have the right, authority, and capacity to enter into these Terms.
                    </p>
                  </section>
                  
                  <section>
                    <h3 className="text-xl font-medium text-foreground mb-2">3. Account Creation</h3>
                    <p>
                      You may need to create an account to access certain features of our Services. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                    </p>
                  </section>
                  
                  <section>
                    <h3 className="text-xl font-medium text-foreground mb-2">4. Risk Disclosure</h3>
                    <p>
                      Using decentralized finance (DeFi) applications involves significant risk. Cryptocurrency prices are volatile and may fluctuate rapidly. Smart contracts may contain bugs or vulnerabilities. You acknowledge and agree that you use our Services at your own risk.
                    </p>
                  </section>
                  
                  <section>
                    <h3 className="text-xl font-medium text-foreground mb-2">5. Limitation of Liability</h3>
                    <p>
                      To the maximum extent permitted by law, AutoYield shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or use, arising out of or related to your use of our Services.
                    </p>
                  </section>
                  
                  <section>
                    <h3 className="text-xl font-medium text-foreground mb-2">6. Governing Law</h3>
                    <p>
                      These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which AutoYield operates, without regard to its conflict of law provisions.
                    </p>
                  </section>
                  
                  <section>
                    <h3 className="text-xl font-medium text-foreground mb-2">7. Changes to Terms</h3>
                    <p>
                      We reserve the right to modify these Terms at any time. We will provide notice of any material changes by updating the "Last Updated" date at the top of these Terms.
                    </p>
                  </section>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="privacy" className="mt-6">
              <div className="space-y-6 text-muted-foreground">
                <h2 className="text-2xl font-semibold text-foreground">Privacy Policy</h2>
                <p className="mt-2">
                  Last Updated: March 15, 2025
                </p>
                
                <div className="space-y-4">
                  <section>
                    <h3 className="text-xl font-medium text-foreground mb-2">1. Introduction</h3>
                    <p>
                      This Privacy Policy explains how AutoYield collects, uses, and discloses information about you when you use our Services. By using our Services, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy.
                    </p>
                  </section>
                  
                  <section>
                    <h3 className="text-xl font-medium text-foreground mb-2">2. Information We Collect</h3>
                    <p>
                      We may collect information you provide directly to us, information we collect automatically when you use our Services, and information from other sources.
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Information you provide: contact information, wallet addresses, and any other information you choose to provide.</li>
                      <li>Information collected automatically: usage data, device information, log data, cookies, and other tracking technologies.</li>
                      <li>Information from other sources: blockchain data, third-party services, and publicly available information.</li>
                    </ul>
                  </section>
                  
                  <section>
                    <h3 className="text-xl font-medium text-foreground mb-2">3. How We Use Information</h3>
                    <p>
                      We use the information we collect to provide, maintain, and improve our Services, to communicate with you, to comply with legal obligations, and for other purposes described in this Privacy Policy.
                    </p>
                  </section>
                  
                  <section>
                    <h3 className="text-xl font-medium text-foreground mb-2">4. Sharing of Information</h3>
                    <p>
                      We may share information with vendors and service providers, in connection with business transfers, for legal reasons, and with your consent.
                    </p>
                  </section>
                  
                  <section>
                    <h3 className="text-xl font-medium text-foreground mb-2">5. Security</h3>
                    <p>
                      We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
                    </p>
                  </section>
                  
                  <section>
                    <h3 className="text-xl font-medium text-foreground mb-2">6. Your Rights</h3>
                    <p>
                      Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your personal information.
                    </p>
                  </section>
                  
                  <section>
                    <h3 className="text-xl font-medium text-foreground mb-2">7. Changes to This Privacy Policy</h3>
                    <p>
                      We may change this Privacy Policy from time to time. We will notify you of any material changes by updating the "Last Updated" date at the top of this Privacy Policy.
                    </p>
                  </section>
                  
                  <section>
                    <h3 className="text-xl font-medium text-foreground mb-2">8. Contact Us</h3>
                    <p>
                      If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:privacy@autoyield.com" className="text-primary hover:underline">privacy@autoyield.com</a>
                    </p>
                  </section>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}

export default Legal;