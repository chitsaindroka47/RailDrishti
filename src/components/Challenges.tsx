import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, AlertTriangle, Users, CloudRain } from "lucide-react";
import challengesImage from "@/assets/railway-challenges.jpg";

const Challenges = () => {
  const challenges = [
    {
      icon: Clock,
      title: "Manual Decision-Making is Slow",
      description: "Human operators struggle to process multiple data streams and make optimal decisions in real-time scenarios."
    },
    {
      icon: AlertTriangle,
      title: "Increasing Congestion & Delays",
      description: "Growing traffic demands overwhelm existing infrastructure, leading to cascading delays across the network."
    },
    {
      icon: Users,
      title: "Limited Track & Platform Capacity",
      description: "Physical constraints and inefficient resource allocation prevent optimal utilization of available infrastructure."
    },
    {
      icon: CloudRain,
      title: "Weather & Breakdown Disruptions",
      description: "Unpredictable events require rapid response and adaptive planning that traditional systems cannot provide."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      {/* Subtle railway track pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-px bg-muted-foreground" />
        <div className="absolute top-8 left-0 w-full h-px bg-muted-foreground" />
        <div className="absolute top-16 left-0 w-full h-px bg-muted-foreground" />
        <div className="absolute top-24 left-0 w-full h-px bg-muted-foreground" />
      </div>
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Challenges in Current
            <span className="text-destructive"> Train Traffic Control</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Traditional railway management systems face critical limitations that impact 
            efficiency, safety, and passenger satisfaction across global networks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Illustration */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src={challengesImage} 
                alt="Congested railway tracks showing the complexity of manual train traffic control"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg" />
            </div>
          </div>

          {/* Right side - Problem cards */}
          <div className="order-1 lg:order-2 space-y-6">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <Card 
                  key={index} 
                  className="bg-background/80 backdrop-blur-sm border-destructive/20 hover:border-destructive/40 transition-all duration-300 hover:shadow-md"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-destructive/10 p-2 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-destructive" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-foreground">
                        {challenge.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {challenge.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;