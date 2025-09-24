import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Settings, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RoleCards = () => {
  const navigate = useNavigate();
  const roles = [
    {
      title: "Controller",
      description: "Full operational control with real-time monitoring, train dispatch, and emergency response capabilities.",
      icon: Settings,
      permissions: ["Train Dispatch", "Route Control", "Emergency Override", "System Commands"],
      color: "primary",
      bgGradient: "from-primary/20 to-primary-glow/20"
    },
    {
      title: "Admin",
      description: "System administration access for user management, configuration, and system maintenance.",
      icon: Shield,
      permissions: ["User Management", "System Config", "Data Analytics", "Maintenance"],
      color: "digital-cyan",
      bgGradient: "from-digital-cyan/20 to-primary/20"
    },
    {
      title: "Observer",
      description: "Read-only access for monitoring operations, viewing reports, and analyzing system performance.",
      icon: Eye,
      permissions: ["View Operations", "Generate Reports", "Monitor Performance", "Data Analysis"],
      color: "circuit-green",
      bgGradient: "from-circuit-green/20 to-digital-cyan/20"
    }
  ];

  return (
    <section id="login" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Role-Based
            <span className="text-transparent bg-clip-text bg-gradient-primary"> Access Control</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Secure, role-specific access ensures the right level of control and visibility 
            for each user type in the railway AI system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <Card 
                key={index} 
                className={`group bg-gradient-card border-border/50 hover:border-${role.color}/50 transition-all duration-300 hover:shadow-elevated relative overflow-hidden`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${role.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <CardHeader className="relative z-10 text-center pb-6">
                  <div className={`w-16 h-16 mx-auto rounded-xl bg-${role.color}/20 border border-${role.color}/30 p-4 mb-4 group-hover:animate-glow-pulse`}>
                    <Icon className={`w-8 h-8 text-${role.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foregroup group-hover:text-primary transition-colors">
                    {role.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10 space-y-6">
                  <CardDescription className="text-muted-foreground text-center leading-relaxed">
                    {role.description}
                  </CardDescription>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">
                      Permissions
                    </h4>
                    <ul className="space-y-2">
                      {role.permissions.map((permission, permIndex) => (
                        <li key={permIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className={`w-2 h-2 rounded-full bg-${role.color} mr-3 opacity-60`} />
                          {permission}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-glow"
                    onClick={() => navigate(`/login/${role.title.toLowerCase()}`)}
                  >
                    Login
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoleCards;