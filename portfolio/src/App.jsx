import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import AdminMessages from "./pages/AdminMessages";
import ErrorBoundary from "./components/ErrorBoundary";
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
          <Route path="/admin/messages" element={
            <ErrorBoundary>
              <AdminMessages />
            </ErrorBoundary>
          } />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

