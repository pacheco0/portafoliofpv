'use client';

import { useEffect, useRef } from 'react';
import { useBackgroundMode } from './BackgroundContext';

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { mode } = useBackgroundMode();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (mode !== 'dark') {
      // Light mode: clear canvas and fill with white
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      return;
    }

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Star class
    class Star {
      x: number;
      y: number;
      size: number;
      speed: number;
      brightness: number;
      brightnessSpeed: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 2;
        this.speed = Math.random() * 0.5;
        this.brightness = Math.random();
        this.brightnessSpeed = Math.random() * 0.02;
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas!.height) {
          this.y = 0;
          this.x = Math.random() * canvas!.width;
        }
        this.brightness += this.brightnessSpeed;
        if (this.brightness > 1 || this.brightness < 0) {
          this.brightnessSpeed = -this.brightnessSpeed;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.brightness})`;
        ctx.fill();
      }
    }

    // Create stars
    const stars: Star[] = [];
    for (let i = 0; i < 200; i++) {
      stars.push(new Star());
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      if (!ctx) return;
      ctx.fillStyle = 'rgba(10, 10, 30, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        star.update();
        star.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, [mode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: mode === 'dark' ? 'linear-gradient(to bottom, #000428, #004e92)' : '#fff' }}
    />
  );
} 