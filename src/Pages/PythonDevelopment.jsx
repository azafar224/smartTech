import React from "react";
import TechSlider from "./../Components/TechSlider";
import { Link } from "react-router-dom";

const PythonDevelopmentPage = () => {
  const techIcons = {
    // Frontend Icons
    HTML: "/html.png",
    CSS: "/css.png",
    JavaScript: "/javascript.png",
    React: "/react.png",
    Angular: "/angular.png",
    Vue: "/vue.png",
    Bootstrap: "/bootstrap.png",
    TailwindCSS: "/tailwind.png",

    // Backend Frameworks
    Python: "/python.png",
    Django: "/django.png",
    Flask: "/flask.png",
    FastAPI: "/fastapi.png",
    Tornado: "/tornado.png",
    Pyramid: "/pyramid.png",

    // Databases
    MySQL: "/mysql.png",
    PostgreSQL: "/postgresql.png",
    MongoDB: "/mongodb.png",
    SQLite: "/sqlite.png",
    Redis: "/redis.png",
    Firebase: "/firebase.png",

    // Tools
    PyCharm: "/pycharm.png",
    Jupyter: "/jupyter.png",
    VSCode: "/vscode.png",
    Docker: "/docker.png",
    GitHub: "/github.jpg",
    Postman: "/postman.png",
    Jira: "/jira.png",

    // DevOps Tools
    AWS: "/aws.png",
    Azure: "/azure.png",
    Kubernetes: "/kubernetes.png",
    Terraform: "/terraform.png",
    Jenkins: "/jenkins.png",
    Ansible: "/ansible.png",
    Prometheus: "/prometheus.png",
    Grafana: "/grafana.png",
  };

  const frontendTech = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Angular",
    "Vue",
    "Bootstrap",
    "TailwindCSS",
  ];

  const backendFrameworks = [
    "Python",
    "Django",
    "Flask",
    "FastAPI",
    "Tornado",
    "Pyramid",
  ];

  const databases = [
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "SQLite",
    "Redis",
    "Firebase",
  ];

  const tools = [
    "PyCharm",
    "Jupyter",
    "VSCode",
    "Docker",
    "GitHub",
    "Postman",
    "Jira",
  ];

  const devOpsTools = [
    "AWS",
    "Azure",
    "Kubernetes",
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
            <h3 className="text-4xl tracking-wide">PYTHON DEVELOPMENT</h3>
            <div className="space-y-2">
              <h1 className="text-5xl font-bold">POWERFUL BACKENDS</h1>
              <h2 className="text-4xl font-bold">
                FLEXIBLE SOLUTIONS
                <br />
                FOR MODERN NEEDS
              </h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Python is a versatile language used for web development, APIs, and
              data-driven solutions. We leverage frameworks like Django, Flask,
              and FastAPI to create scalable, secure, and efficient
              applications. Whether it's building a robust backend or creating
              APIs, our team delivers exceptional solutions tailored to your
              business.
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
                  src="/pythonDevelopment.png"
                  alt="Python Developer Illustration"
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
        <div className="text-center space-y-8">
          <div className="inline-block">
            <span className="bg-blue-900/30 text-white px-10 py-4 rounded-full">
              TOOLS AND TECHNOLOGIES
            </span>
          </div>
          <h2 className="text-3xl font-semibold text-center">Frontend</h2>
          <TechSlider
            technologies={frontendTech}
            icons={techIcons}
            animationDirection="forward"
          />
        </div>

        {/* Backend */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">
            Backend Frameworks
          </h2>
          <TechSlider
            technologies={backendFrameworks}
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

        {/* DevOps */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">DevOps</h2>
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
          We follow a structured development process to ensure efficiency and
          scalability in every project. Starting from gathering requirements to
          implementing solutions and maintaining the application, our Python
          development process is tailored to meet your business needs.
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

export default PythonDevelopmentPage;
