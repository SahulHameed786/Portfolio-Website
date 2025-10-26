import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Code, Calendar, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: "Event Management System",
      description: "A comprehensive event planning and management platform built with Django and MySQL. Features include participant registration, event scheduling, and real-time updates.",
      tech: ["Python", "Django", "MySQL", "HTML/CSS"],
      category: "Web Development",
      status: "Completed",
      achievements: ["Managed 500+ participants", "Real-time notifications", "Admin dashboard"],
      icon: Calendar,
      color: "neon-cyan"
    },
    {
      title: "Quiz Competition Platform",
      description: "Interactive quiz platform for technical competitions with real-time scoring, timer functionality, and leaderboard system.",
      tech: ["Python", "Django", "JavaScript", "MySQL"],
      category: "Educational",
      status: "In Progress",
      achievements: ["Multi-round support", "Auto-grading system", "Live leaderboard"],
      icon: Users,
      color: "neon-purple"
    },
    {
      title: "Video Editing Portfolio",
      description: "Collection of video editing projects showcasing creative storytelling and technical proficiency in post-production workflows.",
      tech: ["Adobe Premiere", "After Effects", "Creative Suite"],
      category: "Creative",
      status: "Ongoing",
      achievements: ["10+ projects completed", "Multi-format output", "Color grading"],
      icon: Code,
      color: "neon-pink"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  return (
    <section id="projects" ref={ref} className="py-20 px-6">
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
              Projects & Work
            </h2>
            <div className="w-24 h-1 bg-gradient-neon mx-auto" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Showcasing my technical projects and creative endeavors
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                }}
                className="group"
              >
                <Card className="glass-card hover-glow h-full border-border/20 hover:border-primary/30 transition-all duration-300">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 bg-gradient-neon rounded-lg group-hover:animate-pulse-glow`}>
                        <project.icon className="h-6 w-6 text-background" />
                      </div>
                      <span className={`text-xs px-2 py-1 glass-card rounded-full ${
                        project.status === 'Completed' ? 'neon-text' : 
                        project.status === 'In Progress' ? 'neon-text-purple' : 'neon-text-pink'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <div>
                      <CardTitle className="font-orbitron group-hover:gradient-text transition-all">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-primary/70">
                        {project.category}
                      </CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold neon-text">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span 
                            key={tech}
                            className="px-2 py-1 text-xs glass-card hover-glow-purple"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold neon-text-pink">Key Features</h4>
                      <ul className="space-y-1">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>

                  <CardFooter className="gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="flex-1 group-hover:border-primary hover:bg-primary hover:text-background"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm"
                      className="flex-1 bg-gradient-neon text-background hover:scale-105"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Future Projects */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <h3 className="text-2xl font-orbitron font-bold neon-text-purple">Coming Soon</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 hover-glow-purple group"
              >
                <h4 className="font-orbitron font-bold mb-2 group-hover:neon-text transition-all">
                  Full Stack Web Portfolio
                </h4>
                <p className="text-sm text-muted-foreground">
                  Personal portfolio website with Django backend and modern frontend
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 hover-glow-pink group"
              >
                <h4 className="font-orbitron font-bold mb-2 group-hover:neon-text transition-all">
                  College Management System
                </h4>
                <p className="text-sm text-muted-foreground">
                  Comprehensive system for student and faculty management
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;