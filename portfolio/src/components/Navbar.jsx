import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const navigate = useNavigate();
const isAdminLoggedIn = !!localStorage.getItem("token");

const handleLogout = () => {
  localStorage.removeItem("token");
  navigate("/");
};

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };



  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/98 dark:bg-[#1a1a2e]/98 shadow-lg dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)]' 
        : 'bg-white/95 dark:bg-[#1a1a2e]/95 shadow-md dark:shadow-[0_2px_10px_rgba(0,0,0,0.3)]'
    } backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center relative">
        <div>
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-2xl font-bold text-[#667eea] hover:text-[#764ba2] transition-colors duration-300 no-underline"
          >
          Portfolio
          </a>
        </div>
        <div className="flex items-center gap-4">
         
          <button
            className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-gray-800 dark:bg-white rounded transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-gray-800 dark:bg-white rounded transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-gray-800 dark:bg-white rounded transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></span>
          </button>
        </div>
        <ul className="hidden md:flex list-none gap-8 m-0 p-0">
          <li>
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="text-gray-800 dark:text-white no-underline font-medium transition-colors duration-300 relative hover:text-[#667eea] after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-[#667eea] after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, '#about')}
              className="text-gray-800 dark:text-white no-underline font-medium transition-colors duration-300 relative hover:text-[#667eea] after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-[#667eea] after:transition-all after:duration-300 hover:after:w-full"
            >
              About Screen
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              onClick={(e) => handleNavClick(e, '#skills')}
              className="text-gray-800 dark:text-white no-underline font-medium transition-colors duration-300 relative hover:text-[#667eea] after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-[#667eea] after:transition-all after:duration-300 hover:after:w-full"
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              onClick={(e) => handleNavClick(e, '#projects')}
              className="text-gray-800 dark:text-white no-underline font-medium transition-colors duration-300 relative hover:text-[#667eea] after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-[#667eea] after:transition-all after:duration-300 hover:after:w-full"
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-gray-800 dark:text-white no-underline font-medium transition-colors duration-300 relative hover:text-[#667eea] after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-[#667eea] after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button
            className="w-10 h-10 rounded-md border-2 border-[#667eea] flex items-center justify-center text-xl cursor-pointer transition-all duration-300 hover:bg-[#667eea] hover:scale-110 dark:text-white"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          > 
            {isDark ? '☀️' : '🌙'}
          </button>
          {/* Admin Login / Messages */}
          {!isAdminLoggedIn ? (
            <button
              onClick={() => navigate("/admin")}
              className="px-4 py-2 rounded-md border-2 border-[#667eea] text-[#667eea] font-medium transition-all duration-300 hover:bg-[#667eea] hover:text-white"
            >
              Login
            </button>
          ) : (
            <>
              <button
                onClick={() => navigate("/admin/messages")}
                className="px-4 py-2 rounded-md bg-[#667eea] text-white transition-all duration-300 hover:scale-105"
              >
                Messages
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-md bg-red-500 text-white transition-all duration-300 hover:scale-105"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
      {isMobileMenuOpen && (
        <ul className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#1a1a2e] flex flex-col py-4 shadow-xl list-none m-0 p-0">
          <li className="w-full">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="block py-4 px-8 text-gray-800 dark:text-white no-underline font-medium"
            >
              Home
            </a>
          </li>
          <li className="w-full">
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, '#about')}
              className="block py-4 px-8 text-gray-800 dark:text-white no-underline font-medium"
            >
              About
            </a>
          </li>
          <li className="w-full">
            <a 
              href="#skills" 
              onClick={(e) => handleNavClick(e, '#skills')}
              className="block py-4 px-8 text-gray-800 dark:text-white no-underline font-medium"
            >
              Skills
            </a>
          </li>
          <li className="w-full">
            <a 
              href="#projects" 
              onClick={(e) => handleNavClick(e, '#projects')}
              className="block py-4 px-8 text-gray-800 dark:text-white no-underline font-medium"
            >
              Projects
            </a>
          </li>
          <li className="w-full">
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="block py-4 px-8 text-gray-800 dark:text-white no-underline font-medium"
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
