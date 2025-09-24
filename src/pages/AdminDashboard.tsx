import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Train, Users, FileText, Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const userData = [
    { name: "John Controller", role: "Controller", status: "Active", id: 1 },
    { name: "Sarah Admin", role: "Admin", status: "Active", id: 2 },
    { name: "Mike Observer", role: "Observer", status: "Inactive", id: 3 },
    { name: "Lisa Controller", role: "Controller", status: "Active", id: 4 }
  ];

  const systemLogs = [
    "2024-01-15 14:30:25 - User login: john.controller@railway.com",
    "2024-01-15 14:28:15 - Train route updated: Express A -> Track 3",
    "2024-01-15 14:25:10 - System backup completed successfully",
    "2024-01-15 14:20:45 - New user registered: observer.new@railway.com",
    "2024-01-15 14:18:30 - Database maintenance scheduled for tonight"
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
            <Users className="mr-3 h-4 w-4" />
            User Management
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-slate-800">
            <FileText className="mr-3 h-4 w-4" />
            Reports
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-slate-800">
            <Settings className="mr-3 h-4 w-4" />
            Settings
          </Button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <div className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
          <h1 className="text-2xl font-bold text-primary">Admin Dashboard</h1>
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
          {/* User Management Card */}
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Manage system users and their permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold">Name</th>
                      <th className="text-left py-3 px-4 font-semibold">Role</th>
                      <th className="text-left py-3 px-4 font-semibold">Status</th>
                      <th className="text-left py-3 px-4 font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData.map((user) => (
                      <tr key={user.id} className="border-b border-border/50">
                        <td className="py-3 px-4">{user.name}</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 bg-muted rounded-md text-sm">
                            {user.role}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-md text-sm ${
                            user.status === 'Active' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                          }`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* System Logs Card */}
          <Card>
            <CardHeader>
              <CardTitle>System Logs</CardTitle>
              <CardDescription>Recent system activity and events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {systemLogs.map((log, index) => (
                  <div 
                    key={index}
                    className="p-3 bg-muted/50 rounded-lg border-l-2 border-l-primary/50"
                  >
                    <p className="text-sm font-mono text-muted-foreground">{log}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;