import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", {
        email,
        password,
      });

      localStorage.setItem("adminToken", res.data.token);

      // ✅ FIXED: Changed from "/message" to "/messages"
      navigate("/messages");

    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-20">
      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 mb-4 border"
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full p-3 mb-6 border"
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {error && <p className="text-red-500 mb-3">{error}</p>}

      <button type="submit" className="w-full p-3 bg-black text-white">
        Login
      </button>
    </form>
  );
}