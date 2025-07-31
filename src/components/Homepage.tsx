import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Users, GraduationCap, Heart, Shield, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

interface HomepageProps {
  onGetStarted: () => void;
  onNavigate: (page: string) => void;
}

const Homepage = ({ onGetStarted, onNavigate }: HomepageProps) => {
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

      {/* Explainer Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              How We Help You Succeed
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-card bg-gradient-card text-center">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">🔍 Personalized Scholarships</h3>
                <p className="text-muted-foreground">
                  Search scholarships that match your immigration status and academic goals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card text-center">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                  <GraduationCap className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-xl font-semibold">🎓 College Guidance</h3>
                <p className="text-muted-foreground">
                  See which schools accept students with your visa type and offer support.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card text-center">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">🤝 Safe Support</h3>
                <p className="text-muted-foreground">
                  Ask our AI chat for answers and resources in a confidential environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Simple Steps to Success
            </h2>
            <p className="text-muted-foreground text-lg">
              Get started in just 3 easy steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold">Enter Your Profile</h3>
              <p className="text-muted-foreground">
                Share your academic level, immigration status, and goals with us.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-success text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold">View Your Matches</h3>
              <p className="text-muted-foreground">
                Get personalized scholarships and colleges filtered for your situation.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold">Apply with Confidence</h3>
              <p className="text-muted-foreground">
                Use our resources and guidance to submit strong applications.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              onClick={onGetStarted}
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-medium"
            >
              Build Your Profile
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-muted-foreground text-lg">
              Hear from students who found their path to success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-card bg-white">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-muted-foreground italic">
                      "I was so lost trying to find scholarships that accepted DACA students. 
                      ScholarPath showed me opportunities I never knew existed!"
                    </p>
                    <div>
                      <p className="font-semibold">Maria Rodriguez</p>
                      <p className="text-sm text-muted-foreground">DACA Recipient, Pre-Med</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-white">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-success" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-muted-foreground italic">
                      "As an F1 student, I thought my options were limited. This platform 
                      connected me with colleges that truly welcome international students."
                    </p>
                    <div>
                      <p className="font-semibold">Ahmed Hassan</p>
                      <p className="text-sm text-muted-foreground">F1 Visa, Engineering</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              onClick={() => onNavigate("testimonials")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Read More Stories
            </Button>
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
                <CheckCircle className="w-4 h-4 text-success" />
                100% Confidential
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                No Citizenship Required
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                Always Free
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">ScholarPath</span>
              </div>
              <p className="text-sm text-white/70">
                Empowering immigrant students to achieve their educational dreams.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <button onClick={() => onNavigate("about")} className="block text-white/70 hover:text-white">About Us</button>
                <button onClick={() => onNavigate("search")} className="block text-white/70 hover:text-white">Scholarship Search</button>
                <button onClick={() => onNavigate("college-guide")} className="block text-white/70 hover:text-white">College Guide</button>
                <button onClick={() => onNavigate("resources")} className="block text-white/70 hover:text-white">Resources</button>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <div className="space-y-2 text-sm">
                <button onClick={() => onNavigate("contact")} className="block text-white/70 hover:text-white">Contact Us</button>
                <a href="#" className="block text-white/70 hover:text-white">Privacy Policy</a>
                <a href="#" className="block text-white/70 hover:text-white">Terms of Service</a>
                <a href="#" className="block text-white/70 hover:text-white">FAQ</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-white/70 hover:text-white">Facebook</a>
                <a href="#" className="text-white/70 hover:text-white">Twitter</a>
                <a href="#" className="text-white/70 hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/70">
            <p>&copy; 2024 ScholarPath. All rights reserved. Made with ❤️ for immigrant students.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;