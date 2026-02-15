import { Component } from "react";

class ErrorBoundaryClass extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          backgroundColor: "#f9fafb",
          color: "#1f2937",
          fontFamily: "system-ui, sans-serif",
        }}>
          <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Something went wrong</h1>
          <p style={{ color: "#6b7280", marginBottom: "1.5rem" }}>This page could not be loaded.</p>
          <a href="/" style={{ padding: "0.5rem 1rem", backgroundColor: "#667eea", color: "white", borderRadius: "0.5rem", textDecoration: "none" }}>
            Go to Home
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function ErrorBoundary({ children, fallback }) {
  return <ErrorBoundaryClass fallback={fallback}>{children}</ErrorBoundaryClass>;
}
