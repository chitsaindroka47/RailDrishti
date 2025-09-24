import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoginController from "./pages/LoginController";
import LoginAdmin from "./pages/LoginAdmin";
import LoginObserver from "./pages/LoginObserver";
import ControllerDashboard from "./pages/ControllerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ObserverDashboard from "./pages/ObserverDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login/controller" element={<LoginController />} />
          <Route path="/login/admin" element={<LoginAdmin />} />
          <Route path="/login/observer" element={<LoginObserver />} />
          <Route path="/dashboard/controller" element={<ControllerDashboard />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="/dashboard/observer" element={<ObserverDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;