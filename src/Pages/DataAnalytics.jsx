import React from "react";
import TechSlider from "./../Components/TechSlider";

const DataAnalyticsPage = () => {
  const techIcons = {
    // Data Analytics Tools
    Tableau: "/tableau.png",
    PowerBI: "/powerbi.png",
    Looker: "/looker.png",
    Qlik: "/qlik.png",
    GoogleDataStudio: "/google-data-studio.png",

    // Programming Languages
    Python: "/python.png",
    R: "/r.png",
    SQL: "/sql.png",
    JavaScript: "/javascript.png",
    Scala: "/scala.png",

    // Big Data Frameworks
    Hadoop: "/hadoop.png",
    Spark: "/spark.png",
    Flink: "/flink.png",
    Kafka: "/kafka.png",

    // Databases
    MySQL: "/mysql.png",
    PostgreSQL: "/postgresql.png",
    MongoDB: "/mongodb.png",
    Redshift: "/redshift.png",
    Snowflake: "/snowflake.png",

    // Tools
    Jupyter: "/jupyter.png",
    VSCode: "/vscode.png",
    Docker: "/docker.png",
    GitHub: "/github.jpg",
    ApacheAirflow: "/apache-airflow.png",
  };

  const analyticsTools = [
    "Tableau",
    "PowerBI",
    "Looker",
    "Qlik",
    "GoogleDataStudio",
  ];

  const programmingLanguages = ["Python", "R", "SQL", "JavaScript", "Scala"];

  const bigDataFrameworks = ["Hadoop", "Spark", "Flink", "Kafka"];

  const databases = ["MySQL", "PostgreSQL", "MongoDB", "Redshift", "Snowflake"];

  const tools = ["Jupyter", "VSCode", "Docker", "GitHub", "ApacheAirflow"];

  return (
    <div className="bg-[#0B1120] text-white min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="px-8 lg:w-1/2 space-y-6">
            <h3 className="text-4xl tracking-wide">DATA ANALYTICS</h3>
            <div className="space-y-2">
              <h1 className="text-5xl font-bold">UNLOCK YOUR DATA</h1>
              <h2 className="text-4xl font-bold">
                INSIGHTS THAT DRIVE
                <br />
                BETTER DECISIONS
              </h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Data Analytics empowers businesses to transform raw data into
              actionable insights. Our expertise includes leveraging modern
              tools, programming languages, and big data frameworks to build
              scalable analytics systems that help businesses make informed
              decisions.
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
                  src="/dataAnalytics.png"
                  alt="Data Analytics Illustration"
                  className="w-full h-full object-contain scale-90 hover:scale-95 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stacks */}
      <div className="container mx-auto px-4 py-16 space-y-20">
        {/* Analytics Tools */}
        <div className="text-center space-y-8">
          <div className="inline-block">
            <span className="bg-blue-900/30 text-white px-10 py-4 rounded-full">
              TOOLS AND TECHNOLOGIES
            </span>
          </div>{" "}
          <h2 className="text-3xl font-semibold text-center">
            Analytics Tools
          </h2>
          <TechSlider
            technologies={analyticsTools}
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

        {/* Big Data Frameworks */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">
            Big Data Frameworks
          </h2>
          <TechSlider
            technologies={bigDataFrameworks}
            icons={techIcons}
            animationDirection="forward"
          />
        </div>

        {/* Databases */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">Databases</h2>
          <TechSlider
            technologies={databases}
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
      </div>

      {/* Development Process Section */}
      <div className="container mx-auto px-4 py-16 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold">What is</h2>
          <h3 className="text-4xl font-semibold">Our Data Analysis Process?</h3>
        </div>
        <p className="text-center text-gray-300 leading-relaxed max-w-4xl mx-auto">
          Our data analytics process is designed to ensure high accuracy and
          efficiency. From data collection and cleaning to analysis and
          visualization, we follow a structured approach to turn your data into
          actionable insights.
        </p>
        <div className="relative flex justify-center mt-8">
          <img
            src="/Data-Analytics-Process.png"
            alt="Development Process"
            className="w-full max-w-5xl"
          />
        </div>
      </div>
    </div>
  );
};

export default DataAnalyticsPage;
