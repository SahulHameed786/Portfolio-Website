import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('hero');
  const [loading, setLoading] = useState(true);

  // Handle scroll-based section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 mx-auto"
          >
            <div className="w-full h-full border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-orbitron font-bold gradient-text"
          >
            Initializing Portfolio...
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-1 bg-gradient-neon mx-auto max-w-xs"
          />
        </motion.div>
      </div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen bg-background text-foreground overflow-x-hidden"
      >
        {/* Particle Background */}
        <ParticleBackground />
        
        {/* Navigation */}
        <Navigation 
          currentSection={currentSection} 
          setCurrentSection={setCurrentSection} 
        />

        {/* Main Content */}
        <main className="relative z-10">
          <HeroSection setCurrentSection={setCurrentSection} />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <AchievementsSection />
          <ContactSection />
        </main>

        {/* Floating Contact Button */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 3, type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setCurrentSection('contact');
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="p-4 bg-gradient-neon rounded-full shadow-neon hover:shadow-purple transition-all duration-300 group"
          >
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💬
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Custom Cursor Effect */}
        <div className="fixed inset-0 pointer-events-none z-50">
          <div className="w-full h-full cursor-glow" />
        </div>

        {/* Scroll Progress Indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-neon z-50 origin-left"
          style={{
            scaleX: typeof window !== 'undefined' ? 
              window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) : 0
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
