'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: '🏠', text: 'Home' },
  { href: '/translate', label: '🌐', text: 'Translate' },
  { href: '/about', label: 'ℹ️', text: 'About' },
];

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-20">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex flex-col items-center justify-center flex-1 h-full
                transition-colors duration-200
                ${isActive ? 'text-primary-500' : 'text-gray-500 hover:text-gray-700'}
              `}
            >
              <span className="text-xl">{item.label}</span>
              <span className="text-xs mt-1">{item.text}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}