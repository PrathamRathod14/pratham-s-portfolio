import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "AlphaChat AI Chatbot",
      description:
        "AI-powered chatbot with voice interaction, image generation, PDF summarization, and web scraping capabilities.",
      tech: ["Python", "NiceGUI", "ChatGroq API", "Speech Recognition"],
      link: "https://github.com/PrathamRathod14/AlphaChat",
      type: "github",
      featured: true,
    },
    {
      title: "Virtual Learning Management System",
      description:
        "Digital platform streamlining educational management and assessment tracking with cohort-based distribution.",
      tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      link: "https://www.linkedin.com/in/prathamrathod14/details/projects/",
      type: "external",
      featured: true,
    },
    {
      title: "University Book Management System",
      description:
        "Efficient system to maintain student book records, currently used by the university.",
      tech: ["PHP", "MySQL", "XAMPP"],
      link: "https://www.linkedin.com/in/prathamrathod14/details/projects/",
      type: "external",
      featured: false,
    },
    {
      title: "Hospital Management System with ML",
      description:
        "Medical appointment scheduling with disease prediction using Random Forest Classifier.",
      tech: ["PHP", "JavaScript", "Machine Learning", "Bootstrap"],
      link: "https://www.linkedin.com/in/prathamrathod14/details/projects/",
      type: "external",
      featured: true,
    },
    {
      title: "Pickup Laundry Web Application",
      description:
        "JSP-based laundry service platform with Razorpay payment integration and invoice generation.",
      tech: ["JSP", "Java", "Razorpay API"],
      link: "https://github.com/PrathamRathod14/PickUp-Laundry-System",
      type: "github",
      featured: false,
    },
    {
      title: "Weather Analytics Dashboard",
      description:
        "Interactive dashboard for weather data visualization and analytics.",
      tech: ["Python", "Data Visualization"],
      link: "https://www.linkedin.com/in/prathamrathod14/details/projects/",
      type: "external",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            A showcase of innovative solutions built with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-border/50 hover:border-primary hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-xl md:text-2xl group-hover:text-primary transition-colors flex-1">
                    {project.title}
                  </h3>
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all">
                    {project.type === "github" ? (
                      <Github className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    ) : (
                      <ExternalLink className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 bg-primary/5 text-primary rounded-lg text-xs font-semibold border border-primary/20 group-hover:bg-primary/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center animate-scale-in">
          <Button
            onClick={() =>
              window.open(
                "https://github.com/PrathamRathod14?tab=repositories",
                "_blank"
              )
            }
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
