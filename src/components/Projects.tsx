import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const projects = [
  {
    title: "WA-VScan Pro (Automated Web Application Vulnerability Scanner)",
    description:
      "A GUI-based automated vulnerability scanner producing visual security reports. Implements multithreading, HTTP analysis, input validation, secure coding, and report rendering for penetration testing workflows.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
    tags: ["Python", "Security", "Networking"],
    github: "https://github.com/irohitbatra/WA-VScan-Pro",
  },
  {
    title: "Mini-SIEM (Log Analyzer for Intrusion Detection)",
    description:
      "A Python-based Security Information & Event Management system for analyzing logs, detecting suspicious patterns, triggering alerts, and supporting security analysts. Uses regex, OS modules, CSV/JSON handling, and automation.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    tags: ["Python", "Security", "Automation"],
    github: "https://github.com/irohitbatra/Mini-SIEM-Advanced",
  },
  {
    title: "Customer Lifetime Value Prediction",
    description:
      "A Streamlit-based machine learning app predicting customer lifetime value using advanced preprocessing, feature engineering, model training, visualization dashboards, and KPI insights.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["ML", "Data Science", "Python"],
    github:
      "https://github.com/irohitbatra/Customer-Lifetime-Value-Prediction",
  },
  {
    title: "Auto Mail Pro",
    description:
      "An automated mailing system for personalized messaging, scheduled emails, bulk communication, and workflow automation using SMTP and Python.",
    image:
      "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400&fit=crop",
    tags: ["Python", "Automation", "SMTP"],
    github: "https://github.com/irohitbatra/auto_mail_pro",
  },
  {
    title: "Weather App",
    description:
      "A React-based real-time weather application using OpenWeatherMap API. Demonstrates API integration, state management, dynamic UI updates, and responsive design.",
    image:
      "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=600&h=400&fit=crop",
    tags: ["JavaScript", "API", "Frontend"],
    github: "https://github.com/irohitbatra/weather-app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my work in web development, cybersecurity, automation, and AI.
          </p>
        </div>

        {/* FIX: Equal height cards + aligned GitHub buttons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden group hover:glow-primary transition-all duration-300 animate-fade-in flex flex-col"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold group-hover:gradient-text transition-all">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mt-2 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub Button — perfectly aligned */}
                <div className="pt-4 mt-auto">
                  <Button
                    size="sm"
                    className="w-full gradient-primary group/btn"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
