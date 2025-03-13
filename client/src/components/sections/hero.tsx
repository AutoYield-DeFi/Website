import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Coins, Bot, Play } from "lucide-react";
import { ResponsiveImage } from "@/components/ui/responsive-image";

// Memoize the Hero component to prevent unnecessary re-renders
const Hero = React.memo(() => {
  // Respect user's reduced motion preferences
  const shouldReduceMotion = useReducedMotion();

  const animationProps = shouldReduceMotion ? {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 }
  } : {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center">
      {/* Background Pattern - Optimized for performance */}
      <div 
        className="absolute inset-0 -z-10 opacity-20"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#9333ea,#06b6d4)]" />
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239333ea' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} 
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge - Optimized animation for mobile */}
          <motion.div 
            className="flex justify-center mb-8"
            {...animationProps}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Bot className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Powered by AI and Built on Solana</span>
            </div>
          </motion.div>

          {/* Main Heading - Mobile optimized typography */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent mb-6"
            {...animationProps}
          >
            Earn More Fees with Algorithmic Liquidity Management.
          </motion.h1>

          {/* Description - Adjusted for readability */}
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto"
            {...animationProps}
            transition={{ ...animationProps.transition, delay: 0.2 }}
          >
            Effortlessly maximize LP fees with automated rebalancing, smart position adjustments, and real-time yield optimization—no manual management required.
          </motion.p>

          {/* CTA Buttons - Mobile-friendly layout */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            {...animationProps}
            transition={{ ...animationProps.transition, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 w-full sm:w-auto"
            >
              Start Earning Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto"
            >
              Watch How It Works <Play className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          {/* Feature Cards - Responsive grid with optimized animations */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
          >
            {[
              {
                icon: Bot,
                title: "AI-Driven Management",
                description: "Our algorithms monitor markets 24/7 to optimize your positions"
              },
              {
                icon: Shield,
                title: "Risk Protection",
                description: "Built-in safeguards help protect against market volatility"
              },
              {
                icon: Coins,
                title: "Earn Trading Fees",
                description: "Generate passive income from trading fees with potential returns of 20-500% APR"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="flex flex-col items-center p-6 rounded-lg bg-card border hover:border-primary/50 transition-colors"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.3 }}
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
              >
                <feature.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
});

Hero.displayName = 'Hero';

export default Hero;