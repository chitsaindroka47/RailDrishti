import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Brain, BarChart3, Settings } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Eye,
      title: "Real-time Train Monitoring",
      description: "Advanced sensors and AI analytics provide continuous monitoring of train positions, speeds, and operational status across the entire network.",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Brain,
      title: "AI Recommendations",
      description: "Machine learning algorithms analyze patterns and provide intelligent recommendations for optimal routing, scheduling, and maintenance.",
      gradient: "from-digital-cyan to-primary"
    },
    {
      icon: BarChart3,
      title: "Simulation & What-if Analysis",
      description: "Run comprehensive simulations to test scenarios, predict outcomes, and optimize operations before implementing changes.",
      gradient: "from-circuit-green to-digital-cyan"
    },
    {
      icon: Settings,
      title: "Performance Dashboard",
      description: "Comprehensive analytics dashboard displaying key performance indicators, system health, and operational metrics in real-time.",
      gradient: "from-warning-amber to-circuit-green"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Advanced Railway
            <span className="text-transparent bg-clip-text bg-gradient-primary"> Intelligence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge AI technology transforms traditional railway operations into 
            intelligent, autonomous systems that adapt and optimize in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card"
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} p-3 mb-4 shadow-glow group-hover:animate-glow-pulse`}>
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;