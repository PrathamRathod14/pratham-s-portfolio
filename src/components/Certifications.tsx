import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Introduction to Generative AI",
      issuer: "Google Cloud Skill Boost",
      year: "2024",
      icon: "🎓",
    },
    {
      title: "Oracle Cloud Infrastructure AI Foundations",
      issuer: "Oracle Cloud",
      year: "2024",
      icon: "☁️",
    },
    {
      title: "Google Data Analytics",
      issuer: "Google",
      year: "2023",
      icon: "📊",
    },
    {
      title: "Career Edge - Young Professional",
      issuer: "TCS iON",
      year: "2023",
      icon: "💼",
    },
  ];

  return (
    <section id="certifications" className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Professional Certifications
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href="https://www.linkedin.com/in/prathamrathod14/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer text-center border-2 border-border/50 hover:border-primary hover:-translate-y-3 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-6">
                <div className="text-5xl md:text-6xl transform group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
              </div>
              <h3 className="font-bold text-lg md:text-xl mb-3 group-hover:text-primary transition-colors min-h-[3.5rem] flex items-center justify-center">
                {cert.title}
              </h3>
              <p className="text-sm md:text-base text-primary font-semibold mb-2">{cert.issuer}</p>
              <p className="text-xs font-semibold text-foreground bg-primary/10 px-4 py-1.5 rounded-full inline-block">
                {cert.year}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
