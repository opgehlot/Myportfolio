import { skills } from '../data/skillsData';

const Skills = () => {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="py-24 px-8 bg-white dark:bg-[#1a1a2e] transition-colors duration-300 md:py-16 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-3xl font-bold text-center mb-12 md:mb-8 text-gray-800 dark:text-white relative inline-block w-full after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-gradient-to-r after:from-[#667eea] after:to-[#764ba2] after:rounded-md">
          Skills
        </h2>
        <div className="flex flex-col gap-12">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <div key={category} className="mb-8">
              <h3 className="text-2xl md:text-xl font-semibold text-[#667eea] mb-6 text-center">{category}</h3>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 max-w-4xl mx-auto md:grid-cols-[repeat(auto-fit,minmax(120px,1fr))] md:gap-3">
                {categorySkills.map((skill) => (
                  <div
                    key={skill.id}
                    className="p-5 md:p-4 bg-gray-50 dark:bg-[#0f1624] rounded-lg text-center font-medium text-gray-800 dark:text-white transition-all duration-300 border-2 border-transparent hover:-translate-y-1 hover:border-[#667eea] hover:shadow-[0_5px_15px_rgba(102,126,234,0.2)] hover:bg-white dark:hover:bg-[#16213e] md:text-sm"
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
