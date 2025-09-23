import { Cloud, Container, Database, GitBranch, Lock, Server, Terminal, Workflow } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: <Cloud className="w-8 h-8" />,
      skills: ["AWS", "Azure", "Google Cloud", "DigitalOcean"],
      color: "tech-aws"
    },
    {
      title: "Containerization",
      icon: <Container className="w-8 h-8" />,
      skills: ["Docker", "Kubernetes", "Helm", "Docker Compose"],
      color: "tech-docker"
    },
    {
      title: "Infrastructure as Code",
      icon: <Server className="w-8 h-8" />,
      skills: ["Terraform", "Ansible", "CloudFormation", "Pulumi"],
      color: "tech-terraform"
    },
    {
      title: "CI/CD & Version Control",
      icon: <GitBranch className="w-8 h-8" />,
      skills: ["Jenkins", "GitHub Actions", "GitLab CI", "Git"],
      color: "tech-success"
    },
    {
      title: "Monitoring & Logging",
      icon: <Workflow className="w-8 h-8" />,
      skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog"],
      color: "primary"
    },
    {
      title: "Security",
      icon: <Lock className="w-8 h-8" />,
      skills: ["OWASP", "Vault", "Security Scanning", "Compliance"],
      color: "destructive"
    },
    {
      title: "Databases",
      icon: <Database className="w-8 h-8" />,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
      color: "accent"
    },
    {
      title: "Scripting & Programming",
      icon: <Terminal className="w-8 h-8" />,
      skills: ["Python", "Bash", "PowerShell", "Go"],
      color: "tech-python"
    }
  ];

  return (
    <section className="py-20 px-6" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Tools
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for modern DevOps practices and cloud-native development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="card-gradient rounded-xl p-6 border border-border card-hover fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`text-${category.color} mb-4 tech-icon-hover`}>
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="text-sm text-muted-foreground bg-background/20 rounded-md px-3 py-1 border border-border/50"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-16 text-center fade-in">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {["AWS", "Docker", "Kubernetes", "Terraform", "Python", "Jenkins", "Git", "Linux"].map((tech) => (
              <div 
                key={tech}
                className="flex flex-col items-center tech-icon-hover cursor-pointer"
              >
                <div className="w-16 h-16 bg-card rounded-lg flex items-center justify-center border border-border mb-2">
                  <span className="text-2xl font-bold text-primary">
                    {tech.charAt(0)}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;