import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Recycle, 
  Plus, 
  MapPin, 
  TrendingUp, 
  Wallet, 
  Award,
  Package,
  Clock,
  CheckCircle2,
  Leaf,
  User,
  LogOut
} from "lucide-react";

const Dashboard = () => {
  const [userRole] = useState<"household" | "collector">("household");

  const mockRequests = [
    {
      id: 1,
      type: "Plastic",
      weight: "5 kg",
      price: "$2.50",
      status: "pending",
      location: "123 Main St",
      date: "Today, 2:30 PM"
    },
    {
      id: 2,
      type: "Paper",
      weight: "10 kg",
      price: "$3.00",
      status: "accepted",
      location: "456 Oak Ave",
      date: "Yesterday"
    },
    {
      id: 3,
      type: "Glass",
      weight: "8 kg",
      price: "$4.00",
      status: "completed",
      location: "789 Pine Rd",
      date: "2 days ago"
    }
  ];

  const impactStats = [
    { label: "Waste Recycled", value: "125 kg", icon: Recycle, color: "text-primary" },
    { label: "CO₂ Saved", value: "89 kg", icon: Leaf, color: "text-success" },
    { label: "Earnings", value: "$45.50", icon: Wallet, color: "text-accent" },
    { label: "Rank", value: "#127", icon: Award, color: "text-secondary" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-warning/10 text-warning-foreground border-warning/20";
      case "accepted": return "bg-info/10 text-info-foreground border-info/20";
      case "completed": return "bg-success/10 text-success-foreground border-success/20";
      default: return "bg-muted";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending": return Clock;
      case "accepted": return Package;
      case "completed": return CheckCircle2;
      default: return Clock;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Recycle className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">Waste-to-Wealth</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <Link to="/profile">
                  <User className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link to="/">
                  <LogOut className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome back! 👋</h2>
          <p className="text-muted-foreground">
            {userRole === "household" 
              ? "Ready to recycle today?" 
              : "Check out nearby pickup requests"}
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {impactStats.map((stat, index) => (
            <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        {userRole === "household" && (
          <Card className="mb-8 bg-gradient-hero text-white shadow-eco">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">What do you want to recycle today?</h3>
                  <p className="opacity-90">Post a request and get picked up within 24 hours</p>
                </div>
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/create-request">
                    <Plus className="w-5 h-5 mr-2" />
                    Create Request
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Main Content */}
        <Tabs defaultValue="requests" className="space-y-6">
          <TabsList>
            <TabsTrigger value="requests">
              {userRole === "household" ? "My Requests" : "Nearby Requests"}
            </TabsTrigger>
            <TabsTrigger value="impact">Impact Dashboard</TabsTrigger>
            <TabsTrigger value="wallet">Wallet</TabsTrigger>
          </TabsList>

          <TabsContent value="requests" className="space-y-4">
            {mockRequests.map((request, index) => {
              const StatusIcon = getStatusIcon(request.status);
              return (
                <Card key={request.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-lg font-semibold mb-1">{request.type}</h3>
                            <div className="flex items-center text-sm text-muted-foreground gap-2">
                              <MapPin className="w-4 h-4" />
                              {request.location}
                            </div>
                          </div>
                          <Badge className={getStatusColor(request.status)}>
                            <StatusIcon className="w-3 h-3 mr-1" />
                            {request.status}
                          </Badge>
                        </div>
                        <div className="flex gap-4 text-sm">
                          <span className="text-muted-foreground">Weight: <span className="font-medium text-foreground">{request.weight}</span></span>
                          <span className="text-muted-foreground">Price: <span className="font-medium text-accent">{request.price}</span></span>
                          <span className="text-muted-foreground">Posted: <span className="font-medium text-foreground">{request.date}</span></span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {request.status === "pending" && userRole === "collector" && (
                          <Button>Accept</Button>
                        )}
                        {request.status === "pending" && userRole === "household" && (
                          <Button variant="outline">Edit</Button>
                        )}
                        <Button variant="ghost" asChild>
                          <Link to={`/request/${request.id}`}>
                            View Details
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>

          <TabsContent value="impact">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Environmental Impact</CardTitle>
                  <CardDescription>Your contribution to sustainability</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-success/10 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Leaf className="w-8 h-8 text-success" />
                        <div>
                          <div className="font-semibold">CO₂ Reduction</div>
                          <div className="text-2xl font-bold text-success">89 kg</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Recycle className="w-8 h-8 text-primary" />
                        <div>
                          <div className="font-semibold">Total Recycled</div>
                          <div className="text-2xl font-bold text-primary">125 kg</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Achievements</CardTitle>
                  <CardDescription>Your recycling milestones</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg">
                      <Award className="w-6 h-6 text-accent" />
                      <div>
                        <div className="font-semibold">First Recycler</div>
                        <div className="text-sm text-muted-foreground">Completed first request</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted rounded-lg opacity-50">
                      <Award className="w-6 h-6 text-muted-foreground" />
                      <div>
                        <div className="font-semibold">Eco Warrior</div>
                        <div className="text-sm text-muted-foreground">Recycle 100kg (125/100)</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted rounded-lg opacity-30">
                      <Award className="w-6 h-6 text-muted-foreground" />
                      <div>
                        <div className="font-semibold">Carbon Hero</div>
                        <div className="text-sm text-muted-foreground">Save 100kg CO₂ (89/100)</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="wallet">
            <Card>
              <CardHeader>
                <CardTitle>Wallet Balance</CardTitle>
                <CardDescription>Track your earnings and transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center p-8 bg-gradient-hero rounded-lg text-white mb-6">
                  <div className="text-sm opacity-90 mb-2">Available Balance</div>
                  <div className="text-5xl font-bold mb-4">$45.50</div>
                  <Button variant="secondary" size="lg">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Withdraw
                  </Button>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold mb-3">Recent Transactions</h3>
                  {[
                    { type: "Earned", amount: "+$4.00", date: "2 days ago", desc: "Glass recycling" },
                    { type: "Earned", amount: "+$3.00", date: "Yesterday", desc: "Paper recycling" },
                    { type: "Pending", amount: "+$2.50", date: "Today", desc: "Plastic recycling" }
                  ].map((tx, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border border-border rounded-lg">
                      <div>
                        <div className="font-medium">{tx.desc}</div>
                        <div className="text-sm text-muted-foreground">{tx.date}</div>
                      </div>
                      <div className={`font-semibold ${tx.type === "Earned" ? "text-success" : "text-warning"}`}>
                        {tx.amount}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
