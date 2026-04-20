'use client';

import { ReactNode, MouseEvent } from 'react';

interface TouchFeedbackProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function TouchFeedback({ 
  children, 
  onClick,
  className = '' 
}: TouchFeedbackProps) {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    element.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
    
    onClick?.();
  };

  return (
    <div 
      onClick={handleClick}
      className={`touchable press-scale ${className}`}
    >
      {children}
    </div>
  );
}