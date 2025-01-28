


import React from "react";

const Careers = () => {
  return (
    <section className="bg-[#0B1934] text-white py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-12 p-8 ">
          <h2 className="text-3xl sm:text-4xl font-bold">Join Our Team</h2>
          <p className="text-base sm:text-lg mt-4">
            Be a part of SmartTech's growing team and work on innovative
            projects that make a difference. We are looking for passionate
            individuals who are eager to contribute and grow in a collaborative
            environment.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Frontend Developer",
              description:
                "Join our team to build stunning and responsive web interfaces. We are looking for skilled developers proficient in React, HTML, and CSS.",
            },
            {
              title: "Backend Developer",
              description:
                "We are seeking an experienced backend developer with knowledge of Node.js, Express, and database management to build and maintain our server-side applications.",
            },
            {
              title: "Full Stack Developer",
              description:
                "Join our team as a Full Stack Developer to work on both frontend and backend technologies. We seek individuals with solid experience in developing end-to-end solutions.",
            },
            {
              title: "Project Manager",
              description:
                "Lead projects from conception to delivery, ensuring milestones and quality standards are upheld. This role requires strong communication and organizational skills.",
            },
            {
              title: "Product Designer",
              description:
                "Design intuitive and innovative user experiences for our digital products. Experience with design tools and UX/UI best practices required.",
            },
            {
              title: "QA Engineer",
              description:
                "Ensure the quality of our software products through thorough testing. Expertise in test automation and manual testing required.",
            },
            {
              title: "DevOps Engineer",
              description:
                "Manage and automate infrastructure, ensuring a seamless deployment process. Experience with cloud platforms and CI/CD tools is a must.",
            },
            {
              title: "Marketing Specialist",
              description:
                "Plan and execute marketing campaigns to grow our brand. Experience in digital marketing, SEO, and content strategy is essential.",
            },
          ].map((job, index) => (
            <div
              key={index}
              className="bg-[#111E3D] rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{job.title}</h3>
                <span className="text-gray-400 text-sm"></span>
              </div>
              <p className="text-gray-400">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;
