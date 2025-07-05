import React, { useState } from "react";
import {
  ChevronDown,
  Users,
  Award,
  Globe,
  BookOpen,
  Handshake,
  Clock,
} from "lucide-react";

const AboutSection: React.FC = () => {
  const [expandedMission, setExpandedMission] = useState<number | null>(null);

  const missionPoints = [
    {
      icon: BookOpen,
      title: "Industry-Leading Final Year Projects",
      description:
        "Deliver cutting-edge final year projects across multiple technologies to enhance practical skills, foster innovation, and prepare students for real-world challenges in the global tech industry.",
      details:
        "Our comprehensive project portfolio spans Python, Android, Machine Learning, Deep Learning, IoT, Cloud Computing, and more. Each project is designed with industry standards and mentored by experienced professionals.",
    },
    {
      icon: Award,
      title: "World-Class EdTech Courses",
      description:
        "Provide affordable, premium-quality educational courses that seamlessly bridge the gap between academic learning and industry requirements for global career success.",
      details:
        "From basic IT fundamentals to advanced AI specializations, our curriculum is constantly updated to reflect the latest industry trends and international certification standards.",
    },
    {
      icon: Users,
      title: "Comprehensive Career Support",
      description:
        "Offer robust career development through internships, job placement programs, mentorship, and continuous professional development opportunities.",
      details:
        "With a 95% job placement rate, our career services include interview preparation, resume building, skill assessments, and direct connections with global employers.",
    },
    {
      icon: Globe,
      title: "Scalable Digital Solutions",
      description:
        "Develop cutting-edge, scalable web and mobile applications tailored for international businesses and emerging markets worldwide.",
      details:
        "Our development team creates enterprise-grade solutions using the latest technologies, ensuring scalability, security, and performance for clients across all continents.",
    },
    {
      icon: Handshake,
      title: "Elite Creative Services",
      description:
        "Provide premium graphic design and video editing services to elevate global brand presence and digital marketing effectiveness.",
      details:
        "Our creative team delivers world-class branding, marketing materials, and multimedia content that resonates with international audiences and drives business growth.",
    },
    {
      icon: Clock,
      title: "Global Tech Ecosystem",
      description:
        "Cultivate a world-class ecosystem where students evolve into tech leaders, fostering innovation and entrepreneurship on a global scale.",
      details:
        "Through our comprehensive programs, networking events, and continuous learning opportunities, we build a community of tech professionals who drive innovation worldwide.",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Phoenix Software Founded",
      description: "Established with a vision for global tech education",
    },
    {
      year: "2021",
      title: "First 1000 Students",
      description: "Reached our first major milestone in student enrollment",
    },
    {
      year: "2022",
      title: "25 Countries",
      description: "Expanded to serve students across 25 countries",
    },
    {
      year: "2023",
      title: "AWS Partnership",
      description: "Strategic partnership with Amazon Web Services",
    },
    {
      year: "2024",
      title: "50 Countries",
      description: "Global reach expanded to 50+ countries",
    },
    {
      year: "2025",
      title: "70 Countries & Beyond",
      description: "Continuing global expansion with premium services",
    },
  ];

  const leadership = [
    {
      role: "Chief Executive Officer",
      name: "Global Leadership",
      expertise: "Strategic Vision & International Expansion",
    },
    {
      role: "Chief Technology Officer",
      name: "Tech Innovation",
      expertise: "Emerging Technologies & Architecture",
    },
    {
      role: "Head of Education",
      name: "Academic Excellence",
      expertise: "Curriculum Design & Student Success",
    },
    {
      role: "Global Operations Director",
      name: "Operational Excellence",
      expertise: "International Operations & Quality",
    },
  ];

  return (
    <div className="animate-fade-slide">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            About Phoenix Software Solutions
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A premier global technology education and digital solutions company,
            empowering the next generation of innovators while serving students,
            startups, and businesses across 70+ countries worldwide.
          </p>
        </div>

        {/* Mission Accordion */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Our Mission in Detail
          </h3>
          <div className="grid gap-4">
            {missionPoints.map((point, index) => (
              <div
                key={index}
                className="phoenix-card-gradient border border-gray-700 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedMission(expandedMission === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <point.icon className="h-8 w-8 text-cyan-400 flex-shrink-0" />
                    <div>
                      <h4 className="text-xl font-semibold text-white">
                        {point.title}
                      </h4>
                      <p className="text-gray-400 mt-1">{point.description}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`h-6 w-6 text-gray-400 transition-transform ${
                      expandedMission === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedMission === index && (
                  <div className="px-6 pb-6 animate-fade-slide">
                    <div className="ml-12 p-4 bg-black/20 rounded-lg">
                      <p className="text-gray-300 leading-relaxed">
                        {point.details}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Global Leadership Team
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="phoenix-card-gradient p-6 rounded-xl border border-gray-700 text-center hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {leader.role}
                </h4>
                <p className="text-cyan-400 text-sm mb-2">{leader.name}</p>
                <p className="text-gray-400 text-sm">{leader.expertise}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones Timeline */}
        {/* <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Our Journey & Milestones
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                    }`}
                  >
                    <div className="phoenix-card-gradient p-6 rounded-xl border border-gray-700">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">
                        {milestone.year}
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-cyan-400 rounded-full relative z-10 flex-shrink-0"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Global Impact Stats */}
        <div className="phoenix-card-gradient p-8 rounded-2xl border border-gray-700">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Global Impact Statistics
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                value: "95%",
                label: "Job Placement Rate",
                description: "Successful career transitions",
              },
              {
                value: "1,200+",
                label: "Active Learners",
                description: "Currently enrolled students",
              },
              {
                value: "500+",
                label: "Projects Delivered",
                description: "Successful project completions",
              },
              {
                value: "70+",
                label: "Countries Served",
                description: "Global reach and presence",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
