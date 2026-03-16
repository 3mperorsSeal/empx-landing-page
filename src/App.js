// import logo from "./logo.svg";
import "../src/App.css";
import Banner from "./components/Banner";
// import Banner1 from "./components/Banner1";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Trusted from "./components/Trusted";
import BuySell from "./components/BuySell";
import WeDo from "./components/WeDO";
import Manifest from "./components/Manifest";
import Future from "./components/Future";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import Build from "./components/Build";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dapp from "./dapp/Banner1";
AOS.init();

const SEO_DATA = {
  home: {
    title: "EMPX - Cross-Chain DeFi Platform | DEX Aggregator, Bridge & Swap API",
    description: "EMPX is a comprehensive DeFi platform featuring cross-chain DEX aggregation, limit orders, EMPX-Via bridge, gas bridge, and integration widgets. Swap tokens across 60+ chains with best rates.",
    keywords: "DeFi, DEX Aggregator, Cross-chain swap, Token swap, Limit orders, Cross-chain bridge, Gas bridge, Swap API, DeFi API, Blockchain, Web3, Multi-chain, Crypto exchange",
    url: "https://empx.io",
  },
  dapp: {
    default: {
      title: "EMPX Dapp | Cross-Chain DeFi Platform",
      description: "Access EMPX DeFi products: DEX aggregator, cross-chain bridge, limit orders, and gas bridge. Swap across 60+ chains.",
      keywords: "DeFi dapp, DEX aggregator, Cross-chain bridge, Token swap, Limit orders",
      url: "https://dapp.empx.io",
    },
    "via-bridge": {
      title: "EMPX-Via Bridge | Cross-Chain Token Bridge",
      description: "Bridge tokens seamlessly across multiple blockchains with EMPX-Via Bridge. Secure, fast cross-chain transfers to 60+ chains.",
      keywords: "Cross-chain bridge, Token bridge, Bridge tokens, Multi-chain bridge, Crypto bridge",
      url: "https://dapp.empx.io/via-bridge",
    },
    swap: {
      title: "EMPX Swap | On-Chain DEX Aggregator",
      description: "Swap tokens with the best rates using EMPX's on-chain DEX aggregator. Optimized routes across multiple DEXs for best swap prices.",
      keywords: "DEX aggregator, Token swap, On-chain swap, Best swap rates, Crypto swap",
      url: "https://dapp.empx.io/swap",
    },
    "limit-orders": {
      title: "EMPX Limit Orders | DeFi Trading Strategies",
      description: "Place limit orders on EMPX. Set your price and trade automatically with smart solvers and optimized routes.",
      keywords: "Limit orders, DeFi trading, Price orders, Trading strategies, Crypto limit orders",
      url: "https://dapp.empx.io/swap?tab=limit",
    },
    gas: {
      title: "EMPX Gas Bridge | Cross-Chain Gas Token",
      description: "Get native gas tokens on any chain. Bridge gas tokens to 60+ networks and never run out of gas exploring new ecosystems.",
      keywords: "Gas bridge, Gas token, Native gas, Cross-chain gas, Blockchain gas",
      url: "https://dapp.empx.io/gas",
    },
    "cross-chain": {
      title: "EMPX Cross-Chain Swap | Multi-Chain DEX",
      description: "Swap tokens across 30+ chains with smart cross-chain routing. The most advanced cross-chain DEX aggregator.",
      keywords: "Cross-chain swap, Multi-chain DEX, Cross-chain DEX aggregator",
      url: "https://dapp.empx.io/cross-chain",
    },
  },
  widget: {
    title: "EMPX Widget | Embeddable Swap Widget",
    description: "Integrate EMPX swap functionality into your app with our iframe-ready widget. White-label DeFi integration for any platform.",
    keywords: "Swap widget, Embeddable DeFi, Iframe widget, DeFi API, White-label swap, Integration widget",
    url: "https://widget.empx.io",
  },
  docs: {
    title: "EMPX API Documentation | Swap API",
    description: "EMPX API documentation. Integrate swap functionality, access DEX aggregator, cross-chain routing, and more.",
    keywords: "Swap API, DeFi API, API documentation, Developer API, Blockchain API",
    url: "https://docs.empx.io",
  },
};

function SEO({ isDappPage = false }) {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab");
  
  let seoData = SEO_DATA.home;
  
  if (isDappPage) {
    const routeKey = tab || "default";
    seoData = SEO_DATA.dapp[routeKey] || SEO_DATA.dapp.default;
  }

  return (
    <Helmet>
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords} />
      <meta name="author" content="EMPX Team" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0d1117" />

      <link rel="canonical" href={seoData.url} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoData.url} />
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:image" content="https://empx.io/og-image.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoData.url} />
      <meta property="twitter:title" content={seoData.title} />
      <meta property="twitter:description" content={seoData.description} />
      <meta property="twitter:image" content="https://empx.io/og-image.png" />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "EMPX",
          "url": seoData.url,
          "description": seoData.description,
          "applicationCategory": "FinanceApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": "0"
          },
          "creator": {
            "@type": "Organization",
            "name": "EMPX Team",
            "url": "https://empx.io"
          }
        })}
      </script>
    </Helmet>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SEO />
                <Banner />
                <Trusted />
                <BuySell />
                <WeDo />
                <Manifest />
                <Future />
                <Build />
                <Footer />
              </>
            }
          />
          <Route path="/dapp" element={<><SEO isDappPage /><Dapp /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
