
import { useEffect, useRef } from "react";

export const Manufacturing3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 800;
    canvas.height = 400;

    let animationFrame: number;

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Background
      ctx.fillStyle = '#f8fafc';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw factory floor
      ctx.fillStyle = '#64748b';
      ctx.fillRect(0, canvas.height - 50, canvas.width, 50);
      
      // Draw machines
      drawMachine(ctx, 50, 200, "Pickling Tank", '#3b82f6');
      drawMachine(ctx, 200, 180, "Annealing Furnace", '#ef4444');
      drawMachine(ctx, 350, 160, "Drawing Machine", '#10b981');
      drawMachine(ctx, 500, 140, "Testing Unit", '#8b5cf6');
      drawMachine(ctx, 650, 120, "Packaging", '#f59e0b');
      
      // Draw conveyor belt
      ctx.strokeStyle = '#374151';
      ctx.lineWidth = 8;
      ctx.beginPath();
      ctx.moveTo(30, 300);
      ctx.lineTo(720, 220);
      ctx.stroke();
      
      // Draw moving wire spool (animated)
      const time = Date.now() * 0.001;
      const x = 100 + (Math.sin(time * 0.5) + 1) * 250;
      const y = 290 - (x - 100) * 0.12;
      
      drawWireSpool(ctx, x, y);
      
      animationFrame = requestAnimationFrame(animate);
    };

    const drawMachine = (ctx: CanvasRenderingContext2D, x: number, y: number, label: string, color: string) => {
      // Machine body
      ctx.fillStyle = color;
      ctx.fillRect(x, y, 80, 100);
      
      // Machine details
      ctx.fillStyle = '#1f2937';
      ctx.fillRect(x + 10, y + 10, 60, 20);
      ctx.fillRect(x + 10, y + 40, 25, 25);
      ctx.fillRect(x + 45, y + 40, 25, 25);
      
      // Label
      ctx.fillStyle = '#1f2937';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(label, x + 40, y - 10);
    };

    const drawWireSpool = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
      // Spool
      ctx.fillStyle = '#fbbf24';
      ctx.beginPath();
      ctx.ellipse(x, y, 15, 8, 0, 0, 2 * Math.PI);
      ctx.fill();
      
      // Wire coils
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 2;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.ellipse(x, y - i * 2, 12 - i, 6 - i, 0, 0, 2 * Math.PI);
        ctx.stroke();
      }
    };

    animate();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div className="flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="border border-slate-200 rounded-lg"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
};
