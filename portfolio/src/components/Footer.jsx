const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-[#1a1a2e] text-gray-800 dark:text-white py-8 mt-16 border-t border-gray-200 dark:border-[#2d3748] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center flex-wrap gap-4 md:flex-col md:text-center">
          <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
          <div className="flex gap-8 md:gap-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-white no-underline transition-colors duration-300 hover:text-[#667eea]"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-white no-underline transition-colors duration-300 hover:text-[#667eea]"
            >
              LinkedIn
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-white no-underline transition-colors duration-300 hover:text-[#667eea]"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
