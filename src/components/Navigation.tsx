import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User } from "lucide-react";
import logoImage from "@/assets/logo.png";

interface NavigationProps {
  currentPage?: string;
  onNavigate: (page: string) => void;
}

const Navigation = ({ currentPage, onNavigate }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "homepage", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "search", label: "Scholarship Search" },
    { id: "college-guide", label: "College Guide" },
    { id: "resources", label: "Resources" },
    { id: "contact", label: "Contact / Support" },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-800/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center py-4 relative">
          {/* Profile Tab - Top Right */}
          <div className="absolute top-4 right-0">
            <Button
              variant="ghost"
              onClick={() => handleNavClick("profile")}
              className="text-sm font-medium text-white hover:text-white flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              Profile
            </Button>
          </div>

          {/* Full Title */}
          <div 
            className="flex items-center gap-3 cursor-pointer mb-4" 
            onClick={() => handleNavClick("homepage")}
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <img src={logoImage} alt="Immi Scholar Logo" className="w-12 h-12 object-contain" />
            </div>
            <h1 className="text-4xl font-bold text-white font-caveat">Immi Scholar</h1>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center justify-between w-full max-w-4xl">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id && item.id !== "homepage" ? "secondary" : "ghost"}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  currentPage === item.id && item.id !== "homepage" 
                    ? "text-black hover:text-black" 
                    : "text-white hover:text-white"
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;