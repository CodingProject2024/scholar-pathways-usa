import { Button } from "@/components/ui/button";
import { Home, User, Search, BookOpen, HelpCircle, Users } from "lucide-react";

interface BottomNavigationProps {
  currentPage?: string;
  onNavigate: (page: string) => void;
}

const BottomNavigation = ({ currentPage, onNavigate }: BottomNavigationProps) => {
  const navItems = [
    { id: "homepage", label: "Home", icon: Home },
    { id: "about", label: "About", icon: Users },
    { id: "search", label: "Search", icon: Search },
    { id: "college-guide", label: "Guide", icon: BookOpen },
    { id: "resources", label: "Resources", icon: HelpCircle },
    { id: "contact", label: "Contact", icon: HelpCircle },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-border/50 z-50 shadow-lg">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => onNavigate(item.id)}
                className={`flex flex-col items-center gap-1 py-2 px-3 h-auto ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNavigation;