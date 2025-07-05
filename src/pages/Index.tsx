import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeSection from "../components/sections/HomeSection";
import AboutSection from "../components/sections/AboutSection";
import CoursesSection from "../components/sections/CoursesSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ServicesSection from "../components/sections/ServicesSection";
import CareerSection from "../components/sections/CareerSection";
import ContactSection from "../components/sections/ContactSection";
import NewsSection from "../components/sections/NewsSection";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderActiveSection = () => {
    switch (activeTab) {
      case "home":
        return <HomeSection onNavigate={setActiveTab} />;
      case "about":
        return <AboutSection />;
      case "courses":
        return <CoursesSection />;
      case "projects":
        return <ProjectsSection />;
      case "services":
        return <ServicesSection />;
      case "career":
        return <CareerSection />;
      case "contact":
        return <ContactSection />;
      case "news":
        return <NewsSection />;
      default:
        return <HomeSection onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="min-h-screen flex flex-col">
        <Header activeTab={activeTab} onTabChange={setActiveTab} />

        <main className="flex-1 pt-24">{renderActiveSection()}</main>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
