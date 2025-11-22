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
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
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

          <div className="flex flex-wrap gap-4 pt-4">
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

          <div className="flex gap-4 pt-4">
            <a
              href="https://www.linkedin.com/in/prathamrathod14/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary transition-all hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/PrathamRathod14"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary transition-all hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="relative animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-400 rounded-full blur-3xl opacity-20 animate-glow"></div>
          <div className="relative glass-effect p-8 rounded-2xl">
            <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-blue-400/20 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl font-bold text-gradient">PR</div>
                <p className="text-sm text-muted-foreground">
                  Web & AI Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
