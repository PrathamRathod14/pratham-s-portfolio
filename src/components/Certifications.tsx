import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Introduction to Generative AI",
      issuer: "Google Cloud Skill Boost",
      year: "2024",
    },
    {
      title: "Oracle Cloud Infrastructure AI Foundations",
      issuer: "Oracle Cloud",
      year: "2024",
    },
    {
      title: "Google Data Analytics",
      issuer: "Google",
      year: "2023",
    },
    {
      title: "Career Edge - Young Professional",
      issuer: "TCS iON",
      year: "2023",
    },
  ];

  return (
    <section id="certifications" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href="https://www.linkedin.com/in/prathamrathod14/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect p-6 rounded-xl hover:scale-105 transition-all duration-300 group cursor-pointer text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Award className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm text-primary font-semibold">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground mt-2">{cert.year}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
