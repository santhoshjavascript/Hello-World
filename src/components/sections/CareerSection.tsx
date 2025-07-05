import React, { useState } from "react";
import {
  Users,
  Award,
  BookOpen,
  Handshake,
  Star,
  ChevronRight,
} from "lucide-react";

const CareerSection: React.FC = () => {
  const [showTestimonials, setShowTestimonials] = useState(false);

  const careerSupport = [
    {
      icon: BookOpen,
      title: "Comprehensive Training Programs",
      description:
        "Industry-aligned curriculum with hands-on projects and real-world scenarios",
      features: [
        "Live coding sessions with industry experts",
        "Weekly assignments and code reviews",
        "Personal project portfolio development",
        "Technical interview preparation",
      ],
    },
    {
      icon: Users,
      title: "Dedicated Career Mentorship",
      description: "One-on-one guidance from senior industry professionals",
      features: [
        "Personal career coach assignment",
        "Regular progress tracking sessions",
        "Industry insights and career planning",
        "Professional network building",
      ],
    },
    {
      icon: Handshake,
      title: "Job Placement Assistance",
      description:
        "95% success rate with direct connections to global employers",
      features: [
        "Resume and LinkedIn profile optimization",
        "Mock interviews with HR professionals",
        "Direct referrals to partner companies",
        "Salary negotiation guidance",
      ],
    },
    {
      icon: Award,
      title: "Industry Certifications",
      description:
        "Globally recognized certificates that boost your career prospects",
      features: [
        "AWS, Azure, Google Cloud certifications",
        "Industry-standard programming certificates",
        "Soft skills and leadership training",
        "Continuous learning pathways",
      ],
    },
  ];

  const placementStats = [
    {
      metric: "95%",
      label: "Job Placement Rate",
      description: "Within 6 months of course completion",
    },
    {
      metric: "$75K",
      label: "Average Starting Salary",
      description: "For international placements",
    },
    {
      metric: "300+",
      label: "Partner Companies",
      description: "Global network of hiring partners",
    },
    {
      metric: "45",
      label: "Countries",
      description: "Where our graduates work",
    },
  ];

  const workshops = [
    "Technical Interview Mastery",
    "System Design Fundamentals",
    "Behavioral Interview Excellence",
    "Salary Negotiation Strategies",
    "Remote Work Best Practices",
    "Personal Branding for Tech Professionals",
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Software Engineer at Google",
      country: "Singapore",
      message:
        "Phoenix Software Solutions transformed my career completely. The mentorship and job placement support helped me land my dream job at Google.",
      rating: 5,
      course: "Full Stack Development",
    },
    {
      name: "Miguel Rodriguez",
      role: "Data Scientist at Microsoft",
      country: "Spain",
      message:
        "The Data Science program was incredibly comprehensive. The career support team helped me navigate the international job market successfully.",
      rating: 5,
      course: "Data Science & AI",
    },
    {
      name: "Priya Patel",
      role: "Cloud Architect at Amazon",
      country: "Canada",
      message:
        "From course completion to job offer in just 3 months! The AWS certification prep and career coaching were exceptional.",
      rating: 5,
      course: "Cloud Computing & DevOps",
    },
    {
      name: "James Wilson",
      role: "Cybersecurity Analyst at IBM",
      country: "Australia",
      message:
        "The practical approach to learning and direct industry connections made all the difference in my career transition.",
      rating: 5,
      course: "Cybersecurity",
    },
    {
      name: "Fatima Al-Zahra",
      role: "Mobile App Developer at Spotify",
      country: "UAE",
      message:
        "Outstanding support throughout the journey. The portfolio projects and interview preparation were key to my success.",
      rating: 5,
      course: "Mobile App Development",
    },
    {
      name: "David Kim",
      role: "Machine Learning Engineer at Tesla",
      country: "South Korea",
      message:
        "The advanced AI curriculum and research opportunities opened doors to top-tier companies. Highly recommended!",
      rating: 5,
      course: "Machine Learning & AI",
    },
  ];

  return (
    <div className="animate-fade-slide">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Career Excellence Program
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive career support that transforms students into industry
            leaders. From skill development to job placement, we guide you every
            step of the way to achieve global career success.
          </p>
        </div>

        {/* Placement Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {placementStats.map((stat, index) => (
            <div
              key={index}
              className="phoenix-card-gradient p-6 rounded-xl border border-gray-700 text-center hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-cyan-400 mb-2">
                {stat.metric}
              </div>
              <div className="text-lg font-semibold text-white mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Career Support Services */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {careerSupport.map((service, index) => (
            <div
              key={index}
              className="phoenix-card-gradient p-8 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </div>

              <div className="space-y-3">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-3 p-3 bg-black/20 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Workshops & Training */}
        <div className="phoenix-card-gradient p-8 rounded-2xl border border-gray-700 mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Professional Development Workshops
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {workshops.map((workshop, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-black/20 rounded-lg border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex-shrink-0"></div>
                <span className="text-white font-medium">{workshop}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              View Workshop Schedule
            </button>
          </div>
        </div>

        {/* Success Timeline */}
        <div className="phoenix-card-gradient p-8 rounded-2xl border border-gray-700 mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Your Success Journey
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500"></div>
            <div className="space-y-8">
              {[
                {
                  phase: "Month 1-3",
                  title: "Skill Development",
                  description:
                    "Master core technologies with hands-on projects",
                },
                {
                  phase: "Month 4-5",
                  title: "Portfolio Building",
                  description:
                    "Create impressive projects for your professional portfolio",
                },
                {
                  phase: "Month 6",
                  title: "Career Preparation",
                  description:
                    "Resume optimization, interview prep, and networking",
                },
                {
                  phase: "Month 7+",
                  title: "Job Placement",
                  description:
                    "Direct referrals and continuous support until placement",
                },
              ].map((milestone, index) => (
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
                    <div className="p-6 bg-black/20 rounded-xl">
                      <div className="text-cyan-400 font-bold mb-2">
                        {milestone.phase}
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
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowTestimonials(!showTestimonials)}
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 mx-auto"
          >
            <span>{showTestimonials ? "Hide" : "View"} Success Stories</span>
            <ChevronRight
              className={`h-4 w-4 transition-transform ${
                showTestimonials ? "rotate-90" : ""
              }`}
            />
          </button>
        </div>

        {showTestimonials && (
          <div className="animate-fade-slide mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Graduate Success Stories
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="phoenix-card-gradient p-6 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-current text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-gray-300 mb-4 italic">
                    "{testimonial.message}"
                  </p>

                  <div className="border-t border-gray-600 pt-4">
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-cyan-400 text-sm">
                      {testimonial.role}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.country}
                    </div>
                    <div className="text-xs text-gray-500 mt-2">
                      {testimonial.course} Graduate
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center phoenix-card-gradient p-8 rounded-2xl border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Launch Your Tech Career?
          </h3>
          <p className="text-gray-300 mb-6">
            Join thousands of successful graduates working at top companies
            worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Start Your Journey
            </button>
            <button className="border-2 border-gray-600 px-8 py-3 rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-300">
              Career Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerSection;
