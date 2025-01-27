import React from "react";
import TechSlider from "./../Components/TechSlider";
import { Link } from "react-router-dom";

const EcommerceDevelopmentPage = () => {
  const techIcons = {
    // Frontend Icons for E-commerce
    React: "/react.png",
    NextJS: "/nextjs.png",
    Vue: "/vue.png",
    Angular: "/angular.png",
    TypeScript: "/typescript.png",
    TailwindCSS: "/tailwind.png",

    // Backend Icons
    NodeJS: "/nodejs.png",
    Python: "/python.png",
    PHP: "/php.png",
    Laravel: "/laravel.png",
    Magento: "/mangetoo.png",
    Shopify: "/shopify.png",
    WooCommerce: "/wooo.png",
    PrestaShop: "/Prestashop.png",

    // Database & Cache
    MongoDB: "/mongodb.png",
    MySQL: "/mysql.png",
    PostgreSQL: "/postgresql.png",
    Redis: "/redis.png",
    Elasticsearch: "/elasticsearch.png",

    // Payment & Security
    Stripe: "/stripe.png",
    PayPal: "/paypal.png",
    SSL: "/ssl.png",
    OAuth: "/authh.png",
    JWT: "/jwt.jpeg",

    // DevOps & Analytics
    AWS: "/aws.png",
    GoogleAnalytics: "/google-analytics.png",
    Cloudflare: "/cloudfare.png",
    Docker: "/docker.png",
    Kubernetes: "/kubernetes.png",
    Jenkins: "/jenkins.png",
  };

  const frontendTech = [
    "React",
    "NextJS",
    "Vue",
    "Angular",
    "TypeScript",
    "TailwindCSS",
  ];

  const backendTech = [
    "NodeJS",
    "Python",
    "PHP",
    "Laravel",
    "Magento",
    "Shopify",
    "WooCommerce",
    "PrestaShop",
  ];

  const databaseTech = [
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Redis",
    "Elasticsearch",
  ];

  const paymentTech = ["Stripe", "PayPal", "SSL", "OAuth", "JWT"];

  const devOpsTech = [
    "AWS",
    "GoogleAnalytics",
    "Cloudflare",
    "Docker",
    "Kubernetes",
    "Jenkins",
  ];

  return (
    <div className="bg-[#0B1120] text-white min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="px-8 lg:w-1/2 space-y-6">
            <h3 className="text-4xl tracking-wide">E-COMMERCE DEVELOPMENT</h3>
            <div className="space-y-2">
              <h1 className="text-5xl font-bold">SCALABLE ONLINE</h1>
              <h2 className="text-4xl font-bold">
                STORES THAT
                <br />
                DRIVE SALES
              </h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              We build powerful e-commerce solutions that transform your
              business vision into reality. From custom storefronts to
              integrated payment systems, we deliver secure, scalable, and
              user-friendly platforms that maximize your online revenue. Our
              expert team ensures your e-commerce presence stands out in the
              digital marketplace.
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
                  src="/ecommerc.jpg"
                  alt="E-commerce Development"
                  className="w-full h-full object-contain scale-90 hover:scale-95 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stacks */}
      <div className="container mx-auto px-4 py-16 space-y-20">
        {/* Frontend */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-block">
              <span className="bg-blue-900/30 text-white px-10 py-4 rounded-full">
                TOOLS AND TECHNOLOGIES
              </span>
            </div>
            <h2 className="text-3xl font-semibold">Frontend Technologies</h2>
          </div>
          <TechSlider
            technologies={frontendTech}
            icons={techIcons}
            animationDirection="forward"
          />
        </div>

        {/* Backend */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">
            E-commerce Platforms & Backend
          </h2>
          <TechSlider
            technologies={backendTech}
            icons={techIcons}
            animationDirection="reverse"
          />
        </div>

        {/* Database & Cache */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">
            Database & Search Solutions
          </h2>
          <TechSlider
            technologies={databaseTech}
            icons={techIcons}
            animationDirection="forward"
          />
        </div>

        {/* Payment & Security */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">
            Payment & Security
          </h2>
          <TechSlider
            technologies={paymentTech}
            icons={techIcons}
            animationDirection="reverse"
          />
        </div>

        {/* DevOps */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">
            DevOps & Analytics
          </h2>
          <TechSlider
            technologies={devOpsTech}
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
          Our e-commerce development process is designed to create robust,
          secure, and scalable online stores. We begin with thorough market
          analysis and requirement gathering, followed by UX/UI design,
          development, payment integration, security implementation, and
          thorough testing. Our approach ensures your e-commerce platform is
          optimized for conversions and ready for growth.
        </p>
        <div className="relative flex justify-center mt-8">
          <img
            src="/ecommm.png"
            alt="E-commerce Development Process"
            className="w-full max-w-5xl"
          />
        </div>
      </div>
    </div>
  );
};

export default EcommerceDevelopmentPage;
