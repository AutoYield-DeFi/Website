import { useState } from "react";
import { Link } from "wouter";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { FaTwitter, FaDiscord, FaTelegram, FaGithub } from "react-icons/fa";
import { ArrowRight, CheckCircle, Zap } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");
      
      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  // Key benefits
  const benefits = [
    "Automated 24/7 liquidity optimization",
    "Impermanent loss protection strategies",
    "Advanced yield analytics dashboard",
    "Multi-chain DeFi protocol support"
  ];

  // Combined navigation and legal links
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/features", label: "Features" },
    { path: "/docs", label: "Documentation" },
    { path: "/defi101", label: "DeFi 101" },
    { path: "/glossary", label: "Glossary" },
    { path: "/blog", label: "Blog" },
  ];
  
  const legalLinks = [
    { path: "/about", label: "About Us" },
    { path: "/legal", label: "Terms of Service" },
    { path: "/legal", label: "Privacy Policy" },
  ];

  return (
    <footer className="bg-gradient-to-b from-background/80 to-muted/30 mt-16 border-t">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Sign up section */}
        <div className="relative mb-12 overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 rounded-xl"></div>
          <div className="absolute right-0 bottom-0 opacity-10 w-64 h-64">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="fill-primary">
              <path d="M50,5 Q95,5 95,50 Q95,95 50,95 Q5,95 5,50 Q5,5 50,5 Z" />
            </svg>
          </div>
          
          <div className="relative p-6 md:p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-4">Stay ahead in DeFi</h3>
                <p className="text-muted-foreground mb-6">
                  Join our newsletter for the latest strategies, market insights, and AutoYield platform updates.
                </p>
                
                <div className="space-y-3">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                {isSubmitted ? (
                  <div className="bg-primary/10 rounded-lg p-6 text-center">
                    <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="font-medium text-lg mb-2">Thank you for subscribing!</h4>
                    <p className="text-muted-foreground text-sm">
                      You'll start receiving AutoYield updates and DeFi strategies in your inbox.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email address
                      </label>
                      <div className="flex gap-2">
                        <Input
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          placeholder="you@example.com"
                          className="flex-1"
                          required
                        />
                        <Button type="submit" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <div className="h-4 w-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
                          ) : (
                            <>
                              Subscribe
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Logo variant="footer" />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Automated liquidity management that maximizes your DeFi yields 24/7. Set once, earn continuously.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Learn</h3>
            <div className="space-y-2">
              {navLinks.map((item) => (
                <Link key={item.path} href={item.path} onClick={handleLinkClick}>
                  <div className="text-sm hover:text-primary transition-colors cursor-pointer py-1">
                    {item.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Company</h3>
            <div className="space-y-2">
              {legalLinks.map((item, i) => (
                <Link key={i} href={item.path} onClick={handleLinkClick}>
                  <div className="text-sm hover:text-primary transition-colors cursor-pointer py-1">
                    {item.label}
                  </div>
                </Link>
              ))}
              <a href="mailto:support@autoyield.io" className="block text-sm hover:text-primary transition-colors cursor-pointer py-1">
                Contact Support
              </a>
            </div>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Community</h3>
            <div className="grid grid-cols-2 gap-3">
              <a 
                href={SOCIAL_LINKS.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <div className={cn(
                  "bg-background border border-border p-2 rounded-full",
                  "hover:bg-primary/10 hover:border-primary/20 transition-colors",
                )}>
                  <FaTwitter className="h-3.5 w-3.5" />
                </div>
                <span>Twitter</span>
              </a>
              <a 
                href={SOCIAL_LINKS.discord} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <div className={cn(
                  "bg-background border border-border p-2 rounded-full",
                  "hover:bg-primary/10 hover:border-primary/20 transition-colors",
                )}>
                  <FaDiscord className="h-3.5 w-3.5" />
                </div>
                <span>Discord</span>
              </a>
              <a 
                href={SOCIAL_LINKS.telegram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <div className={cn(
                  "bg-background border border-border p-2 rounded-full",
                  "hover:bg-primary/10 hover:border-primary/20 transition-colors",
                )}>
                  <FaTelegram className="h-3.5 w-3.5" />
                </div>
                <span>Telegram</span>
              </a>
              <a 
                href="https://github.com/autoyield-defi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <div className={cn(
                  "bg-background border border-border p-2 rounded-full",
                  "hover:bg-primary/10 hover:border-primary/20 transition-colors",
                )}>
                  <FaGithub className="h-3.5 w-3.5" />
                </div>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-muted flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 order-2 md:order-1">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">All Systems Operational</span>
          </div>

          <p className="text-sm text-center md:text-right order-1 md:order-2 text-muted-foreground">
            © {new Date().getFullYear()} AutoYield. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}