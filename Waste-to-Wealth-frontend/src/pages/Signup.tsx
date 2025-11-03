import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Lock, User, Recycle, Home, Truck, Building } from "lucide-react";

type UserRole = "household" | "collector" | "recycler" | null;

const Signup = () => {
  const [step, setStep] = useState<"role" | "details">("role");
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const roles = [
    {
      value: "household",
      icon: Home,
      title: "Household",
      description: "I want to recycle my household waste"
    },
    {
      value: "collector",
      icon: Truck,
      title: "Collector",
      description: "I want to collect and transport recyclables"
    },
    {
      value: "recycler",
      icon: Building,
      title: "Recycler",
      description: "I run a recycling facility"
    }
  ];

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    setStep("details");
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate signup (replace with actual auth logic)
    setTimeout(() => {
      toast({
        title: "Account Created!",
        description: `Welcome to Waste-to-Wealth as a ${selectedRole}!`,
      });
      navigate("/dashboard");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-eco flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-eco animate-scale-in">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Recycle className="w-8 h-8 text-primary-foreground" />
          </div>
          <CardTitle className="text-3xl">Join Waste-to-Wealth</CardTitle>
          <CardDescription>
            {step === "role" ? "Choose your role" : `Sign up as a ${selectedRole}`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {step === "role" ? (
            <div className="grid md:grid-cols-3 gap-4">
              {roles.map((role) => (
                <Card
                  key={role.value}
                  className="cursor-pointer hover:shadow-eco hover:border-primary transition-all p-6 text-center"
                  onClick={() => handleRoleSelect(role.value as UserRole)}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <role.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{role.title}</h3>
                  <p className="text-sm text-muted-foreground">{role.description}</p>
                </Card>
              ))}
            </div>
          ) : (
            <form onSubmit={handleSignup} className="space-y-4">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setStep("role")}
                className="mb-4"
              >
                ← Change role
              </Button>
              
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Creating account..." : "Create Account"}
              </Button>
            </form>
          )}
          
          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Already have an account? </span>
            <Link to="/login" className="text-primary hover:underline font-medium">
              Login
            </Link>
          </div>
          
          <div className="mt-4 text-center">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
              ← Back to home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
