import React from "react";
import TechSlider from "./../Components/TechSlider";
import { Link } from "react-router-dom";

const WebDevelopmentPage = () => {
  const techIcons = {
    // Frontend Icons
    HTML: "/html.png",
    CSS: "/css.png",
    JavaScript: "/javascript.png",
    Django: "/django.png",
    VUE: "/vue.png",
    Angular: "/angular.png",
    React: "/react.png",
    TypeScript: "/typescript.png",
    Bootstrap: "/bootstrap.png",
    TailwindCSS: "/tailwind.png",

    // Backend Icons
    NodeJS: "/nodejs.png",
    Laravel: "/laravel.png",
    Java: "/java.png",
    PHP: "/php.png",
    Python: "/python.png",
    RubyOnRails: "/ror.png",
    ASPNet: "/aspnet.png",
    Spring: "/spring.png",

    // Database Icons
    MongoDB: "/mongodb.png",
    MySQL: "/mysql.png",
    PostgreSQL: "/postgresql.png",
    Firebase: "/firebase.png",
    Redis: "/redis.png",
    SQLite: "/sqlite.png",

    // Tools Icons
    VSCode: "/vscode.png",
    Postman: "/postman.png",
    GitHub: "/github.jpg",
    Docker: "/docker.png",
    Jira: "/jira.png",
    NPM: "/npm.png",

    // DevOps Icons
    AWS: "/aws.png",
    Azure: "/azure.png",
    Kubernetes: "/kubernetes.png",
    GCP: "/gcp.png",
    Jenkins: "/jenkins.png",
  };

  const frontendTech = [
    "HTML",
    "CSS",
    "JavaScript",
    "Django",
    "VUE",
    "Angular",
    "React",
    "TypeScript",
    "Bootstrap",
    "TailwindCSS",
  ];

  const backendTech = [
    "NodeJS",
    "Laravel",
    "Java",
    "PHP",
    "Python",
    "RubyOnRails",
    "ASPNet",
    "Spring",
  ];

  const databaseTech = [
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Firebase",
    "Redis",
    "SQLite",
  ];

  const tools = ["VSCode", "Postman", "GitHub", "Docker", "Jira", "NPM"];

  const devOpsTech = ["AWS", "Azure", "Kubernetes", "GCP", "Jenkins"];

  return (
    <div className="bg-[#0B1120] text-white min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="px-8 lg:w-1/2 space-y-6">
            <h3 className="text-4xl tracking-wide">WEB DEVELOPMENT</h3>
            <div className="space-y-2">
              <h1 className="text-5xl font-bold">TAILORED SOLUTIONS</h1>
              <h2 className="text-4xl font-bold">
                WEB DEVELOPMENT FOR
                <br />
                YOUR UNIQUE NEEDS
              </h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed pb-6">
              Our Company provides services for web development to make your
              digital presence seamless. From frontend designs to backend
              integrations, we use modern technologies to build secure,
              responsive, and tailored web solutions for your business.
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
                  src="/webDevelopment.png"
                  alt="Web Developer Character"
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
            <h2 className="text-3xl font-semibold">FrontEnd</h2>
          </div>
          <TechSlider
            technologies={frontendTech}
            icons={techIcons}
            animationDirection="forward"
          />
        </div>

        {/* Backend */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">BackEnd</h2>
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
            technologies={databaseTech}
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

        {/* DevOps */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">DevOps</h2>
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
          When it comes to custom solutions, our approach is well-defined. We
          collaborate with you to create secure, scalable, and efficient
          websites tailored to your business needs. From planning to
          implementation, we ensure exceptional results.
        </p>
        <div className="relative flex justify-center mt-8">
          <img
            src="/developmentProcess.png"
            alt="Development Process"
            className="w-full max-w-5xl"
          />
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentPage;
