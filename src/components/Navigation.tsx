import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, GraduationCap } from "lucide-react";

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
        <div className="flex flex-col items-center py-4">
          {/* Full Title */}
          <div 
            className="flex items-center gap-3 cursor-pointer mb-4" 
            onClick={() => handleNavClick("homepage")}
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">Immi Scholar</h1>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? "secondary" : "ghost"}
                onClick={() => handleNavClick(item.id)}
                className="text-sm font-medium text-white hover:text-white relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
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