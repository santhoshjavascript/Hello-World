import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  Star,
} from "lucide-react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [testimonialData, setTestimonialData] = useState({
    name: "",
    role: "",
    rating: 0,
    review: "",
    location: "",
  });

  const [showFAQ, setShowFAQ] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTestimonialChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setTestimonialData({
      ...testimonialData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRatingChange = (rating: number) => {
    setTestimonialData({
      ...testimonialData,
      rating,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact Form submitted:", formData);
  };

  const handleTestimonialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Testimonial submitted:", testimonialData);
    // Reset testimonial form after submission
    setTestimonialData({
      name: "",
      role: "",
      rating: 0,
      review: "",
      location: "",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Address",
      details: ["phoenixsoftware25@gmail.com "],
      description: "24/7 Global Support",
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 63827 30859 (India)"],
      description: "Business Hours: 9 AM - 6 PM (All Time Zones)",
    },
    {
      icon: MapPin,
      title: "Global Headquarters",
      details: [
        "Phoenix Software Solutions",
        "N0 63 MARUTHAM NAGER RD",
        "VINYAKAPURAM,SARVANAMPATTI",
        "COIMBATORE ,TAMIL NADU 641035",
      ],
      description: "Tech City, India 560001",
    },
    {
      icon: Clock,
      title: "Response Time",
      details: [
        "< 2 hours during business hours",
        "< 24 hours for all inquiries",
      ],
      description: "Guaranteed Response",
    },
  ];

  const services = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "Course Enrollment",
    "Final Year Projects",
    "Career Consultation",
    "Other",
  ];

  const faqs = [
    {
      question:
        "What makes Phoenix Software Solutions different from other education providers?",
      answer:
        "We offer a unique combination of practical education, industry mentorship, and guaranteed job placement support. Our curriculum is designed by industry experts and updated regularly to match global standards. With students in 70+ countries and a 95% job placement rate, we provide truly international quality education.",
    },
    {
      question:
        "Do you provide certificates that are recognized internationally?",
      answer:
        "Yes, all our certificates are industry-recognized and accepted globally. We are partnered with major technology companies like AWS, Microsoft, and Google. Our graduates work at top companies worldwide including Google, Microsoft, Amazon, and many other Fortune 500 companies.",
    },
    {
      question: "What kind of job placement support do you provide?",
      answer:
        "Our career support includes resume optimization, LinkedIn profile enhancement, mock interviews, direct referrals to partner companies, salary negotiation guidance, and continuous support until job placement. We have a 95% success rate with an average starting salary of $75K for international placements.",
    },
    {
      question: "Can international students enroll in your programs?",
      answer:
        "Absolutely! We serve students from 70+ countries. Our online platform is designed for global accessibility with multiple time zone support, multilingual assistance, and culturally diverse learning materials. We also provide guidance for international career opportunities.",
    },
    {
      question:
        "What is the typical duration for course completion and job placement?",
      answer:
        "Course duration varies from 1-12 months depending on the program. Most students secure job offers within 3-6 months of course completion. Our accelerated programs are designed for working professionals who want to quickly transition to new careers.",
    },
    {
      question: "Do you offer custom training solutions for businesses?",
      answer:
        "Yes, we provide comprehensive corporate training solutions including custom curriculum development, employee upskilling programs, team building workshops, and ongoing technical support. We work with startups to Fortune 500 companies globally.",
    },
  ];

  return (
    <div className="animate-fade-slide">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your career or business? Connect with our global
            team for personalized guidance, consultations, and support. We're
            here to help you succeed in the digital world.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="phoenix-card-gradient p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder=" "
                    className="w-full px-4 py-3 bg-black/20 border border-gray-600 rounded-lg text-white placeholder-transparent focus:border-cyan-400 focus:outline-none transition-colors"
                    required
                  />
                  <label className="absolute left-4 -top-2.5 text-sm text-gray-400 bg-gray-800 px-2 transition-all duration-200">
                    Full Name *
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder=" "
                    className="w-full px-4 py-3 bg-black/20 border border-gray-600 rounded-lg text-white placeholder-transparent focus:border-cyan-400 focus:outline-none transition-colors"
                    required
                  />
                  <label className="absolute left-4 -top-2.5 text-sm text-gray-400 bg-gray-800 px-2 transition-all duration-200">
                    Email Address *
                  </label>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder=" "
                    className="w-full px-4 py-3 bg-black/20 border border-gray-600 rounded-lg text-white placeholder-transparent focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                  <label className="absolute left-4 -top-2.5 text-sm text-gray-400 bg-gray-800 px-2 transition-all duration-200">
                    Phone Number
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder=" "
                    className="w-full px-4 py-3 bg-black/20 border border-gray-600 rounded-lg text-white placeholder-transparent focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                  <label className="absolute left-4 -top-2.5 text-sm text-gray-400 bg-gray-800 px-2 transition-all duration-200">
                    Company/Organization
                  </label>
                </div>
              </div>

              <div className="relative">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/20 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  required
                >
                  <option value="">Select Service of Interest</option>
                  {services.map((service) => (
                    <option
                      key={service}
                      value={service}
                      className="bg-gray-800"
                    >
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder=" "
                  rows={4}
                  className="w-full px-4 py-3 bg-black/20 border border-gray-600 rounded-lg text-white placeholder-transparent focus:border-cyan-400 focus:outline-none transition-colors"
                  required
                />
                <label className="absolute left-4 -top-2.5 text-sm text-gray-400 bg-gray-800 px-2 transition-all duration-200">
                  Message *
                </label>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="phoenix-card-gradient p-6 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex-shrink-0">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {info.title}
                    </h4>
                    {info.details.map((detail, idx) => (
                      <div key={idx} className="text-gray-300 mb-1">
                        {detail}
                      </div>
                    ))}
                    <div className="text-sm text-cyan-400 mt-2">
                      {info.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 phoenix-card-gradient p-8 rounded-2xl border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Share Your Experience
          </h3>
          <p className="text-gray-300 mb-6 text-center">
            We value your feedback! Share your testimonial to help others learn
            about your experience with Phoenix Software Solutions.
          </p>
          <form
            onSubmit={handleTestimonialSubmit}
            className="space-y-6 max-w-2xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={testimonialData.name}
                  onChange={handleTestimonialChange}
                  placeholder=" "
                  className="w-full px-4 py-3 bg-black/20 border border-gray-600 rounded-lg text-white placeholder-transparent focus:border-cyan-400 focus:outline-none transition-colors"
                  required
                />
                <label className="absolute left-4 -top-2.5 text-sm text-gray-400 bg-gray-800 px-2 transition-all duration-200">
                  Full Name *
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="role"
                  value={testimonialData.role}
                  onChange={handleTestimonialChange}
                  placeholder=" "
                  className="w-full px-4 py-3 bg-black/20 border border-gray-600 rounded-lg text-white placeholder-transparent focus:border-cyan-400 focus:outline-none transition-colors"
                  required
                />
                <label className="absolute left personally identifiable information-4 -top-2.5 text-sm text-gray-400 bg-gray-800 px-2 transition-all duration-200">
                  Role/Profession *
                </label>
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                name="location"
                value={testimonialData.location}
                onChange={handleTestimonialChange}
                placeholder=" "
                className="w-full px-4 py-3 bg-black/20 border border-gray-600 rounded-lg text-white placeholder-transparent focus:border-cyan-400 focus:outline-none transition-colors"
                required
              />
              <label className="absolute left-4 -top-2.5 text-sm text-gray-400 bg-gray-800 px-2 transition-all duration-200">
                Location (City, Country) *
              </label>
            </div>

            <div className="flex justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 cursor-pointer ${
                    i < testimonialData.rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-600"
                  }`}
                  onClick={() => handleRatingChange(i + 1)}
                />
              ))}
            </div>

            <div className="relative">
              <textarea
                name="review"
                value={testimonialData.review}
                onChange={handleTestimonialChange}
                placeholder=" "
                rows={4}
                className="w-full px-4 py-3 bg-black/20 border border-gray-600 rounded-lg text-white placeholder-transparent focus:border-cyan-400 focus:outline-none transition-colors"
                required
              />
              <label className="absolute left-4 -top-2.5 text-sm text-gray-400 bg-gray-800 px-2 transition-all duration-200">
                Your Review *
              </label>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group"
            >
              <Send className="h-5 w-5" />
              <span>Submit Testimonial</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        {/* FAQ Section */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowFAQ(!showFAQ)}
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 mx-auto"
          >
            <span>{showFAQ ? "Hide" : "View"} Frequently Asked Questions</span>
            <ArrowRight
              className={`h-4 w-4 transition-transform ${
                showFAQ ? "rotate-90" : ""
              }`}
            />
          </button>
        </div>

        {showFAQ && (
          <div className="animate-fade-slide">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Frequently Asked Questions
            </h3>
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="phoenix-card-gradient border border-gray-700 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setExpandedFAQ(expandedFAQ === index ? null : index)
                    }
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                  >
                    <h4 className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </h4>
                    <ArrowRight
                      className={`h-5 w-5 text-gray-400 transition-transform flex-shrink-0 ${
                        expandedFAQ === index ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 pb-6 animate-fade-slide">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonial Submission Form */}

        {/* Emergency Contact */}
        <div className="mt-16 phoenix-card-gradient p-8 rounded-2xl border border-gray-700 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Need Immediate Assistance?
          </h3>
          <p className="text-gray-300 mb-6">
            For urgent inquiries or technical support, contact our 24/7 helpline
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+15551234567"
              className="bg-gradient-to-r from-green-500 to-green-600 px-8 py-3 rounded-lg font-semibold text-white hover:from-green-600 hover:to-green-700 transition-all duration-300"
            >
              Call Now: +91 63827 30859{" "}
            </a>
            <a
              href="mailto:support@phoenixsoftwaresolutions.com"
              className="border-2 border-gray-600 px-8 py-3 rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-300"
            >
              Email Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
