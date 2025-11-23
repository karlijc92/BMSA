import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, LogOut } from "lucide-react";
import { useLocation, useNavigate } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null);
  
  const isHomePage = location.pathname === '/';
  
  useEffect(() => {
    // Check authentication status
    if (window.MemberStack) {
      window.MemberStack.onReady.then(() => {
        const member = window.MemberStack.getCurrentMember();
        if (member) {
          setIsAuthenticated(true);
          setUser(member);
        }
      });
    }
  }, [location]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleLogin = () => {
    if (window.MemberStack) {
      window.MemberStack.openModal();
    }
  };

  const handleLogout = () => {
    if (window.MemberStack) {
      window.MemberStack.logout();
      setIsAuthenticated(false);
      setUser(null);
      navigate('/');
    }
  };

  const handleDashboard = () => {
    navigate('/dashboard');
  };

  if (isHomePage) {
    return null; // Don't show navigation on homepage
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-emerald-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Button
            onClick={handleBack}
            variant="ghost"
            className="text-emerald-400 hover:text-emerald-300 hover:bg-emerald-400/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          
          <div className="text-emerald-400 font-bold text-lg">
            BMSA
          </div>
          
          <div className="flex items-center gap-2">
            {isAuthenticated ? (
              <>
                <Button
                  onClick={handleDashboard}
                  variant="ghost"
                  className="text-emerald-400 hover:text-emerald-300 hover:bg-emerald-400/10"
                >
                  <User className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
                <Button
                  onClick={handleLogout}
                  variant="ghost"
                  className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <Button
                onClick={handleLogin}
                variant="ghost"
                className="text-emerald-400 hover:text-emerald-300 hover:bg-emerald-400/10"
              >
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}