import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

function initMemberstack() {
  if ((window as any).$memberstackReady) return;

  const script = document.createElement("script");
  script.src = "https://static.memberstack.com/scripts/v1/memberstack.js";
  script.async = true;
  script.setAttribute(
    "data-memberstack-app",
    import.meta.env.VITE_MEMBERSTACK_PUBLIC_KEY
  );

  document.head.appendChild(script);
}

initMemberstack();

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<App />);
}
