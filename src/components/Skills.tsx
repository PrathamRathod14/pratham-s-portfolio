import { Code, Database, Cloud, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "C++", "PHP", "Python", "JavaScript", "TypeScript"],
    },
    {
      title: "Web Development",
      icon: Code,
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "jQuery",
        "AJAX",
        "Bootstrap",
        "Angular",
        "ReactJS",
        "NiceGUI",
      ],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"],
    },
    {
      title: "AI & Cloud",
      icon: Cloud,
      skills: [
        "Google Cloud Platform",
        "Vertex AI",
        "Oracle Cloud AI",
        "Generative AI",
        "LLMs",
      ],
    },
    {
      title: "AI/ML Specialization",
      icon: Brain,
      skills: [
        "Deep Learning",
        "Machine Learning",
        "Prompt Engineering",
        "Neural Networks",
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Code,
      skills: [
        "Git",
        "GitHub",
        "Selenium",
        "JUnit",
        "pytest",
        "Excel",
        "Power BI",
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="glass-effect p-6 rounded-xl hover:scale-105 transition-all duration-300 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-secondary rounded-full text-sm text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
