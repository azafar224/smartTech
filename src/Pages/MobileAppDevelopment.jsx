import React from "react";
import TechSlider from "./../Components/TechSlider";

const MobileAppDevelopmentPage = () => {
  const techIcons = {
    // Frontend Icons for Mobile App Development
    Flutter: "/flutter.png",
    ReactNative: "/reactnative.png",
    Swift: "/swift.png",
    Kotlin: "/kotlin.png",
    Java: "/java.png",
    Dart: "/dart.png",

    // Backend Icons
    Firebase: "/firebase.png",
    NodeJS: "/nodejs.png",
    Python: "/python.png",
    PHP: "/php.png",
    Java: "/java.png",
    MongoDB: "/mongodb.png",
    MySQL: "/mysql.png",
    PostgreSQL: "/postgresql.png",

    // Tools Icons
    AndroidStudio: "/android-studio.png",
    Xcode: "/xcode.png",
    VSCode: "/vscode.png",
    Postman: "/postman.png",
    GitHub: "/github.jpg",
    Jira: "/jira.png",
    Docker: "/docker.png",

    // DevOps Icons
    AWS: "/aws.png",
    Azure: "/azure.png",
    Kubernetes: "/kubernetes.png",
    GCP: "/gcp.png",
    Jenkins: "/jenkins.png",
    Terraform: "/terraform.png",
    Ansible: "/ansible.png",
    CircleCI: "/circleci.png",
    TravisCI: "/travisci.png",
    Nagios: "/nagios.png",
    Prometheus: "/prometheus.png",
    Grafana: "/grafana.png",
  };

  const frontendTech = [
    "Flutter",
    "ReactNative",
    "Swift",
    "Kotlin",
    "Java",
    "Dart",
  ];

  const backendTech = [
    "Firebase",
    "NodeJS",
    "Python",
    "PHP",
    "Java",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
  ];

  const tools = [
    "AndroidStudio",
    "Xcode",
    "VSCode",
    "Postman",
    "GitHub",
    "Jira",
    "Docker",
  ];

  const devOpsTech = [
    "AWS",
    "Azure",
    "Kubernetes",
    "GCP",
    "Jenkins",
    "Terraform",
    "Ansible",
    "CircleCI",
    "TravisCI",
    "Nagios",
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
            <h3 className="text-4xl tracking-wide">MOBILE APP DEVELOPMENT</h3>
            <div className="space-y-2">
              <h1 className="text-5xl font-bold">CUTTING-EDGE APPS</h1>
              <h2 className="text-4xl font-bold">
                CUSTOMIZED FOR
                <br />
                YOUR BUSINESS
              </h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              We create high-performing, feature-packed mobile applications
              tailored to your needs. From Android and iOS development to
              cross-platform solutions, we deliver seamless experiences that
              enhance your business. Our team of experts leverages cutting-edge
              tools and frameworks to bring your ideas to life.
            </p>
            <button className="bg-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
              START YOUR JOURNEY
              <span>→</span>
            </button>
          </div>

          {/* Right Illustration */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src="/mobileAppDevelopment.png"
                  alt="Mobile App Developer"
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

        {/* Tools */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">Tools</h2>
          <TechSlider
            technologies={tools}
            icons={techIcons}
            animationDirection="forward"
          />
        </div>

        {/* DevOps */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">DevOps</h2>
          <TechSlider
            technologies={devOpsTech}
            icons={techIcons}
            animationDirection="reverse"
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
          We follow a structured approach for mobile app development. Starting
          with requirement gathering, we ensure a clear roadmap for success.
          This includes design, development, rigorous testing, and deployment.
          Our commitment to quality ensures a flawless user experience.
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

export default MobileAppDevelopmentPage;
