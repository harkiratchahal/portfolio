import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card = ({ children, className, hoverEffect = true }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        'glass-card rounded-lg p-6 overflow-hidden relative',
        hoverEffect && 'hover:bg-white/10 cursor-pointer',
        className
      )}
    >
      {children}
    </motion.div>
  );
};
