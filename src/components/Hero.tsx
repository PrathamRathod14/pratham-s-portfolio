import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV_Pratham_Rathod.pdf";
    link.download = "CV_Pratham_Rathod.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding pt-32"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-6 animate-fade-in-up">
          <div className="space-y-2">
            <p className="text-primary text-sm font-semibold tracking-wide uppercase">
              Full-Stack Developer
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Pratham Rathod
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Building intelligent web applications with modern technologies
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              View My Work
            </Button>
            <Button
              onClick={handleDownloadCV}
              size="lg"
              variant="outline"
              className="border-primary text-foreground hover:bg-primary hover:text-primary-foreground"
            >
              Download CV
            </Button>
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <a
              href="https://www.linkedin.com/in/prathamrathod14/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/PrathamRathod14"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
