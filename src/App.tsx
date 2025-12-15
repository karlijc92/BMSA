import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Subscribe from "./pages/Subscribe";
import SubscriptionAI from "./pages/SubscriptionAI";
import NotFound from "./pages/NotFound";

// NEW pages (can be simple placeholders for now)
import Profile from "./pages/Profile";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClien
