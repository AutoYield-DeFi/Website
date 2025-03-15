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
  ];

  return (
    <footer className="bg-gradient-to-b from-background/80 to-muted/30 mt-16 border-t">
      <div className="container mx-auto px-4 py-8 md:py-12">
        
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