import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Recycle, TrendingUp, Users, Award, MapPin, Coins } from "lucide-react";
import heroImage from "@/assets/hero-recycle.jpg";

const Landing = () => {
  const features = [
    {
      icon: Recycle,
      title: "Easy Recycling",
      description: "Post your recyclable waste and get picked up at your doorstep"
    },
    {
      icon: Coins,
      title: "Earn Money",
      description: "Turn your waste into cash and support a sustainable lifestyle"
    },
    {
      icon: MapPin,
      title: "Smart Routing",
      description: "Optimized collection routes for faster, efficient pickups"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join thousands making a difference in waste management"
    },
    {
      icon: TrendingUp,
      title: "Track Impact",
      description: "See your environmental impact and CO₂ savings in real-time"
    },
    {
      icon: Award,
      title: "Earn Rewards",
      description: "Get badges and climb the leaderboard as a recycling champion"
    }
  ];

  const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "2M kg", label: "Waste Recycled" },
    { value: "5K tons", label: "CO₂ Saved" },
    { value: "150+", label: "Cities" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="Recycling" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              ♻️ Sell Your Waste, Save the Planet
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up">
              Transform your recyclables into rewards while making a real environmental impact
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Link to="/login">Login</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">The Waste Crisis</h2>
            <p className="text-lg text-muted-foreground">
              Every year, millions of tons of recyclable waste end up in landfills. 
              Traditional waste management is inefficient, and recycling is often inconvenient. 
              We're changing that.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-eco">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to turn your waste into wealth
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-eco transition-all duration-300 animate-slide-up border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-hero rounded-2xl p-12 text-white text-center shadow-eco">
            <h2 className="text-4xl font-bold mb-6">Make a Real Impact</h2>
            <p className="text-xl mb-8 opacity-90">
              Every recycled item reduces landfill waste, saves energy, and cuts carbon emissions. 
              Track your personal impact and see the difference you're making.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/signup">Start Recycling Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-primary mb-2">Waste-to-Wealth</h3>
              <p className="text-muted-foreground">Transforming waste management, one pickup at a time</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2025 Waste-to-Wealth Marketplace. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
