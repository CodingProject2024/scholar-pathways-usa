import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Quote, Filter } from "lucide-react";

const Testimonials = () => {
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterMajor, setFilterMajor] = useState("all");

  const testimonials = [
    {
      id: 1,
      name: "Maria Rodriguez",
      status: "DACA",
      major: "Pre-Med",
      university: "UC Berkeley",
      quote: "I was so lost trying to find scholarships that accepted DACA students. ScholarPath showed me opportunities I never knew existed! I received the Dream.US scholarship and am now pursuing my dream of becoming a doctor.",
      rating: 5,
      image: "MR"
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      status: "F1 Visa",
      major: "Engineering",
      university: "MIT",
      quote: "As an F1 student, I thought my options were limited. This platform connected me with colleges that truly welcome international students and provided scholarship opportunities specifically for students like me.",
      rating: 5,
      image: "AH"
    },
    {
      id: 3,
      name: "Sofia Chen",
      status: "Undocumented",
      major: "Computer Science",
      university: "Stanford University",
      quote: "The privacy and safety features gave me confidence to share my story. Through ScholarPath, I found not just scholarships but also a community of students who understood my journey.",
      rating: 5,
      image: "SC"
    },
    {
      id: 4,
      name: "Carlos Mendoza",
      status: "TPS",
      major: "Business",
      university: "UCLA",
      quote: "I didn't even know what TPS meant for my college applications until I used ScholarPath. The platform explained everything clearly and connected me with resources that changed my life.",
      rating: 5,
      image: "CM"
    },
    {
      id: 5,
      name: "Fatima Al-Zahra",
      status: "Refugee",
      major: "Social Work",
      university: "University of Texas",
      quote: "Coming to the US as a refugee, I had no idea how to navigate the college system. ScholarPath not only helped me find funding but also showed me which schools had support programs for refugee students.",
      rating: 5,
      image: "FAZ"
    },
    {
      id: 6,
      name: "Jin Park",
      status: "F1 Visa",
      major: "Art & Design",
      university: "Parsons School of Design",
      quote: "The AI chat feature was incredibly helpful. I could ask questions about my specific situation without feeling judged. It guided me to art schools that specifically support international students.",
      rating: 5,
      image: "JP"
    }
  ];

  const filteredTestimonials = testimonials.filter(testimonial => {
    const statusMatch = filterStatus === "all" || testimonial.status === filterStatus;
    const majorMatch = filterMajor === "all" || testimonial.major === filterMajor;
    return statusMatch && majorMatch;
  });

  const statuses = ["DACA", "F1 Visa", "Undocumented", "TPS", "Refugee"];
  const majors = ["Pre-Med", "Engineering", "Computer Science", "Business", "Social Work", "Art & Design"];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-hero text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Real stories from immigrant students who found their path to higher education 
            through ScholarPath. Your success story could be next.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">Filter by:</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Immigration Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  {statuses.map((status) => (
                    <SelectItem key={status} value={status}>{status}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={filterMajor} onValueChange={setFilterMajor}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Major" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Majors</SelectItem>
                  {majors.map((major) => (
                    <SelectItem key={major} value={major}>{major}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button 
                variant="outline" 
                onClick={() => {
                  setFilterStatus("all");
                  setFilterMajor("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 shadow-card hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Quote */}
                    <div className="relative">
                      <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                      <p className="text-muted-foreground italic pl-6">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                      ))}
                    </div>
                    
                    {/* Student Info */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                          {testimonial.image}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                          <p className="text-muted-foreground">{testimonial.university}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {testimonial.status}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {testimonial.major}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No testimonials match your current filters. Try adjusting your selection.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join thousands of immigrant students who have found their path to higher education. 
              Your journey starts with a single step.
            </p>
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-medium"
              >
                Start Your Journey
              </Button>
              <p className="text-sm text-muted-foreground">
                Free • Confidential • Made for students like you
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;