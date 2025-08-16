import { useState } from "react";
import Homepage from "@/components/Homepage";
import ProfileInput from "@/components/ProfileInput";
import Dashboard from "@/components/Dashboard";
import Navigation from "@/components/Navigation";
import BottomNavigation from "@/components/BottomNavigation";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Chatbot from "@/components/Chatbot";

type Page = "homepage" | "profile" | "dashboard" | "about" | "search" | "college-guide" | "resources" | "testimonials" | "contact";

const Index = () => {
  const [currentPage, setCurrentPage] = useState<Page>("homepage");
  const [profileData, setProfileData] = useState(null);

  const handleGetStarted = () => {
    setCurrentPage("profile");
  };

  const handleBackToHome = () => {
    setCurrentPage("homepage");
  };

  const handleNavigate = (page: Page) => {
    if (page === "search") {
      setCurrentPage("profile");
    } else {
      setCurrentPage(page);
    }
  };

  const handleProfileSubmit = (data: any) => {
    setProfileData(data);
    setCurrentPage("dashboard");
  };

  return (
    <div className="pb-20">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      {currentPage === "homepage" && (
        <Homepage onGetStarted={handleGetStarted} onNavigate={handleNavigate} />
      )}
      {currentPage === "profile" && (
        <ProfileInput 
          onBack={handleBackToHome}
          onSubmit={handleProfileSubmit}
        />
      )}
      {currentPage === "dashboard" && profileData && (
        <Dashboard profileData={profileData} />
      )}
      {currentPage === "about" && <AboutUs />}
      {currentPage === "college-guide" && <div className="p-8">College Guide - Coming Soon</div>}
      {currentPage === "resources" && <div className="p-8">Resources - Coming Soon</div>}
      {currentPage === "testimonials" && <Testimonials />}
      {currentPage === "contact" && <Contact />}
      <BottomNavigation currentPage={currentPage} onNavigate={handleNavigate} />
      <Chatbot />
    </div>
  );
};

export default Index;
