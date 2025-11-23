import { Briefcase, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Intern",
      company: "MegaMinds Technologies Pvt. Ltd.",
      location: "Surat, India",
      period: "Jan 2024 – Apr 2024",
      type: "on-site",
      responsibilities: [
        "Developed Angular applications, improving user experience",
        "Mastered Angular CLI and TypeScript",
        "Collaborated effectively, enhancing project outcomes",
      ],
    },
    {
      role: "Freelance Developer",
      company: "Fiverr",
      location: "Remote",
      period: "Mar 2024 – Present",
      type: "on-site",
      responsibilities: [
        "Providing full-stack web development services",
        "Building scalable backend systems and responsive frontends",
        "Delivering custom solutions to international clients",
      ],
    },
  ];

  const achievements = [
    {
      title: "DT Project Competition Winner",
      organization: "Ostfalia University, Germany",
      description: "Won for AlphaChat AI Chatbot project",
      year: "2024",
    },
    {
      title: "MINeD Hackathon 2024",
      organization: "Nirma University & Binghamton University",
      description: "First position in National-level Hackathon",
      year: "2024",
    },
    {
      title: "SQL Mania Winner",
      organization: "Uka Tarsadia University",
      description: "State-level database competition",
      year: "2023",
    },
    {
      title: "Web Development Competition",
      organization: "SolomonIT - M.K. Institute",
      description: "First position in inter-college competition",
      year: "2023",
    },
  ];

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-border/50 hover:border-primary/50 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-xl bg-primary/10">
                  <Briefcase className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-2xl mb-2 text-foreground">{exp.role}</h3>
                  <p className="text-primary font-semibold text-lg mb-1">{exp.company}</p>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {exp.location}
                    </span>
                    <span>•</span>
                    <span>{exp.period}</span>
                    <span>•</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                      {exp.type}
                    </span>
                  </div>
                  <ul className="space-y-3 mt-6">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li
                        key={respIndex}
                        className="text-sm md:text-base text-muted-foreground flex items-start leading-relaxed"
                      >
                        <span className="text-primary mr-3 mt-1 font-bold">▸</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 flex items-center justify-center gap-3 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            <Award className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            Achievements & Recognition
          </h3>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {achievements.map((achievement, index) => (
            <a
              key={index}
              href="https://www.linkedin.com/in/prathamrathod14/details/honors/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border-2 border-border/50 hover:border-primary hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-bold text-lg md:text-xl group-hover:text-primary transition-colors flex-1 pr-2">
                      {achievement.title}
                    </h4>
                    <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full whitespace-nowrap">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-primary font-semibold mb-2">
                    {achievement.organization}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
