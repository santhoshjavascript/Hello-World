import React, { useState, useEffect } from "react";
import { ArrowRight, Users, Globe, BookOpen, Award } from "lucide-react";

interface HomeSectionProps {
  onNavigate: (section: string) => void;
}

const HomeSection: React.FC<HomeSectionProps> = ({ onNavigate }) => {
  const [stats, setStats] = useState({
    learners: 1200,
    countries: 70,
    projects: 500,
    satisfaction: 98,
  });

  useEffect(() => {
    // Animate counters
    const animateCounter = (
      target: number,
      setter: (value: number) => void
    ) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, 30);
    };

    setTimeout(() => {
      animateCounter(1200, (val) =>
        setStats((prev) => ({ ...prev, learners: val }))
      );
      animateCounter(70, (val) =>
        setStats((prev) => ({ ...prev, countries: val }))
      );
      animateCounter(500, (val) =>
        setStats((prev) => ({ ...prev, projects: val }))
      );
      animateCounter(98, (val) =>
        setStats((prev) => ({ ...prev, satisfaction: val }))
      );
    }, 500);
  }, []);

  const features = [
    {
      icon: BookOpen,
      title: "World-Class Education",
      description:
        "Industry-leading courses designed by experts for global standards",
    },
    {
      icon: Users,
      title: "Global Community",
      description: "Connect with learners and professionals from 70+ countries",
    },
    {
      icon: Award,
      title: "Career Excellence",
      description: "95% job placement rate with premium career support",
    },
    {
      icon: Globe,
      title: "International Reach",
      description: "Serving students and businesses across all continents",
    },
  ];

  return (
    <div className="animate-fade-slide">
      {/* Hero Section */}
      <div className="relative phoenix-gradient min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Empowering
                  <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Global Tech
                  </span>
                  Excellence
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Establishing a premier global platform for technical
                  education, career development, and advanced digital solutions.
                  Unlocking the full potential of students and businesses
                  worldwide.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate("courses")}
                  className="group flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 pulse-glow"
                >
                  <span>Explore Courses</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigate("projects")}
                  className="flex items-center space-x-2 border-2 border-gray-600 px-8 py-4 rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-300"
                >
                  <span>View Projects</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  label: "Active Learners",
                  value: `${stats.learners.toLocaleString()}+`,
                  icon: Users,
                },
                {
                  label: "Countries Served",
                  value: `${stats.countries}+`,
                  icon: Globe,
                },
                {
                  label: "Projects Delivered",
                  value: `${stats.projects}+`,
                  icon: Award,
                },
                {
                  label: "Satisfaction Rate",
                  value: `${stats.satisfaction}%`,
                  icon: BookOpen,
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="phoenix-card-gradient p-6 rounded-xl border border-gray-700"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <stat.icon className="h-6 w-6 text-cyan-400" />
                    <div className="text-3xl font-bold text-white">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Global Vision
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="phoenix-card-gradient p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Vision Statement
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              To empower the next generation of innovators by establishing a
              premier global platform for technical education, career
              development, and advanced digital solutions, ensuring universal
              access to high-quality technology services that unlock the full
              potential of students and businesses worldwide.
            </p>
          </div>

          <div className="phoenix-card-gradient p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Latest Updates
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: "AWS Partnership 2025",
                  date: "Jan 2025",
                  type: "Partnership",
                },
                { title: "AI Course Launch", date: "Dec 2024", type: "Course" },
                {
                  title: "60 Countries Milestone",
                  date: "Nov 2024",
                  type: "Achievement",
                },
              ].map((update, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-black/20 rounded-lg"
                >
                  <div>
                    <div className="text-white font-medium">{update.title}</div>
                    <div className="text-sm text-gray-400">{update.type}</div>
                  </div>
                  <div className="text-sm text-cyan-400">{update.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="phoenix-card-gradient p-6 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <feature.icon className="h-12 w-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
