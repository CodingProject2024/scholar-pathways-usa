import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Users, GraduationCap, Heart } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

interface HomepageProps {
  onGetStarted: () => void;
}

const Homepage = ({ onGetStarted }: HomepageProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Scholarships and college support for{" "}
                  <span className="text-primary">students like you</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Navigate your college journey with confidence. Find scholarships, 
                  colleges, and resources tailored to your immigration status and goals.
                </p>
              </div>
              
              <div className="space-y-4">
                <Button 
                  onClick={onGetStarted}
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-medium shadow-soft"
                >
                  Start Your Search
                </Button>
                <p className="text-sm text-muted-foreground">
                  Free • Confidential • Made for immigrant students
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Diverse students celebrating education" 
                className="rounded-2xl shadow-soft w-full object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-full font-medium shadow-card">
                Trusted by 1000+ students
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Everything you need in one place
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              No more visiting dozens of websites. Get personalized opportunities 
              based on your unique situation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-card bg-gradient-card">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Smart Filtering</h3>
                <p className="text-muted-foreground">
                  Filter scholarships and colleges by your visa status, major, 
                  and eligibility requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Personal Guidance</h3>
                <p className="text-muted-foreground">
                  Get AI-powered answers to your specific questions about 
                  immigration status and college applications.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                  <GraduationCap className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-xl font-semibold">Verified Opportunities</h3>
                <p className="text-muted-foreground">
                  Access up-to-date, verified information about scholarships 
                  and colleges that accept your status.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8 text-warning" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">
              Built by students, for students
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We understand the unique challenges you face. Our platform is designed 
              with privacy, safety, and your success in mind.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                100% Confidential
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                No Citizenship Required
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                Always Free
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;