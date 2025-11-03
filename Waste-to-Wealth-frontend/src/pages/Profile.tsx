import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Mail, Phone, MapPin, Award, Star } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-eco">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/dashboard">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Profile Sidebar */}
            <div className="space-y-6">
              <Card className="animate-scale-in">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="w-24 h-24 mb-4">
                      <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                        JD
                      </AvatarFallback>
                    </Avatar>
                    <h2 className="text-2xl font-bold mb-1">John Doe</h2>
                    <Badge className="mb-4">Household</Badge>
                    <div className="flex items-center gap-1 text-accent mb-4">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4" />
                      <span className="ml-2 text-sm text-muted-foreground">4.0</span>
                    </div>
                    <div className="w-full space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="w-4 h-4" />
                        john.doe@email.com
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="w-4 h-4" />
                        +1 234 567 890
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        New York, USA
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "First Recycler", color: "text-accent" },
                      { name: "Eco Warrior", color: "text-success" },
                      { name: "Top 10%", color: "text-secondary" }
                    ].map((achievement, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Award className={`w-5 h-5 ${achievement.color}`} />
                        <span className="text-sm font-medium">{achievement.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Profile Content */}
            <div className="md:col-span-2">
              <Card className="animate-slide-up">
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                  <CardDescription>Manage your account information and preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="personal">
                    <TabsList className="mb-4">
                      <TabsTrigger value="personal">Personal Info</TabsTrigger>
                      <TabsTrigger value="preferences">Preferences</TabsTrigger>
                      <TabsTrigger value="security">Security</TabsTrigger>
                    </TabsList>

                    <TabsContent value="personal" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" defaultValue="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="john.doe@email.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" defaultValue="+1 234 567 890" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" defaultValue="123 Main Street, New York, USA" />
                      </div>
                      <Button>Save Changes</Button>
                    </TabsContent>

                    <TabsContent value="preferences" className="space-y-4">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                          <div>
                            <div className="font-medium">Email Notifications</div>
                            <div className="text-sm text-muted-foreground">
                              Receive updates about your requests
                            </div>
                          </div>
                          <Button variant="outline" size="sm">Enabled</Button>
                        </div>
                        <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                          <div>
                            <div className="font-medium">Push Notifications</div>
                            <div className="text-sm text-muted-foreground">
                              Get notified about pickup updates
                            </div>
                          </div>
                          <Button variant="outline" size="sm">Enabled</Button>
                        </div>
                        <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                          <div>
                            <div className="font-medium">Language</div>
                            <div className="text-sm text-muted-foreground">
                              Change your preferred language
                            </div>
                          </div>
                          <Button variant="outline" size="sm">English</Button>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="security" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                      <Button>Update Password</Button>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
