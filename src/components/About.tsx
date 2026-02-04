import { Award, BookOpen, Target, Users, Cloud, Server } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Mission-Driven",
      description: "Dedicated to designing scalable, secure, and automated infrastructure that accelerates business outcomes."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Leader",
      description: "Experienced in mentoring engineers and fostering DevOps culture across cross-functional teams."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Actively exploring emerging technologies like Kubernetes, observability stacks, and cloud-native security."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Results-Focused",
      description: "Proven record of improving deployment speed, system reliability, and reducing operational costs."
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Expertise",
      description: "Hands-on with AWS, Azure, and Hetzner Cloud — architecting hybrid and multi-cloud environments."
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Infrastructure as Code",
      description: "Automation-first mindset using Terraform, Ansible, and CI/CD pipelines to ensure reproducibility."
    }
  ];

  const certifications = [
    "AWS Certified Cloud Practitioner CLF",
    "Microsoft Certified: Azure Fundamentals AZ-900",
    "Certification of Cyber Security Awareness",
    "Certification of General Data Protection Regulation (GDPR)",
    "Certification of Communication"
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
                I'm a Senior DevOps Engineer and Cloud Infrastructure Specialist with over 6 years of experience 
                architecting and maintaining mission-critical systems. My career spans enterprise telecom, aviation, 
                fintech, and SaaS platforms — where I've consistently delivered secure, scalable, and automated solutions.
              </p>
              <p>
                I specialize in CI/CD pipelines, container orchestration, and infrastructure as code. From building 
                resilient Kubernetes clusters to optimizing PostgreSQL databases and implementing observability stacks, 
                I thrive on solving complex infrastructure challenges with clarity and precision.
              </p>
              <p>
                Beyond technical delivery, I lead teams, author runbooks, and drive postmortems to strengthen resilience. 
                I believe DevOps is not just tooling, but a culture of collaboration, transparency, and continuous improvement.
              </p>
              <p>
                Outside of work, I enjoy contributing to open-source projects, refining frontend UX for accessibility, 
                and sharing knowledge with the global DevOps community.
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
                  <div className="text-2xl font-bold text-primary">100+</div>
                  <div className="text-xs text-muted-foreground">Deployments</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-tech-success">99.9%</div>
                  <div className="text-xs text-muted-foreground">Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">6+</div>
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
