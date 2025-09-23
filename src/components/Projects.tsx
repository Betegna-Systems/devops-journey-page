import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Clock, TrendingUp, Shield } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Automated CI/CD Pipeline",
      description: "Built a comprehensive CI/CD pipeline using Jenkins and GitHub Actions that reduced deployment time by 60%. Implemented automated testing, security scanning, and blue-green deployments.",
      tech: ["Jenkins", "Docker", "AWS", "GitHub Actions"],
      metrics: "60% faster deployments",
      icon: <Clock className="w-6 h-6" />,
      color: "tech-success",
      github: "https://github.com/yourusername/cicd-pipeline",
      demo: "https://demo-link.com"
    },
    {
      title: "AWS Infrastructure Hardening",
      description: "Designed and implemented secure, scalable AWS infrastructure using Terraform and Ansible. Achieved 99.9% uptime with automated backup and disaster recovery strategies.",
      tech: ["Terraform", "Ansible", "AWS", "CloudWatch"],
      metrics: "99.9% uptime achieved",
      icon: <Shield className="w-6 h-6" />,
      color: "tech-terraform",
      github: "https://github.com/yourusername/aws-infrastructure",
      demo: "https://demo-link.com"
    },
    {
      title: "Kubernetes Monitoring Stack",
      description: "Deployed comprehensive monitoring solution using Prometheus, Grafana, and ELK stack. Improved incident response time by 40% through proactive alerting and dashboards.",
      tech: ["Kubernetes", "Prometheus", "Grafana", "ELK"],
      metrics: "40% faster incident response",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "tech-docker",
      github: "https://github.com/yourusername/k8s-monitoring",
      demo: "https://demo-link.com"
    }
  ];

  return (
    <section className="py-20 px-6 bg-card/20" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world DevOps solutions that drive efficiency, security, and scalability
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="card-gradient rounded-xl p-8 border border-border card-hover fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Icon & Metrics */}
              <div className="flex items-center justify-between mb-6">
                <div className={`text-${project.color} p-3 bg-background/20 rounded-lg`}>
                  {project.icon}
                </div>
                <div className="text-right">
                  <div className={`text-${project.color} text-sm font-semibold`}>
                    {project.metrics}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Impact
                  </div>
                </div>
              </div>

              {/* Project Title & Description */}
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="text-xs bg-background/30 text-muted-foreground px-3 py-1 rounded-full border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="flex-1"
                  asChild
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12 fade-in">
          <Button variant="tech" size="lg" asChild>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;