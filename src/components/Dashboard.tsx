import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Filter, 
  ExternalLink, 
  DollarSign, 
  Calendar, 
  MapPin, 
  Users, 
  MessageCircle,
  GraduationCap,
  Award,
  Building2,
  BookOpen
} from "lucide-react";

interface DashboardProps {
  profileData: any;
}

const Dashboard = ({ profileData }: DashboardProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // Mock data - in real app would come from API
  const scholarships = [
    {
      id: 1,
      title: "The Dream.US National Scholarship",
      amount: "$33,000",
      deadline: "February 28, 2024",
      eligibility: ["DACA", "TPS"],
      description: "Supports high-achieving DREAMers with tuition assistance",
      requirements: "3.0 GPA minimum, community service",
      eligible: profileData.immigrationStatus === "daca",
      category: "scholarship"
    },
    {
      id: 2,
      title: "Hispanic Scholarship Fund",
      amount: "$5,000",
      deadline: "March 30, 2024",
      eligibility: ["Any Status"],
      description: "Supporting Hispanic students in higher education",
      requirements: "Hispanic heritage, financial need",
      eligible: true,
      category: "scholarship"
    },
    {
      id: 3,
      title: "New American Workforce Initiative",
      amount: "$2,500",
      deadline: "April 15, 2024",
      eligibility: ["Refugee", "Asylum"],
      description: "Career development for new Americans",
      requirements: "STEM field preference",
      eligible: ["refugee", "asylum"].includes(profileData.immigrationStatus),
      category: "scholarship"
    }
  ];

  const colleges = [
    {
      id: 1,
      name: "University of California System",
      location: "California",
      acceptsStatus: ["DACA", "Undocumented", "F1"],
      inStatetuition: "Available for CA residents",
      description: "Comprehensive support for immigrant students",
      eligible: true,
      category: "college"
    },
    {
      id: 2,
      name: "Princeton University",
      location: "New Jersey",
      acceptsStatus: ["All Statuses"],
      financialAid: "Need-blind admissions",
      description: "Full financial aid regardless of citizenship",
      eligible: true,
      category: "college"
    }
  ];

  const filteredResults = [...scholarships, ...colleges].filter(item => {
    const itemName = (item as any).title || (item as any).name || '';
    const matchesSearch = itemName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold">
                Welcome{profileData.name ? `, ${profileData.name}` : ''}!
              </h1>
              <p className="text-white/90 mt-2">
                Found {filteredResults.length} opportunities for {profileData.immigrationStatus?.toUpperCase()} students in {profileData.major}
              </p>
            </div>
            <Button variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border-white/20">
              <MessageCircle className="w-4 h-4 mr-2" />
              Ask AI Assistant
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-8">
        {/* Search and Filters */}
        <Card className="mb-8 shadow-card border-0">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-1 space-y-2">
                <label className="text-sm font-medium">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search scholarships, colleges, programs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="scholarship">Scholarships</SelectItem>
                    <SelectItem value="college">Colleges</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <Tabs value="opportunities" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="opportunities">All Opportunities</TabsTrigger>
            <TabsTrigger value="deadlines">Upcoming Deadlines</TabsTrigger>
            <TabsTrigger value="saved">Saved Items</TabsTrigger>
          </TabsList>
          
          <TabsContent value="opportunities" className="space-y-6 mt-6">
            {filteredResults.map((item) => (
              <Card key={item.id} className={`shadow-card border-0 ${item.eligible ? 'ring-2 ring-success/20' : 'opacity-75'}`}>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {item.category === 'scholarship' ? 
                          <Award className="w-6 h-6 text-primary" /> : 
                          <Building2 className="w-6 h-6 text-primary" />
                        }
                        <CardTitle className="text-xl">{(item as any).title || (item as any).name}</CardTitle>
                        {item.eligible && (
                          <Badge className="bg-success text-success-foreground">Eligible</Badge>
                        )}
                      </div>
                      
                      <p className="text-muted-foreground mb-3">{item.description}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm">
                        {(item as any).amount && (
                          <div className="flex items-center gap-1 text-success">
                            <DollarSign className="w-4 h-4" />
                            <span>{(item as any).amount}</span>
                          </div>
                        )}
                        {(item as any).deadline && (
                          <div className="flex items-center gap-1 text-warning">
                            <Calendar className="w-4 h-4" />
                            <span>{(item as any).deadline}</span>
                          </div>
                        )}
                        {(item as any).location && (
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span>{(item as any).location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <Button variant="outline" className="shrink-0">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm mb-2">Eligibility</h4>
                      <div className="flex flex-wrap gap-2">
                        {((item as any).eligibility || (item as any).acceptsStatus)?.map((status: string) => (
                          <Badge key={status} variant="secondary" className="text-xs">
                            {status}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {(item as any).requirements && (
                      <div>
                        <h4 className="font-medium text-sm mb-1">Requirements</h4>
                        <p className="text-sm text-muted-foreground">{(item as any).requirements}</p>
                      </div>
                    )}
                    
                    {!item.eligible && (
                      <div className="bg-warning/10 border-l-4 border-warning p-3 rounded">
                        <p className="text-sm text-warning-foreground">
                          This opportunity may not be available for your current status. Check requirements or contact the organization directly.
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="deadlines" className="space-y-4 mt-6">
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Upcoming Deadlines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Stay on top of important application deadlines.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="saved" className="space-y-4 mt-6">
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Saved Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">You haven't saved any opportunities yet.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;