import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Train, BarChart3, FileText, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ControllerDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const aiRecommendations = [
    "Proceed Train A (Priority Express)",
    "Hold Train B at Station X", 
    "Reroute Train C via Track 2"
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-white flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Train className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold">RAILDRISHTI</span>
          </div>
        </div>
        
        {/* Menu */}
        <nav className="flex-1 p-4 space-y-2">
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-slate-800">
            <BarChart3 className="mr-3 h-4 w-4" />
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-slate-800">
            <Train className="mr-3 h-4 w-4" />
            Simulation
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-slate-800">
            <FileText className="mr-3 h-4 w-4" />
            Reports
          </Button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <div className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
          <h1 className="text-2xl font-bold text-primary">Controller Dashboard</h1>
          <Button 
            variant="destructive" 
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-6 space-y-6">
          <div className="grid grid-cols-3 gap-6">
            {/* Live Train Map - 2/3 width */}
            <div className="col-span-2">
              <Card className="h-96">
                <CardHeader>
                  <CardTitle>Live Train Map</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-center h-full">
                  <div className="text-center space-y-4">
                    <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                      <span className="text-muted-foreground text-lg">[ Map Placeholder ]</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI Recommendations - 1/3 width */}
            <div className="col-span-1">
              <Card className="h-96">
                <CardHeader>
                  <CardTitle>AI Recommendations</CardTitle>
                  <CardDescription>Smart suggestions for optimal traffic control</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {aiRecommendations.map((recommendation, index) => (
                    <div 
                      key={index}
                      className="p-3 bg-muted rounded-lg border-l-4 border-l-primary"
                    >
                      <p className="text-sm font-medium">{recommendation}</p>
                    </div>
                  ))}
                  
                  <Button className="w-full mt-4 bg-gradient-primary">
                    Manual Override
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControllerDashboard;