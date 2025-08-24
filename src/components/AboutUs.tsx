import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Target, Eye, Heart, Users, Globe, Shield } from "lucide-react";
import founderImage from "@/assets/founder-kanishk.png";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-hero text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            About Immi Scholar
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Helping immigrant students achieve their dreams of higher education through 
            personalized guidance, verified opportunities, and unwavering support.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We believe every student deserves access to higher education, regardless of their 
                immigration status. Immi Scholar was created to bridge the gap between immigrant 
                students and the educational opportunities they deserve.
              </p>
              <p className="text-lg text-muted-foreground">
                Too many talented students face barriers simply because they don't know where to 
                look or which opportunities accept their immigration status. We're here to change that.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="border-0 shadow-card bg-primary/5">
                <CardContent className="p-6 text-center">
                  <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Our Goal</h3>
                  <p className="text-sm text-muted-foreground">
                    Make college accessible for every immigrant student
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-card bg-success/5">
                <CardContent className="p-6 text-center">
                  <Heart className="w-12 h-12 text-success mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Our Values</h3>
                  <p className="text-sm text-muted-foreground">
                    Inclusivity, privacy, and student success
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Story Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Founder's Story</h2>
          </div>
          <Card className="border-0 shadow-card bg-card">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="w-32 h-32 flex-shrink-0">
                  <img 
                    src={founderImage} 
                    alt="Kanishk Suggula, Founder of Immi Scholar" 
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4 text-center lg:text-left">Kanishk Suggula</h3>
                  <blockquote className="text-muted-foreground leading-relaxed italic">
                    "Hi, I'm Kanishk Suggula, the founder of Immi Scholar, and this is my story. I moved from India to the U.S. when I was four and have lived here for 13 years. I started my kindergarten here and now as a senior applying to college, I've faced many challenges because of my visa status missing out on scholarships, internships, summer camps, and many awards such as the PSAT merit Scholarship and Presidential Community Service award, despite being qualified. Choosing a major was also difficult, I love business, but visa restrictions pushed me toward STEM, but at the end I choose what I'm passionate about. That wasn't the case for many of my friends, as they had to switch majors after years of preparation just to improve their chances of staying in the U.S. These struggles inspired me to create an immigrant friendly platform that helps students find scholarships, awards, internships, jobs, and competitions they're eligible for, and guides them in selecting majors and careers based on their visa status."
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-12">
            <Eye className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A world where every immigrant student can pursue their educational dreams without 
              fear, confusion, or barriers. We envision campuses filled with diverse voices and 
              perspectives, enriched by the experiences of students from around the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground text-lg">
              Built by students who understand your journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-card text-center">
              <CardContent className="p-8">
                <div className="w-24 h-24 mx-auto mb-4">
                  <img 
                    src={founderImage} 
                    alt="Kanishk Suggula" 
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Kanishk Suggula</h3>
                <p className="text-muted-foreground mb-4">Founder & CEO</p>
                <p className="text-sm text-muted-foreground">
                  Immigrant student who experienced first-hand the challenges of navigating US higher education with visa restrictions. 
                  Created about Immi Scholar to help fellow immigrant students find opportunities they're eligible for.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card text-center">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-12 h-12 text-success" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Advisory Team</h3>
                <p className="text-muted-foreground mb-4">Education Counselors</p>
                <p className="text-sm text-muted-foreground">
                  Experienced counselors and immigration attorneys who review our content 
                  to ensure accuracy and compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card text-center">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-12 h-12 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Student Contributors</h3>
                <p className="text-muted-foreground mb-4">Community Voices</p>
                <p className="text-sm text-muted-foreground">
                  Current and former immigrant students who share their experiences 
                  and help us improve our platform.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold">Inclusivity</h3>
              <p className="text-sm text-muted-foreground">
                Every student, regardless of status, deserves support and opportunities.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-success" />
              </div>
              <h3 className="font-semibold">Privacy</h3>
              <p className="text-sm text-muted-foreground">
                Your information is protected and never shared without your consent.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold">Accuracy</h3>
              <p className="text-sm text-muted-foreground">
                All opportunities are verified and up-to-date for your peace of mind.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-warning" />
              </div>
              <h3 className="font-semibold">Community</h3>
              <p className="text-sm text-muted-foreground">
                Building a supportive network of immigrant students helping each other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">1000+</div>
              <p className="text-muted-foreground">Students Helped</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-success">500+</div>
              <p className="text-muted-foreground">Verified Scholarships</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">50+</div>
              <p className="text-muted-foreground">Partner Colleges</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
