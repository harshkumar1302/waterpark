import { useEffect, useState } from 'react';

interface Bubble {
  id: number;
  size: number;
  left: number;
  duration: number;
  delay: number;
  colorClass: string;
}

export default function Bubbles({ count = 30 }: { count?: number }) {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const newBubbles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: Math.random() * 15 + 5,
      left: Math.random() * 100,
      duration: Math.random() * 5 + 4,
      delay: Math.random() * 4,
      colorClass: Math.random() > 0.5 ? 'border-[var(--cyan)]' : 'border-[var(--aqua)]'
    }));
    setBubbles(newBubbles);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {bubbles.map(b => (
        <div
          key={b.id}
          className={`absolute bottom-[-100px] rounded-full border border-solid opacity-0 animate-[bubbleUp_linear_infinite_forwards] ${b.colorClass}`}
          style={{
            width: `${b.size}px`,
            height: `${b.size}px`,
            left: `${b.left}%`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`
          }}
        />
      ))}
    </div>
  );
}
