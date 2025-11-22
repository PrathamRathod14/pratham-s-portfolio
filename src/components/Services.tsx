import { Code, Database, Smartphone, Brain } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Responsive and optimized websites with modern frameworks and best practices",
    },
    {
      icon: Database,
      title: "Backend & Database Engineering",
      description:
        "API integration, data modeling, and scalable backend architecture",
    },
    {
      icon: Smartphone,
      title: "Android App Development",
      description:
        "Seamless cross-platform mobile applications with native performance",
    },
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description:
        "Integrating machine learning, automation, and intelligent features",
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Comprehensive development solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="glass-effect p-6 rounded-xl hover:scale-105 transition-all duration-300 group text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
