import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80 hero-gradient"></div>
      </div>
      
      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full"></div>
        <div className="floating absolute top-40 right-20 w-6 h-6 bg-accent/20 rounded-full" style={{ animationDelay: '1s' }}></div>
        <div className="floating absolute bottom-40 left-20 w-3 h-3 bg-tech-terraform/30 rounded-full" style={{ animationDelay: '2s' }}></div>
        <div className="floating absolute bottom-20 right-10 w-5 h-5 bg-tech-docker/30 rounded-full" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-tech bg-clip-text text-transparent">
          DevOps Engineer
        </h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4">
          [Your Name]
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          I'm a DevOps Engineer with a passion for automation, scalable infrastructure, 
          and security best practices. Building the future, one pipeline at a time.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="lg" className="group">
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download Resume
          </Button>
          <Button variant="outline" size="lg">
            View My Work
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card/50 hover:bg-card card-hover border border-border"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card/50 hover:bg-card card-hover border border-border"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:your.email@example.com"
            className="p-3 rounded-full bg-card/50 hover:bg-card card-hover border border-border"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;