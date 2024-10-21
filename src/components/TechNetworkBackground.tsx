'use client'

import React, { useEffect, useRef } from 'react';

interface TechNetworkBackgroundProps {
  className?: string;
}

const TechNetworkBackground: React.FC<TechNetworkBackgroundProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Particle[] = [];
    const particleCount = 100;
    const connectionDistance = 150;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > width || this.x < 0) this.speedX *= -1;
        if (this.y > height || this.y < 0) this.speedY *= -1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 255, 0.8)';
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function drawConnections(ctx: CanvasRenderingContext2D) {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 255, 255, ${1 - distance / connectionDistance})`;
            ctx.stroke();
          }
        }
      }
    }

    function drawParticles(ctx: CanvasRenderingContext2D) {
      for (let i = 0; i < particles.length; i++) {
        particles[i].draw(ctx);
      }
    }

    function updateParticles() {
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      if (ctx) {
        ctx.clearRect(0, 0, width, height);
        drawParticles(ctx);
        drawConnections(ctx); // 添加这一行
        updateParticles();
      }
    }

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className={`fixed inset-0 w-full h-full pointer-events-none z-[-1] ${className}`} 
    />
  );
};

export default TechNetworkBackground;
