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
    },
    {
      title: "Virtual Learning Management System",
      description:
        "Digital platform streamlining educational management and assessment tracking with cohort-based distribution.",
      tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap"],
      link: "https://www.linkedin.com/in/prathamrathod14/details/projects/",
      type: "external",
    },
    {
      title: "University Book Management System",
      description:
        "Efficient system to maintain student book records, currently used by the university.",
      tech: ["PHP", "MySQL", "XAMPP", "Authentication"],
      link: "https://www.linkedin.com/in/prathamrathod14/details/projects/",
      type: "external",
    },
    {
      title: "Hospital Management System with ML",
      description:
        "Medical appointment scheduling with disease prediction using Random Forest Classifier.",
      tech: ["PHP", "JavaScript", "Machine Learning", "Bootstrap", "MySQL"],
      link: "https://www.linkedin.com/in/prathamrathod14/details/projects/",
      type: "external",
    },
    {
      title: "Pickup Laundry Web Application",
      description:
        "JSP-based laundry service platform with Razorpay payment integration and invoice generation.",
      tech: ["JSP", "Java", "Razorpay API", "PDF Generation"],
      link: "https://github.com/PrathamRathod14/PickUp-Laundry-System",
      type: "github",
    },
    {
      title: "Weather Analytics Dashboard",
      description:
        "Interactive dashboard for weather data visualization and analytics.",
      tech: ["Python", "Data Visualization", "Analytics"],
      link: "https://www.linkedin.com/in/prathamrathod14/details/projects/",
      type: "external",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of innovative solutions built with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-effect p-6 rounded-xl hover:scale-105 transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    {project.type === "github" ? (
                      <Github className="w-5 h-5" />
                    ) : (
                      <ExternalLink className="w-5 h-5" />
                    )}
                  </a>
                </div>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Button
            onClick={() =>
              window.open(
                "https://github.com/PrathamRathod14?tab=repositories",
                "_blank"
              )
            }
            size="lg"
            className="bg-primary hover:bg-primary/90"
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
