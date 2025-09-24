import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Train, BarChart3, FileText, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ObserverDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const trainStatus = [
    "Express A - On Time - Platform 3",
    "Local B - Delayed 5 min - Platform 1", 
    "Freight C - On Time - Track 2",
    "Express D - Early 2 min - Platform 4",
    "Local E - Delayed 10 min - Platform 2"
  ];

  const kpis = [
    { title: "Punctuality Rate", value: "94.2%", trend: "up" },
    { title: "Average Delay", value: "3.5 min", trend: "down" },
    { title: "Daily Throughput", value: "847 trains", trend: "up" },
    { title: "System Efficiency", value: "96.8%", trend: "up" }
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
            <FileText className="mr-3 h-4 w-4" />
            Reports
          </Button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <div className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
          <h1 className="text-2xl font-bold text-primary">Observer Dashboard</h1>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Live Train Status */}
            <Card>
              <CardHeader>
                <CardTitle>Live Train Status</CardTitle>
                <CardDescription>Current status of active trains</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {trainStatus.map((status, index) => (
                  <div 
                    key={index}
                    className="p-3 bg-muted/50 rounded-lg border-l-4 border-l-primary/50"
                  >
                    <p className="text-sm font-medium">{status}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Reports & Analytics */}
            <Card>
              <CardHeader>
                <CardTitle>Reports & Analytics</CardTitle>
                <CardDescription>Key performance indicators and metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {kpis.map((kpi, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-lg"
                  >
                    <div>
                      <p className="text-sm text-muted-foreground">{kpi.title}</p>
                      <p className="text-2xl font-bold text-primary">{kpi.value}</p>
                    </div>
                    <div className={`px-2 py-1 rounded-md text-xs font-medium ${
                      kpi.trend === 'up' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                    }`}>
                      {kpi.trend === 'up' ? '↗' : '↘'} Trend
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObserverDashboard;