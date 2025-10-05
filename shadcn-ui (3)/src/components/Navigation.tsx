import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Don't show navigation on homepage
  if (location.pathname === '/') {
    return null;
  }

  return (
    <div className="fixed top-4 left-4 z-50">
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate(-1)}
          className="bg-gray-800/80 backdrop-blur-sm border-emerald-500/30 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate('/')}
          className="bg-gray-800/80 backdrop-blur-sm border-emerald-500/30 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all duration-300"
        >
          <Home className="w-4 h-4 mr-2" />
          Home
        </Button>
      </div>
    </div>
  );
}