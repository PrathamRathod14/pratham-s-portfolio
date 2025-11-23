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
      className="min-h-screen flex items-center justify-center section-padding pt-32 relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Animated Wave Pattern */}
        <svg 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[1000px] h-[600px] opacity-[0.15]"
          viewBox="0 0 1000 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="animate-float" style={{ transformOrigin: 'center' }}>
            {[...Array(20)].map((_, i) => (
              <path
                key={i}
                d={`M ${i * 50} 300 Q ${i * 50 + 25} ${280 + Math.sin(i) * 20}, ${i * 50 + 50} 300 T ${i * 50 + 100} 300`}
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                className="text-primary"
                opacity={0.3 - i * 0.01}
              />
            ))}
          </g>
        </svg>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="space-y-8 animate-fade-in-up">
          {/* Split Name Design with Enhanced Typography */}
          <div className="space-y-3">
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight tracking-tight text-foreground">
              Pratham
            </h1>
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight tracking-tight bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent animate-glow">
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
