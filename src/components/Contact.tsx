import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = {
      from_name: (form.elements.namedItem('name') as HTMLInputElement).value,
      from_email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      await emailjs.send(
        'service_6zz792m',
        'VS8s_z7vIwRBgKFmr7SAt',
        formData,
        'rJa7NgwQ5gNgCfPRo'
      );
      
      toast.success("Message sent! I'll get back to you soon.");
      form.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error("Failed to send message. Please try again or email directly.");
    } finally {
      setIsLoading(false);
    }
  };

  const socials = [
    { icon: Mail, label: "Email", href: "mailto:rohitbatra.work@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/irohitbatra" },
    { icon: Github, label: "GitHub", href: "https://github.com/irohitbatra" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/i_rohitbatra?igsh=NDIzMXMzMjMxOGFz" },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="absolute inset-0 gradient-primary opacity-5" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="glass rounded-2xl p-8 animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-background/50"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-background/50"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  className="bg-background/50 min-h-[150px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full gradient-primary glow-primary" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4 gradient-text">Let's Connect</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out!
              </p>

              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <span>rohitbatra.work@gmail.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 gradient-text">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="flex items-center gap-3 p-3 rounded-xl bg-background/50 hover:glow-primary transition-all group"
                    >
                      <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;