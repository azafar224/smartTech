import React from "react";
import TechSlider from "./../Components/TechSlider";
import { Link } from "react-router-dom";

const CyberSecurity = () => {
  const techIcons = {
    // Network Security
    Cisco: "/cisco-logo.svg",
    Fortinet: "/fortinet-clean.svg",
    PaloAlto: "/paloalto-clean.svg",
    Juniper: "/juniper-clean.svg",
    WireShark: "/wireshark-clean.svg",

    // Endpoint Security
    McAfee: "/mcafee-clean.svg",
    BitDefender: "/bitdefender-clean.svg",
    Sophos: "/sophos-clean.svg",
    CrowdStrike: "/crowdstrike-clean.svg",
    Symantec: "/symantec-clean.svg",
    Kaspersky: "/kaspersky-clean.svg",

    // Identity & Access Management
    KeyCloak: "/keycloak-clean.svg",
    OneLogin: "/onelogin-clean.svg",
    ActiveDirectory: "/activedirectory-clean.svg",
    Duo: "/duo-clean.svg",
    Okta: "/okta-clean.svg",
    Auth0: "/auth0-clean.svg",

    // Security Tool
    Burpsuite: "/burpsuite-clean.svg",
    Nessus: "/nessus-clean.svg",
    Metasploit: "/metasploit-clean.svg",
    Snort: "/snort-clean.svg",
    QualysGuard: "/qualys-clean.svg",
    Splunk: "/splunk-clean.svg",

    // Cloud Platforms
    Tenable: "/tenable-clean.svg",
    AlienVault: "/alienvault-clean.svg",
    Rapid7: "/rapid7-clean.svg",
    IBMQRadar: "/qradar-clean.svg",
    SIEM: "/siem-clean.svg",
  };

  const aiFrameworks = [
    "Cisco",
    "Fortinet",
    "PaloAlto",
    "Juniper",
    "WireShark",
  ];

  const programmingLanguages = [
    "McAfee",
    "BitDefender",
    "Sophos",
    "CrowdStrike",
    "Symantec",
    "Kaspersky",
  ];

  const dataHandling = [
    "KeyCloak",
    "OneLogin",
    "ActiveDirectory",
    "Duo",
    "Okta",
    "Auth0",
  ];

  const tools = [
    "Burpsuite",
    "Nessus",
    "Metasploit",
    "Snort",
    "QualysGuard",
    "Splunk",
  ];

  const cloudPlatforms = [
    "Tenable",
    "AlienVault",
    "Rapid7",
    "IBMQRadar",
    "SIEM",
  ];

  return (
    <div className="bg-[#0B1120] text-white min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="px-8 lg:w-1/2 space-y-6">
            <h3 className="text-4xl tracking-wide">CYBERSECURITY</h3>
            <div className="space-y-2">
              <h1 className="text-5xl font-bold">ADVANCED PROTECTION</h1>
              <h2 className="text-4xl font-bold">
                SECURING YOUR DIGITAL
                <br />
                ASSETS AND FUTURE
              </h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our Company provides comprehensive cybersecurity services to
              protect your organization from evolving threats. From network
              security to threat detection, we implement robust security
              measures using cutting-edge technologies to ensure your business
              stays protected in today's digital landscape.
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
                  src="/cyber.jpg"
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
              SECURITY SOLUTIONS AND TECHNOLOGIES
            </span>
          </div>
          <h2 className="text-3xl font-semibold text-center">
            Network Security
          </h2>
          <TechSlider
            technologies={aiFrameworks}
            icons={techIcons}
            animationDirection="forward"
          />
        </div>

        {/* Programming Languages */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">
            Endpoint Security
          </h2>
          <TechSlider
            technologies={programmingLanguages}
            icons={techIcons}
            animationDirection="reverse"
          />
        </div>

        {/* Data Handling */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">
            Identify & Access Management
          </h2>
          <TechSlider
            technologies={dataHandling}
            icons={techIcons}
            animationDirection="forward"
          />
        </div>

        {/* Tools */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">Security Tools</h2>
          <TechSlider
            technologies={tools}
            icons={techIcons}
            animationDirection="reverse"
          />
        </div>

        {/* Cloud Platforms */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">
            Compliance & Monitoring
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
          <h3 className="text-4xl font-semibold">Our Security Process?</h3>
        </div>
        <p className="text-center text-gray-300 leading-relaxed max-w-4xl mx-auto">
          Our comprehensive security approach follows industry best practices.
          We work closely with you to assess vulnerabilities, implement robust
          security measures, and maintain continuous monitoring. From initial
          assessment to ongoing protection, we ensure your organization stays
          secure against emerging threats.
        </p>
        <div className="relative flex justify-center mt-8">
          <img
            src="/cyber1.jpg"
            alt="Development Process"
            className="w-full max-w-5xl"
          />
        </div>
      </div>
    </div>
  );
};

export default CyberSecurity;
