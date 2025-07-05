import React, { useState } from "react";
import {
  Code,
  Smartphone,
  Palette,
  TrendingUp,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
  Clock,
} from "lucide-react";

const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: "web-dev",
      title: "Web Design & Development",
      icon: Code,
      color: "from-blue-500 to-blue-600",
      description:
        "Craft high-performing, scalable websites with seamless UX for global brands",
      features: [
        "Responsive Web Design",
        "E-commerce Solutions",
        "Custom Web Applications",
        "Performance Optimization",
        "SEO Integration",
        "Content Management Systems",
      ],
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "AWS",
        "Next.js",
        "TypeScript",
      ],
      pricing: "Starting from $2,999",
      deliveryTime: "4-8 weeks",
      projects: 150,
    },
    {
      id: "app-dev",
      title: "Mobile App Development",
      icon: Smartphone,
      color: "from-green-500 to-green-600",
      description:
        "Build intuitive, cutting-edge mobile applications for international markets",
      features: [
        "Native iOS & Android Apps",
        "Cross-platform Solutions",
        "UI/UX Design",
        "Backend Integration",
        "App Store Optimization",
        "Real-time Features",
      ],
      technologies: [
        "React Native",
        "Flutter",
        "Swift",
        "Kotlin",
        "Firebase",
        "GraphQL",
      ],
      pricing: "Starting from $4,999",
      deliveryTime: "6-12 weeks",
      projects: 120,
    },
    {
      id: "design",
      title: "UI/UX Design & Branding",
      icon: Palette,
      color: "from-purple-500 to-purple-600",
      description:
        "Deliver branding, logo design, and marketing collateral with precision",
      features: [
        "Brand Identity Design",
        "Logo & Visual Identity",
        "UI/UX Design Systems",
        "Marketing Materials",
        "Packaging Design",
        "Digital Assets",
      ],
      technologies: [
        "Figma",
        "Adobe Creative Suite",
        "Sketch",
        "InVision",
        "Principle",
        "Framer",
      ],
      pricing: "Starting from $1,999",
      deliveryTime: "2-6 weeks",
      projects: 200,
    },
    {
      id: "marketing",
      title: "Digital Marketing",
      icon: TrendingUp,
      color: "from-orange-500 to-orange-600",
      description:
        "Execute SEO, social media, and analytics strategies for worldwide reach",
      features: [
        "Search Engine Optimization",
        "Social Media Marketing",
        "Content Marketing",
        "PPC Advertising",
        "Email Marketing",
        "Analytics & Reporting",
      ],
      technologies: [
        "Google Analytics",
        "SEMrush",
        "Hootsuite",
        "Mailchimp",
        "Google Ads",
        "Facebook Ads",
      ],
      pricing: "Starting from $1,499/month",
      deliveryTime: "Ongoing",
      projects: 180,
    },
  ];

  const caseStudies = [
    {
      title: "Global E-commerce Platform",
      client: "International Retail Chain",
      result: "300% increase in online sales",
      technology: "React, Node.js, AWS",
    },
    {
      title: "Healthcare Mobile App",
      client: "Medical Services Provider",
      result: "50K+ active users in 6 months",
      technology: "React Native, Firebase",
    },
    {
      title: "Fintech Brand Identity",
      client: "Startup Financial Services",
      result: "Successfully raised $2M funding",
      technology: "Brand Design, UI/UX",
    },
    {
      title: "SaaS Marketing Campaign",
      client: "B2B Software Company",
      result: "250% lead generation increase",
      technology: "SEO, Content Marketing",
    },
  ];

  const ServiceCard = ({ service }: { service: (typeof services)[0] }) => (
    <div className="phoenix-card-gradient p-6 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color}`}>
          <service.icon className="h-8 w-8 text-white" />
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-cyan-400">
            {service.projects}
          </div>
          <div className="text-sm text-gray-400">projects</div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
        {service.title}
      </h3>
      <p className="text-gray-400 text-sm mb-4">{service.description}</p>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
        <div className="space-y-1">
          {service.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <CheckCircle className="h-3 w-3 text-green-400" />
              <span className="text-gray-300 text-xs">{feature}</span>
            </div>
          ))}
          {service.features.length > 3 && (
            <div className="text-xs text-cyan-400">
              +{service.features.length - 3} more features
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between mb-4 text-sm">
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4 text-gray-400" />
          <span className="text-gray-400">{service.deliveryTime}</span>
        </div>
        <div className="text-cyan-400 font-semibold">{service.pricing}</div>
      </div>

      <button
        onClick={() =>
          setSelectedService(selectedService === service.id ? null : service.id)
        }
        className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-600 px-4 py-3 rounded-lg font-semibold text-white hover:from-gray-600 hover:to-gray-500 transition-all duration-300"
      >
        <span>View Details</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );

  return (
    <div className="animate-fade-slide">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Premium Digital Services
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Delivering world-class digital solutions that drive growth and
            innovation for businesses worldwide. From web development to digital
            marketing, we provide comprehensive services tailored for global
            success.
          </p>
        </div>

        {/* Statistics Bar */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            {
              label: "Projects Delivered",
              value: "650+",
              description: "Across all services",
            },
            {
              label: "Client Satisfaction",
              value: "98%",
              description: "Average rating",
            },
            {
              label: "Countries Served",
              value: "45+",
              description: "Global reach",
            },
            {
              label: "Team Members",
              value: "50+",
              description: "Expert professionals",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="phoenix-card-gradient p-6 rounded-xl border border-gray-700 text-center"
            >
              <div className="text-3xl font-bold text-cyan-400 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Detailed Service View */}
        {selectedService && (
          <div className="phoenix-card-gradient p-8 rounded-2xl border border-cyan-400/50 animate-fade-slide mb-16">
            {(() => {
              const service = services.find((s) => s.id === selectedService);
              if (!service) return null;

              return (
                <>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-r ${service.color}`}
                      >
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">
                          {service.title}
                        </h3>
                        <p className="text-gray-300">{service.description}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <ArrowRight className="h-6 w-6 rotate-90" />
                    </button>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">
                        Complete Feature Set
                      </h4>
                      <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle className="h-5 w-5 text-green-400" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">
                        Technology Stack
                      </h4>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {service.technologies.map((tech, idx) => (
                          <div
                            key={idx}
                            className="p-3 bg-black/20 rounded-lg text-center"
                          >
                            <span className="text-gray-300 font-medium">
                              {tech}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-400/30">
                        <h5 className="text-lg font-semibold text-white mb-3">
                          Service Details
                        </h5>
                        <div className="space-y-3 text-sm text-gray-300">
                          <div className="flex items-center justify-between">
                            <span>Starting Price:</span>
                            <span className="text-cyan-400 font-semibold">
                              {service.pricing}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Delivery Time:</span>
                            <span className="text-cyan-400 font-semibold">
                              {service.deliveryTime}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Projects Completed:</span>
                            <span className="text-cyan-400 font-semibold">
                              {service.projects}+
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        )}

        {/* Case Studies Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Success Stories
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="phoenix-card-gradient p-6 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-white mb-2">
                  {study.title}
                </h4>
                <p className="text-sm text-gray-400 mb-3">{study.client}</p>
                <div className="text-cyan-400 font-semibold mb-2">
                  {study.result}
                </div>
                <div className="text-xs text-gray-500">{study.technology}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center phoenix-card-gradient p-8 rounded-2xl border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-300 mb-6">
            Let's discuss your project and create something extraordinary
            together
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Start Your Project
            </button>
            <button className="border-2 border-gray-600 px-8 py-3 rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
