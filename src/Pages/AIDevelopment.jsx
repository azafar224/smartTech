import React from "react";
import TechSlider from "./../Components/TechSlider";

const AIDevelopmentPage = () => {
  const techIcons = {
    // AI Frameworks
    TensorFlow: "/tensorflow.png",
    PyTorch: "/pytorch.png",
    ScikitLearn: "/scikit-learn.png",
    Keras: "/keras.png",
    OpenAI: "/openai.png",

    // Programming Languages
    Python: "/python.png",
    R: "/r.png",
    Java: "/java.png",
    Julia: "/julia.png",
    CPlusPlus: "/c++.png",
    Scala: "/scala.png",
    Rust: "/rust.png",

    // Data Handling
    Pandas: "/pandas.png",
    NumPy: "/numpy.png",
    Spark: "/spark.png",
    Hadoop: "/hadoop.png",
    Dask: "/dask.png",
    Kafka: "/kafka.png",
    ElasticSearch: "/elasticsearch.png",

    // Tools
    Jupyter: "/jupyter.png",
    PyCharm: "/pycharm.png",
    VSCode: "/vscode.png",
    Docker: "/docker.png",
    GitHub: "/github.jpg",
    Postman: "/postman.png",

    // Cloud Platforms
    AWS: "/aws.png",
    Azure: "/azure.png",
    GCP: "/gcp.png",
    OracleCloud: "/oracle.png",
    AlibabaCloud: "/alibaba.png",
    DigitalOcean: "/digitalocean.png",
    Snowflake: "/snowflake.png",
  };

  const aiFrameworks = [
    "TensorFlow",
    "PyTorch",
    "ScikitLearn",
    "Keras",
    "OpenAI",
  ];

  const programmingLanguages = [
    "Python",
    "R",
    "Java",
    "Julia",
    "CPlusPlus",
    "Scala",
    "Rust",
  ];

  const dataHandling = [
    "Pandas",
    "NumPy",
    "Spark",
    "Hadoop",
    "Dask",
    "Kafka",
    "ElasticSearch",
  ];

  const tools = ["Jupyter", "PyCharm", "VSCode", "Docker", "GitHub", "Postman"];

  const cloudPlatforms = [
    "AWS",
    "Azure",
    "GCP",
    "OracleCloud",
    "AlibabaCloud",
    "DigitalOcean",
    "Snowflake",
  ];

  return (
    <div className="bg-[#0B1120] text-white min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="px-8 lg:w-1/2 space-y-6">
            <h3 className="text-4xl tracking-wide">AI DEVELOPMENT</h3>
            <div className="space-y-2">
              <h1 className="text-5xl font-bold">REVOLUTIONIZING THE FUTURE</h1>
              <h2 className="text-4xl font-bold">
                AI-POWERED SOLUTIONS FOR
                <br />
                YOUR BUSINESS NEEDS
              </h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Artificial Intelligence is transforming industries with smarter,
              faster, and more efficient solutions. Our expertise in AI
              frameworks, machine learning algorithms, and cloud integrations
              allows us to create advanced AI applications that align with your
              business goals.
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
                  src="/aiDevelopment.png"
                  alt="AI Developer Illustration"
                  className="w-full h-full object-contain scale-90 hover:scale-95 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stacks */}
      <div className="container mx-auto px-4 py-16 space-y-20">
        {/* AI Frameworks */}
        <div className="text-center space-y-8">
          <div className="inline-block">
            <span className="bg-blue-900/30 text-white px-10 py-4 rounded-full">
              TOOLS AND TECHNOLOGIES
            </span>
          </div>
          <h2 className="text-3xl font-semibold text-center">AI Frameworks</h2>
          <TechSlider
            technologies={aiFrameworks}
            icons={techIcons}
            animationDirection="forward"
          />
        </div>

        {/* Programming Languages */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">
            Programming Languages
          </h2>
          <TechSlider
            technologies={programmingLanguages}
            icons={techIcons}
            animationDirection="reverse"
          />
        </div>

        {/* Data Handling */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">Data Handling</h2>
          <TechSlider
            technologies={dataHandling}
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

        {/* Cloud Platforms */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">
            Cloud Platforms
          </h2>
          <TechSlider
            technologies={cloudPlatforms}
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
          Our AI development process ensures innovation and efficiency. From
          gathering requirements and selecting algorithms to implementing
          scalable cloud solutions, our approach delivers results tailored to
          your needs.
        </p>
        <div className="relative flex justify-center mt-8">
          <img
            src="/aidevelopmentProcess.png"
            alt="Development Process"
            className="w-full max-w-5xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AIDevelopmentPage;
