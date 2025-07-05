import React, { useState } from "react";
import { ArrowUp, Mail, Phone, MapPin, Globe, ChevronUp } from "lucide-react";

const Footer: React.FC = () => {
  const [showFullFooter, setShowFullFooter] = useState(false);
  const [language, setLanguage] = useState("English");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative phoenix-gradient border-t border-gray-800">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 pulse-glow"
      >
        <ArrowUp className="h-5 w-5 text-white" />
      </button>

      {/* Compact Footer Bar */}
      <div className="px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="text-xl font-bold text-white">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Phoenix
                </span>
                <span className="text-white ml-1">Software</span>
              </div>
              <div className="hidden md:flex items-center space-x-4 text-sm text-gray-400">
                <span>© 2025 Phoenix Software Solutions</span>
                <span>•</span>
                <span>Global Tech Excellence</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-6 text-sm text-gray-400">
                <a
                  href="mailto:info@phoenixsoftwaresolutions.com"
                  className="hover:text-cyan-400 transition-colors"
                >
                  phoenixsoftware25@gmail.com
                </a>

                <span>+91 6382730859</span>
              </div>

              <button
                onClick={() => setShowFullFooter(!showFullFooter)}
                className="flex items-center space-x-2 p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <span className="text-sm text-gray-400 hidden sm:inline">
                  More Info
                </span>
                <ChevronUp
                  className={`h-4 w-4 text-gray-400 transition-transform ${
                    showFullFooter ? "" : "rotate-180"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Footer */}
      {showFullFooter && (
        <div className="border-t border-gray-800 animate-fade-slide">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Phoenix Software Solutions
                </h4>
                <div className="space-y-3 text-sm text-gray-400">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <div>
                      <div>N0 63 MARUTHAM NAGER RD </div>
                      <div>VINYAKAPURAM,SARVANAMPATTI</div>
                      <div>COIMBATORE ,TAMIL NADU 641035</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Contact Information
                </h4>
                <div className="space-y-3 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <a
                      href="mailto:info@phoenixsoftwaresolutions.com"
                      className="hover:text-cyan-400 transition-colors"
                    >
                      phoenixsoftware25@gmail.com
                    </a>
                  </div>
                  {/* <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <a
                      href="mailto:support@phoenixsoftwaresolutions.com"
                      className="hover:text-cyan-400 transition-colors"
                    >
                      support@phoenixsoft.com
                    </a>
                  </div> */}
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>+91-6382730859 (India)</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Quick Links
                </h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <a
                    href="#"
                    className="block hover:text-cyan-400 transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="block hover:text-cyan-400 transition-colors"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="#"
                    className="block hover:text-cyan-400 transition-colors"
                  >
                    Refund Policy
                  </a>
                  <a
                    href="#"
                    className="block hover:text-cyan-400 transition-colors"
                  >
                    Student Portal
                  </a>
                  <a
                    href="#"
                    className="block hover:text-cyan-400 transition-colors"
                  >
                    Career Center
                  </a>
                  <a
                    href="#"
                    className="block hover:text-cyan-400 transition-colors"
                  >
                    Help & Support
                  </a>
                </div>
              </div>

              {/* Social & Languages */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Connect & Languages
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-2">Follow Us:</div>
                    <div className="flex space-x-3">
                      <a
                        href="#"
                        className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-colors"
                      >
                        <span className="text-white text-xs font-bold">Li</span>
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg flex items-center justify-center hover:from-blue-500 hover:to-blue-600 transition-colors"
                      >
                        <span className="text-white text-xs font-bold">Tw</span>
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center hover:from-red-600 hover:to-red-700 transition-colors"
                      >
                        <span className="text-white text-xs font-bold">Yt</span>
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-400 mb-2">Language:</div>
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="bg-black/20 border border-gray-600 rounded px-3 py-1 text-sm text-white focus:border-cyan-400 focus:outline-none"
                    >
                      <option value="English">English</option>
                      <option value="Spanish">Español</option>
                      <option value="Mandarin">中文</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 mt-8 pt-6 text-center">
              <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                <div className="text-sm text-gray-400">
                  © 2025 Phoenix Software Solutions. All rights reserved
                  globally.
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Globe className="h-4 w-4" />
                  <span>Serving 70+ countries worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
