import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function formatMessageDate(createdAt) {
  if (!createdAt) return "";
  const d = new Date(createdAt);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function AdminMessages() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMessages = () => {
    setLoading(true);
    setError("");
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Please log in to view messages.");
      setLoading(false);
      return;
    }
    axios
      .get("http://localhost:5000/api/messages", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setMessages(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => {
        console.error(err);
        setError(
          err.response?.status === 401
            ? "Session expired. Please log in again."
            : "Failed to load messages. Is the backend running?"
        );
        setMessages([]);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    let cancelled = false;
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Please log in to view messages.");
      setLoading(false);
      return () => {};
    }
    setLoading(true);
    setError("");
    axios
      .get("http://localhost:5000/api/messages", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (!cancelled) setMessages(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => {
        if (cancelled) return;
        console.error(err);
        setError(
          err.response?.status === 401
            ? "Session expired. Please log in again."
            : "Failed to load messages. Is the backend running?"
        );
        setMessages([]);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  return (
    <>
      <Navbar />
      <main
        className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-[#0f0f1a] dark:to-[#1a1a2e] pt-28 pb-16 px-4 md:px-8"
        style={{ minHeight: "100vh", paddingTop: "7rem", backgroundColor: "var(--messages-bg, #f9fafb)" }}
      >
        <div className="max-w-4xl mx-auto" style={{ maxWidth: "56rem", margin: "0 auto" }}>
          {/* Header with actions */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1
                className="text-3xl font-bold text-gray-800 dark:text-white"
                style={{ color: "#1f2937", fontSize: "1.875rem", marginBottom: "0.25rem" }}
              >
                Messages
              </h1>
              <p className="text-gray-500 dark:text-gray-400 mt-1" style={{ color: "#6b7280" }}>
                Contact form submissions from your portfolio
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="px-4 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:border-[#667eea] hover:text-[#667eea] dark:hover:border-[#667eea] dark:hover:text-[#667eea] transition-all duration-200"
              >
                ← Back to Home
              </button>
              {!loading && (
                <button
                  type="button"
                  onClick={fetchMessages}
                  className="px-4 py-2 rounded-lg bg-[#667eea] text-white font-medium hover:bg-[#5a6fd6] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  Refresh
                </button>
              )}
            </div>
          </div>

          {/* Loading */}
          {loading && (
            <div
              className="flex flex-col items-center justify-center py-20"
              style={{ minHeight: "200px", padding: "5rem 0" }}
            >
              <div className="w-12 h-12 border-4 border-[#667eea] border-t-transparent rounded-full animate-spin mb-4" style={{ borderColor: "#667eea", borderTopColor: "transparent" }} />
              <p className="text-gray-600 dark:text-gray-400 font-medium" style={{ color: "#4b5563", marginTop: "1rem" }}>
                Loading messages…
              </p>
            </div>
          )}

          {/* Error – 401: show Log in; other: show Try again */}
          {!loading && error && (
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-6 mb-6">
              <p className="font-semibold text-red-700 dark:text-red-300 mb-2">
                {error.includes("Session expired") || error.includes("Please log in")
                  ? "Session expired"
                  : "Something went wrong"}
              </p>
              <p className="text-red-600 dark:text-red-400">{error}</p>
              {error.includes("Session expired") || error.includes("Please log in") ? (
                <button
                  type="button"
                  onClick={() => navigate("/admin")}
                  className="mt-4 px-4 py-2 rounded-lg bg-[#667eea] text-white font-medium hover:bg-[#5a6fd6] transition-colors"
                >
                  Log in
                </button>
              ) : (
                <button
                  type="button"
                  onClick={fetchMessages}
                  className="mt-4 px-4 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition-colors"
                >
                  Try again
                </button>
              )}
            </div>
          )}

          {/* Empty state – no messages */}
          {!loading && !error && messages.length === 0 && (
            <div
              className="rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-600 bg-white dark:bg-[#16213e]/50 p-12 text-center"
              style={{ border: "2px dashed #d1d5db", borderRadius: "1rem", padding: "3rem", backgroundColor: "#fff", textAlign: "center" }}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-4xl" style={{ width: "5rem", height: "5rem", borderRadius: "50%", backgroundColor: "#e5e7eb", margin: "0 auto 1.5rem" }}>
                📬
              </div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2" style={{ color: "#1f2937", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
                No messages yet
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8" style={{ color: "#6b7280", marginBottom: "2rem" }}>
                Messages from your contact form will show up here. Share your
                portfolio and check back later.
              </p>
              <button
                type="button"
                onClick={() => navigate("/#contact")}
                className="px-6 py-3 rounded-lg bg-[#667eea] text-white font-medium hover:bg-[#5a6fd6] transition-colors"
              >
                Go to Contact section
              </button>
            </div>
          )}

          {/* Message list */}
          {!loading && !error && messages.length > 0 && (
            <>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                <span className="font-semibold text-gray-800 dark:text-white">
                  {messages.length}
                </span>{" "}
                {messages.length === 1 ? "message" : "messages"}
              </p>
              <ul className="space-y-4 list-none p-0 m-0">
                {messages.map((msg) => (
                  <li
                    key={msg._id}
                    className="group p-5 rounded-xl bg-white dark:bg-[#16213e] border-2 border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-[#667eea]/40 dark:hover:border-[#667eea]/40 transition-all duration-200"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <p className="font-bold text-gray-800 dark:text-white text-lg">
                        {msg.name}
                      </p>
                      <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                        {formatMessageDate(msg.createdAt)}
                      </span>
                    </div>
                    {msg.email && (
                      <p className="mb-2">
                        <a
                          href={`mailto:${msg.email}`}
                          className="text-sm text-[#667eea] hover:underline"
                        >
                          {msg.email}
                        </a>
                      </p>
                    )}
                    <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">
                      {msg.message}
                    </p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default AdminMessages;
