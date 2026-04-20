'use client';

import { useState } from 'react';
import { Recap } from '@/types/movie';
import RecapCard from './RecapCard';

export default function RecapList() {
  const [recaps, setRecaps] = useState<Recap[]>([]);

  if (recaps.length === 0) {
    return (
      <div className="text-center py-10">
        <div className="text-4xl mb-4">📝</div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No recaps yet</h3>
        <p className="text-gray-500">Create your first movie recap!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {recaps.map((recap) => (
        <RecapCard key={recap.id} recap={recap} />
      ))}
    </div>
  );
}

function RecapCard({ recap }: { recap: Recap }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
      <h3 className="font-medium text-gray-900 mb-2">{recap.title}</h3>
      <p className="text-gray-600 text-sm line-clamp-3">{recap.content}</p>
      <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
        <span>❤️ {recap.likes}</span>
        <span>👁️ {recap.views}</span>
      </div>
    </div>
  );
}