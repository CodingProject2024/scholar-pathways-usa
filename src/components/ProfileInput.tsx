import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Lock, Users } from "lucide-react";

interface ProfileInputProps {
  onBack: () => void;
  onSubmit: (data: any) => void;
}

const ProfileInput = ({ onBack, onSubmit }: ProfileInputProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    grade: "",
    major: "",
    immigrationStatus: "",
    countryOfOrigin: "",
    usState: "",
    residencyLength: "",
    emailUpdates: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const immigrationStatuses = [
    { value: "f1", label: "F1 Visa (International Student)" },
    { value: "daca", label: "DACA Recipient" },
    { value: "undocumented", label: "Undocumented" },
    { value: "tps", label: "TPS (Temporary Protected Status)" },
    { value: "asylum", label: "Asylum Seeker" },
    { value: "refugee", label: "Refugee" },
    { value: "green-card", label: "Green Card Holder" },
    { value: "other", label: "Other Status" }
  ];

  const grades = [
    { value: "high-school", label: "High School" },
    { value: "freshman", label: "College Freshman" },
    { value: "sophomore", label: "College Sophomore" },
    { value: "junior", label: "College Junior" },
    { value: "senior", label: "College Senior" },
    { value: "graduate", label: "Graduate Student" }
  ];

  const majors = [
    "Pre-Med/Biology", "Engineering", "Computer Science", "Business", 
    "Liberal Arts", "Nursing", "Education", "Social Work", "Law/Pre-Law",
    "Psychology", "Communications", "Art/Design", "Music", "Other"
  ];

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-foreground">Tell us about yourself</h1>
            <p className="text-muted-foreground">
              and we'll find the right opportunities for you
            </p>
          </div>
        </div>

        <Card className="shadow-card border-0">
          <CardHeader className="space-y-4">
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Your Profile
            </CardTitle>
            <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary">
              <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-primary mt-0.5" />
                <div className="space-y-1">
                  <p className="text-sm font-medium">Your privacy is protected</p>
                  <p className="text-xs text-muted-foreground">
                    All information is encrypted and never shared with immigration authorities
                  </p>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name (Optional)</Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <p className="text-xs text-muted-foreground">We'll only use this to send you scholarship matches</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="grade">Grade / Academic Level *</Label>
                <Select value={formData.grade} onValueChange={(value) => setFormData({...formData, grade: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your level" />
                  </SelectTrigger>
                  <SelectContent>
                    {grades.map((grade) => (
                      <SelectItem key={grade.value} value={grade.value}>
                        {grade.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="immigration-status">Immigration Status *</Label>
                <Select value={formData.immigrationStatus} onValueChange={(value) => setFormData({...formData, immigrationStatus: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your status" />
                  </SelectTrigger>
                  <SelectContent>
                    {immigrationStatuses.map((status) => (
                      <SelectItem key={status.value} value={status.value}>
                        {status.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="major">Intended Major/Field *</Label>
                <Select value={formData.major} onValueChange={(value) => setFormData({...formData, major: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your field of interest" />
                  </SelectTrigger>
                  <SelectContent>
                    {majors.map((major) => (
                      <SelectItem key={major} value={major.toLowerCase().replace(/\s+/g, '-')}>
                        {major}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="country">Country of Origin (Optional)</Label>
                  <Input
                    id="country"
                    placeholder="e.g., Mexico, India, etc."
                    value={formData.countryOfOrigin}
                    onChange={(e) => setFormData({...formData, countryOfOrigin: e.target.value})}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="state">U.S. State of Residence *</Label>
                  <Input
                    id="state"
                    placeholder="e.g., California, Texas, etc."
                    value={formData.usState}
                    onChange={(e) => setFormData({...formData, usState: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="residency">How long have you been in the U.S.? (Optional)</Label>
                <Select value={formData.residencyLength} onValueChange={(value) => setFormData({...formData, residencyLength: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="less-than-1">Less than 1 year</SelectItem>
                    <SelectItem value="1-3">1-3 years</SelectItem>
                    <SelectItem value="4-6">4-6 years</SelectItem>
                    <SelectItem value="7-10">7-10 years</SelectItem>
                    <SelectItem value="more-than-10">More than 10 years</SelectItem>
                    <SelectItem value="born-here">Born in the U.S.</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="updates" 
                  checked={formData.emailUpdates}
                  onCheckedChange={(checked) => setFormData({...formData, emailUpdates: !!checked})}
                />
                <Label htmlFor="updates" className="text-sm text-muted-foreground leading-relaxed">
                  I agree to receive updates about scholarships and colleges that match my profile.
                </Label>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="privacy" />
                <Label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
                  I understand that this platform is confidential and my information will not be shared with immigration authorities or used for enforcement purposes.
                </Label>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-lg font-medium"
                disabled={!formData.grade || !formData.immigrationStatus || !formData.major || !formData.usState || !formData.email}
              >
                View My Matches
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfileInput;