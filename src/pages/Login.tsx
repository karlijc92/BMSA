import { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    const w = window as any;

    function handleAuth() {
      window.location.href = "/subscription-ai";
    }

    if (w.$memberstackDom) {
      w.$memberstackDom.openModal("LOGIN");
      w.$memberstackDom.on("memberstack.auth", handleAuth);
    } else {
      document.addEventListener("memberstack.ready", () => {
        w.$memberstackDom.openModal("LOGIN");
        w.$memberstackDom.on("memberstack.auth", handleAuth);
      });
    }

    return () => {
      if (w.$memberstackDom) {
        w.$memberstackDom.off("memberstack.auth", handleAuth);
      }
    };
  }, []);

  return null;
}
