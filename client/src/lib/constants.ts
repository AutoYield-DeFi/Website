import { Bot, Zap, LineChart, Shield, Coins, Clock } from "lucide-react";

export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/autoyield",
  discord: "https://discord.gg/autoyield",
  telegram: "https://t.me/autoyield",
  github: "https://github.com/autoyield"
};

export const MENU_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Features", path: "/features" },
  { label: "Documentation", path: "/docs" },
  { label: "About", path: "/about" }
];

export const FOOTER_LINKS = [
  { label: "Home", path: "/" },
  { label: "Features", path: "/features" },
  { label: "Documentation", path: "/docs" },
  { label: "About", path: "/about" },
  { label: "Glossary", path: "/glossary" },
  { label: "Blog", path: "/blog" }
];

export const TEAM_MEMBERS = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    bio: "DeFi veteran with 10+ years in algorithmic trading",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex"
  },
  {
    name: "Sarah Kim",
    role: "Head of Engineering",
    bio: "Former lead developer at major DEX platforms",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah"
  },
  {
    name: "Michael Singh",
    role: "Chief Research Officer",
    bio: "PhD in Financial Mathematics, AI/ML expert",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael"
  }
];

export const BLOG_POSTS = [
  {
    slug: "maximizing-lp-returns-with-algorithmic-management",
    title: "Maximizing LP Returns with Algorithmic Position Management",
    excerpt: "Deep dive into how algorithmic liquidity management can significantly improve your LP returns while reducing risks and manual oversight.",
    date: "2024-03-13",
    readTime: "8 min read",
    tags: ["DeFi", "Liquidity Management", "Automation", "Trading"],
    icon: Bot,
    content: `
      <h2>Understanding Algorithmic Liquidity Management</h2>
      <p>In the rapidly evolving DeFi landscape, successful liquidity provision requires more than just depositing tokens and hoping for the best. Modern LP strategies leverage algorithmic management to optimize positions in real-time, maximizing returns while minimizing risks.</p>

      <h3>The Challenge of Manual LP Management</h3>
      <p>Traditional liquidity provision faces several key challenges:</p>
      <ul>
        <li>Constant market monitoring requirement</li>
        <li>Complex rebalancing decisions</li>
        <li>Impermanent loss risk</li>
        <li>Inefficient capital utilization</li>
        <li>Missed opportunities during market movements</li>
      </ul>

      Understanding Algorithmic Liquidity Management

      In the rapidly evolving DeFi landscape, successful liquidity provision requires more than just depositing tokens and hoping for the best. Modern LP strategies leverage algorithmic management to optimize positions in real-time, maximizing returns while minimizing risks.

      The Challenge of Manual LP Management

      Traditional liquidity provision faces several key challenges:
      • Constant market monitoring requirement
      • Complex rebalancing decisions
      • Impermanent loss risk
      • Inefficient capital utilization
      • Missed opportunities during market movements

      How Algorithmic Management Solves These Challenges

      Automated systems bring several advantages to liquidity provision:
      • 24/7 position monitoring and adjustment
      • Data-driven rebalancing decisions
      • Proactive impermanent loss mitigation
      • Optimal range targeting
      • Quick response to market opportunities

      Key Components of Algorithmic LP Management

      1. Real-time Market Analysis
      Algorithmic systems continuously analyze market conditions, including:
      • Price trends and volatility patterns
      • Trading volume analysis
      • Fee generation rates
      • Pool depth and concentration

      2. Dynamic Range Optimization
      One of the most powerful features of algorithmic management is the ability to dynamically adjust liquidity ranges based on market conditions. This ensures your capital is always deployed where it's most effective.

      3. Risk Management Protocols
      Advanced systems incorporate multiple layers of risk management:
      • Impermanent loss prediction and mitigation
      • Volatility-based position sizing
      • Automated stop-loss mechanisms
      • Portfolio rebalancing triggers

      Implementing Algorithmic LP Strategies

      When implementing algorithmic LP management, consider these key factors:

      1. Parameter Selection
      • Range width optimization
      • Rebalancing frequency
      • Fee tier selection
      • Position size management

      2. Performance Monitoring
      Track these key metrics to evaluate your strategy:
      • Fee APR
      • Capital efficiency
      • Impermanent loss ratio
      • Range utilization

      Conclusion

      Algorithmic liquidity management represents the future of DeFi yield generation. By leveraging automated systems, LPs can achieve superior returns while minimizing risks and reducing the time investment required for active management.
    `
  },
  {
    slug: "understanding-concentrated-liquidity-optimization",
    title: "Understanding Concentrated Liquidity: Advanced Optimization Techniques",
    excerpt: "Learn how to optimize your concentrated liquidity positions for maximum returns, including advanced range selection and rebalancing strategies.",
    date: "2024-03-12",
    readTime: "10 min read",
    tags: ["DeFi", "Concentrated Liquidity", "Strategy", "Optimization"],
    icon: LineChart,
    content: `
      <h2>The Evolution of Liquidity Provision</h2>
      <p>Concentrated liquidity represents a paradigm shift in how we think about market making and liquidity provision. Unlike traditional AMMs that spread liquidity across an infinite price range, concentrated liquidity allows providers to focus their capital where it matters most.</p>

      The Evolution of Liquidity Provision

      Concentrated liquidity represents a paradigm shift in how we think about market making and liquidity provision. Unlike traditional AMMs that spread liquidity across an infinite price range, concentrated liquidity allows providers to focus their capital where it matters most.

      Traditional vs. Concentrated Liquidity

      Key differences between traditional and concentrated liquidity:
      • Capital efficiency: 2-20x improvement
      • Fee generation: Significantly higher per unit of capital
      • Position management: More active but more rewarding
      • Risk profile: Different impermanent loss characteristics

      Advanced Range Selection Strategies

      1. Volatility-Based Range Setting
      Understanding how to set ranges based on asset volatility:
      • Historical volatility analysis
      • Standard deviation multipliers
      • Support and resistance levels
      • Volume profile consideration

      2. Market Microstructure Analysis
      Key factors to consider in range selection:
      • Trading volume distribution
      • Price impact analysis
      • Order book depth
      • Fee tier optimization

      Position Management Techniques

      1. Dynamic Range Adjustment
      Effective range management strategies:
      • Trend-following adjustments
      • Mean reversion strategies
      • Volume-weighted position sizing
      • Multi-range deployment

      2. Rebalancing Optimization
      Key considerations for rebalancing:
      • Gas cost optimization
      • Price movement thresholds
      • Fee accumulation targets
      • Range utilization metrics

      Risk Management Framework

      1. Impermanent Loss Mitigation
      Strategies to manage impermanent loss:
      • Range width optimization
      • Hedging techniques
      • Position sizing rules
      • Exit strategy development

      2. Portfolio Diversification
      Approaches to diversification:
      • Multi-pool deployment
      • Correlation analysis
      • Risk-adjusted position sizing
      • Fee tier diversification

      Advanced Optimization Techniques

      1. Fee Generation Maximization
      Strategies to maximize fee revenue:
      • Range concentration optimization
      • Volume prediction models
      • Fee tier selection criteria
      • Compound frequency optimization

      2. Capital Efficiency Optimization
      Techniques to improve capital utilization:
      • Just-in-time liquidity provision
      • Range overlap strategies
      • Dynamic capital allocation
      • Yield farming integration

      Conclusion

      Mastering concentrated liquidity requires understanding both the theoretical foundations and practical implementation details. By combining these advanced optimization techniques with automated management systems, LPs can achieve superior risk-adjusted returns while maintaining efficient capital utilization.
    `
  },
  {
    slug: "real-time-yield-optimization",
    title: "Real-time Yield Optimization in DeFi Markets",
    excerpt: "Explore advanced techniques for maximizing yield through real-time market analysis and automated position adjustments.",
    date: "2024-03-11",
    readTime: "12 min read",
    tags: ["Yield Optimization", "Market Analysis", "Automation"],
    icon: Zap,
    content: `<h2>Real-time Yield Optimization</h2><p>This is placeholder content for the real-time yield optimization blog post.  It would discuss advanced strategies for maximizing yield using real-time market data and automated adjustments.</p>`
  },
  {
    slug: "risk-management-in-automated-lp",
    title: "Risk Management Strategies for Automated LP Positions",
    excerpt: "Comprehensive guide to managing risks in automated liquidity provision, from impermanent loss protection to position sizing.",
    date: "2024-03-10",
    readTime: "15 min read",
    tags: ["Risk Management", "DeFi", "Security"],
    icon: Shield,
    content: `<h2>Risk Management in Automated LP</h2><p>This is placeholder content for the risk management blog post. It would cover strategies for mitigating risks, such as impermanent loss, in automated liquidity provision scenarios.</p>`
  },
  {
    slug: "advanced-fee-generation-strategies",
    title: "Advanced Fee Generation Strategies in DeFi",
    excerpt: "Detailed analysis of various fee generation strategies and how to optimize them for maximum returns.",
    date: "2024-03-09",
    readTime: "9 min read",
    tags: ["Fees", "Strategy", "Optimization"],
    icon: Coins,
    content: `<h2>Advanced Fee Generation</h2><p>This is placeholder content for the advanced fee generation strategies blog post.  It would detail various strategies and how to optimize them for maximum returns.</p>`
  },
  {
    slug: "automated-position-management",
    title: "Automated Position Management: A Complete Guide",
    excerpt: "Everything you need to know about automated position management in DeFi, from basic concepts to advanced strategies.",
    date: "2024-03-08",
    readTime: "11 min read",
    tags: ["Automation", "Position Management", "DeFi"],
    icon: Clock,
    content: `<h2>Automated Position Management</h2><p>This is placeholder content for the automated position management guide.  It would cover everything from basic concepts to advanced strategies.</p>`
  }
];