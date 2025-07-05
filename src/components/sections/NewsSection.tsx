import React from "react";
import {
  Calendar,
  ArrowRight,
  Award,
  Users,
  Globe,
  BookOpen,
} from "lucide-react";

const NewsSection: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      title: "Strategic AWS Partnership Announcement 2025",
      date: "January 15, 2025",
      category: "Partnership",
      summary:
        "Phoenix Software Solutions announces exclusive partnership with Amazon Web Services to provide advanced cloud certifications and direct job placement opportunities.",
      details:
        "This groundbreaking partnership enables our students to access AWS training resources, certification vouchers, and direct hiring opportunities with AWS partner companies globally.",
      impact:
        "500+ additional job opportunities, Free AWS certifications for enrolled students",
      icon: Award,
    },
    {
      id: 2,
      title: "New Generative AI Specialization Course Launch",
      date: "December 20, 2024",
      category: "Course Launch",
      summary:
        "Introducing cutting-edge Generative AI course covering ChatGPT integration, custom AI model development, and enterprise AI solutions.",
      details:
        "Developed in collaboration with leading AI researchers, this course prepares students for the most in-demand AI roles of 2025 and beyond.",
      impact:
        "First 100 enrollments receive 50% discount, Industry-recognized certification",
      icon: BookOpen,
    },
    {
      id: 3,
      title: "70+ Countries Milestone Achievement",
      date: "November 30, 2024",
      category: "Milestone",
      summary:
        "Phoenix Software Solutions reaches historic milestone of serving students and businesses across 70+ countries worldwide.",
      details:
        "From our humble beginnings in 2020 to becoming a truly global education provider, we now serve students from Antarctica to Zimbabwe.",
      impact:
        "Global recognition, Expanded multilingual support, 24/7 worldwide assistance",
      icon: Globe,
    },
    {
      id: 4,
      title: "Record-Breaking Job Placement Success",
      date: "November 15, 2024",
      category: "Achievement",
      summary:
        "95% job placement rate achieved with average starting salaries reaching $75,000 for international placements.",
      details:
        "Our comprehensive career support program continues to deliver exceptional results with graduates joining top-tier companies globally.",
      impact:
        "Highest placement rate in industry, Premium salary negotiations, Fortune 500 partnerships",
      icon: Users,
    },
    {
      id: 5,
      title: "Microsoft Certified Partner Status",
      date: "October 28, 2024",
      category: "Certification",
      summary:
        "Officially recognized as Microsoft Certified Partner for Azure cloud solutions and development services.",
      details:
        "This certification validates our expertise in Microsoft technologies and opens new opportunities for enterprise training programs.",
      impact:
        "Direct Microsoft certification pathways, Enterprise training contracts, Advanced Azure credits",
      icon: Award,
    },
    {
      id: 6,
      title: "Mobile App Development Bootcamp Success",
      date: "October 12, 2024",
      category: "Program Update",
      summary:
        "Our intensive mobile app development bootcamp graduates 200+ students with 92% job placement within 4 months.",
      details:
        "The accelerated 12-week program combines React Native, Flutter, and native development with real-world project experience.",
      impact:
        "200+ skilled developers, High-demand skill acquisition, Fast-track career transitions",
      icon: Users,
    },
  ];

  const upcomingEvents = [
    {
      title: "Global Tech Career Fair 2025",
      date: "February 15, 2025",
      description: "Virtual career fair with 100+ international employers",
    },
    {
      title: "AI & Machine Learning Summit",
      date: "March 8, 2025",
      description: "Industry experts sharing latest trends and opportunities",
    },
    {
      title: "Cloud Computing Certification Week",
      date: "March 20, 2025",
      description: "Free certification workshops for AWS, Azure, and GCP",
    },
  ];

  return (
    <div className="animate-fade-slide">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Latest News & Updates
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay updated with Phoenix Software Solutions' latest achievements,
            partnerships, course launches, and success stories from our global
            community of learners and professionals.
          </p>
        </div>

        {/* Featured News */}
        <div className="phoenix-card-gradient p-8 rounded-2xl border border-cyan-400/50 mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600">
              <Award className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-sm text-cyan-400 font-medium">
                FEATURED NEWS
              </div>
              <div className="text-2xl font-bold text-white">
                Strategic AWS Partnership Announcement 2025
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Phoenix Software Solutions proudly announces an exclusive
                partnership with Amazon Web Services, opening unprecedented
                opportunities for our students worldwide. This collaboration
                provides direct access to AWS training resources, certification
                vouchers, and priority hiring opportunities.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>January 15, 2025</span>
                </div>
                <div className="px-3 py-1 bg-cyan-500/20 rounded-full text-cyan-400">
                  Partnership
                </div>
              </div>
            </div>

            <div className="bg-black/20 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-white mb-3">
                Partnership Benefits
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>500+ additional job opportunities globally</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>
                    Free AWS certification vouchers for enrolled students
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Direct hiring pipeline with AWS partner companies</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Exclusive access to AWS training resources</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {newsItems.slice(1).map((news) => (
            <div
              key={news.id}
              className="phoenix-card-gradient p-6 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex-shrink-0">
                  <news.icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="text-xs px-2 py-1 bg-cyan-500/20 rounded-full text-cyan-400">
                      {news.category}
                    </div>
                    <div className="text-xs text-gray-400 flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{news.date}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {news.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {news.summary}
              </p>

              <div className="bg-black/20 p-4 rounded-lg mb-4">
                <div className="text-sm font-medium text-white mb-2">
                  Key Impact:
                </div>
                <div className="text-sm text-cyan-400">{news.impact}</div>
              </div>

              <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium">
                <span>Read Full Story</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Upcoming Events */}
        <div className="phoenix-card-gradient p-8 rounded-2xl border border-gray-700 mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Upcoming Events
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="p-6 bg-black/20 rounded-xl border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="text-lg font-semibold text-white mb-2">
                  {event.title}
                </div>
                <div className="text-cyan-400 text-sm mb-3 flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <p className="text-gray-400 text-sm">{event.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center phoenix-card-gradient p-8 rounded-2xl border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-gray-300 mb-6">
            Subscribe to our newsletter for the latest news, course updates, and
            career opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-black/20 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
