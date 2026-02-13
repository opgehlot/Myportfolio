import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import AdminMessages from "./pages/AdminMessages";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Portfolio */}
          <Route path="/" element={<Home />} />

          {/* Admin (hidden) */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/messages" element={<AdminMessages />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

