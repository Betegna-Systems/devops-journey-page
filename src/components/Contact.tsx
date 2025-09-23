import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Calendar } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
      color: "tech-success"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      href: "https://linkedin.com/in/yourprofile",
      color: "tech-docker"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/yourusername",
      href: "https://github.com/yourusername",
      color: "foreground"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "San Francisco, CA",
      href: null,
      color: "destructive"
    }
  ];

  return (
    <section className="py-20 px-6 bg-card/20" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next DevOps project or just want to chat about cloud technologies? 
            I'd love to hear from you!
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <div
              key={method.label}
              className="card-gradient rounded-xl p-6 border border-border card-hover fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4">
                <div className={`text-${method.color} p-3 bg-background/20 rounded-lg tech-icon-hover`}>
                  {method.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {method.label}
                  </h3>
                  {method.href ? (
                    <a 
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <span className="text-muted-foreground">{method.value}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center fade-in">
          <div className="card-gradient rounded-xl p-8 border border-border mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">
                Schedule a Meeting
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              I'm always open to discussing new opportunities, collaborations, 
              or simply sharing knowledge about DevOps best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:your.email@example.com">
                  <Mail className="w-5 h-5" />
                  Send Message
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://calendly.com/yourlink" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5" />
                  Book a Call
                </a>
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="text-sm text-muted-foreground">
            <p>© 2024 [Your Name]. Built with React, TypeScript, and Tailwind CSS.</p>
            <p className="mt-2">
              Deployed on AWS with automated CI/CD pipeline • 
              <a href="https://github.com/yourusername/portfolio" className="text-primary hover:underline ml-1">
                View Source Code
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;