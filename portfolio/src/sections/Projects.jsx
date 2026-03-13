import { projects } from '../data/projectsData.js';
import Button from '../components/Button';

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-8 bg-gray-50 dark:bg-[#16213e] transition-colors duration-300 md:py-16 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-3xl font-bold text-center mb-12 md:mb-8 text-gray-800 dark:text-white relative inline-block w-full after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-gradient-to-r after:from-[#667eea] after:to-[#764ba2] after:rounded-md">
          Projects
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 mt-12 md:grid-cols-1 md:gap-6 md:mt-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-[#16213e] rounded-xl p-8 md:p-6 shadow-md dark:shadow-lg transition-all duration-300 flex flex-col border border-gray-200 dark:border-[#2d3748] hover:-translate-y-2.5 hover:shadow-xl dark:hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
            >
              <h3 className="text-2xl md:text-xl font-semibold text-[#667eea] mb-4">{project.title}</h3>
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 bg-gray-50 dark:bg-[#0f1624] rounded-full text-sm text-gray-600 dark:text-gray-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                <Button
                  text="View on GitHub"
                  variant="secondary"
                  href={project.github}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
