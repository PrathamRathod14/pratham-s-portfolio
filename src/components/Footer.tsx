const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 py-16 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <blockquote className="text-lg md:text-xl italic text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            "The only way to do great work is to love what you do."
            <footer className="text-sm md:text-base mt-4 font-semibold text-primary">— Steve Jobs</footer>
          </blockquote>
          
          <div className="pt-8 border-t border-border/50">
            <p className="text-sm md:text-base text-muted-foreground font-medium">
              © 2025 Pratham Rathod. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
