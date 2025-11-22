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
    <section id="experience" className="section-padding bg-gradient-to-b from-white to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-border hover:border-primary/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-1">{exp.role}</h3>
                  <p className="text-primary font-semibold text-lg">{exp.company}</p>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mt-2 mb-4">
                    <span>{exp.location}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                    <span>•</span>
                    <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {exp.type}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li
                        key={respIndex}
                        className="text-sm text-muted-foreground flex items-start leading-relaxed"
                      >
                        <span className="text-primary mr-2 mt-1">▸</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
            <Award className="w-8 h-8 text-primary" />
            Achievements & Recognition
          </h3>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <a
              key={index}
              href="https://www.linkedin.com/in/prathamrathod14/details/honors/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border-2 border-border hover:border-primary/50 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h4>
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-sm text-primary font-semibold mb-2">
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
