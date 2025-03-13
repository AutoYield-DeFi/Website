import { Bot, LineChart, Coins } from "lucide-react";

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

export const BLOG_POSTS = [
  {
    slug: "why-meteora-dlmm-is-a-game-changer",
    title: "Why Meteora DLMM is a Game Changer in DeFi",
    excerpt: "If you've spent any time in DeFi, you already know that liquidity is everything. Without deep, reliable liquidity, trades become expensive, slippage increases, and users start looking elsewhere for better markets.",
    date: "2024-03-13",
    readTime: "8 min read",
    tags: ["DeFi", "DLMM", "Liquidity", "Innovation", "Trading"],
    icon: Bot,
    content: `
      <div class="my-8">
        <img src="/blog/dlmm-2.png" alt="DLMM Interface showing advanced liquidity management options" class="w-full rounded-lg shadow-lg" />
        <p class="text-sm text-muted-foreground mt-2 text-center">DLMM's sophisticated interface allows LPs to fine-tune their strategies</p>
      </div>

      <p>If you've spent any time in DeFi, you already know that liquidity is everything. Without deep, reliable liquidity, trades become expensive, slippage increases, and users start looking elsewhere for better markets.</p>

      <p>But for liquidity providers (LPs), the game hasn't always been fair. Traditional Automated Market Makers (AMMs) have been the backbone of DeFi, yet they struggle with capital efficiency and often expose LPs to unnecessary risks.</p>

      <h2>The DLMM Revolution</h2>
      <p>DLMM (Dynamic Liquidity Market Maker) represents a fundamental shift in how liquidity is managed in DeFi. Unlike traditional AMMs that use static curves, DLMM actively adjusts to market conditions, optimizing capital deployment in real-time.</p>

      <h2>Dynamic Fee Structure</h2>
      <p>One of DLMM's most innovative features is its dynamic fee structure that adapts to market conditions. This ensures LPs are properly compensated based on market volatility and risk.</p>

      <div class="my-8">
        <img src="/blog/d-fee.png" alt="DLMM's dynamic fee distribution visualization" class="w-full rounded-lg shadow-lg" />
        <p class="text-sm text-muted-foreground mt-2 text-center">Dynamic fee distribution across price ranges optimizes LP returns</p>
      </div>

      <h2>Key Innovations</h2>
      <ul>
        <li>Dynamic range adjustment based on market volatility</li>
        <li>Automated capital reallocation for maximum efficiency</li>
        <li>Advanced risk management protocols</li>
        <li>Enhanced fee generation through smart positioning</li>
      </ul>

      <h2>Benefits for Market Participants</h2>

      <h3>For Liquidity Providers</h3>
      <ul>
        <li>Higher capital efficiency through dynamic positioning</li>
        <li>Reduced impermanent loss risk via smart range selection</li>
        <li>Better fee generation from optimized liquidity deployment</li>
        <li>Automated position management reducing operational overhead</li>
      </ul>

      <h3>For Traders</h3>
      <ul>
        <li>Deeper liquidity where it matters most</li>
        <li>Reduced slippage on large trades</li>
        <li>More stable and predictable pricing</li>
        <li>Lower overall trading costs</li>
      </ul>

      <h2>The Road Ahead</h2>
      <p>The introduction of DLMM technology marks a significant milestone in DeFi evolution. As the protocol continues to develop, we expect to see:</p>
      <ul>
        <li>Integration with more trading pairs and markets</li>
        <li>Enhanced analytics and performance metrics</li>
        <li>Advanced customization options for LPs</li>
        <li>Cross-chain deployment and optimization</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Meteora's DLMM is more than just another DeFi protocol - it's a fundamental reimagining of how liquidity can be managed in decentralized markets. By combining advanced algorithms with real-time market responsiveness, DLMM creates a more efficient, profitable, and sustainable ecosystem for all participants.</p>
    `
  },
  {
    slug: "maximize-lp-earnings-2025",
    title: "How to Maximize Your Earnings as a Liquidity Provider in 2025",
    excerpt: "Decentralized finance (DeFi) has revolutionized the way people earn passive income, and liquidity provision (LP) remains one of the most attractive ways to generate yield.",
    date: "2024-03-13",
    readTime: "10 min read",
    tags: ["DeFi", "Liquidity Mining", "Yield", "Strategy", "Earnings"],
    icon: Coins,
    content: `
      <h2>Introduction</h2>
      <p>Decentralized finance (DeFi) has revolutionized the way people earn passive income, and liquidity provision (LP) remains one of the most attractive ways to generate yield. However, with market conditions evolving rapidly and new liquidity models emerging, being an LP in 2025 requires more than just depositing your tokens and hoping for the best.</p>

      <h2>Understanding the Current Landscape</h2>
      <p>The DeFi ecosystem in 2025 is markedly different from its early days. Key developments include:</p>
      <ul>
        <li>Advanced Automated Market Makers (AMMs)</li>
        <li>Dynamic fee structures</li>
        <li>Cross-chain liquidity protocols</li>
        <li>AI-powered position management</li>
      </ul>

      <h2>Key Strategies for Success</h2>

      <h3>1. Choose the Right Protocols</h3>
      <p>When selecting protocols for liquidity provision, consider:</p>
      <ul>
        <li>Security track record</li>
        <li>TVL stability</li>
        <li>Fee generation history</li>
        <li>Community engagement</li>
      </ul>

      <h3>2. Optimize Position Management</h3>
      <p>Effective position management involves:</p>
      <ul>
        <li>Regular rebalancing</li>
        <li>Fee reinvestment</li>
        <li>Range optimization</li>
        <li>Impermanent loss mitigation</li>
      </ul>

      <h2>Risk Management</h2>
      <p>Implement these risk management strategies:</p>
      <ul>
        <li>Diversification across protocols</li>
        <li>Smart contract insurance</li>
        <li>Position sizing rules</li>
        <li>Emergency exit planning</li>
      </ul>

      <h2>Advanced Techniques</h2>

      <h3>1. Leveraging Analytics</h3>
      <p>Use data analytics for:</p>
      <ul>
        <li>Volume prediction</li>
        <li>Fee optimization</li>
        <li>Range selection</li>
        <li>Performance tracking</li>
      </ul>

      <h3>2. Automation Tools</h3>
      <p>Implement automation for:</p>
      <ul>
        <li>Position rebalancing</li>
        <li>Fee collection</li>
        <li>Range adjustments</li>
        <li>Risk monitoring</li>
      </ul>

      <h2>Future Trends</h2>
      <p>Stay ahead by watching these emerging trends:</p>
      <ul>
        <li>Layer 2 opportunities</li>
        <li>Cross-chain strategies</li>
        <li>MEV protection</li>
        <li>Regulatory compliance</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Success as an LP in 2025 requires a combination of technical knowledge, strategic thinking, and proper risk management. By following these guidelines and staying informed about market developments, you can maximize your earnings while minimizing risks.</p>
    `
  }
];