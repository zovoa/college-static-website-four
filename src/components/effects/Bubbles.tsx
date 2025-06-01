import React, { useEffect, useState } from 'react';
import { useBubbles } from './BubbleContext';

interface Bubble {
  id: number;
  size: number;
  left: number;
  delay: number;
  duration: number;
}

export const Bubbles: React.FC = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const { addBubble } = useBubbles();

  useEffect(() => {
    // Create initial bubbles
    const initialBubbles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 30 + 10,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10
    }));
    
    setBubbles(initialBubbles);

    // Add new bubbles periodically
    const interval = setInterval(() => {
      const newBubble = {
        id: Date.now(),
        size: Math.random() * 30 + 10,
        left: Math.random() * 100,
        delay: 0,
        duration: Math.random() * 10 + 10
      };
      
      setBubbles(prev => [...prev.slice(-14), newBubble]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`,
          }}
          onMouseEnter={() => addBubble({ 
            x: bubble.left / 100 * window.innerWidth, 
            y: window.innerHeight - 100,
            size: Math.random() * 20 + 10
          })}
        />
      ))}
    </div>
  );
};