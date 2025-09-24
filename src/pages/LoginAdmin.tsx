import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Train, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for authentication logic
    console.log("Admin login attempted with:", { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-4 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <Card className="shadow-xl border-border/50">
          <CardHeader className="text-center space-y-4">
            {/* Logo */}
            <div className="flex justify-center">
              <div className="p-3 bg-gradient-primary rounded-xl shadow-glow">
                <Train className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            
            <div>
              <CardTitle className="text-2xl font-bold text-primary">Admin Login</CardTitle>
              <CardDescription className="text-muted-foreground mt-2">
                Secure access to RAILDRISHTI
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-primary hover:shadow-glow transition-glow"
              >
                Login to Admin Dashboard
              </Button>
            </form>

            <div className="mt-4 text-center space-y-2">
              <a
                href="#"
                className="text-sm text-primary hover:underline"
                onClick={(e) => e.preventDefault()}
              >
                Forgot Password?
              </a>
              <div className="text-muted-foreground text-xs">
                Don't have an account?{" "}
                <a href="#" className="text-primary hover:underline" onClick={(e) => e.preventDefault()}>
                  Sign Up
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border text-center">
              <p className="text-xs text-muted-foreground">
                Authentication powered by Firebase (to be integrated)
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginAdmin;