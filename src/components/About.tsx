import { GraduationCap, Code2, Rocket, Zap } from "lucide-react";
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

  const specializations = [
    { name: "Web Development", icon: Code2 },
    { name: "AI Solutions", icon: Rocket },
    { name: "Mobile Development", icon: Zap },
    { name: "Database Engineering", icon: GraduationCap },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* About Description */}
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-primary font-semibold">Software Developer</span> skilled in{" "}
              <span className="text-primary font-semibold">Web, App, and AI</span> — creating responsive
              websites and intuitive mobile applications with intelligent features for robust, scalable,
              and user-friendly solutions.
            </p>
            <Button
              onClick={handleDownloadCV}
              size="lg"
              className="mt-6 bg-primary hover:bg-primary/90 shadow-lg"
            >
              Download CV
            </Button>
          </div>

          {/* Education Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/50 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="font-bold text-lg text-primary mb-2">{edu.degree}</h4>
                  <p className="text-foreground font-medium">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                    <span>{edu.location}</span>
                    <span>•</span>
                    <span>{edu.period}</span>
                  </div>
                  {edu.focus && (
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="font-semibold">Focus:</span> {edu.focus}
                    </p>
                  )}
                  {edu.grade && (
                    <p className="text-sm font-semibold text-primary mt-2">
                      Grade: {edu.grade}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Specialization Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Specialization</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {specializations.map((spec, index) => {
                const Icon = spec.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group text-center border border-border hover:border-primary/50 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-sm">{spec.name}</h4>
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
