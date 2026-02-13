import { useState, useEffect } from 'react';
import Button from '../components/Button';
import AnimatedBackground from '../components/AnimatedBackground';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Full Stack Developer', 'Software Developer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 1000); // Change every 1 second

    return () => clearInterval(interval);
  }, [roles.length]);

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectsClick = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-white p-8 pt-24 overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full text-center">
        <div className="animate-fadeInUp">
          <h1 className="text-6xl md:text-4xl font-bold mb-4 tracking-tight bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Omprakash Gehlot
          </h1>
          <h2 className="text-3xl md:text-2xl font-normal mb-6 opacity-90 text-blue-200 min-h-[3rem] md:min-h-[2.5rem] flex items-center justify-center">
            <span 
              key={currentRole}
              className="inline-block animate-fadeIn"
            >
              {roles[currentRole]}
            </span>
          </h2>
          <p className="text-xl md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed opacity-95 text-gray-200">
            Building beautiful, functional, and user-centered digital experiences
          </p>
          <div className="flex gap-6 justify-center flex-wrap md:flex-col md:items-center">
            <Button text="View Projects" variant="primary" onClick={handleProjectsClick} />
            <Button text="Get In Touch" variant="secondary" onClick={handleContactClick} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
