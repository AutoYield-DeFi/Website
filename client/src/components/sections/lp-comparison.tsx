import { useState, useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowBigRight, Bot, Cpu, BarChart3, Zap, Clock, RefreshCw } from "lucide-react";

export default function LPComparison() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const controls = useAnimationControls();
  const [manualLoopActive, setManualLoopActive] = useState(true);
  const [autoLoopActive, setAutoLoopActive] = useState(true);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      setManualLoopActive(true);
      setAutoLoopActive(true);
    } else {
      controls.start("hidden");
      // Pause animations when not in view to improve performance
      setManualLoopActive(false);
      setAutoLoopActive(false);
    }
  }, [controls, inView]);

  return (
    <section ref={ref} className="py-12 md:py-20 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Automated vs. Manual LP Management</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            See why AutoYield's intelligent automation outperforms traditional liquidity management
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 xl:gap-16 max-w-5xl mx-auto">
          {/* Traditional LP Management */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
            }}
            className="bg-background p-4 md:p-6 rounded-lg border shadow-sm relative"
          >
            <div className="absolute -top-3 left-6 bg-red-500 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
              Traditional Method
            </div>
            <div className="h-[220px] md:h-64 flex flex-col relative overflow-hidden">
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <Clock className="h-5 w-5 md:h-6 md:w-6 text-red-500" />
                <h3 className="text-lg md:text-xl font-semibold">Manual LP Management</h3>
              </div>
              
              <div className="relative flex-1 border border-dashed rounded-md p-3 md:p-4 bg-muted/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <ManualLPLoop active={manualLoopActive} />
                </div>
              </div>
              
              <div className="mt-4 md:mt-6 space-y-1.5 md:space-y-2 text-xs md:text-sm">
                <div className="flex items-start gap-2 text-muted-foreground">
                  <div className="h-4 w-4 rounded-full bg-red-500 flex-shrink-0 mt-0.5"></div>
                  <span>Requires constant monitoring and manual adjustments</span>
                </div>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <div className="h-4 w-4 rounded-full bg-red-500 flex-shrink-0 mt-0.5"></div>
                  <span>High potential for impermanent loss</span>
                </div>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <div className="h-4 w-4 rounded-full bg-red-500 flex-shrink-0 mt-0.5"></div>
                  <span>Cannot react to market changes in real-time</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AutoYield LP Management */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } }
            }}
            className="bg-background p-4 md:p-6 rounded-lg border shadow-sm relative"
          >
            <div className="absolute -top-3 left-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
              AutoYield Method
            </div>
            <div className="h-[220px] md:h-64 flex flex-col relative overflow-hidden">
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <Bot className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                <h3 className="text-lg md:text-xl font-semibold">AI-Powered LP Management</h3>
              </div>
              
              <div className="relative flex-1 border border-dashed rounded-md p-3 md:p-4 bg-muted/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <AutoYieldLPLoop active={autoLoopActive} />
                </div>
              </div>
              
              <div className="mt-4 md:mt-6 space-y-1.5 md:space-y-2 text-xs md:text-sm">
                <div className="flex items-start gap-2 text-muted-foreground">
                  <div className="h-4 w-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex-shrink-0 mt-0.5"></div>
                  <span>Continuous optimization with AI-powered algorithms</span>
                </div>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <div className="h-4 w-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex-shrink-0 mt-0.5"></div>
                  <span>Dynamic position rebalancing minimizes losses</span>
                </div>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <div className="h-4 w-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex-shrink-0 mt-0.5"></div>
                  <span>24/7 automated execution at optimal times</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Results Comparison */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }
          }}
          className="mt-8 md:mt-12 max-w-4xl mx-auto bg-gradient-to-br from-background to-muted p-4 md:p-6 rounded-lg border shadow-sm"
        >
          <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-center">Performance Comparison</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4 md:h-5 md:w-5 text-red-500" />
                <span className="font-medium text-sm md:text-base">Manual LP Management</span>
              </div>
              <div className="bg-muted h-6 md:h-8 rounded-full overflow-hidden">
                <motion.div 
                  className="bg-red-500 h-full rounded-full flex items-center justify-end pr-2"
                  initial={{ width: "0%" }}
                  animate={inView ? { width: "45%" } : { width: "0%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <span className="text-white text-xs font-medium">~45% Efficiency</span>
                </motion.div>
              </div>
              <p className="text-xs text-muted-foreground">Subject to human error and limitations</p>
            </div>
            
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                <span className="font-medium text-sm md:text-base">AutoYield Management</span>
              </div>
              <div className="bg-muted h-6 md:h-8 rounded-full overflow-hidden">
                <motion.div 
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 h-full rounded-full flex items-center justify-end pr-2"
                  initial={{ width: "0%" }}
                  animate={inView ? { width: "85%" } : { width: "0%" }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                >
                  <span className="text-white text-xs font-medium">~85% Efficiency</span>
                </motion.div>
              </div>
              <p className="text-xs text-muted-foreground">Continuously optimizing based on market data</p>
            </div>
          </div>
          
          <div className="mt-6 md:mt-8 p-3 md:p-4 bg-background rounded-lg border">
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 text-center md:text-left">
              <Cpu className="h-8 w-8 md:h-10 md:w-10 text-primary" />
              <div>
                <p className="font-medium text-sm md:text-base">AutoYield's AI algorithms analyze millions of data points to make decisions that human traders can't process.</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">Resulting in higher yields, lower risk, and a truly passive investment experience.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Visual representation of manual LP management process
function ManualLPLoop({ active }: { active: boolean }) {
  const [step, setStep] = useState(0);
  const steps = [
    { label: "Monitor Market", color: "bg-yellow-500" },
    { label: "Calculate Ranges", color: "bg-orange-500" },
    { label: "Manual Adjustment", color: "bg-red-500" },
    { label: "Check Results", color: "bg-red-700" },
  ];

  // For mobile optimization
  const isMobileView = window.innerWidth < 768;
  
  useEffect(() => {
    // Optimize animation cycle speed based on active state
    if (!active) return;
    
    const interval = setInterval(() => {
      setStep((prevStep) => (prevStep + 1) % steps.length);
    }, isMobileView ? 1800 : 2000); // Slightly faster on mobile
    
    return () => clearInterval(interval);
  }, [active, steps.length, isMobileView]);

  return (
    <div className="relative w-full max-w-[170px] md:max-w-xs mx-auto">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 md:w-40 h-32 md:h-40 rounded-full border-2 border-dashed border-muted-foreground opacity-20"></div>
      
      {steps.map((s, i) => (
        <motion.div
          key={i}
          className={`absolute flex items-center justify-center ${i === step ? "opacity-100" : "opacity-40"} transition-opacity duration-300`}
          style={{
            top: i === 0 ? 0 : i === 1 ? "50%" : i === 2 ? "100%" : "50%",
            left: i === 0 ? "50%" : i === 1 ? "100%" : i === 2 ? "50%" : 0,
            transform: i === 0 
              ? "translate(-50%, 0)" 
              : i === 1 
                ? "translate(-50%, -50%)" 
                : i === 2 
                  ? "translate(-50%, -100%)" 
                  : "translate(0, -50%)"
          }}
        >
          <div 
            className={`p-1.5 md:p-2 rounded-lg ${s.color} text-white text-[10px] md:text-xs font-medium shadow-md whitespace-nowrap`}
            style={{ 
              // Ensures smooth animation and prevents layout shifts
              minWidth: isMobileView ? "80px" : "110px",
              textAlign: "center"
            }}
          >
            {s.label}
          </div>
        </motion.div>
      ))}
      
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 md:w-4 h-3 md:h-4 rounded-full bg-red-500"
        animate={{
          x: [0, 40, 0, -40, 0],
          y: [-40, 0, 40, 0, -40],
          scale: step === 2 ? [1, 1.3, 1] : 1,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      
      <RefreshCw className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6 md:h-8 w-6 md:w-8 text-red-500/20" />
    </div>
  );
}

// Visual representation of AutoYield's automated LP management
function AutoYieldLPLoop({ active }: { active: boolean }) {
  const nodeRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [pulseNode, setPulseNode] = useState<number | null>(null);
  
  // For mobile optimization
  const isMobileView = window.innerWidth < 768;
  
  useEffect(() => {
    if (!active) return;
    
    let currentNode = 0;
    const interval = setInterval(() => {
      setPulseNode(currentNode);
      currentNode = (currentNode + 1) % 5;
    }, isMobileView ? 900 : 1000); // Slightly faster for mobile to keep engagement
    
    return () => clearInterval(interval);
  }, [active, isMobileView]);

  // Define nodes in the AI network - optimize positioning for mobile view
  const nodes = isMobileView ? [
    { x: "50%", y: "18%", label: "Market Data" },
    { x: "78%", y: "38%", label: "AI Analysis" },
    { x: "62%", y: "75%", label: "Strategy" },
    { x: "28%", y: "78%", label: "Position" },
    { x: "18%", y: "35%", label: "Rebalance" }
  ] : [
    { x: "50%", y: "20%", label: "Market Data" },
    { x: "80%", y: "40%", label: "AI Analysis" },
    { x: "65%", y: "75%", label: "Strategy" },
    { x: "30%", y: "80%", label: "Position" },
    { x: "20%", y: "35%", label: "Rebalance" }
  ];

  return (
    <div className="relative w-full h-full">
      {/* Background circle - smaller on mobile */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 md:w-40 h-32 md:h-40 rounded-full border-2 border-primary/20 animate-pulse"></div>
      
      {/* Center node - smaller on mobile */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div 
          className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Bot className="h-4 w-4 md:h-5 md:w-5 text-white" />
        </motion.div>
      </div>
      
      {/* Network nodes - optimized for mobile */}
      {nodes.map((node, i) => (
        <div 
          key={i}
          ref={el => nodeRefs.current[i] = el}
          className="absolute"
          style={{ 
            left: node.x, 
            top: node.y, 
            transform: "translate(-50%, -50%)" 
          }}
        >
          <motion.div 
            className={`p-1 md:p-1.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md flex items-center justify-center
              ${pulseNode === i ? "ring-1 md:ring-2 ring-offset-1 md:ring-offset-2 ring-primary" : ""}`}
            animate={pulseNode === i ? { scale: [1, 1.15, 1] } : {}}
            transition={{ duration: 0.5 }}
            style={{
              // Smaller on mobile with consistent size
              minWidth: isMobileView ? "56px" : "auto",
              maxWidth: isMobileView ? "56px" : "auto",
            }}
          >
            <div className="text-[10px] md:text-xs text-white font-medium whitespace-nowrap text-center">
              {node.label}
            </div>
          </motion.div>
        </div>
      ))}
      
      {/* Connection lines with better mobile optimization */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        style={{ zIndex: -1 }}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Create lines from center to each node - thinner on mobile */}
        {nodes.map((_, i) => {
          const nextIndex = (i + 1) % nodes.length;
          return (
            <motion.path
              key={`line-${i}`}
              d={`M 50% 50% L ${nodes[i].x} ${nodes[i].y}`}
              stroke="url(#gradient)"
              strokeWidth={isMobileView ? "1" : "1.5"}
              fill="none"
              strokeDasharray={isMobileView ? "3 3" : "4 4"}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, repeat: Infinity, repeatType: "loop" }}
            />
          );
        })}
        
        {/* Connect nodes in a circle - optimized for mobile */}
        {nodes.map((_, i) => {
          const nextIndex = (i + 1) % nodes.length;
          return (
            <motion.path
              key={`circle-${i}`}
              d={`M ${nodes[i].x} ${nodes[i].y} L ${nodes[nextIndex].x} ${nodes[nextIndex].y}`}
              stroke="url(#gradient)"
              strokeWidth={isMobileView ? "0.8" : "1"}
              fill="none"
              strokeDasharray={isMobileView ? "2 2" : "3 3"}
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: 1,
                strokeWidth: pulseNode === i || pulseNode === nextIndex 
                  ? (isMobileView ? "1.5" : "2") 
                  : (isMobileView ? "0.8" : "1")
              }}
              transition={{ 
                pathLength: { duration: 1.8, repeat: Infinity, repeatType: "loop" },
                strokeWidth: { duration: 0.3 }
              }}
            />
          );
        })}
        
        {/* Define gradient for stroke */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" /> {/* purple-500 */}
            <stop offset="100%" stopColor="#06b6d4" /> {/* cyan-500 */}
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}