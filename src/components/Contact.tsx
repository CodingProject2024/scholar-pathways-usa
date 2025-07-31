import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Phone, MapPin, MessageCircle, Clock, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const faqs = [
    {
      question: "Is ScholarPath really free?",
      answer: "Yes! ScholarPath is completely free for all students. We believe financial barriers shouldn't prevent students from accessing educational opportunities."
    },
    {
      question: "Is my information safe and confidential?",
      answer: "Absolutely. We use enterprise-grade encryption to protect your data. We never share your information with immigration authorities or use it for enforcement purposes."
    },
    {
      question: "Can undocumented students really use this platform safely?",
      answer: "Yes. We designed ScholarPath with privacy as our top priority. Your immigration status information is encrypted and protected. We recommend using a personal email address rather than a school email for added privacy."
    },
    {
      question: "How do you verify that scholarships actually accept my immigration status?",
      answer: "Our team of education counselors and immigration attorneys review each opportunity. We contact organizations directly to confirm their eligibility requirements and update our database regularly."
    },
    {
      question: "What if I can't find scholarships for my specific situation?",
      answer: "Our AI chat can help you explore alternative options and strategies. You can also contact our support team for personalized assistance in finding opportunities that match your unique circumstances."
    },
    {
      question: "Do you help with college applications too?",
      answer: "While we focus primarily on scholarship and college matching, our resources section includes guides on applications, essays, and the admissions process for immigrant students."
    },
    {
      question: "Can I get help in languages other than English?",
      answer: "Currently, our platform is in English, but our support team can assist with basic questions in Spanish. We're working on expanding language support based on community needs."
    },
    {
      question: "What should I do if I'm worried about my safety while applying?",
      answer: "Contact our emergency support line immediately. We have partnerships with immigrant rights organizations and can connect you with legal resources and safety planning assistance."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-hero text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Contact & Support
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We're here to help you navigate your educational journey. Reach out anytime 
            with questions, concerns, or just to share your success story.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Have a question or need help? We typically respond within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
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
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What can we help you with?"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your question or situation..."
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Emergency Support */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-xl">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Email Support</h3>
                    <p className="text-muted-foreground">support@scholarpath.org</p>
                    <p className="text-sm text-muted-foreground">Response time: 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-success mt-1" />
                  <div>
                    <h3 className="font-semibold">AI Chat Support</h3>
                    <p className="text-muted-foreground">Available 24/7 on our platform</p>
                    <p className="text-sm text-muted-foreground">Instant responses to common questions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">Serving students nationwide</p>
                    <p className="text-sm text-muted-foreground">Remote support available</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Support */}
            <Card className="shadow-card border-0 bg-warning/5 border-warning/20">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Shield className="w-6 h-6 text-warning" />
                  Emergency Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  If you're facing an urgent situation related to your immigration status 
                  or feel unsafe, contact these resources immediately:
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">National Immigration Law Center</h4>
                    <p className="text-sm text-muted-foreground">1-213-639-3900</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">United We Dream Hotline</h4>
                    <p className="text-sm text-muted-foreground">1-844-363-1423</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">ACLU Immigrant Rights</h4>
                    <p className="text-sm text-muted-foreground">Know Your Rights: aclu.org</p>
                  </div>
                </div>
                
                <div className="bg-warning/10 p-4 rounded-lg border-l-4 border-warning">
                  <p className="text-sm font-medium">Remember:</p>
                  <p className="text-xs text-muted-foreground">
                    You have the right to remain silent and the right to an attorney. 
                    Don't sign anything without legal representation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about using ScholarPath
            </p>
          </div>
          
          <Card className="shadow-card border-0">
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="px-6">
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;