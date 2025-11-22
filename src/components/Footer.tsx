import { Mail, Linkedin, Github, Instagram, Heart } from "lucide-react";
const Footer = () => {
  const socials = [{
    icon: Mail,
    href: "mailto:rohitbatra.work@gmail.com",
    label: "Email"
  }, {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/irohitbatra",
    label: "LinkedIn"
  }, {
    icon: Github,
    href: "https://github.com/irohitbatra",
    label: "GitHub"
  }, {
    icon: Instagram,
    href: "https://www.instagram.com/i_rohitbatra?igsh=NDIzMXMzMjMxOGFz",
    label: "Instagram"
  }];
  return <footer className="py-12 px-4 border-t border-border/50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            {socials.map((social, index) => {
            const Icon = social.icon;
            return <a key={index} href={social.href} aria-label={social.label} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:glow-primary transition-all group">
                  <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                </a>;
          })}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© 2025 Made with</span>
            <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" />
            <span>By Rohit Batra</span>
          </div>

          {/* Logo */}
          
        </div>
      </div>
    </footer>;
};
export default Footer;