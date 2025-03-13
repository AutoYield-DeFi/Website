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

// Sample blog posts - this would typically be loaded from a CMS or markdown files
export const BLOG_POSTS = [
  {
    slug: "welcome-to-autoyield",
    title: "Welcome to AutoYield: The Future of LP Management",
    excerpt: "Learn how AutoYield is revolutionizing liquidity provision with AI-powered automation.",
    date: "2024-03-05",
    author: "Alex Chen",
    readTime: "5 min read",
    content: `
      <p>We're excited to introduce AutoYield, a revolutionary platform that's making DeFi liquidity provision accessible to everyone. Our AI-powered system handles all the complexities of LP management, so you can focus on what matters most - earning returns.</p>

      <h2>Why We Built AutoYield</h2>
      <p>As DeFi enthusiasts ourselves, we understood the challenges of managing liquidity positions. The constant monitoring, complex calculations, and risk of impermanent loss made it difficult for most people to participate effectively in DeFi.</p>

      <h2>How It Works</h2>
      <p>AutoYield uses advanced AI algorithms to:</p>
      <ul>
        <li>Monitor market conditions 24/7</li>
        <li>Optimize position sizing and timing</li>
        <li>Automatically rebalance when needed</li>
        <li>Protect against impermanent loss</li>
      </ul>

      <h2>What's Next</h2>
      <p>This is just the beginning. We're working on several exciting features that will make AutoYield even more powerful and user-friendly. Stay tuned for updates!</p>
    `
  },
  {
    slug: "understanding-lp-basics",
    title: "LP Basics: A Guide for Beginners",
    excerpt: "Everything you need to know about liquidity provision, explained in simple terms.",
    date: "2024-03-04",
    author: "Sarah Kim",
    readTime: "8 min read",
    content: `
      <p>Liquidity provision is a fundamental aspect of DeFi, but it can be intimidating for newcomers. In this guide, we'll break down the basics and help you understand how it works.</p>

      <h2>What is Liquidity Provision?</h2>
      <p>Think of liquidity provision like being a market maker at your local farmers' market. You're providing pairs of assets that others can trade between, and earning fees from these trades.</p>

      <h2>Key Concepts</h2>
      <ul>
        <li>Liquidity Pools: Smart contracts that hold token pairs</li>
        <li>Trading Fees: Your reward for providing liquidity</li>
        <li>Impermanent Loss: A potential risk when token prices change</li>
        <li>APR vs APY: Understanding your potential returns</li>
      </ul>

      <h2>Best Practices</h2>
      <p>While AutoYield handles the complex parts automatically, it's still good to understand some basic principles:</p>
      <ul>
        <li>Start small and learn the mechanics</li>
        <li>Diversify across different pools</li>
        <li>Monitor your positions regularly</li>
        <li>Stay informed about market conditions</li>
      </ul>
    `
  },
  {
    slug: "maximizing-lp-returns-with-algorithmic-management",
    title: "Maximizing LP Returns with Algorithmic Position Management",
    excerpt: "Deep dive into how algorithmic liquidity management can significantly improve your LP returns while reducing risks and manual oversight.",
    date: "2024-03-13",
    readTime: "8 min read",
    image: "/blog/algorithmic-lp-management.webp",
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

      <h3>How Algorithmic Management Solves These Challenges</h3>
      <p>Automated systems bring several advantages to liquidity provision:</p>
      <ul>
        <li>24/7 position monitoring and adjustment</li>
        <li>Data-driven rebalancing decisions</li>
        <li>Proactive impermanent loss mitigation</li>
        <li>Optimal range targeting</li>
        <li>Quick response to market opportunities</li>
      </ul>

      <h2>Key Components of Algorithmic LP Management</h2>

      <h3>1. Real-time Market Analysis</h3>
      <p>Algorithmic systems continuously analyze market conditions, including:</p>
      <ul>
        <li>Price trends and volatility patterns</li>
        <li>Trading volume analysis</li>
        <li>Fee generation rates</li>
        <li>Pool depth and concentration</li>
      </ul>

      <h3>2. Dynamic Range Optimization</h3>
      <p>One of the most powerful features of algorithmic management is the ability to dynamically adjust liquidity ranges based on market conditions. This ensures your capital is always deployed where it's most effective.</p>

      <h3>3. Risk Management Protocols</h3>
      <p>Advanced systems incorporate multiple layers of risk management:</p>
      <ul>
        <li>Impermanent loss prediction and mitigation</li>
        <li>Volatility-based position sizing</li>
        <li>Automated stop-loss mechanisms</li>
        <li>Portfolio rebalancing triggers</li>
      </ul>

      <h2>Implementing Algorithmic LP Strategies</h2>
      <p>When implementing algorithmic LP management, consider these key factors:</p>

      <h3>1. Parameter Selection</h3>
      <ul>
        <li>Range width optimization</li>
        <li>Rebalancing frequency</li>
        <li>Fee tier selection</li>
        <li>Position size management</li>
      </ul>

      <h3>2. Performance Monitoring</h3>
      <p>Track these key metrics to evaluate your strategy:</p>
      <ul>
        <li>Fee APR</li>
        <li>Capital efficiency</li>
        <li>Impermanent loss ratio</li>
        <li>Range utilization</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Algorithmic liquidity management represents the future of DeFi yield generation. By leveraging automated systems, LPs can achieve superior returns while minimizing risks and reducing the time investment required for active management.</p>
    `
  },
  {
    slug: "understanding-concentrated-liquidity-optimization",
    title: "Understanding Concentrated Liquidity: Advanced Optimization Techniques",
    excerpt: "Learn how to optimize your concentrated liquidity positions for maximum returns, including advanced range selection and rebalancing strategies.",
    date: "2024-03-12",
    readTime: "10 min read",
    image: "/blog/concentrated-liquidity.webp",
    content: `
      <h2>The Evolution of Liquidity Provision</h2>
      <p>Concentrated liquidity represents a paradigm shift in how we think about market making and liquidity provision. Unlike traditional AMMs that spread liquidity across an infinite price range, concentrated liquidity allows providers to focus their capital where it matters most.</p>

      <h3>Traditional vs. Concentrated Liquidity</h3>
      <p>Key differences between traditional and concentrated liquidity:</p>
      <ul>
        <li>Capital efficiency: 2-20x improvement</li>
        <li>Fee generation: Significantly higher per unit of capital</li>
        <li>Position management: More active but more rewarding</li>
        <li>Risk profile: Different impermanent loss characteristics</li>
      </ul>

      <h2>Advanced Range Selection Strategies</h2>

      <h3>1. Volatility-Based Range Setting</h3>
      <p>Understanding how to set ranges based on asset volatility:</p>
      <ul>
        <li>Historical volatility analysis</li>
        <li>Standard deviation multipliers</li>
        <li>Support and resistance levels</li>
        <li>Volume profile consideration</li>
      </ul>

      <h3>2. Market Microstructure Analysis</h3>
      <p>Key factors to consider in range selection:</p>
      <ul>
        <li>Trading volume distribution</li>
        <li>Price impact analysis</li>
        <li>Order book depth</li>
        <li>Fee tier optimization</li>
      </ul>

      <h2>Position Management Techniques</h2>

      <h3>1. Dynamic Range Adjustment</h3>
      <p>Effective range management strategies:</p>
      <ul>
        <li>Trend-following adjustments</li>
        <li>Mean reversion strategies</li>
        <li>Volume-weighted position sizing</li>
        <li>Multi-range deployment</li>
      </ul>

      <h3>2. Rebalancing Optimization</h3>
      <p>Key considerations for rebalancing:</p>
      <ul>
        <li>Gas cost optimization</li>
        <li>Price movement thresholds</li>
        <li>Fee accumulation targets</li>
        <li>Range utilization metrics</li>
      </ul>

      <h2>Risk Management Framework</h2>

      <h3>1. Impermanent Loss Mitigation</h3>
      <p>Strategies to manage impermanent loss:</p>
      <ul>
        <li>Range width optimization</li>
        <li>Hedging techniques</li>
        <li>Position sizing rules</li>
        <li>Exit strategy development</li>
      </ul>

      <h3>2. Portfolio Diversification</h3>
      <p>Approaches to diversification:</p>
      <ul>
        <li>Multi-pool deployment</li>
        <li>Correlation analysis</li>
        <li>Risk-adjusted position sizing</li>
        <li>Fee tier diversification</li>
      </ul>

      <h2>Advanced Optimization Techniques</h2>

      <h3>1. Fee Generation Maximization</h3>
      <p>Strategies to maximize fee revenue:</p>
      <ul>
        <li>Range concentration optimization</li>
        <li>Volume prediction models</li>
        <li>Fee tier selection criteria</li>
        <li>Compound frequency optimization</li>
      </ul>

      <h3>2. Capital Efficiency Optimization</h3>
      <p>Techniques to improve capital utilization:</p>
      <ul>
        <li>Just-in-time liquidity provision</li>
        <li>Range overlap strategies</li>
        <li>Dynamic capital allocation</li>
        <li>Yield farming integration</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Mastering concentrated liquidity requires understanding both the theoretical foundations and practical implementation details. By combining these advanced optimization techniques with automated management systems, LPs can achieve superior risk-adjusted returns while maintaining efficient capital utilization.</p>
    `
  }
];