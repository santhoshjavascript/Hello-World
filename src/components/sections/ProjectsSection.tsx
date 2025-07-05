import React, { useState } from "react";
import {
  Code,
  Smartphone,
  Brain,
  Cloud,
  Shield,
  BarChart,
  ChevronRight,
} from "lucide-react";

const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const projectCategories = [
    {
      id: "python",
      title: "Python Development",
      icon: Code,
      color: "from-blue-500 to-blue-600",
      projects: 45,
      description:
        "Advanced Python applications for web, automation, and data processing",
      technologies: [
        "Django",
        "Flask",
        "FastAPI",
        "Pandas",
        "NumPy",
        "Selenium",
      ],
      sampleProjects: [
        "E-commerce Web Application with Payment Integration",
        "Automated Stock Trading Bot with ML Predictions",
        "Social Media Analytics Dashboard",
        "Personal Finance Management System",
      ],
    },
    {
      id: "android",
      title: "Android Development",
      icon: Smartphone,
      color: "from-green-500 to-green-600",
      projects: 38,
      description:
        "Native Android apps with modern UI/UX and cloud integration",
      technologies: [
        "Kotlin",
        "Java",
        "Firebase",
        "Room DB",
        "Retrofit",
        "Jetpack Compose",
      ],
      sampleProjects: [
        "Food Delivery App with Real-time Tracking",
        "Fitness Tracker with Wearable Integration",
        "Multi-language Learning Platform",
        "Expense Management with AI Insights",
      ],
    },
    {
      id: "machine-learning",
      title: "Machine Learning",
      icon: Brain,
      color: "from-purple-500 to-purple-600",
      projects: 52,
      description:
        "AI-powered solutions for predictive analytics and automation",
      technologies: [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "OpenCV",
        "NLP",
        "Computer Vision",
      ],
      sampleProjects: [
        "Medical Diagnosis System using Deep Learning",
        "Customer Churn Prediction Model",
        "Real-time Object Detection System",
        "Recommendation Engine for E-commerce",
      ],
    },
    {
      id: "deep-learning",
      title: "Deep Learning & AI",
      icon: Brain,
      color: "from-indigo-500 to-indigo-600",
      projects: 35,
      description:
        "Advanced neural networks and artificial intelligence applications",
      technologies: [
        "PyTorch",
        "TensorFlow",
        "Keras",
        "GANs",
        "RNNs",
        "Transformers",
      ],
      sampleProjects: [
        "Generative AI for Content Creation",
        "Speech Recognition and Synthesis",
        "Autonomous Vehicle Navigation System",
        "Natural Language Processing Chatbot",
      ],
    },
    {
      id: "cloud-computing",
      title: "Cloud Computing",
      icon: Cloud,
      color: "from-cyan-500 to-cyan-600",
      projects: 42,
      description: "Scalable cloud solutions with AWS, Azure, and Google Cloud",
      technologies: [
        "AWS",
        "Azure",
        "GCP",
        "Docker",
        "Kubernetes",
        "Terraform",
      ],
      sampleProjects: [
        "Microservices Architecture on AWS",
        "Serverless Data Processing Pipeline",
        "Auto-scaling Web Application",
        "Multi-cloud Disaster Recovery System",
      ],
    },
    {
      id: "iot",
      title: "IoT & Embedded Systems",
      icon: Shield,
      color: "from-orange-500 to-orange-600",
      projects: 28,
      description:
        "Internet of Things solutions for smart devices and automation",
      technologies: [
        "Arduino",
        "Raspberry Pi",
        "ESP32",
        "MQTT",
        "LoRaWAN",
        "Edge Computing",
      ],
      sampleProjects: [
        "Smart Home Automation System",
        "Industrial Equipment Monitoring",
        "Environmental Monitoring Network",
        "Smart Agriculture Solution",
      ],
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      icon: Shield,
      color: "from-red-500 to-red-600",
      projects: 31,
      description: "Security solutions for threat detection and prevention",
      technologies: [
        "Penetration Testing",
        "Network Security",
        "Cryptography",
        "SIEM",
        "Firewall",
        "IDS/IPS",
      ],
      sampleProjects: [
        "Network Intrusion Detection System",
        "Vulnerability Assessment Tool",
        "Secure Communication Platform",
        "Blockchain-based Identity Management",
      ],
    },
    {
      id: "data-science",
      title: "Data Science & Analytics",
      icon: BarChart,
      color: "from-teal-500 to-teal-600",
      projects: 47,
      description: "Data-driven insights and business intelligence solutions",
      technologies: [
        "Python",
        "R",
        "Tableau",
        "Power BI",
        "Apache Spark",
        "Hadoop",
      ],
      sampleProjects: [
        "Customer Behavior Analysis Dashboard",
        "Sales Forecasting Model",
        "Market Sentiment Analysis Tool",
        "Supply Chain Optimization System",
      ],
    },
  ];

  const CategoryCard = ({
    category,
  }: {
    category: (typeof projectCategories)[0];
  }) => (
    <div className="phoenix-card-gradient p-6 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
          <category.icon className="h-8 w-8 text-white" />
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-cyan-400">
            {category.projects}
          </div>
          <div className="text-sm text-gray-400">projects</div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
        {category.title}
      </h3>
      <p className="text-gray-400 text-sm mb-4">{category.description}</p>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {category.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-black/20 rounded text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
          {category.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs text-cyan-400">
              +{category.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>

      <button
        onClick={() =>
          setSelectedCategory(
            selectedCategory === category.id ? null : category.id
          )
        }
        className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-600 px-4 py-3 rounded-lg font-semibold text-white hover:from-gray-600 hover:to-gray-500 transition-all duration-300"
      >
        <span>View Sample Projects</span>
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );

  return (
    <div className="animate-fade-slide">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Final Year Project Portfolio
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Industry-grade final year projects across cutting-edge technologies.
            Each project is designed to meet international standards and
            includes complete source code, documentation, and presentation
            materials.
          </p>
        </div>

        {/* Statistics Bar */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            {
              label: "Total Projects",
              value: "300+",
              description: "Across all technologies",
            },
            {
              label: "Success Rate",
              value: "98%",
              description: "Project completion rate",
            },
            {
              label: "Technologies",
              value: "50+",
              description: "Different tech stacks",
            },
            {
              label: "Student Rating",
              value: "4.9/5",
              description: "Average satisfaction",
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

        {/* Project Categories Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {projectCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        {/* Detailed Project View */}
        {selectedCategory && (
          <div className="phoenix-card-gradient p-8 rounded-2xl border border-cyan-400/50 animate-fade-slide mb-16">
            {(() => {
              const category = projectCategories.find(
                (c) => c.id === selectedCategory
              );
              if (!category) return null;

              return (
                <>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}
                      >
                        <category.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">
                          {category.title} Projects
                        </h3>
                        <p className="text-gray-300">{category.description}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <ChevronRight className="h-6 w-6 rotate-90" />
                    </button>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">
                        Sample Projects
                      </h4>
                      <div className="space-y-4">
                        {category.sampleProjects.map((project, idx) => (
                          <div
                            key={idx}
                            className="p-4 bg-black/20 rounded-lg border-l-4 border-cyan-400"
                          >
                            <div className="text-white font-medium mb-2">
                              {project}
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-400">
                              <span>• Complete Source Code</span>
                              <span>• Documentation</span>
                              <span>• Presentation</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">
                        Technology Stack
                      </h4>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {category.technologies.map((tech, idx) => (
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
                          What You Get
                        </h5>
                        <div className="text-sm text-gray-300 space-y-2">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                            <span>Complete project source code</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                            <span>Detailed technical documentation</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                            <span>PowerPoint presentation</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                            <span>Installation and setup guide</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                            <span>Technical support & guidance</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                            <span>Plagiarism-free guarantee</span>
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

        {/* Call to Action */}
        <div className="text-center phoenix-card-gradient p-8 rounded-2xl border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Final Year Project?
          </h3>
          <p className="text-gray-300 mb-6">
            Get industry-standard projects with complete support and guidance
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Browse All Projects
            </button>
            <button className="border-2 border-gray-600 px-8 py-3 rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-300">
              Custom Project Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
