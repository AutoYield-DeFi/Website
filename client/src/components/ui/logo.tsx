import { Activity, TrendingUp, Bot } from "lucide-react";
import { Link } from "wouter";

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
      <div className={`flex items-center space-x-2 cursor-pointer ${className}`}>
        <div className="relative w-8 h-8 flex-shrink-0">
          {/* Custom logo icon - stylized "AY" with automated/yield symbolism */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1/2 flex items-center justify-center">
              <TrendingUp className="h-3 w-3 text-white/90 transform translate-y-0.5" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 flex items-center justify-center">
              <Activity className="h-3 w-3 text-white/90 transform -translate-y-0.5" />
            </div>
            <Bot className="h-4 w-4 text-white opacity-30 absolute" />
            <div className="text-white font-bold text-xs flex items-center justify-center">
              <span className="mr-px">A</span>
              <span>Y</span>
            </div>
          </div>
          {/* Animated dot */}
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse" />
        </div>
        
        <div className="flex flex-col">
          <div className="text-lg sm:text-xl font-bold leading-none">
            <span className="bg-gradient-to-r from-purple-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
              Auto
            </span>
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              Yield
            </span>
          </div>
          {variant === "default" && showBeta && (
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-500 border border-purple-500/20 self-start mt-0.5">
              Beta
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}