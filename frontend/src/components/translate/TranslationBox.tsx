'use client';

interface TranslationBoxProps {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export default function TranslationBox({ 
  label, 
  value, 
  onChange,
  placeholder 
}: TranslationBoxProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        readOnly={!onChange}
        className="w-full min-h-[200px] p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-y bg-white"
      />
    </div>
  );
}