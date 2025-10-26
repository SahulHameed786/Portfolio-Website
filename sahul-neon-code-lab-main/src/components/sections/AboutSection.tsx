import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Heart, Target, Zap } from 'lucide-react';
import profileImage from '@/assets/sahul-profile.jpg';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const strengths = [
    { icon: Target, title: "Problem Solving", description: "Analytical thinking and innovative solutions" },
    { icon: Heart, title: "Teamwork", description: "Collaborative spirit and effective communication" },
    { icon: Zap, title: "Decision Making", description: "Quick thinking and strategic planning" },
    { icon: Code, title: "Adaptability", description: "Quick learner with creative approach" },
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
    <section id="about" ref={ref} className="py-20 px-6">
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
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-neon mx-auto" />
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ 
                  rotateY: 10,
                  rotateX: 10,
                  scale: 1.05,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-neon rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                <img
                  src={profileImage}
                  alt="Sahul Hameed M"
                  className="relative w-80 h-80 object-cover rounded-2xl border-2 border-primary/30 hover:border-primary transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
              </motion.div>
            </motion.div>

            {/* Bio Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-orbitron font-bold neon-text">
                Passionate Tech Learner
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hi, I'm <span className="neon-text-purple font-semibold">Sahul Hameed</span>, a passionate tech learner with a background in Computer Science. I graduated with a B.Sc. in Computer Science from <span className="text-primary">Manonmaniam Sundaranar University</span> and am currently advancing my skills by pursuing <span className="neon-text-pink font-semibold">Python Full Stack Web Development</span> at SLA.
                </p>
                
                <p>
                  My journey into the tech world began with a simple curiosity about how websites and applications work behind the scenes. That curiosity turned into a passion for building seamless, user-friendly web solutions. Today, I focus on mastering both front-end and back-end technologies to bring ideas to life.
                </p>
                
                <p>
                  Beyond coding, I'm actively involved in <span className="text-accent">event planning and execution</span>, having conducted symposiums, organized quiz competitions, and coordinated technical contests. These experiences have honed my leadership skills and taught me the value of teamwork in achieving common goals.
                </p>
              </div>

              {/* Quick Stats */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 gap-4 pt-6"
              >
                <motion.div variants={itemVariants} className="glass-card p-4 text-center hover-glow">
                  <div className="text-2xl font-bold neon-text">2022-2025</div>
                  <div className="text-sm text-muted-foreground">Education</div>
                </motion.div>
                <motion.div variants={itemVariants} className="glass-card p-4 text-center hover-glow-purple">
                  <div className="text-2xl font-bold neon-text-purple">Chennai</div>
                  <div className="text-sm text-muted-foreground">Location</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Strengths Grid */}
          <motion.div variants={containerVariants} className="space-y-8">
            <motion.h3 
              variants={itemVariants}
              className="text-3xl font-orbitron font-bold text-center gradient-text"
            >
              Core Strengths
            </motion.h3>
            
            <motion.div 
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {strengths.map((strength, index) => (
                <motion.div
                  key={strength.title}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                  }}
                  className="glass-card p-6 text-center space-y-4 hover-glow group cursor-pointer"
                >
                  <div className="flex justify-center">
                    <div className="p-3 bg-gradient-neon rounded-full">
                      <strength.icon className="h-8 w-8 text-background" />
                    </div>
                  </div>
                  <h4 className="font-orbitron font-bold neon-text group-hover:neon-text-purple transition-all">
                    {strength.title}
                  </h4>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {strength.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Languages */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h3 className="text-2xl font-orbitron font-bold neon-text-pink">Languages</h3>
            <div className="flex justify-center gap-6">
              <span className="px-4 py-2 glass-card hover-glow">English</span>
              <span className="px-4 py-2 glass-card hover-glow-purple">Tamil</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;