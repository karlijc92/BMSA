export default function Index() {
  return (
    <div style={{ minHeight: "100vh", background: "#000", color: "#fff" }}>
      <h1 style={{ padding: "40px", fontSize: "32px" }}>
        Black Market Supplement Advisor
      </h1>

      <p style={{ padding: "0 40px", fontSize: "18px" }}>
        Your AI-powered underground supplement harm-reduction advisor.
      </p>

      <div style={{ padding: "40px" }}>
        <a
          href="/subscribe"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            background: "#10b981",
            color: "#000",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Get Started
        </a>
      </div>
    </div>
  );
}
