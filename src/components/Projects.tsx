import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Clock, TrendingUp, Shield, Cloud, Server, Workflow, Smartphone, MessageSquare } from "lucide-react";

const Projects = () => {
  const projects = [
  {
    title: "Automated CI/CD Pipeline",
    description: "Built a comprehensive CI/CD pipeline using Jenkins and GitHub Actions that reduced deployment time by 60%. Implemented automated testing, security scanning, and blue-green deployments.",
    tech: ["Jenkins", "Docker", "AWS", "GitHub Actions"],
    metrics: "60% faster deployments",
    icon: <Clock className="w-6 h-6" />,
    color: "tech-success",
  },
  {
    title: "AWS Infrastructure Hardening",
    description: "Designed and implemented secure, scalable AWS infrastructure using Terraform and Ansible. Achieved 99.9% uptime with automated backup and disaster recovery strategies.",
    tech: ["Terraform", "Ansible", "AWS", "CloudWatch"],
    metrics: "99.9% uptime achieved",
    icon: <Shield className="w-6 h-6" />,
    color: "tech-terraform",
  },
  {
    title: "Kubernetes Monitoring Stack",
    description: "Deployed comprehensive monitoring solution using Prometheus, Grafana, and ELK stack. Improved incident response time by 40% through proactive alerting and dashboards.",
    tech: ["Kubernetes", "Prometheus", "Grafana", "ELK"],
    metrics: "40% faster incident response",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "tech-docker",
  },
  {
    title: "Hybrid Cloud Integration",
    description: "Integrated on-premise systems with AWS cloud, enabling secure hybrid operations. Established VPNs, firewalls, and access controls to ensure compliance and resilience.",
    tech: ["AWS", "OpenShift", "Kubernetes", "VPN"],
    metrics: "Seamless hybrid operations with zero downtime migrations",
    icon: <Cloud className="w-6 h-6" />,
    color: "tech-cloud",
  },
  {
    title: "Hetzner Cloud SaaS Infrastructure",
    description: "Architected and scaled self-hosted infrastructure on Hetzner Cloud for a SaaS platform. Implemented vSwitch networking, firewalls, and PostgreSQL clustering for high performance.",
    tech: ["Hetzner Cloud", "PostgreSQL", "Terraform", "Ansible"],
    metrics: "Reduced hosting costs by 30% while improving reliability",
    icon: <Server className="w-6 h-6" />,
    color: "tech-hetzner",
  },
  {
    title: "Enterprise CI/CD for Safaricom",
    description: "Directed DevOps roadmap and implemented CI/CD pipelines for Spring Boot and Tibco APIs. Standardized workflows and automated deployments using Docker and Kubernetes.",
    tech: ["Spring Boot", "Tibco", "Docker", "Kubernetes", "Terraform"],
    metrics: "Deployment cycle time reduced by 50%",
    icon: <Workflow className="w-6 h-6" />,
    color: "tech-enterprise",
  },
  {
    title: "Ethiopian Airlines Mobile Apps",
    description: "Led development of Ethiopian Airlines and Cargo mobile apps using Flutter. Integrated backend systems and automated delivery pipelines with Azure DevOps.",
    tech: ["Flutter", "Azure DevOps", "C#", "Java"],
    metrics: "Adopted by millions of passengers and cargo clients",
    icon: <Smartphone className="w-6 h-6" />,
    color: "tech-mobile",
  },
  {
    title: "Conversational AI Bots",
    description: "Developed intelligent bots using Microsoft Bot Framework with NLP capabilities. Deployed across web, messaging, and voice platforms to enhance customer engagement.",
    tech: ["Microsoft Bot Framework", "NLP", "Azure"],
    metrics: "Improved customer self-service adoption by 35%",
    icon: <MessageSquare className="w-6 h-6" />,
    color: "tech-ai",
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;