import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";
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
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6 animate-fade-in-up">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-border">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a
                  href="mailto:pratham.rathod1401@gmail.com"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Email</p>
                    <p className="font-semibold text-foreground">pratham.rathod1401@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-border">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/prathamrathod14/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 shadow-sm"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/PrathamRathod14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 shadow-sm"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-lg border-2 border-border space-y-6 animate-fade-in-up"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="bg-white border-2 border-border focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
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
                className="bg-white border-2 border-border focus:border-primary"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2 text-foreground"
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
                className="bg-white border-2 border-border focus:border-primary"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 shadow-lg"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
