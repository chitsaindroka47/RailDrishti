import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Train,
  Users,
  FileText,
  Settings,
  LogOut,
  Plus,
  Search,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");

  const userData = [
    { name: "John Controller", role: "Controller", status: "Active", id: 1 },
    { name: "Sarah Admin", role: "Admin", status: "Active", id: 2 },
    { name: "Mike Observer", role: "Observer", status: "Inactive", id: 3 },
    { name: "Lisa Controller", role: "Controller", status: "Active", id: 4 },
    { name: "Amit Observer", role: "Observer", status: "Active", id: 5 },
  ];

  const filteredUsers = userData.filter((user) => {
    const matchesSearch = user.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesRole =
      roleFilter === "All" ? true : user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const systemLogs = [
    "2025-09-23 14:30:25 - User login: john.controller@railway.com",
    "2025-09-23 14:28:15 - Train route updated: Express A -> Track 3",
    "2025-09-23 14:25:10 - System backup completed successfully",
    "2025-09-23 14:20:45 - New user registered: observer.new@railway.com",
    "2025-09-23 14:18:30 - Database maintenance scheduled for tonight",
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-[#0f172a] text-white flex flex-col shadow">
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/10 rounded-lg">
              <Train className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-xl font-semibold">RAILDRISHTI</div>
              <div className="text-xs opacity-80">Admin Panel</div>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-6 space-y-3">
          <Button
            variant="ghost"
            className="w-full justify-start text-white hover:bg-white/10"
          >
            <Users className="mr-3 h-4 w-4" />
            User Management
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-white hover:bg-white/10"
          >
            <FileText className="mr-3 h-4 w-4" />
            Reports
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-white hover:bg-white/10"
          >
            <Settings className="mr-3 h-4 w-4" />
            Settings
          </Button>
        </nav>

        <div className="p-4 border-t border-slate-800 text-xs text-center">
          © 2025 Team RAILDRISHTI
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
          <h1 className="text-2xl font-bold text-slate-800">
            Admin Dashboard
          </h1>
          <Button
            variant="destructive"
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 p-6 space-y-6">
          {/* User Management */}
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>
                Manage system users, roles and permissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Filters */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search users..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-8 pr-3 py-2 border border-slate-300 rounded-md text-sm w-64 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                  <select
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value)}
                    className="border border-slate-300 rounded-md text-slate-700 py-2 px-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    <option value="All">All Roles</option>
                    <option value="Admin">Admin</option>
                    <option value="Controller">Controller</option>
                    <option value="Observer">Observer</option>
                  </select>
                </div>
                <Button className="bg-sky-600 text-white">
                  <Plus className="mr-2 h-4 w-4" /> Add User
                </Button>
              </div>

              {/* User Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-sw text-sw">
                      <th className="text-left py-3 px-4 font-semibold text-sm">
                        Name
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-sm">
                        Role
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-sm">
                        Status
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-sm">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((user) => (
                      <tr
                        key={user.id}
                        className="border-b border-slate-200 last:border-none"
                      >
                        <td className="py-3 px-4 text-sw">
                          {user.name}
                        </td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 bg-slate-100 rounded-md text-sm text-slate-700">
                            {user.role}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-2 py-1 rounded-md text-sm ${
                              user.status === "Active"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
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

          {/* System Logs */}
          <Card>
            <CardHeader>
              <CardTitle>System Logs</CardTitle>
              <CardDescription>Recent system activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {systemLogs.map((log, index) => (
                  <div
                    key={index}
                    className="p-3 bg-slate-50 rounded border-l-4 border-l-sky-600 text-sm text-slate-700 font-mono"
                  >
                    {log}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
