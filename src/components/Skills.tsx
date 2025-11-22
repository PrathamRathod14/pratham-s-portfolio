import { ExternalLink, Github } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "C++", "PHP", "Python", "JavaScript", "TypeScript"],
      color: "bg-blue-50 border-blue-200 hover:border-blue-400",
    },
    {
      title: "Web Development",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "jQuery",
        "Bootstrap",
        "Angular",
        "ReactJS",
        "NiceGUI",
      ],
      color: "bg-purple-50 border-purple-200 hover:border-purple-400",
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"],
      color: "bg-green-50 border-green-200 hover:border-green-400",
    },
    {
      title: "AI & Cloud",
      skills: [
        "Google Cloud Platform",
        "Vertex AI",
        "Oracle Cloud AI",
        "Generative AI",
      ],
      color: "bg-orange-50 border-orange-200 hover:border-orange-400",
    },
    {
      title: "AI/ML Specialization",
      skills: [
        "Deep Learning",
        "Machine Learning",
        "Prompt Engineering",
        "Neural Networks",
      ],
      color: "bg-pink-50 border-pink-200 hover:border-pink-400",
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git",
        "GitHub",
        "Selenium",
        "JUnit",
        "Excel",
        "Power BI",
      ],
      color: "bg-indigo-50 border-indigo-200 hover:border-indigo-400",
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${category.color} animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-bold text-xl mb-4 text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-white border border-border rounded-full text-sm text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default shadow-sm"
                  >
                    {skill}
                  </span>
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
