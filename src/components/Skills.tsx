import {
  Code,
  Shield,
  Palette,
  Globe,
  Lock,
  Terminal,
  Network,
  Eye,
  Database,
  Brain,
  BarChart3,
} from "lucide-react";

const skills = [
  { name: "HTML", icon: Code, color: "from-orange-500 to-red-500" },
  { name: "CSS", icon: Palette, color: "from-blue-500 to-cyan-500" },
  { name: "JavaScript", icon: Code, color: "from-yellow-500 to-orange-500" },
  { name: "React", icon: Code, color: "from-cyan-500 to-blue-500" },
  { name: "UI/UX Design", icon: Palette, color: "from-purple-500 to-pink-500" },
  { name: "Penetration Testing", icon: Shield, color: "from-red-500 to-pink-500" },
  { name: "Linux / Kali", icon: Terminal, color: "from-green-500 to-emerald-500" },
  { name: "Networks", icon: Network, color: "from-indigo-500 to-purple-500" },
  { name: "Cybersecurity", icon: Lock, color: "from-red-600 to-orange-600" },
  { name: "Data Science", icon: Database, color: "from-teal-500 to-cyan-500" },
  { name: "Machine Learning", icon: Brain, color: "from-violet-500 to-purple-500" },
  { name: "Power BI", icon: BarChart3, color: "from-yellow-600 to-amber-500" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="absolute inset-0 gradient-primary opacity-5" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit combining creativity, security, and modern web technologies
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="glass rounded-2xl p-6 text-center group hover:glow-primary transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${skill.color} p-3 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:gradient-text transition-all">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
