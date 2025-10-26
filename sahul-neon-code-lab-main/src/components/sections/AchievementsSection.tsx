import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Users, Calendar, Target, Award, Star } from 'lucide-react';

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const achievements = [
    {
      year: "2024",
      title: "Symposium Leadership",
      description: "Successfully conducted college symposiums with 300+ participants",
      details: ["Event planning & execution", "Team coordination", "Budget management", "Logistics handling"],
      icon: Users,
      color: "neon-cyan"
    },
    {
      year: "2024",
      title: "Quiz Competition Organizer",
      description: "Organized multiple technical quiz competitions and contests",
      details: ["Question preparation", "Platform setup", "Participant management", "Real-time scoring"],
      icon: Trophy,
      color: "neon-purple"
    },
    {
      year: "2023-2024",
      title: "Event Coordination Expert",
      description: "Coordinated event logistics, scheduling, and participant management",
      details: ["Multi-event coordination", "Scheduling optimization", "Participant engagement", "Resource allocation"],
      icon: Calendar,
      color: "neon-pink"
    },
    {
      year: "2022-2025",
      title: "Leadership Development",
      description: "Developed strong leadership and teamwork skills through various initiatives",
      details: ["Team leadership", "Collaborative projects", "Conflict resolution", "Decision making"],
      icon: Target,
      color: "neon-blue"
    },
  ];

  const stats = [
    { number: "500+", label: "Participants Managed", icon: Users },
    { number: "10+", label: "Events Organized", icon: Calendar },
    { number: "5+", label: "Technical Contests", icon: Trophy },
    { number: "3", label: "Years Experience", icon: Award },
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="achievements" ref={ref} className="py-20 px-6 bg-background-secondary">
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
              Achievements & Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-neon mx-auto" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leadership experiences and organizational accomplishments
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                }}
                className="glass-card p-6 text-center hover-glow group"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-neon rounded-full group-hover:animate-pulse-glow">
                    <stat.icon className="h-6 w-6 text-background" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-orbitron font-bold neon-text mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Timeline */}
          <div className="space-y-8">
            <motion.h3 
              variants={itemVariants}
              className="text-3xl font-orbitron font-bold text-center neon-text-purple"
            >
              Experience Timeline
            </motion.h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-neon"></div>
              
              <div className="space-y-12">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    variants={index % 2 === 0 ? itemVariants : rightVariants}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-gradient-neon rounded-full transform -translate-x-1/2 animate-pulse-glow z-10"></div>
                    
                    {/* Content */}
                    <motion.div
                      whileHover={{ 
                        scale: 1.02,
                        rotateY: index % 2 === 0 ? 5 : -5,
                      }}
                      className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                        index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                      }`}
                    >
                      <div className="glass-card p-6 hover-glow group">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 bg-gradient-neon rounded-lg group-hover:animate-pulse-glow flex-shrink-0`}>
                            <achievement.icon className="h-6 w-6 text-background" />
                          </div>
                          
                          <div className="flex-1 space-y-3">
                            <div className="flex items-center gap-3">
                              <span className="text-sm px-3 py-1 glass-card rounded-full neon-text font-bold">
                                {achievement.year}
                              </span>
                            </div>
                            
                            <h4 className="text-xl font-orbitron font-bold group-hover:gradient-text transition-all">
                              {achievement.title}
                            </h4>
                            
                            <p className="text-muted-foreground">
                              {achievement.description}
                            </p>
                            
                            <div className="space-y-2">
                              <h5 className="text-sm font-semibold neon-text-pink">Key Contributions:</h5>
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                                {achievement.details.map((detail, i) => (
                                  <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                                    <Star className="h-3 w-3 text-primary flex-shrink-0" />
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Recognition */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <h3 className="text-2xl font-orbitron font-bold neon-text-pink">Recognition & Impact</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.div 
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="glass-card p-6 hover-glow-purple group"
              >
                <Award className="h-8 w-8 text-primary mx-auto mb-3 group-hover:text-neon-purple transition-colors" />
                <h4 className="font-orbitron font-bold mb-2 group-hover:neon-text transition-all">
                  Leadership Excellence
                </h4>
                <p className="text-sm text-muted-foreground">
                  Recognized for exceptional leadership in organizing college events
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="glass-card p-6 hover-glow group"
              >
                <Users className="h-8 w-8 text-secondary mx-auto mb-3 group-hover:text-neon-cyan transition-colors" />
                <h4 className="font-orbitron font-bold mb-2 group-hover:neon-text transition-all">
                  Team Collaboration
                </h4>
                <p className="text-sm text-muted-foreground">
                  Built strong collaborative relationships across departments
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="glass-card p-6 hover-glow-pink group"
              >
                <Target className="h-8 w-8 text-accent mx-auto mb-3 group-hover:text-neon-pink transition-colors" />
                <h4 className="font-orbitron font-bold mb-2 group-hover:neon-text transition-all">
                  Goal Achievement
                </h4>
                <p className="text-sm text-muted-foreground">
                  Consistently delivered successful events exceeding expectations
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;