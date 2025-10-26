import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, FileText, Video, Monitor, Keyboard } from 'lucide-react';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const technicalSkills = [
    { name: "Python", level: 85, icon: Code, color: "neon-cyan" },
    { name: "Django", level: 75, icon: Code, color: "neon-purple" },
    { name: "MySQL", level: 70, icon: Database, color: "neon-pink" },
    { name: "Java", level: 65, icon: Code, color: "neon-blue" },
  ];

  const hardSkills = [
    { name: "MS Office", level: 90, icon: FileText },
    { name: "Video Editing", level: 80, icon: Video },
    { name: "Computer Basics", level: 95, icon: Monitor },
    { name: "English Typing", level: 85, icon: Keyboard },
  ];

  const softSkills = [
    "Adaptive", "Creative", "Smart Worker", "Quick Learner",
    "Communication", "Leadership", "Time Management", "Critical Thinking"
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut" as const,
        delay: 0.5,
      },
    }),
  };

  const SkillBar = ({ skill, index }: { skill: any, index: number }) => (
    <motion.div
      variants={itemVariants}
      className="space-y-3"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`p-2 bg-gradient-neon rounded-lg`}>
            <skill.icon className="h-5 w-5 text-background" />
          </div>
          <span className="font-medium text-foreground">{skill.name}</span>
        </div>
        <span className={`text-sm font-bold ${skill.color || 'neon-text'}`}>
          {skill.level}%
        </span>
      </div>
      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          variants={progressVariants}
          custom={skill.level}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={`absolute top-0 left-0 h-full bg-gradient-neon rounded-full`}
          style={{
            boxShadow: `0 0 10px hsl(var(--neon-cyan) / 0.5)`,
          }}
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" ref={ref} className="py-20 px-6 bg-background-secondary">
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
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-neon mx-auto" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical and professional capabilities
            </p>
          </motion.div>

          {/* Technical Skills */}
          <motion.div variants={containerVariants} className="space-y-8">
            <motion.h3 
              variants={itemVariants}
              className="text-3xl font-orbitron font-bold text-center neon-text"
            >
              Technical Skills
            </motion.h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                variants={containerVariants}
                className="glass-card p-6 space-y-6 hover-glow"
              >
                <h4 className="text-xl font-orbitron font-bold neon-text-purple">Programming & Databases</h4>
                <div className="space-y-4">
                  {technicalSkills.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </motion.div>

              <motion.div 
                variants={containerVariants}
                className="glass-card p-6 space-y-6 hover-glow-purple"
              >
                <h4 className="text-xl font-orbitron font-bold neon-text-pink">Hard Skills</h4>
                <div className="space-y-4">
                  {hardSkills.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div variants={containerVariants} className="space-y-8">
            <motion.h3 
              variants={itemVariants}
              className="text-3xl font-orbitron font-bold text-center neon-text-pink"
            >
              Soft Skills
            </motion.h3>
            
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    rotateZ: 2,
                  }}
                  className="glass-card p-4 text-center hover-glow group cursor-pointer"
                >
                  <span className="text-sm font-medium group-hover:neon-text transition-all">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Current Learning */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <h3 className="text-2xl font-orbitron font-bold gradient-text">Currently Learning</h3>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-block glass-card p-6 hover-glow group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-neon rounded-full animate-pulse-glow">
                  <Code className="h-8 w-8 text-background" />
                </div>
                <div className="text-left">
                  <div className="text-xl font-orbitron font-bold neon-text group-hover:neon-text-purple transition-all">
                    Python Full Stack Web Development
                  </div>
                  <div className="text-muted-foreground">
                    SLA Institute • 2024-2025
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;