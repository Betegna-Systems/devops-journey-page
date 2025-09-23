import { Award, BookOpen, Target, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Mission-Driven",
      description: "Passionate about building reliable, scalable infrastructure that empowers teams to deliver value faster."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative",
      description: "Strong believer in DevOps culture, bridging the gap between development and operations teams."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Always staying up-to-date with the latest cloud technologies and industry best practices."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Results-Focused",
      description: "Proven track record of improving deployment efficiency, system reliability, and security posture."
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Certified Kubernetes Administrator (CKA)",
    "HashiCorp Terraform Associate",
    "Docker Certified Associate"
  ];

  return (
    <section className="py-20 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate DevOps Engineer with over 5 years of experience in designing, 
                implementing, and maintaining cloud-native infrastructure solutions. My journey 
                started with system administration and evolved into a love for automation and 
                cloud technologies.
              </p>
              <p>
                I specialize in building robust CI/CD pipelines, containerized applications, 
                and infrastructure as code. My approach combines technical excellence with 
                business understanding, ensuring that every solution not only works but also 
                drives measurable value.
              </p>
              <p>
                When I'm not optimizing deployment pipelines or troubleshooting production 
                issues, you'll find me contributing to open-source projects, learning about 
                emerging technologies, or sharing knowledge with the DevOps community.
              </p>
            </div>

            {/* Certifications */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Certifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert) => (
                  <div 
                    key={cert}
                    className="flex items-center gap-3 bg-card/30 rounded-lg p-3 border border-border/50"
                  >
                    <div className="w-2 h-2 bg-tech-success rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className="fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={highlight.title}
                  className="card-gradient rounded-xl p-6 border border-border card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-primary mb-4 tech-icon-hover">
                    {highlight.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Fun Stats */}
            <div className="mt-8 card-gradient rounded-xl p-6 border border-border">
              <h3 className="text-lg font-semibold mb-4 text-foreground text-center">
                Quick Stats
              </h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-xs text-muted-foreground">Deployments</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-tech-success">99.9%</div>
                  <div className="text-xs text-muted-foreground">Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">5+</div>
                  <div className="text-xs text-muted-foreground">Years Exp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;