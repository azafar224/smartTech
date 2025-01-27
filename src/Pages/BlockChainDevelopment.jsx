import React from "react";
import TechSlider from "./../Components/TechSlider";
import { Link } from "react-router-dom";

const BlockchainDevelopmentPage = () => {
  const techIcons = {
    // Blockchain Platforms
    Ethereum: "/ethereum.png",
    Solana: "/solana.png",
    Polygon: "/polygon.png",
    Hyperledger: "/hyperledger.png",
    BinanceSmartChain: "/bnb.png",
    Corda: "/corda.png",
    Avalanche: "/avalanche.png",
    Polkadot: "/polkadot.png",

    // Backend
    NodeJS: "/nodejs.png",
    Python: "/python.png",
    GoLang: "/golang.png",
    Java: "/java.png",
    Rust: "/rust.png",
    Solidity: "/solidity.png",
    Vyper: "/vyper.png",

    // Databases
    MySQL: "/mysql.png",
    PostgreSQL: "/postgresql.png",
    MongoDB: "/mongodb.png",
    Redis: "/redis.png",
    IPFS: "/ipfs.png",
    BigChainDB: "/bdb.png",

    // Tools
    Hardhat: "/hardhat.png",
    Truffle: "/truffle.png",
    Ganache: "/ganache.png",
    Metamask: "/metamask.png",
    Remix: "/remix.png",
    EthersJS: "/etherjs.png",
    Web3JS: "/web3js.png",

    // DevOps Tools
    AWS: "/aws.png",
    Azure: "/azure.png",
    Kubernetes: "/kubernetes.png",
    Docker: "/docker.png",
    Terraform: "/terraform.png",
    Jenkins: "/jenkins.png",
    Ansible: "/ansible.png",
    Prometheus: "/prometheus.png",
    Grafana: "/grafana.png",
  };

  const blockchainPlatforms = [
    "Ethereum",
    "Solana",
    "Polygon",
    "Hyperledger",
    "BinanceSmartChain",
    "Corda",
    "Avalanche",
    "Polkadot",
  ];

  const backendTech = [
    "NodeJS",
    "Python",
    "GoLang",
    "Java",
    "Rust",
    "Solidity",
    "Vyper",
  ];

  const databases = [
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "IPFS",
    "BigChainDB",
  ];

  const tools = [
    "Hardhat",
    "Truffle",
    "Ganache",
    "Metamask",
    "Remix",
    "EthersJS",
    "Web3JS",
  ];

  const devOpsTools = [
    "AWS",
    "Azure",
    "Kubernetes",
    "Docker",
    "Terraform",
    "Jenkins",
    "Ansible",
    "Prometheus",
    "Grafana",
  ];

  return (
    <div className="bg-[#0B1120] text-white min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="px-8 lg:w-1/2 space-y-6">
            <h3 className="text-4xl tracking-wide">BLOCKCHAIN DEVELOPMENT</h3>
            <div className="space-y-2">
              <h1 className="text-5xl font-bold">DECENTRALIZED SOLUTIONS</h1>
              <h2 className="text-4xl font-bold">
                CUSTOMIZED BLOCKCHAIN
                <br />
                FOR YOUR BUSINESS NEEDS
              </h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Blockchain technology is revolutionizing industries by providing
              secure, transparent, and decentralized solutions. Our expertise
              spans across developing smart contracts, decentralized
              applications (dApps), and implementing blockchain networks for
              businesses of all sizes. Let us help you unlock the potential of
              blockchain.
            </p>
            <Link to="/contact">
              <button className="bg-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                START YOUR JOURNEY
                <span>→</span>
              </button>
            </Link>
          </div>

          {/* Right Illustration */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src="/blockchainDevelopment.png"
                  alt="Blockchain Developer Illustration"
                  className="w-full h-full object-contain scale-90 hover:scale-95 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stacks */}
      <div className="container mx-auto px-4 py-16 space-y-20">
        {/* Blockchain Platforms */}
        <div className="text-center space-y-8">
          <div className="inline-block">
            <span className="bg-blue-900/30 text-white px-10 py-4 rounded-full">
              TOOLS AND TECHNOLOGIES
            </span>
          </div>{" "}
          <h2 className="text-3xl font-semibold text-center">
            Blockchain Platforms
          </h2>
          <TechSlider
            technologies={blockchainPlatforms}
            icons={techIcons}
            animationDirection="forward"
          />
        </div>

        {/* Backend Technologies */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">
            Backend Technologies
          </h2>
          <TechSlider
            technologies={backendTech}
            icons={techIcons}
            animationDirection="reverse"
          />
        </div>

        {/* Databases */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">Databases</h2>
          <TechSlider
            technologies={databases}
            icons={techIcons}
            animationDirection="forward"
          />
        </div>

        {/* Tools */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">Tools</h2>
          <TechSlider
            technologies={tools}
            icons={techIcons}
            animationDirection="reverse"
          />
        </div>

        {/* DevOps Tools */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">DevOps Tools</h2>
          <TechSlider
            technologies={devOpsTools}
            icons={techIcons}
            animationDirection="forward"
          />
        </div>
      </div>

      {/* Development Process Section */}
      <div className="container mx-auto px-4 py-16 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold">What is</h2>
          <h3 className="text-4xl font-semibold">Our Development Process?</h3>
        </div>
        <p className="text-center text-gray-300 leading-relaxed max-w-4xl mx-auto">
          Our blockchain development process is structured to provide
          decentralized and secure solutions tailored to your business. From
          designing smart contracts to deploying scalable blockchain networks,
          we ensure quality and efficiency at every step.
        </p>
        <div className="relative flex justify-center mt-8">
          <img
            src="/blockchain-working-process.png"
            alt="Development Process"
            className="w-full max-w-5xl"
          />
        </div>
      </div>
    </div>
  );
};

export default BlockchainDevelopmentPage;
