import { Code } from "lucide-react";

const Skills = () => {
  const skillCategories = {
    "Programming Languages": ["Java", "C++", "PHP", "Python", "JavaScript", "TypeScript"],
    "Web Development": ["HTML5", "CSS3", "jQuery", "Bootstrap", "Angular", "ReactJS", "NiceGUI"],
    "Databases": ["MySQL", "PostgreSQL", "SQLite", "MongoDB"],
    "AI & Cloud": ["Google Cloud Platform", "Vertex AI", "Oracle Cloud AI", "Generative AI", "Google Colab"],
    "AI/ML Specialization": ["Deep Learning", "Machine Learning", "Prompt Engineering", "Neural Networks", "Computer Vision"],
    "Tools & Technologies": ["Git", "GitHub", "Selenium", "JUnit", "pytest", "Excel", "Power BI"],
  };

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </div>

        <div className="space-y-16">
          {Object.entries(skillCategories).map(([category, skills], index) => (
            <div
              key={category}
              className="animate-slide-in-right"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-8 flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground capitalize">
                  {category}
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                {skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-card p-5 md:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-border/50 hover:border-primary group hover:-translate-y-2 cursor-pointer animate-scale-in"
                    style={{ animationDelay: `${skillIndex * 0.03}s` }}
                  >
                    <div className="flex flex-col items-center gap-3 text-center">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <Code className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <span className="font-semibold text-sm md:text-base text-foreground group-hover:text-primary transition-colors">
                        {skill}
                      </span>
                    </div>
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
