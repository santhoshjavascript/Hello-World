import React, { useState, useEffect } from "react";
import { Search, Globe } from "lucide-react";

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [language, setLanguage] = useState("English");
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const tabs = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "courses", label: "Courses" },
    { id: "projects", label: "Projects" },
    { id: "services", label: "Services" },
    { id: "career", label: "Career" },
    { id: "contact", label: "Contact" },
    { id: "news", label: "News" },
  ];

  const languages = ["English", "Spanish", "Mandarin"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 phoenix-gradient border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top row with logo and utilities */}
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Phoenix
              </span>
              <span className="text-white ml-1">Software</span>
            </div>
            <div className="hidden md:block text-sm text-gray-300">
              Global Tech Excellence
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:block text-xs text-gray-400 font-mono">
              {formatTime(currentTime)}
            </div>

            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <Search className="h-5 w-5 text-gray-300" />
            </button>

            <div className="relative">
              <button
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                className="flex items-center space-x-2 p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <Globe className="h-5 w-5 text-gray-300" />
                <span className="text-sm text-gray-300 hidden sm:inline">
                  {language}
                </span>
              </button>

              {showLanguageDropdown && (
                <div className="absolute right-0 top-full mt-2 w-32 phoenix-card-gradient rounded-lg border border-gray-700 shadow-xl z-10">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setShowLanguageDropdown(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-white/10 first:rounded-t-lg last:rounded-b-lg transition-colors"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation tabs */}
        <nav className="flex space-x-0 -mb-px">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-6 py-3 text-sm font-medium transition-all duration-300 border-b-2 ${
                activeTab === tab.id
                  ? "text-white border-cyan-400 bg-white/5"
                  : "text-gray-400 border-transparent hover:text-gray-200 hover:border-gray-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
