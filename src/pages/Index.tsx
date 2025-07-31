import { useState } from "react";
import Homepage from "@/components/Homepage";
import ProfileInput from "@/components/ProfileInput";
import Dashboard from "@/components/Dashboard";

type Page = "homepage" | "profile" | "dashboard";

const Index = () => {
  const [currentPage, setCurrentPage] = useState<Page>("homepage");
  const [profileData, setProfileData] = useState(null);

  const handleGetStarted = () => {
    setCurrentPage("profile");
  };

  const handleBackToHome = () => {
    setCurrentPage("homepage");
  };

  const handleProfileSubmit = (data: any) => {
    setProfileData(data);
    setCurrentPage("dashboard");
  };

  return (
    <div>
      {currentPage === "homepage" && (
        <Homepage onGetStarted={handleGetStarted} />
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
    </div>
  );
};

export default Index;
