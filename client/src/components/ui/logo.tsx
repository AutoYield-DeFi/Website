import { ArrowUpRight, BarChart3, Zap } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "default" | "footer";
  className?: string;
  showBeta?: boolean;
}

export function Logo({ variant = "default", className = "", showBeta = true }: LogoProps) {
  const handleLinkClick = () => {
    if (variant === "footer") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Link href="/" onClick={handleLinkClick}>
      <div className={cn("flex items-center gap-2 cursor-pointer", className)}>
        {/* Modern logo mark with automation symbolism */}
        <div className="relative flex-shrink-0">
          <div className="flex items-center justify-center bg-primary/10 rounded-lg p-1.5 border border-primary/20">
            <Zap 
              className={cn(
                "h-4 w-4 text-primary",
                variant === "default" ? "animate-pulse" : ""
              )} 
              style={{ animationDuration: '2.5s' }} 
            />
          </div>
        </div>
        
        {/* Logo text with improved typography */}
        <div className="flex items-center">
          <div className={cn(
            "font-bold tracking-tight",
            variant === "default" ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
          )}>
            <span className="text-primary font-extrabold">Auto</span>
            <span className="text-foreground">Yield</span>
            <span className="text-primary ml-0.5 font-extrabold">.</span>
          </div>
          
          {/* Dynamic indicator for the default variant */}
          {variant === "default" && (
            <div className="flex items-center ml-1">
              <BarChart3 className="h-3.5 w-3.5 text-primary/70" />
              <ArrowUpRight className="h-3 w-3 -ml-0.5 text-primary" />
            </div>
          )}
        </div>
        
        {/* Redesigned Beta tag */}
        {variant === "default" && showBeta && (
          <span className="text-2xs font-semibold px-1.5 py-0.5 rounded-md bg-primary/15 text-primary border border-primary/25 self-start uppercase tracking-wider">
            Beta
          </span>
        )}
      </div>
    </Link>
  );
}