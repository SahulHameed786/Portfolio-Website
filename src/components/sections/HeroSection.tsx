import { motion } from 'framer-motion';
import { Download, MessageCircle, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

interface HeroSectionProps {
  setCurrentSection: (section: string) => void;
}

const HeroSection = ({ setCurrentSection }: HeroSectionProps) => {
  const handleDownloadResume = () => {
    // Create a dummy resume download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Sahul_Hameed_Resume.pdf';
    link.click();
  };

  const handleContactClick = () => {
    setCurrentSection('contact');
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Name Animation */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.5,
                type: "spring",
                stiffness: 100 
              }}
              className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold"
            >
              <span className="neon-text">SAHUL</span>{' '}
              <span className="neon-text-purple">HAMEED</span>{' '}
              <span className="neon-text-pink">M</span>
            </motion.h1>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 1.5 }}
              className="h-1 bg-gradient-neon mx-auto max-w-md"
            />
          </div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="space-y-4"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-poppins text-muted-foreground">
              Aspiring Computer Science Professional
            </h2>
            <p className="text-lg md:text-xl font-poppins gradient-text max-w-3xl mx-auto">
              Problem Solver • Team Player • Creative Innovator
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={handleContactClick}
              className="bg-gradient-neon text-background font-bold px-8 py-3 text-lg hover-glow group"
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Let's Connect
            </Button>
            
            <Button
              onClick={handleDownloadResume}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-background px-8 py-3 text-lg hover-glow-purple group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.6 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              href="https://www.linkedin.com/in/sahul-hameed-27a251311"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 glass-card hover-glow rounded-full group"
            >
              <Linkedin className="h-6 w-6 text-primary group-hover:text-neon-cyan transition-colors" />
            </motion.a>
            
            <motion.a
              href="https://github.com/sahulhameed"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 glass-card hover-glow-purple rounded-full group"
            >
              <Github className="h-6 w-6 text-secondary group-hover:text-neon-purple transition-colors" />
            </motion.a>
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 animate-float">
            <div className="w-4 h-4 bg-neon-cyan rounded-full animate-pulse-glow" />
          </div>
          <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
            <div className="w-6 h-6 bg-neon-purple rounded-full animate-pulse-glow" />
          </div>
          <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
            <div className="w-3 h-3 bg-neon-pink rounded-full animate-pulse-glow" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;