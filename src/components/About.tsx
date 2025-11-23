import { GraduationCap, Code, Smartphone, Database } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "MSc in Digital Technologies",
      school: "Ostfalia University of Applied Sciences",
      location: "Germany",
      period: "2024 – Present",
      focus: "AI, Machine Learning, Digital Systems",
    },
    {
      degree: "Bachelor of Computer Application",
      school: "Uka Tarsadia University",
      location: "India",
      period: "2021 – 2024",
      grade: "9.23 CGPA",
    },
  ];

  const coreSkills = [
    { title: "Web Development", icon: Code },
    { title: "AI Solutions", icon: GraduationCap },
    { title: "Mobile Development", icon: Smartphone },
    { title: "Database Engineering", icon: Database },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          <div className="space-y-8 animate-fade-in">
            <div className="bg-card/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-lg border border-border/50 hover-lift">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
                I'm a Software Developer skilled in Web, App, and AI — creating responsive websites and intuitive mobile applications with intelligent features for robust, scalable, and user-friendly solutions.
              </p>
            </div>

            {/* Education Section */}
            <div className="mt-16 animate-slide-in-right" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-card p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-border/50 hover:border-primary/50 hover:-translate-x-2 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="hidden md:block w-2 h-full bg-gradient-to-b from-primary to-accent rounded-full"></div>
                      <div className="flex-1">
                        <h4 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {edu.degree}
                        </h4>
                        <p className="text-primary font-semibold mb-2 text-lg">{edu.school}</p>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {edu.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {edu.period}
                          </span>
                        </div>
                        {edu.grade && (
                          <p className="text-sm font-semibold text-foreground mt-3 bg-primary/5 inline-block px-4 py-2 rounded-lg">
                            {edu.grade}
                          </p>
                        )}
                        {edu.focus && (
                          <p className="text-sm text-muted-foreground mt-3">
                            <span className="font-semibold text-foreground">Focus:</span> {edu.focus}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Skills */}
            <div className="mt-16 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Code className="w-7 h-7 text-primary" />
                </div>
                Specialization
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {coreSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-card p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-border/50 hover:border-primary group hover:-translate-y-3 cursor-pointer"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <skill.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                        {skill.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
