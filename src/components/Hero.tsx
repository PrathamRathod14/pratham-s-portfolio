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
      className="min-h-screen flex items-center justify-center section-padding pt-32 relative overflow-hidden"
    >
      {/* Decorative Wave Background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-10"
          viewBox="0 0 800 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 200 Q200 100, 400 200 T800 200 L800 400 L0 400 Z"
            fill="currentColor"
            className="text-primary"
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-6 animate-fade-in-up">
          {/* Split Name Design */}
          <div className="space-y-2">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              Pratham
            </h1>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-primary">
              Rathod
            </h1>
          </div>

          <p className="text-xl md:text-2xl font-medium text-muted-foreground">
            Full-Stack Developer
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Building intelligent web applications with modern technologies
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 shadow-lg hover:shadow-xl transition-all"
            >
              View My Work
            </Button>
            <a
              href="https://www.linkedin.com/in/prathamrathod14/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white border-2 border-border hover:border-primary hover:bg-primary/5 transition-all hover:scale-110 shadow-sm"
            >
              <Linkedin className="w-5 h-5 text-foreground" />
            </a>
            <a
              href="https://github.com/PrathamRathod14"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white border-2 border-border hover:border-primary hover:bg-primary/5 transition-all hover:scale-110 shadow-sm"
            >
              <Github className="w-5 h-5 text-foreground" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
