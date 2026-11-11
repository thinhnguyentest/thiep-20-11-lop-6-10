import React, { useEffect, useRef } from 'react';

export const FallingPetalsCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const petals = Array.from({ length: 18 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 7 + 5,
      vy: Math.random() * 0.65 + 0.35,
      vx: Math.random() * 0.7 - 0.35,
      rot: Math.random() * 360,
      vrot: Math.random() * 1.1 - 0.55,
      color:
        Math.random() > 0.4
          ? 'rgba(224, 122, 95, 0.32)'
          : 'rgba(197, 155, 39, 0.32)',
    }));

    let animId: number;

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      petals.forEach((p) => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size, p.size * 0.55, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        p.y += p.vy;
        p.x += p.vx;
        p.rot += p.vrot;

        if (p.y > h) {
          p.y = -12;
          p.x = Math.random() * w;
        }
      });
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen pointer-events-none z-30"
    />
  );
};

