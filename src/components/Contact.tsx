import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:pratham.rathod1401@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    toast.success("Opening your email client...");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          <div className="space-y-6 md:space-y-8 animate-fade-in-up">
            <div className="bg-card/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-lg border-2 border-border/50 hover:border-primary/50 transition-all hover:-translate-y-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                <Mail className="w-7 h-7 text-primary" />
                Contact Information
              </h3>
              <div className="space-y-6">
                <a
                  href="mailto:pratham.rathod1401@gmail.com"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">Email</p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      pratham.rathod1401@gmail.com
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-lg border-2 border-border/50 hover:border-primary/50 transition-all hover:-translate-y-1">
              <h3 className="text-xl md:text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/prathamrathod14/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-xl bg-primary/10 hover:bg-primary hover:scale-110 transition-all shadow-md group"
                >
                  <Linkedin className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </a>
                <a
                  href="https://github.com/PrathamRathod14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-xl bg-primary/10 hover:bg-primary hover:scale-110 transition-all shadow-md group"
                >
                  <Github className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-card/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-lg border-2 border-border/50 hover:border-primary/50 transition-all space-y-6 animate-fade-in-up"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-3 text-foreground">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="bg-background border-2 border-border focus:border-primary h-12 text-base"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-3 text-foreground">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="bg-background border-2 border-border focus:border-primary h-12 text-base"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-3 text-foreground"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message..."
                rows={6}
                className="bg-background border-2 border-border focus:border-primary text-base resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
