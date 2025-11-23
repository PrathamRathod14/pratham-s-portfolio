import { Code, Database, Smartphone, Brain } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Building scalable, responsive, full-stack websites with modern frameworks",
      features: ["Responsive Design", "Full-Stack Development", "Modern Frameworks", "Performance Optimization"],
    },
    {
      icon: Brain,
      title: "AI/ML Solutions",
      description:
        "Intelligent systems for automation, image recognition, voice assistants, chatbots, and data analytics",
      features: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision"],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Cross-platform mobile apps with native performance and intuitive user experience",
      features: ["Android Development", "Cross-Platform", "UI/UX Design", "App Optimization"],
    },
    {
      icon: Database,
      title: "Database Engineering",
      description:
        "Robust database architecture, optimization, and management for scalable applications",
      features: ["Database Design", "Query Optimization", "Data Migration", "Performance Tuning"],
    },
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            My Services
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Comprehensive solutions for modern digital needs with cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-border/50 hover:border-primary hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="p-5 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-2xl md:text-3xl mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-8">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
