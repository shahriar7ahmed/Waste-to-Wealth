import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, MapPin, Package, Image as ImageIcon, DollarSign } from "lucide-react";

const CreateRequest = () => {
  const [wasteType, setWasteType] = useState("");
  const [weight, setWeight] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [estimatedPrice, setEstimatedPrice] = useState("0.00");
  const { toast } = useToast();
  const navigate = useNavigate();

  const wasteTypes = [
    { value: "plastic", label: "Plastic", price: 0.5 },
    { value: "paper", label: "Paper", price: 0.3 },
    { value: "glass", label: "Glass", price: 0.5 },
    { value: "metal", label: "Metal", price: 0.8 },
    { value: "ewaste", label: "E-Waste", price: 1.2 }
  ];

  const calculatePrice = (type: string, kg: string) => {
    const selectedType = wasteTypes.find(w => w.value === type);
    if (selectedType && kg) {
      const price = selectedType.price * parseFloat(kg);
      setEstimatedPrice(price.toFixed(2));
    } else {
      setEstimatedPrice("0.00");
    }
  };

  const handleWasteTypeChange = (type: string) => {
    setWasteType(type);
    calculatePrice(type, weight);
  };

  const handleWeightChange = (kg: string) => {
    setWeight(kg);
    calculatePrice(wasteType, kg);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Created!",
      description: "Your pickup request has been posted successfully.",
    });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-eco">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/dashboard">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>

          <Card className="shadow-eco animate-scale-in">
            <CardHeader>
              <CardTitle className="text-3xl">Create Pickup Request</CardTitle>
              <CardDescription>
                Tell us what you want to recycle and we'll connect you with a collector
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Waste Type Selection */}
                <div className="space-y-3">
                  <Label>What do you want to recycle?</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {wasteTypes.map((type) => (
                      <Card
                        key={type.value}
                        className={`cursor-pointer transition-all ${
                          wasteType === type.value
                            ? "border-primary shadow-eco"
                            : "border-border hover:border-primary/50"
                        }`}
                        onClick={() => handleWasteTypeChange(type.value)}
                      >
                        <CardContent className="p-4 text-center">
                          <div className="font-semibold mb-1">{type.label}</div>
                          <div className="text-sm text-muted-foreground">
                            ${type.price}/kg
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Weight */}
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <div className="relative">
                    <Package className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="weight"
                      type="number"
                      step="0.1"
                      placeholder="5.0"
                      value={weight}
                      onChange={(e) => handleWeightChange(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <Label htmlFor="location">Pickup Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="location"
                      type="text"
                      placeholder="123 Main Street, City"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                  <Button type="button" variant="outline" size="sm" className="mt-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    Use Current Location
                  </Button>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Additional Details (Optional)</Label>
                  <Textarea
                    id="description"
                    placeholder="Any special instructions or details about the waste..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                  />
                </div>

                {/* Photo Upload */}
                <div className="space-y-2">
                  <Label>Photo (Optional)</Label>
                  <Button type="button" variant="outline" className="w-full">
                    <ImageIcon className="w-4 h-4 mr-2" />
                    Upload Photo
                  </Button>
                </div>

                {/* Estimated Price */}
                <Card className="bg-accent/10 border-accent/20">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-accent" />
                        <span className="font-semibold">Estimated Earnings</span>
                      </div>
                      <div className="text-2xl font-bold text-accent">
                        ${estimatedPrice}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Final price may vary based on actual weight and condition
                    </p>
                  </CardContent>
                </Card>

                {/* Submit Button */}
                <Button type="submit" className="w-full" size="lg">
                  Post Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CreateRequest;
