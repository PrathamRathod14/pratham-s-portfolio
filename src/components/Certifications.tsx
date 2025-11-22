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
    <section id="certifications" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional Certifications
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href="https://www.linkedin.com/in/prathamrathod14/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer text-center border-2 border-border hover:border-primary/50 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className="text-4xl">{cert.icon}</div>
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors min-h-[3.5rem] flex items-center justify-center">
                {cert.title}
              </h3>
              <p className="text-sm text-primary font-semibold mb-1">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground bg-primary/5 px-3 py-1 rounded-full inline-block">
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
