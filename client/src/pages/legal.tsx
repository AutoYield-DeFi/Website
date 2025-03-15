import React, { useState } from 'react';
import { Seo } from "@/components/shared/Seo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

function Legal() {
  const [activeTab, setActiveTab] = useState("terms");

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <Seo 
        title="Legal Information - AutoYield"
        description="Terms of Service, Privacy Policy, and Risk Disclosures for AutoYield"
        noIndex={true}
      />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-4 text-foreground text-center">Legal Information</h1>
          <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
            Please review these important legal documents that govern your use of AutoYield's services and explain how we handle your data.
          </p>
          
          <Tabs defaultValue="terms" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-10">
              <TabsTrigger value="terms">Terms of Service</TabsTrigger>
              <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
              <TabsTrigger value="risk">Risk Disclosures</TabsTrigger>
            </TabsList>
            
            <TabsContent value="terms" className="mt-6 bg-card p-8 rounded-lg border shadow-sm">
              <div className="space-y-8 text-muted-foreground">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Terms of Service</h2>
                  <p className="text-sm">
                    Last Updated: March 15, 2025
                  </p>
                  <Separator className="my-4" />
                </div>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger><h3 className="text-xl font-semibold text-foreground">1. Introduction and Acceptance of Terms</h3></AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p>
                          Welcome to AutoYield ("we," "our," or "us"). By accessing or using the AutoYield platform, website, mobile application, or any of our services (collectively, the "Services"), you agree to be bound by these Terms of Service.
                        </p>
                        <p>
                          These Terms of Service ("Terms") constitute a legally binding agreement between you and AutoYield regarding your access to and use of the Services. Please read these Terms carefully. If you do not agree with these Terms, you may not access or use the Services.
                        </p>
                        <p>
                          By accessing or using the Services, you represent that you are at least 18 years old and have the legal capacity to enter into these Terms.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger><h3 className="text-xl font-semibold text-foreground">2. Eligibility and Access</h3></AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p>
                          You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that you meet the eligibility requirements and have the right, authority, and capacity to enter into these Terms.
                        </p>
                        <p>
                          We reserve the right to refuse access to the Services to anyone for any reason at any time. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                        </p>
                        <p>
                          You are responsible for ensuring that your use of the Services complies with all applicable laws, regulations, and rules. We may suspend or terminate your access to the Services at any time without notice if we believe you have violated these Terms.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger><h3 className="text-xl font-semibold text-foreground">3. Account Registration and Security</h3></AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p>
                          You may need to create an account to access certain features of our Services. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                        </p>
                        <p>
                          You are responsible for safeguarding your account credentials. You agree to notify us immediately of any unauthorized access to or use of your account. We cannot and will not be liable for any loss or damage arising from your failure to comply with this section.
                        </p>
                        <p>
                          You may not share your account credentials with any third party. You are fully responsible for all activities that occur through your account, whether or not you authorized such activities.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger><h3 className="text-xl font-semibold text-foreground">4. Intellectual Property Rights</h3></AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p>
                          The Services and all content, features, and functionality thereof, including but not limited to all information, software, text, displays, images, video, audio, and the design, selection, and arrangement thereof (collectively, "Content"), are owned by AutoYield, its licensors, or other providers and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws.
                        </p>
                        <p>
                          These Terms do not grant you any right, title, or interest in or to the Services or Content. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any Content without our prior written consent.
                        </p>
                        <p>
                          Any feedback, comments, or suggestions you may provide regarding the Services is entirely voluntary, and we will be free to use such feedback, comments, or suggestions as we see fit without any obligation to you.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger><h3 className="text-xl font-semibold text-foreground">5. User Conduct and Prohibited Activities</h3></AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p>
                          You agree not to use the Services for any purpose that is unlawful or prohibited by these Terms. You may not use the Services in any manner that could damage, disable, overburden, or impair the Services or interfere with any other party's use of the Services.
                        </p>
                        <p>
                          Prohibited activities include, but are not limited to:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Using the Services for any illegal purpose or in violation of any applicable laws or regulations</li>
                          <li>Attempting to gain unauthorized access to any portion of the Services or any systems or networks connected to the Services</li>
                          <li>Circumventing, disabling, or otherwise interfering with security-related features of the Services</li>
                          <li>Engaging in any automated use of the Services, including scraping or data mining</li>
                          <li>Attempting to impersonate another user or person</li>
                          <li>Using the Services in connection with any effort to compete with us</li>
                          <li>Engaging in any activity that could disable, overburden, or impair the proper working of the Services</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-6">
                    <AccordionTrigger><h3 className="text-xl font-semibold text-foreground">6. DeFi and Cryptocurrency Risk Disclosure</h3></AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p>
                          Using decentralized finance (DeFi) applications involves significant risk. Cryptocurrency prices are volatile and may fluctuate rapidly. Smart contracts may contain bugs or vulnerabilities. You acknowledge and agree that you use our Services at your own risk.
                        </p>
                        <p>
                          By using the Services, you acknowledge and agree to the following risks:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Market Volatility: Cryptocurrency prices can be highly volatile and subject to large fluctuations, which may result in significant loss of value in a short period of time.</li>
                          <li>Smart Contract Risk: Smart contracts may contain bugs, vulnerabilities, or other issues that could lead to loss of funds or other damages.</li>
                          <li>Regulatory Risk: Cryptocurrency and DeFi regulations are evolving and subject to change, which could impact the Services and your ability to access or use them.</li>
                          <li>Liquidity Risk: There may be insufficient liquidity in the market to execute trades or liquidate positions at desired prices.</li>
                          <li>Technical Risk: Technical failures, such as network outages, could affect your ability to access or use the Services.</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-7">
                    <AccordionTrigger><h3 className="text-xl font-semibold text-foreground">7. Disclaimer of Warranties</h3></AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p>
                          THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
                        </p>
                        <p>
                          We do not guarantee that the Services will be uninterrupted, secure, or error-free, that defects will be corrected, or that the Services or the servers that make the Services available are free of viruses or other harmful components.
                        </p>
                        <p>
                          No advice or information, whether oral or written, obtained by you from us or through the Services will create any warranty not expressly stated in these Terms.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-8">
                    <AccordionTrigger><h3 className="text-xl font-semibold text-foreground">8. Limitation of Liability</h3></AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p>
                          TO THE MAXIMUM EXTENT PERMITTED BY LAW, AUTOYIELD SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR RELATED TO YOUR USE OF OUR SERVICES.
                        </p>
                        <p>
                          IN NO EVENT WILL OUR AGGREGATE LIABILITY FOR ANY AND ALL CLAIMS RELATING TO OR ARISING OUT OF YOUR USE OF THE SERVICES EXCEED THE GREATER OF $100 OR THE AMOUNT YOU PAID TO US, IF ANY, IN THE THREE (3) MONTHS PRECEDING THE EVENT GIVING RISE TO THE LIABILITY.
                        </p>
                        <p>
                          The limitations of liability in this section apply to claims based on warranty, contract, tort, strict liability, and any other legal theory, and apply whether or not we were informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-9">
                    <AccordionTrigger><h3 className="text-xl font-semibold text-foreground">9. Indemnification</h3></AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p>
                          You agree to indemnify, defend, and hold harmless AutoYield and its officers, directors, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) that such parties may incur as a result of or arising from your violation of these Terms.
                        </p>
                        <p>
                          We reserve the right to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will cooperate with us in asserting any available defenses.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-10">
                    <AccordionTrigger><h3 className="text-xl font-semibold text-foreground">10. Governing Law and Dispute Resolution</h3></AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p>
                          These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which AutoYield operates, without regard to its conflict of law provisions.
                        </p>
                        <p>
                          Any dispute arising out of or relating to these Terms or the Services shall first be attempted to be resolved through good faith negotiations between the parties. If the dispute cannot be resolved through negotiations, it shall be submitted to binding arbitration in accordance with the rules of the American Arbitration Association.
                        </p>
                        <p>
                          The arbitration shall take place in the jurisdiction in which AutoYield operates, and the language of the arbitration shall be English. The arbitrator's decision shall be final and binding and may be entered as a judgment in any court of competent jurisdiction.
                        </p>
                        <p>
                          YOU AGREE THAT YOU MAY BRING CLAIMS AGAINST AUTOYIELD ONLY IN YOUR INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-11">
                    <AccordionTrigger><h3 className="text-xl font-semibold text-foreground">11. Changes to Terms and Services</h3></AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p>
                          We reserve the right to modify these Terms at any time. We will provide notice of any material changes by updating the "Last Updated" date at the top of these Terms and, in some cases, by providing additional notice (such as adding a statement to our homepage or sending you an email notification).
                        </p>
                        <p>
                          Your continued use of the Services after such modifications will constitute your acknowledgment of the modified Terms and agreement to be bound by them. If you do not agree to the modified Terms, you must stop using the Services.
                        </p>
                        <p>
                          We reserve the right to modify, suspend, or discontinue the Services (or any part thereof) at any time, with or without notice. We will not be liable to you or to any third party for any modification, suspension, or discontinuance of the Services.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-12">
                    <AccordionTrigger><h3 className="text-xl font-semibold text-foreground">12. Contact Information</h3></AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p>
                          If you have any questions about these Terms, please contact us at:
                        </p>
                        <p className="font-medium">
                          <a href="mailto:legal@autoyield.com" className="text-primary hover:underline">legal@autoyield.com</a>
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>
            
            <TabsContent value="privacy" className="mt-6 bg-card p-8 rounded-lg border shadow-sm">
              <div className="space-y-8 text-muted-foreground">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Privacy Policy</h2>
                  <p className="text-sm">
                    Last Updated: March 15, 2025
                  </p>
                  <Separator className="my-4" />
                </div>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger><h3 className="text-xl font-semibold text-foreground">1. Introduction</h3></AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p>
                          This Privacy Policy explains how AutoYield collects, uses, and discloses information about you when you use our Services. By using our Services, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy.
                        </p>
                        <p>
                          We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy applies to all information collected through our Services, as well as any related services, sales, marketing, or events.
                        </p>
                        <p>
                          Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access or use our Services.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger><h3 className="text-xl font-semibold text-foreground">2. Information We Collect</h3></AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p>
                          We may collect information you provide directly to us, information we collect automatically when you use our Services, and information from other sources.
                        </p>
                        <div className="mt-3">
                          <h4 className="font-medium text-foreground">2.1 Information You Provide to Us</h4>
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Account Information: When you create an account, we collect your name, email address, username, password, and any other information you choose to provide.</li>
                            <li>Transaction Information: When you engage in transactions through our Services, we collect information about the transaction, including wallet addresses, transaction amounts, and transaction history.</li>
                            <li>Communications: If you contact us directly, we may receive additional information about you, such as your name, email address, phone number, the contents of the message and any attachments you send us, and any other information you choose to provide.</li>
                          </ul>
                        </div>
                        <div className="mt-3">
                          <h4 className="font-medium text-foreground">2.2 Information We Collect Automatically</h4>
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Device Information: We collect information about the device you use to access our Services, including the hardware model, operating system and version, unique device identifiers, network information, and browser type.</li>
                            <li>Log Information: We collect log information when you use our Services, including access times, pages viewed, IP address, and the page you visited before navigating to our Services.</li>
                            <li>Cookies and Tracking Technologies: We use cookies and similar tracking technologies to track activity on our Services and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.</li>
                            <li>Usage Information: We collect information about your use of our Services, such as the features you use, the actions you take, and the time, frequency, and duration of your activities.</li>
                          </ul>
                        </div>
                        <div className="mt-3">
                          <h4 className="font-medium text-foreground">2.3 Information from Other Sources</h4>
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Blockchain Information: We may collect information from public blockchains, including wallet addresses, transaction history, and contract interactions.</li>
                            <li>Third-Party Services: We may collect information about you from third-party services, such as analytics providers and advertising partners.</li>
                            <li>Public Sources: We may collect information about you from publicly available sources.</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger><h3 className="text-xl font-semibold text-foreground">3. How We Use Your Information</h3></AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p>
                          We use the information we collect to provide, maintain, and improve our Services, to communicate with you, to comply with legal obligations, and for other purposes described in this Privacy Policy.
                        </p>
                        <p>
                          Specifically, we use your information for the following purposes:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>To provide, maintain, and improve our Services, including to process transactions, develop new products and services, and ensure the security of our Services.</li>
                          <li>To communicate with you, including to respond to your inquiries, provide customer support, and send you technical notices, updates, security alerts, and administrative messages.</li>
                          <li>To personalize your experience, including to provide content and features that may be of interest to you and to customize your experience.</li>
                          <li>To measure, analyze, and improve our Services, including to understand and analyze usage patterns, monitor and analyze the effectiveness of our Services, and optimize our Services.</li>
                          <li>To comply with legal obligations, including to comply with legal requirements, to protect our rights, and to prevent fraud and abuse.</li>
                          <li>To perform other functions as described to you at the time of collection or as otherwise authorized by you.</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger><h3 className="text-xl font-semibold text-foreground">4. Sharing of Information</h3></AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p>
                          We may share information with vendors and service providers, in connection with business transfers, for legal reasons, and with your consent.
                        </p>
                        <p>
                          We may share your information in the following situations:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>With service providers, such as hosting providers, email service providers, and analytics providers, who need access to such information to carry out work on our behalf.</li>
                          <li>In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company.</li>
                          <li>If we are required to do so by law or if we believe that such action is necessary to (i) comply with a legal obligation, (ii) protect and defend our rights or property, (iii) act in urgent circumstances to protect the personal safety of users of our Services or the public, or (iv) protect against legal liability.</li>
                          <li>With your consent or at your direction.</li>
                        </ul>
                        <p>
                          We may also share aggregated or de-identified information, which cannot reasonably be used to identify you, with third parties for any purpose, including for marketing and advertising purposes.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger><h3 className="text-xl font-semibold text-foreground">5. Data Security</h3></AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p>
                          We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
                        </p>
                        <p>
                          The security measures we use include:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Encryption of sensitive data in transit and at rest</li>
                          <li>Regular security assessments and audits</li>
                          <li>Access controls and authentication procedures</li>
                          <li>Regular monitoring of systems and services for unauthorized access</li>
                          <li>Employee training on data security and privacy best practices</li>
                        </ul>
                        <p>
                          However, no security system is impenetrable, and we cannot guarantee the security of our systems 100%. In the event that any information under our control is compromised as a result of a breach of security, we will take reasonable steps to investigate the situation and, where appropriate, notify those individuals whose information may have been compromised and take other steps in accordance with applicable laws and regulations.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-6">
                    <AccordionTrigger><h3 className="text-xl font-semibold text-foreground">6. Your Rights and Choices</h3></AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p>
                          Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your personal information.
                        </p>
                        <p>
                          These rights may include:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Access: You may have the right to access the personal information we have about you.</li>
                          <li>Correction: You may have the right to correct inaccurate or incomplete personal information we have about you.</li>
                          <li>Deletion: You may have the right to request that we delete your personal information.</li>
                          <li>Portability: You may have the right to receive a copy of your personal information in a structured, machine-readable format.</li>
                          <li>Restriction: You may have the right to request that we restrict the processing of your personal information.</li>
                          <li>Objection: You may have the right to object to our processing of your personal information.</li>
                          <li>Automated Decision-Making: You may have the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning you or similarly significantly affects you.</li>
                        </ul>
                        <p>
                          To exercise any of these rights, please contact us using the contact information provided below. Please note that these rights may be subject to limitations and exceptions under applicable law.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-7">
                    <AccordionTrigger><h3 className="text-xl font-semibold text-foreground">7. International Data Transfers</h3></AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p>
                          We are headquartered in the United States, and we may transfer, store, and process your information in countries other than your country of residence, including the United States and other countries where we or our service providers operate.
                        </p>
                        <p>
                          If we transfer your personal information to countries outside of your country of residence, we will take appropriate measures to ensure that your personal information receives an adequate level of protection in the countries to which it is transferred.
                        </p>
                        <p>
                          By using our Services, you consent to the transfer of your information to countries outside of your country of residence, including the United States, which may have different data protection rules than those of your country.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-8">
                    <AccordionTrigger><h3 className="text-xl font-semibold text-foreground">8. Changes to This Privacy Policy</h3></AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p>
                          We may change this Privacy Policy from time to time. We will notify you of any material changes by updating the "Last Updated" date at the top of this Privacy Policy.
                        </p>
                        <p>
                          We encourage you to review this Privacy Policy periodically to stay informed about our information practices and the choices available to you.
                        </p>
                        <p>
                          Your continued use of our Services after we post any modifications to the Privacy Policy will constitute your acknowledgment of the modifications and your consent to abide by and be bound by the modified Privacy Policy.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-9">
                    <AccordionTrigger><h3 className="text-xl font-semibold text-foreground">9. Contact Us</h3></AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p>
                          If you have any questions about this Privacy Policy, please contact us at:
                        </p>
                        <p className="font-medium">
                          <a href="mailto:privacy@autoyield.com" className="text-primary hover:underline">privacy@autoyield.com</a>
                        </p>
                        <p>
                          We will respond to your request within a reasonable timeframe.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>
            
            <TabsContent value="risk" className="mt-6 bg-card p-8 rounded-lg border shadow-sm">
              <div className="space-y-8 text-muted-foreground">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Risk Disclosures</h2>
                  <p className="text-sm">
                    Last Updated: March 15, 2025
                  </p>
                  <Separator className="my-4" />
                </div>
                
                <div className="space-y-6">
                  <div className="bg-muted p-4 rounded-md border border-border">
                    <p className="font-semibold text-foreground">IMPORTANT NOTICE:</p>
                    <p>Using AutoYield's services involves significant risks. Please read this document carefully to understand the risks associated with DeFi and cryptocurrency activities.</p>
                  </div>
                  
                  <section>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Market Risk</h3>
                    <div className="space-y-2">
                      <p>
                        <span className="font-medium text-foreground">Volatility:</span> Cryptocurrency markets are highly volatile. Digital asset prices can experience rapid and significant fluctuations in short periods, leading to substantial gains or losses.
                      </p>
                      <p>
                        <span className="font-medium text-foreground">Liquidity Risk:</span> Some markets may have limited liquidity, which could impact your ability to enter or exit positions at desired prices, particularly during market stress.
                      </p>
                      <p>
                        <span className="font-medium text-foreground">Market Manipulation:</span> Cryptocurrency markets may be subject to manipulation by large holders ("whales") or coordinated groups, which could adversely affect prices.
                      </p>
                    </div>
                  </section>
                  
                  <section>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Technical Risks</h3>
                    <div className="space-y-2">
                      <p>
                        <span className="font-medium text-foreground">Smart Contract Vulnerabilities:</span> AutoYield interacts with various smart contracts that may contain bugs, vulnerabilities, or other issues despite thorough auditing. These vulnerabilities could lead to loss of funds or other negative consequences.
                      </p>
                      <p>
                        <span className="font-medium text-foreground">Oracle Failures:</span> Price oracles that supply data to the protocols may experience failures, delays, or manipulation, leading to incorrect execution of transactions.
                      </p>
                      <p>
                        <span className="font-medium text-foreground">Network Congestion:</span> Blockchain networks may experience congestion, resulting in delayed transactions or higher transaction fees, which could impact the timely execution of your strategies.
                      </p>
                      <p>
                        <span className="font-medium text-foreground">Wallet Security:</span> Your digital assets' security depends on maintaining the confidentiality of your private keys. Loss or theft of private keys typically results in permanent loss of assets.
                      </p>
                    </div>
                  </section>
                  
                  <section>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Liquidity Provider Specific Risks</h3>
                    <div className="space-y-2">
                      <p>
                        <span className="font-medium text-foreground">Impermanent Loss:</span> When providing liquidity to decentralized exchanges, you may experience "impermanent loss" due to price divergence between paired assets. This loss becomes permanent when you withdraw your liquidity.
                      </p>
                      <p>
                        <span className="font-medium text-foreground">Fee Structure Changes:</span> Protocols may change their fee structures, which could impact your returns as a liquidity provider.
                      </p>
                      <p>
                        <span className="font-medium text-foreground">Capital Inefficiency:</span> Providing liquidity across wide price ranges can lead to capital inefficiency, where a significant portion of your deposited assets may not generate fees.
                      </p>
                    </div>
                  </section>
                  
                  <section>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Regulatory Risks</h3>
                    <div className="space-y-2">
                      <p>
                        <span className="font-medium text-foreground">Regulatory Changes:</span> The regulatory environment for cryptocurrencies and DeFi is evolving and varies by jurisdiction. New regulations could impact the availability or functionality of our Services.
                      </p>
                      <p>
                        <span className="font-medium text-foreground">Tax Implications:</span> Cryptocurrency transactions may have tax implications. You are responsible for determining and paying any applicable taxes on your transactions.
                      </p>
                      <p>
                        <span className="font-medium text-foreground">Jurisdictional Restrictions:</span> Some features may not be available in certain jurisdictions due to regulatory restrictions.
                      </p>
                    </div>
                  </section>
                  
                  <section>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Platform Risks</h3>
                    <div className="space-y-2">
                      <p>
                        <span className="font-medium text-foreground">Algorithm Risk:</span> The automated strategies employed by AutoYield may not perform as expected in all market conditions, potentially leading to suboptimal returns or losses.
                      </p>
                      <p>
                        <span className="font-medium text-foreground">Operational Risk:</span> The platform may experience downtime, delays, or other operational issues that could impact your ability to use our Services.
                      </p>
                      <p>
                        <span className="font-medium text-foreground">Counterparty Risk:</span> AutoYield interacts with various DeFi protocols. If these protocols experience issues or failures, it could impact our Services.
                      </p>
                    </div>
                  </section>
                  
                  <section>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Risk Mitigation</h3>
                    <div className="space-y-2">
                      <p>
                        While we cannot eliminate risks, we take various measures to mitigate them:
                      </p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Regular security audits of smart contracts</li>
                        <li>Diversification of strategies to reduce exposure to any single risk factor</li>
                        <li>Continuous monitoring of protocol performance and market conditions</li>
                        <li>Implementation of risk management parameters within our algorithms</li>
                        <li>Transparency about the risks involved in using our Services</li>
                      </ul>
                    </div>
                  </section>
                  
                  <div className="bg-muted p-4 rounded-md border border-border mt-6">
                    <p className="font-semibold text-foreground mb-2">DISCLAIMER:</p>
                    <p>This risk disclosure does not purport to disclose all risks associated with using AutoYield's services. You should carefully consider whether trading or holding digital assets is suitable for you in light of your financial condition. AutoYield is not responsible for any losses incurred as a result of using our Services.</p>
                    <p className="mt-2">By using AutoYield, you acknowledge that you have read and understood these risk disclosures and accept the risks associated with DeFi and cryptocurrency activities.</p>
                  </div>
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