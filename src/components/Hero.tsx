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
      {/* Animated Background with Wave Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/[0.02] to-background"></div>
        
        {/* Animated flowing wave lines - similar to reference */}
        <svg 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[1200px] h-[800px] opacity-[0.15]"
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Multiple wave layers */}
          <g>
            {[...Array(30)].map((_, i) => {
              const yOffset = 400;
              const amplitude = 40 + i * 2;
              const frequency = 0.01 + i * 0.0002;
              const phase = i * 0.3;
              
              return (
                <path
                  key={i}
                  d={`M 0 ${yOffset} Q ${300} ${yOffset - amplitude * Math.sin(phase)}, ${600} ${yOffset} T ${1200} ${yOffset}`}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  className="text-primary animate-float"
                  style={{ 
                    opacity: 0.4 - i * 0.012,
                    animationDuration: `${6 + i * 0.3}s`,
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              );
            })}
          </g>
        </svg>

        {/* Subtle floating orbs */}
        <div className="absolute top-1/4 left-[10%] w-64 h-64 bg-primary/[0.03] rounded-full blur-3xl animate-float" style={{ animationDelay: '0s', animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/4 right-[15%] w-80 h-80 bg-primary/[0.05] rounded-full blur-3xl animate-float" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
        <div className="absolute top-1/3 right-[20%] w-72 h-72 bg-accent/[0.03] rounded-full blur-3xl animate-float" style={{ animationDelay: '4s', animationDuration: '12s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="space-y-8 animate-fade-in-up">
          {/* Split Name Design with Enhanced Typography */}
          <div className="space-y-3">
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight tracking-tight text-foreground">
              Pratham
            </h1>
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight tracking-tight bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              Rathod
            </h1>
          </div>

          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground/80">
              Full-Stack Developer
            </p>
            
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Building intelligent web applications with modern technologies
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-8 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              View My Work
            </Button>
            <a
              href="https://www.linkedin.com/in/prathamrathod14/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-card border-2 border-border hover:border-primary hover:bg-primary/10 transition-all hover:scale-110 shadow-md group"
            >
              <Linkedin className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/PrathamRathod14"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-card border-2 border-border hover:border-primary hover:bg-primary/10 transition-all hover:scale-110 shadow-md group"
            >
              <Github className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
