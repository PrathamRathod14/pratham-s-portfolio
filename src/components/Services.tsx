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
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Comprehensive solutions for modern digital needs with cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-border hover:border-primary/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-4 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-2xl mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-6">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
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
