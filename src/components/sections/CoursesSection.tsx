import React, { useState } from "react";
import { Clock, Users, Award, ChevronRight, BookOpen } from "lucide-react";

const CoursesSection: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const courses = [
    {
      id: "basic-it",
      title: "Basic IT Fundamentals",
      duration: "1-3 months",
      level: "Beginner",
      // price: "$299",
      rating: 4.9,
      students: 2500,
      description: "Master essential computer skills for the digital age",
      topics: [
        "Computer Hardware & Software Basics",
        "Operating Systems (Windows, macOS, Linux)",
        "Internet Navigation & Online Safety",
        "Microsoft Office Suite Mastery",
        "File Management & Organization",
        "Basic Troubleshooting Techniques",
      ],
      outcome: "Computer Literacy Certificate + Job-ready digital skills",
      curriculum: {
        weeks: 8,
        modules: [
          { title: "Computer Fundamentals", hours: 12 },
          { title: "Operating Systems", hours: 16 },
          { title: "Internet & Communication", hours: 10 },
          { title: "Microsoft Office", hours: 20 },
          { title: "Digital Security", hours: 8 },
          { title: "Practical Projects", hours: 14 },
        ],
      },
    },
    {
      id: "networking",
      title: "Networking & Cybersecurity",
      duration: "3-6 months",
      level: "Intermediate to Advanced",
      // price: "$799",
      rating: 4.8,
      students: 1800,
      description:
        "Comprehensive networking and security expertise for enterprise environments",
      topics: [
        "Network Fundamentals & Protocols",
        "Cisco CCNA/CCNP Certification Prep",
        "Network Security & Firewalls",
        "VPN Configuration & Management",
        "CompTIA Network+ & Security+",
        "Enterprise Network Design",
      ],
      outcome: "Industry Certifications + Network Engineer Position Ready",
      curriculum: {
        weeks: 20,
        modules: [
          { title: "Network Foundations", hours: 25 },
          { title: "Cisco Technologies", hours: 40 },
          { title: "Security Fundamentals", hours: 30 },
          { title: "Advanced Security", hours: 35 },
          { title: "CompTIA Prep", hours: 25 },
          { title: "Capstone Project", hours: 15 },
        ],
      },
    },
    {
      id: "programming",
      title: "Programming & Development",
      duration: "3-12 months",
      level: "Beginner to Advanced",
      // price: "$1,299",
      rating: 4.9,
      students: 3200,
      description: "Full-stack development mastery with modern technologies",
      topics: [
        "Python Programming & Data Structures",
        "Java Enterprise Development",
        "JavaScript & Modern Frameworks",
        "React, Node.js, Express",
        "Database Design & Management",
        "Mobile App Development",
      ],
      outcome:
        "Full-Stack Developer Certification + Portfolio + Job Placement Support",
      curriculum: {
        weeks: 32,
        modules: [
          { title: "Programming Fundamentals", hours: 40 },
          { title: "Web Technologies", hours: 60 },
          { title: "Backend Development", hours: 50 },
          { title: "Database Systems", hours: 30 },
          { title: "Mobile Development", hours: 40 },
          { title: "DevOps & Deployment", hours: 20 },
        ],
      },
    },
    {
      id: "data-science",
      title: "Data Science & AI",
      duration: "6-12 months",
      level: "Intermediate (Math/Stats Background)",
      // price: "$1,599",
      rating: 4.9,
      students: 1500,
      description:
        "Master the future of technology with AI and machine learning",
      topics: [
        "Data Analysis with Python & R",
        "Machine Learning Algorithms",
        "Deep Learning & Neural Networks",
        "Data Visualization & Storytelling",
        "TensorFlow, PyTorch, Scikit-learn",
        "Big Data & Cloud Analytics",
      ],
      outcome:
        "Data Scientist Certification + AI Specialist Recognition + High-Paying Career",
      curriculum: {
        weeks: 36,
        modules: [
          { title: "Statistics & Math", hours: 30 },
          { title: "Python for Data Science", hours: 40 },
          { title: "Machine Learning", hours: 60 },
          { title: "Deep Learning", hours: 50 },
          { title: "Big Data Tools", hours: 35 },
          { title: "Capstone Projects", hours: 25 },
        ],
      },
    },
    {
      id: "cloud-devops",
      title: "Cloud Computing & DevOps",
      duration: "3-6 months",
      level: "Professional/IT Students",
      // price: "$999",
      rating: 4.8,
      students: 2100,
      description:
        "Master cloud infrastructure and modern deployment practices",
      topics: [
        "AWS, Azure, Google Cloud Platforms",
        "Docker & Kubernetes Orchestration",
        "CI/CD Pipeline Development",
        "Infrastructure as Code",
        "Cloud Security & Compliance",
        "Monitoring & Performance Optimization",
      ],
      outcome:
        "Cloud Architect Certification + DevOps Engineer + 6-Figure Salary Potential",
      curriculum: {
        weeks: 24,
        modules: [
          { title: "Cloud Fundamentals", hours: 30 },
          { title: "AWS Deep Dive", hours: 40 },
          { title: "Containerization", hours: 35 },
          { title: "DevOps Practices", hours: 30 },
          { title: "Security & Compliance", hours: 25 },
          { title: "Real-world Projects", hours: 20 },
        ],
      },
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing Mastery",
      duration: "3-6 months",
      level: "All Levels",
      // price: "$699",
      rating: 4.7,
      students: 2800,
      description:
        "Comprehensive digital marketing for global business success",
      topics: [
        "SEO & Content Marketing Strategy",
        "Social Media Marketing & Management",
        "Email Marketing Automation",
        "PPC & Google Ads Mastery",
        "Affiliate & Influencer Marketing",
        "Analytics & Performance Tracking",
      ],
      outcome:
        "Digital Marketing Certification + Campaign Portfolio + Agency-Ready Skills",
      curriculum: {
        weeks: 18,
        modules: [
          { title: "Marketing Fundamentals", hours: 20 },
          { title: "SEO & Content", hours: 25 },
          { title: "Social Media Strategy", hours: 25 },
          { title: "Paid Advertising", hours: 30 },
          { title: "Analytics & ROI", hours: 20 },
          { title: "Campaign Development", hours: 15 },
        ],
      },
    },
  ];

  const CourseCard = ({ course }: { course: (typeof courses)[0] }) => (
    <div className="phoenix-card-gradient p-6 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <BookOpen className="h-5 w-5 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">
              {course.level}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
            {course.title}
          </h3>
          <p className="text-gray-400 text-sm mb-3">{course.description}</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-cyan-400">{}</div>
          <div className="text-sm text-gray-400">one-time</div>
        </div>
      </div>

      <div className="flex items-center space-x-6 mb-4 text-sm">
        <div className="flex items-center space-x-1 text-gray-400">
          <Clock className="h-4 w-4" />
          <span>{course.duration}</span>
        </div>
        <div className="flex items-center space-x-1 text-gray-400">
          <Users className="h-4 w-4" />
          <span>{course.students.toLocaleString()} students</span>
        </div>
        <div className="flex items-center space-x-1 text-gray-400">
          <Award className="h-4 w-4" />
          <span>{course.rating}/5.0</span>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <h4 className="text-sm font-semibold text-white">Key Topics:</h4>
        <div className="grid grid-cols-1 gap-2">
          {course.topics.slice(0, 3).map((topic, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-2 text-sm text-gray-300"
            >
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
              <span>{topic}</span>
            </div>
          ))}
          {course.topics.length > 3 && (
            <div className="text-sm text-cyan-400">
              +{course.topics.length - 3} more topics
            </div>
          )}
        </div>
      </div>

      <div className="mb-4 p-3 bg-black/20 rounded-lg">
        <div className="text-sm font-medium text-white mb-1">
          Career Outcome:
        </div>
        <div className="text-sm text-gray-300">{course.outcome}</div>
      </div>

      <button
        onClick={() =>
          setSelectedCourse(selectedCourse === course.id ? null : course.id)
        }
        className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
      >
        <span>View Full Curriculum</span>
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
            World-Class Course Catalog
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Industry-leading courses designed by experts, recognized globally,
            and optimized for career success. From foundational skills to
            advanced specializations across all major technology domains.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Detailed Curriculum View */}
        {selectedCourse && (
          <div className="phoenix-card-gradient p-8 rounded-2xl border border-cyan-400/50 animate-fade-slide">
            {(() => {
              const course = courses.find((c) => c.id === selectedCourse);
              if (!course) return null;

              return (
                <>
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-3xl font-bold text-white">
                      {course.title} - Full Curriculum
                    </h3>
                    <button
                      onClick={() => setSelectedCourse(null)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <ChevronRight className="h-6 w-6 rotate-90" />
                    </button>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">
                        Course Modules
                      </h4>
                      <div className="space-y-4">
                        {course.curriculum.modules.map((module, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-4 bg-black/20 rounded-lg"
                          >
                            <div>
                              <div className="text-white font-medium">
                                {module.title}
                              </div>
                              <div className="text-sm text-gray-400">
                                Module {idx + 1}
                              </div>
                            </div>
                            <div className="text-cyan-400 font-semibold">
                              {module.hours}h
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">
                        Complete Topic Coverage
                      </h4>
                      <div className="space-y-3">
                        {course.topics.map((topic, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-3 p-3 bg-black/20 rounded-lg"
                          >
                            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                            <span className="text-gray-300">{topic}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-400/30">
                        <h5 className="text-lg font-semibold text-white mb-2">
                          Program Highlights
                        </h5>
                        <div className="text-sm text-gray-300 space-y-1">
                          <div>• Duration: {course.duration}</div>
                          <div>
                            • Total Hours:{" "}
                            {course.curriculum.modules.reduce(
                              (sum, mod) => sum + mod.hours,
                              0
                            )}{" "}
                            hours
                          </div>
                          <div>• Skill Level: {course.level}</div>
                          <div>• Live Projects & Assignments</div>
                          <div>• Industry Mentor Support</div>
                          <div>• Career Placement Assistance</div>
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
            Ready to Transform Your Career?
          </h3>
          <p className="text-gray-300 mb-6">
            Join thousands of successful students from 70+ countries
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Enroll Now
            </button>
            <button className="border-2 border-gray-600 px-8 py-3 rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
