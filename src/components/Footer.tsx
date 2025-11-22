const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <blockquote className="text-lg italic text-muted-foreground max-w-3xl mx-auto">
            "The only way to do great work is to love what you do."
            <footer className="text-sm mt-3 font-semibold text-primary">— Steve Jobs</footer>
          </blockquote>
          
          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2025 Pratham Rathod. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
