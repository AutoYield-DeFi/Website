import { Bot } from "lucide-react";

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
    slug: "why-meteora-dlmm-is-a-game-changer",
    title: "Why Meteora DLMM is a Game Changer in DeFi",
    excerpt: "Deep dive into how Meteora's Dynamic Liquidity Market Maker revolutionizes liquidity provision with intelligent capital allocation and risk management.",
    date: "2024-03-13",
    readTime: "8 min read",
    tags: ["DeFi", "DLMM", "Liquidity", "Innovation", "Trading"],
    icon: Bot,
    content: `
      <h2>The Evolution of DeFi Liquidity</h2>
      <p>If you've spent any time in DeFi, you already know that liquidity is everything. Without deep, reliable liquidity, trades become expensive, slippage increases, and users start looking elsewhere for better markets.</p>

      <p>But for liquidity providers (LPs), the game hasn't always been fair. Traditional Automated Market Makers (AMMs) have been the backbone of DeFi, yet they struggle with capital efficiency and often expose LPs to unnecessary risks.</p>

      <h2>Enter Meteora DLMM</h2>
      <p>DLMM (Dynamic Liquidity Market Maker) represents a fundamental shift in how liquidity is managed in DeFi. Unlike traditional AMMs, DLMM actively adjusts to market conditions, optimizing capital deployment in real-time.</p>

      <img src="/blog/dlmm-2.png" alt="DLMM Interface showing SOL/USDC liquidity provision" class="w-full rounded-lg my-8" />

      <h3>Key Innovations of DLMM</h3>
      <ul>
        <li>Dynamic range adjustment based on market volatility</li>
        <li>Automated capital reallocation for maximum efficiency</li>
        <li>Sophisticated risk management protocols</li>
        <li>Enhanced fee generation through smart positioning</li>
      </ul>

      <h2>Dynamic Fee Structure</h2>
      <p>One of DLMM's most innovative features is its dynamic fee structure that adapts to market conditions:</p>

      <img src="/blog/d-fee.png" alt="DLMM Dynamic Fee Distribution Graph" class="w-full rounded-lg my-8" />

      <p>The graph above shows how fees are dynamically distributed across price ranges, ensuring optimal compensation for liquidity providers based on market risk and demand.</p>

      <h2>Benefits for Different Market Participants</h2>

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

      <h2>Technical Innovations</h2>
      <p>At its core, DLMM employs sophisticated algorithms to:</p>
      <ul>
        <li>Analyze market volatility patterns</li>
        <li>Predict optimal liquidity ranges</li>
        <li>Adjust fee tiers based on market conditions</li>
        <li>Optimize gas costs for position adjustments</li>
      </ul>

      <h2>Looking Ahead</h2>
      <p>The introduction of DLMM technology marks a significant milestone in DeFi evolution. As the protocol continues to develop, we can expect to see:</p>
      <ul>
        <li>Integration with more trading pairs and markets</li>
        <li>Enhanced analytics and performance metrics</li>
        <li>Advanced customization options for LPs</li>
        <li>Cross-chain deployment and optimization</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Meteora's DLMM is more than just another DeFi protocol - it's a fundamental reimagining of how liquidity can be managed in decentralized markets. By combining advanced algorithms with real-time market responsiveness, DLMM creates a more efficient, profitable, and sustainable ecosystem for all participants.</p>
    `
  }
];