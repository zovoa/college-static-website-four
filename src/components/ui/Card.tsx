import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  shape?: 'shell' | 'bubble' | 'rectangle';
  delay?: number;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  shape = 'rectangle',
  delay = 0
}) => {
  const getShapeClasses = () => {
    switch (shape) {
      case 'shell':
        return 'rounded-tl-3xl rounded-tr-xl rounded-br-3xl rounded-bl-xl';
      case 'bubble':
        return 'rounded-full';
      default:
        return 'rounded-xl';
    }
  };

  return (
    <motion.div
      className={`glass p-6 ${getShapeClasses()} ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        scale: 1.03, 
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        transition: { duration: 0.2 }
      }}
    >
      {children}
    </motion.div>
  );
};