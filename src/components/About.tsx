import { GraduationCap, Code2, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV_Pratham_Rathod.pdf";
    link.download = "CV_Pratham_Rathod.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const education = [
    {
      degree: "MSc in Digital Technologies",
      institution: "Ostfalia University of Applied Sciences",
      location: "Germany",
      period: "2024 – Present",
      focus: "AI, Machine Learning, Digital Systems",
    },
    {
      degree: "Bachelor of Computer Application",
      institution: "Uka Tarsadia University",
      location: "India",
      period: "2021 – 2024",
      grade: "9.23 CGPA",
    },
  ];

  const coreSkills = [
    { name: "Full-Stack Development", icon: Code2 },
    { name: "AI & Machine Learning", icon: Rocket },
    { name: "Database Architecture", icon: GraduationCap },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-primary font-semibold">Software Developer</span> skilled in 
              <span className="text-primary font-semibold"> Web, App, and AI</span> — creating responsive 
              websites and intuitive mobile applications with intelligent features for robust, scalable, 
              and user-friendly solutions.
            </p>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary" />
                Education
              </h3>
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="glass-effect p-6 rounded-xl hover:scale-105 transition-all duration-300 animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="font-bold text-lg text-primary">{edu.degree}</h4>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                    <span>{edu.location}</span>
                    <span>•</span>
                    <span>{edu.period}</span>
                  </div>
                  {edu.focus && (
                    <p className="text-sm text-primary mt-2">Focus: {edu.focus}</p>
                  )}
                  {edu.grade && (
                    <p className="text-sm font-semibold mt-2">Grade: {edu.grade}</p>
                  )}
                </div>
              ))}
            </div>

            <Button
              onClick={handleDownloadCV}
              size="lg"
              className="w-full md:w-auto bg-primary hover:bg-primary/90"
            >
              Download Full CV
            </Button>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Code2 className="w-6 h-6 text-primary" />
              Core Skills
            </h3>
            <div className="grid gap-4">
              {coreSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="glass-effect p-6 rounded-xl hover:scale-105 transition-all duration-300 group animate-scale-in"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-bold text-lg">{skill.name}</h4>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
