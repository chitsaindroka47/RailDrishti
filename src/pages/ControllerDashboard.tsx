// controllerDashboard.tsx
import React, { useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Train, BarChart3, FileText, LogOut, DownloadCloud, AlertTriangle, CloudRain, Wrench } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


import { useNavigate } from "react-router-dom";

type TrainRow = {
  trainNo: string;
  trainName: string;
  arrival: string;
  departure: string;
  delayMins: number;
  defect: string | null;
  routeChanged: boolean;
  cancelled: boolean;
};

const ControllerDashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  // Dummy Indian train dataset (replace / extend as needed)
  const trainData: TrainRow[] = useMemo(
    () => [
      {
        trainNo: "12951",
        trainName: "Mumbai Rajdhani Express",
        arrival: "10:20",
        departure: "10:25",
        delayMins: 15,
        defect: "None",
        routeChanged: true,
        cancelled: false,
      },
      {
        trainNo: "12301",
        trainName: "Howrah Rajdhani Express",
        arrival: "11:05",
        departure: "11:10",
        delayMins: 0,
        defect: "Brake issue",
        routeChanged: false,
        cancelled: true,
      },
      {
        trainNo: "12002",
        trainName: "Bhopal Shatabdi Express",
        arrival: "09:10",
        departure: "09:15",
        delayMins: 0,
        defect: null,
        routeChanged: false,
        cancelled: false,
      },
      {
        trainNo: "12507",
        trainName: "Gatimaan Express",
        arrival: "12:30",
        departure: "12:35",
        delayMins: 5,
        defect: null,
        routeChanged: false,
        cancelled: false,
      },
      {
        trainNo: "22409",
        trainName: "Gatimaan Superfast",
        arrival: "14:00",
        departure: "14:05",
        delayMins: 30,
        defect: "Engine overheating",
        routeChanged: true,
        cancelled: false,
      },
    ],
    []
  );

 const defectData = [
  { day: "Mon", signal: 3, engine: 1, coach: 2 },
  { day: "Tue", signal: 2, engine: 2, coach: 1 },
  { day: "Wed", signal: 4, engine: 0, coach: 3 },
  { day: "Thu", signal: 1, engine: 3, coach: 2 },
  { day: "Fri", signal: 5, engine: 2, coach: 4 },
  { day: "Sat", signal: 2, engine: 1, coach: 1 },
  { day: "Sun", signal: 3, engine: 2, coach: 2 },
];



  const aiRecommendations = useMemo(
    () => [
      "Proceed Train 12951 (Priority Rajdhani)",
      "Hold Train 12507 at Station X for 5 min",
      "Reroute Train 22409 via Track 2 due to blockage",
    ],
    []
  );

  // CSV export helper
  const exportCSV = (rows: TrainRow[], filename = "train_report.csv") => {
    if (!rows || !rows.length) return;
    const headers = [
      "Train No",
      "Train Name",
      "Arrival Time",
      "Departure Time",
      "Delay (mins)",
      "Defect",
      "Route Changed",
      "Cancelled",
    ];
    const csvRows = [headers.join(",")];

    for (const r of rows) {
      const line = [
        r.trainNo,
        `"${r.trainName.replace(/"/g, '""')}"`,
        r.arrival,
        r.departure,
        String(r.delayMins),
        `"${(r.defect || "None").replace(/"/g, '""')}"`,
        r.routeChanged ? "Yes" : "No",
        r.cancelled ? "Yes" : "No",
      ].join(",");
      csvRows.push(line);
    }

    const csvContent = csvRows.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Download report (for demo, reuse CSV export; can be replaced by PDF generation)
  const downloadReport = () => {
    exportCSV(trainData, "raildrishti_train_report.csv");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-[#0f172a] text-white flex flex-col shadow">
        {/* Logo */}
        <div className="p-6 border-b border-sky-500">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/10 rounded-lg">
              <Train className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-xl font-semibold">RAILDRISHTI</div>
              <div className="text-xs opacity-90">AI Train Traffic Control</div>
            </div>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-6 space-y-3">
          <Button
            variant="ghost"
            className="w-full justify-start text-white hover:bg-white/10"
          >
            <BarChart3 className="mr-3 h-4 w-4" />
            Dashboard
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-white hover:bg-white/10"
          >
            <Train className="mr-3 h-4 w-4" />
            Simulation
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-white hover:bg-white/10"
          >
            <FileText className="mr-3 h-4 w-4" />
            Reports
          </Button>
        </nav>

        {/* Footer small */}
        <div className="p-4 border-t border-sky-500 text-xs">
          <div>© 2025 Team RAILDRISHTI</div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
          <h1 className="text-2xl font-bold text-slate-800">
            Controller Dashboard
          </h1>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-slate-600">
              Signed in as <span className="font-medium">Controller</span>
            </div>
            <Button
              variant="destructive"
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 p-6 space-y-6 overflow-auto">
          {/* Top row: Table + Actions */}
          <div className="bg-transparent">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-800">
                  Real-time Train Status
                </h2>
                <p className="text-sm text-slate-500">
                  Current section overview — arrivals, delays, defects, cancellations.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700"
                  onClick={() => exportCSV(trainData, "train_status_export.csv")}
                >
                  <DownloadCloud className="h-4 w-4" /> Export CSV
                </Button>
                <Button
                  className="flex items-center gap-2 bg-sky-600 text-white"
                  onClick={downloadReport}
                >
                  <FileText className="h-4 w-4" />
                  Download Report
                </Button>
              </div>
            </div>

            <Card>
              <CardContent className="p-0 overflow-auto">
                <table className="min-w-full table-auto border-collapse">
                  <thead className="bg-sw">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-slate-600">
                        Train No
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-slate-600">
                        Train Name
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-slate-600">
                        Arrival
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-slate-600">
                        Departure
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-slate-600">
                        Delay (mins)
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-slate-600">
                        Defect
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-slate-600">
                        Route Changed
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-slate-600">
                        Cancelled
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {trainData.map((t) => (
                      <tr
                        key={t.trainNo}
                        className="border-b last:border-b-0 hover:bg-slate-50"
                      >
                        <td className="px-4 py-3 text-sm text-slate-700 font-medium">
                          {t.trainNo}
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-700">
                          {t.trainName}
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-700">
                          {t.arrival}
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-700">
                          {t.departure}
                        </td>
                        <td
                          className={`px-4 py-3 text-sm font-medium ${
                            t.delayMins > 0 ? "text-rose-600" : "text-green-600"
                          }`}
                        >
                          {t.delayMins > 0 ? `${t.delayMins} min` : "On time"}
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-700">
                          {t.defect || "None"}
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-700">
                          {t.routeChanged ? "Yes" : "No"}
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-700">
                          {t.cancelled ? (
                            <span className="text-rose-600 font-medium">Yes</span>
                          ) : (
                            <span className="text-green-600">No</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>

          {/* Second row: Trends / Alerts / Recommendations */}
          <div className="grid grid-cols-3 gap-6">
            {/* Defect Trends */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Defect Trends</CardTitle>
                <CardDescription>
                  Trend of common defects over the past 7 days
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 flex items-center justify-center border border-dashed border-slate-200 rounded">
                              <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={defectData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="signal" stroke="#f59e0b" strokeWidth={2} />
                        <Line type="monotone" dataKey="engine" stroke="#0284c7" strokeWidth={2} />
                        <Line type="monotone" dataKey="coach" stroke="#10b981" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="p-3 bg-slate-50 rounded shadow-sm">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-600" />
                      <div>
                        <div className="text-slate-800 font-medium">Signal Failures</div>
                        <div className="text-xs text-slate-500">12 in last 7 days</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded shadow-sm">
                    <div className="flex items-center gap-2">
                     <Wrench className="h-5 w-5 text-sky-600" />

                      <div>
                        <div className="text-slate-800 font-medium">Engine Issues</div>
                        <div className="text-xs text-slate-500">5 in last 7 days</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded shadow-sm">
                    <div className="flex items-center gap-2">
                      <Train className="h-5 w-5 text-emerald-600" />
                      <div>
                        <div className="text-slate-800 font-medium">Coach Problems</div>
                        <div className="text-xs text-slate-500">8 in last 7 days</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Alerts Column */}
            <div className="flex flex-col gap-6">
              {/* Maintenance Alerts */}
              <Card>
                <CardHeader>
                  <CardTitle>Maintenance Alerts</CardTitle>
                  <CardDescription>Upcoming maintenance blocks</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2.5 h-2.5 bg-amber-400 rounded-full mt-1" />
                      <div>
                        <div className="font-medium">Track maintenance – Section A</div>
                        <div className="text-xs text-slate-500">2025-09-26 02:00 - 04:00</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2.5 h-2.5 bg-amber-400 rounded-full mt-1" />
                      <div>
                        <div className="font-medium">Overhead inspection – Section C</div>
                        <div className="text-xs text-slate-500">2025-09-27 01:00 - 03:00</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2.5 h-2.5 bg-amber-400 rounded-full mt-1" />
                      <div>
                        <div className="font-medium">Signal calibration – Section B</div>
                        <div className="text-xs text-slate-500">2025-09-28 00:30 - 02:00</div>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Weather Alerts */}
              <Card>
                <CardHeader>
                  <CardTitle>Weather Alerts</CardTitle>
                  <CardDescription>Realtime weather warnings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <CloudRain className="h-6 w-6 text-sky-600" />
                    <div>
                      <div className="font-medium">Heavy Rain – Lucknow Division</div>
                      <div className="text-xs text-slate-500">Expected: 2025-09-25 18:00</div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-3">
                    <AlertTriangle className="h-6 w-6 text-amber-600" />
                    <div>
                      <div className="font-medium">Fog Alert – Delhi Zone</div>
                      <div className="text-xs text-slate-500">Visibility reduced, expect delays</div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <Button className="w-full bg-slate-100 text-slate-800">
                      View Full Weather Feed
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* AI Recommendations compact */}
              <Card>
                <CardHeader>
                  <CardTitle>AI Recommendations</CardTitle>
                  <CardDescription>Quick actionable suggestions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {aiRecommendations.map((r, i) => (
                    <div
                      key={i}
                      className="p-2 bg-slate-50 rounded border-l-4 border-l-sky-600 text-slate-800"
                    >
                      {r}
                    </div>
                  ))}
                  <Button className="mt-3 w-full bg-sky-600 text-white">
                    Manual Override
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom: Quick KPIs / Summary */}
          <div className="grid grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded shadow-sm">
              <div className="text-sm text-slate-500">Average Delay</div>
              <div className="text-2xl font-semibold text-rose-600">12 min</div>
              <div className="text-xs text-slate-500">Last 24 hours</div>
            </div>
            <div className="p-4 bg-white rounded shadow-sm">
              <div className="text-sm text-slate-500">Punctuality</div>
              <div className="text-2xl font-semibold text-emerald-600">82%</div>
              <div className="text-xs text-slate-500">On-time departures</div>
            </div>
            <div className="p-4 bg-white rounded shadow-sm">
              <div className="text-sm text-slate-500">Throughput (24h)</div>
              <div className="text-2xl font-semibold text-slate-800">124 trains</div>
              <div className="text-xs text-slate-500">Section throughput</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ControllerDashboard;
