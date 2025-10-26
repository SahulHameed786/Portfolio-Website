import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sahulhamwed@gmail.com",
      href: "mailto:sahulhamwed@gmail.com",
      color: "neon-cyan"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8870729980",
      href: "tel:+918870729980",
      color: "neon-purple"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, Tamil Nadu",
      href: "#",
      color: "neon-pink"
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sahul-hameed-27a251311",
      color: "neon-cyan"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/sahulhameed",
      color: "neon-purple"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/918870729980",
      color: "neon-pink"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent! 🚀",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" ref={ref} className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-neon mx-auto" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on exciting projects? Let's discuss opportunities and create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={containerVariants} className="space-y-8">
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-orbitron font-bold neon-text"
              >
                Get In Touch
              </motion.h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    variants={itemVariants}
                    href={info.href}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center gap-4 glass-card p-4 hover-glow group cursor-pointer"
                  >
                    <div className={`p-3 bg-gradient-neon rounded-lg group-hover:animate-pulse-glow`}>
                      <info.icon className="h-6 w-6 text-background" />
                    </div>
                    <div>
                      <div className="font-semibold group-hover:neon-text transition-all">
                        {info.label}
                      </div>
                      <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <motion.div variants={containerVariants} className="space-y-4">
                <motion.h4 
                  variants={itemVariants}
                  className="text-lg font-orbitron font-bold neon-text-purple"
                >
                  Follow Me
                </motion.h4>
                
                <motion.div 
                  variants={containerVariants}
                  className="flex gap-4"
                >
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      variants={itemVariants}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-4 glass-card hover-glow rounded-full group"
                    >
                      <social.icon className="h-6 w-6 text-primary group-hover:text-neon-cyan transition-colors" />
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>

              {/* CTA Card */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card hover-glow-purple">
                  <CardHeader>
                    <CardTitle className="font-orbitron neon-text-pink">
                      Ready to Collaborate?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology and innovation.
                    </p>
                    <div className="flex gap-3">
                      <Button 
                        asChild
                        className="bg-gradient-neon text-background hover:scale-105"
                      >
                        <a href="mailto:sahulhamwed@gmail.com">
                          <Mail className="mr-2 h-4 w-4" />
                          Email Me
                        </a>
                      </Button>
                      <Button 
                        variant="outline"
                        asChild
                        className="border-primary text-primary hover:bg-primary hover:text-background"
                      >
                        <a href="https://wa.me/918870729980" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="mr-2 h-4 w-4" />
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="glass-card hover-glow">
                <CardHeader>
                  <CardTitle className="font-orbitron neon-text">
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          required
                          className="glass-card border-border/20 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="glass-card border-border/20 focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                        className="glass-card border-border/20 focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or idea..."
                        required
                        rows={6}
                        className="glass-card border-border/20 focus:border-primary resize-none"
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-gradient-neon text-background font-bold hover:scale-105 group"
                    >
                      <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;