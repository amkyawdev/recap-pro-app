'use client';

interface FloatingActionButtonProps {
  onClick: () => void;
  icon?: string;
}

export default function FloatingActionButton({ 
  onClick, 
  icon = '+' 
}: FloatingActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed right-4 bottom-20 w-14 h-14 bg-primary-500 text-white rounded-full shadow-lg flex items-center justify-center text-2xl font-bold hover:bg-primary-600 transition-transform hover:scale-110 active:scale-95 z-30"
    >
      {icon}
    </button>
  );
}