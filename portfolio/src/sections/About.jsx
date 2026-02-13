const About = () => {
  return (
    <section id="about" className="py-24 px-8 bg-gray-50 dark:bg-[#16213e] transition-colors duration-300 md:py-16 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-3xl font-bold text-center mb-12 md:mb-8 text-gray-800 dark:text-white relative inline-block w-full after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-gradient-to-r after:from-[#667eea] after:to-[#764ba2] after:rounded-md">
          About Me
        </h2>
        <div className="flex justify-center gap-12">
          <div className="max-w-3xl text-center">
            <p className="text-lg md:text-base leading-relaxed text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
              Hello! I'm a passionate full-stack developer with a love for creating
              innovative web solutions. With expertise in modern JavaScript frameworks
              and a keen eye for design, I strive to build applications that are both
              beautiful and functional.
            </p>
            <p className="text-lg md:text-base leading-relaxed text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the
              developer community.
            </p>
            <p className="text-lg md:text-base leading-relaxed text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
              I believe in writing clean, maintainable code and always keeping the
              user experience at the forefront of everything I build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
