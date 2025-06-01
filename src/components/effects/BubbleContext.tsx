import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BubbleProps {
  x: number;
  y: number;
  size: number;
}

interface BubbleContextType {
  addBubble: (bubble: BubbleProps) => void;
  bubbles: BubbleProps[];
}

const BubbleContext = createContext<BubbleContextType | undefined>(undefined);

export const useBubbles = () => {
  const context = useContext(BubbleContext);
  if (!context) {
    throw new Error('useBubbles must be used within a BubbleProvider');
  }
  return context;
};

interface BubbleProviderProps {
  children: ReactNode;
}

export const BubbleProvider: React.FC<BubbleProviderProps> = ({ children }) => {
  const [bubbles, setBubbles] = useState<BubbleProps[]>([]);

  const addBubble = (bubble: BubbleProps) => {
    setBubbles((prev) => [...prev, bubble]);
    
    // Remove the bubble after animation completes
    setTimeout(() => {
      setBubbles((prev) => prev.filter((b) => b !== bubble));
    }, 3000);
  };

  return (
    <BubbleContext.Provider value={{ addBubble, bubbles }}>
      {children}
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className="bubble absolute pointer-events-none z-50"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.x}px`,
            top: `${bubble.y}px`,
          }}
        />
      ))}
    </BubbleContext.Provider>
  );
};