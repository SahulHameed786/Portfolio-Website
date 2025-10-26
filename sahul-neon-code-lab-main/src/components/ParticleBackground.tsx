import { useCallback, useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  pulse: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  const colors = [
    'rgba(0, 255, 255, 0.8)', // Cyan
    'rgba(147, 51, 234, 0.8)', // Purple
    'rgba(236, 72, 153, 0.8)', // Pink
    'rgba(59, 130, 246, 0.8)', // Blue
  ];

  const createParticle = useCallback((width: number, height: number): Particle => {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.6 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
      pulse: Math.random() * Math.PI * 2,
    };
  }, [colors]);

  const initParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
    particlesRef.current = Array.from({ length: particleCount }, () =>
      createParticle(canvas.width, canvas.height)
    );
  }, [createParticle]);

  const drawParticle = useCallback((ctx: CanvasRenderingContext2D, particle: Particle) => {
    const pulseOpacity = particle.opacity + Math.sin(particle.pulse) * 0.3;
    ctx.globalAlpha = Math.max(0, Math.min(1, pulseOpacity));
    
    // Draw glowing particle
    ctx.beginPath();
    ctx.fillStyle = particle.color;
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fill();
    
    // Add glow effect
    ctx.shadowBlur = 10;
    ctx.shadowColor = particle.color;
    ctx.fill();
    ctx.shadowBlur = 0;
  }, []);

  const updateParticle = useCallback((particle: Particle, width: number, height: number, mouseX: number, mouseY: number) => {
    // Mouse interaction
    const dx = mouseX - particle.x;
    const dy = mouseY - particle.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance < 150) {
      const force = (150 - distance) / 150;
      particle.vx += (dx / distance) * force * 0.01;
      particle.vy += (dy / distance) * force * 0.01;
    }
    
    // Update position
    particle.x += particle.vx;
    particle.y += particle.vy;
    
    // Update pulse
    particle.pulse += 0.02;
    
    // Boundary collision
    if (particle.x < 0 || particle.x > width) particle.vx *= -1;
    if (particle.y < 0 || particle.y > height) particle.vy *= -1;
    
    // Keep particles in bounds
    particle.x = Math.max(0, Math.min(width, particle.x));
    particle.y = Math.max(0, Math.min(height, particle.y));
    
    // Add some randomness
    particle.vx += (Math.random() - 0.5) * 0.001;
    particle.vy += (Math.random() - 0.5) * 0.001;
    
    // Limit velocity
    particle.vx = Math.max(-2, Math.min(2, particle.vx));
    particle.vy = Math.max(-2, Math.min(2, particle.vy));
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesRef.current.forEach(particle => {
      updateParticle(particle, canvas.width, canvas.height, mouseRef.current.x, mouseRef.current.y);
      drawParticle(ctx, particle);
    });

    animationRef.current = requestAnimationFrame(animate);
  }, [updateParticle, drawParticle]);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
  }, [initParticles]);

  useEffect(() => {
    resizeCanvas();
    
    const handleResize = () => resizeCanvas();
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, resizeCanvas]);

  return (
    <canvas
      ref={canvasRef}
      className="particles-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ParticleBackground;
