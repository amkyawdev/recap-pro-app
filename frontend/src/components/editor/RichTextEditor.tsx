'use client';

import { useState } from 'react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const [isFocused, setIsFocused] = useState(false);

  const toolbarButtons = [
    { label: 'B', style: 'bold', icon: 'B' },
    { label: 'I', style: 'italic', icon: 'I' },
    { label: 'U', style: 'underline', icon: 'U' },
    { label: 'H1', style: 'h1', icon: 'H1' },
    { label: 'H2', style: 'h2', icon: 'H2' },
    { label: '•', style: 'list', icon: '•' },
  ];

  return (
    <div className={`border rounded-lg overflow-hidden transition-shadow ${isFocused ? 'ring-2 ring-primary-500 border-transparent' : 'border-gray-300'}`}>
      <div className="bg-gray-50 border-b border-gray-200 p-2 flex gap-1 flex-wrap">
        {toolbarButtons.map((btn) => (
          <button
            key={btn.style}
            type="button"
            className="px-2 py-1 text-sm hover:bg-gray-200 rounded transition"
            onClick={() => {
              // Simple implementation - in production use a rich text library
              const newValue = value + ` [${btn.label}]`;
              onChange(newValue);
            }}
          >
            {btn.icon}
          </button>
        ))}
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Write your recap here..."
        className="w-full min-h-[200px] p-4 outline-none resize-y"
      />
    </div>
  );
}