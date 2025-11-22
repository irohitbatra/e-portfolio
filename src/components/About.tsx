import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const stats = [
    { label: "Projects Completed", value: "10+" },
    { label: "Tools Mastered", value: "10+" },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Exploring the intersection of security, design, and development
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Profile Image */}
          <div className="flex justify-center animate-slide-up">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 gradient-primary rounded-2xl blur-xl opacity-30" />
              <div className="relative w-full h-full glass rounded-2xl p-4 glow-secondary">
                <img 
                  src={profilePhoto} 
                  alt="Rohit Batra - Profile Photo" 
                  className="w-full h-full rounded-xl object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="glass rounded-2xl p-8 space-y-4">
              <p className="text-lg leading-relaxed">
                I'm Rohit Batra, a tech-driven creator who blends programming,
                cybersecurity, UI design, and web development to build secure,
                modern digital experiences.
              </p>
              <p className="text-lg leading-relaxed">
                I love exploring offensive security, solving real-world
                problems, and designing user-friendly interfaces. I'm constantly
                learning, experimenting, and growing as a developer.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass rounded-xl p-4 text-center hover:glow-primary transition-all"
                >
                  <div className="text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;