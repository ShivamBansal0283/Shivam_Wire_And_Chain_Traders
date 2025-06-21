
import { useEffect, useRef } from "react";

interface WireProduct3DProps {
  size: string;
}

export const WireProduct3D = ({ size }: WireProduct3DProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 120;
    canvas.height = 120;

    // Draw wire spool/coil
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw spool base
    ctx.fillStyle = '#64748b';
    ctx.beginPath();
    ctx.ellipse(centerX, centerY + 10, 40, 15, 0, 0, 2 * Math.PI);
    ctx.fill();
    
    // Draw wire coils
    const wireThickness = parseFloat(size);
    const coilLayers = Math.max(3, Math.floor(2 / wireThickness));
    
    for (let i = 0; i < coilLayers; i++) {
      ctx.strokeStyle = i % 2 === 0 ? '#fbbf24' : '#64748b';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(centerX, centerY - (i * 3), 35 - (i * 2), 12 - (i * 1), 0, 0, 2 * Math.PI);
      ctx.stroke();
    }
    
    // Draw spool top
    ctx.fillStyle = '#475569';
    ctx.beginPath();
    ctx.ellipse(centerX, centerY - 15, 35, 12, 0, 0, 2 * Math.PI);
    ctx.fill();
    
    // Add size label
    ctx.fillStyle = '#1e293b';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(size, centerX, centerY + 35);
    
  }, [size]);

  return (
    <div className="flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="animate-pulse"
        style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
      />
    </div>
  );
};
