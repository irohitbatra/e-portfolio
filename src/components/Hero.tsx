import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const roles = [
  "Programmer",
  "Cybersecurity Engineer",
  "UI Designer",
  "Website Developer",
  "Penetration Tester & Network Security Enthusiast"
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element)
      element.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-primary opacity-5" />

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-2">
            <p className="text-muted-foreground text-lg">Hi, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold">
              Rohit <span className="gradient-text">Batra</span>
            </h1>
          </div>

          {/* Rotating Role */}
          <div className="h-16 flex items-center">
            <p
              key={currentRole}
              className="text-2xl md:text-3xl font-semibold text-primary animate-fade-in"
            >
              {roles[currentRole]}
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            A tech-focused builder who unites programming, cybersecurity, UI
            design, and web development to create digital experiences that are
            both beautifully designed and deeply secure.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">

            {/* ⭐ Download Resume Button (Fixed & Polished) */}
            <a
              href="/Resume_RohitBatra.pdf"
              download="Rohit-Batra-Resume.pdf"
            >
              <Button className="gradient-primary glow-primary group">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </a>

            {/* Scroll to Projects */}
            <Button variant="outline" className="group" onClick={scrollToProjects}>
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Right Content - Profile Photo */}
        <div className="flex justify-center animate-fade-in">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Glowing Border */}
            <div className="absolute inset-0 gradient-primary rounded-full blur-2xl opacity-40 animate-float" />
            <div className="relative w-full h-full glass rounded-full p-2 glow-primary">
              <img
                src={profilePhoto}
                alt="Rohit Batra - Profile Photo"
                className="w-full h-full rounded-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
