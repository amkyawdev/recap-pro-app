'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import MovieCard from '@/components/dashboard/MovieCard';
import RecapList from '@/components/dashboard/RecapList';
import BottomNavigation from '@/components/mobile/BottomNavigation';

export default function Home() {
  const { user, loading } = useAuth();
  const [activeTab, setActiveTab] = useState<'recaps' | 'movies'>('recaps');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Recap Pro</h1>
          <p className="text-sm text-gray-600">Discover movie recaps</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('recaps')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeTab === 'recaps'
                ? 'bg-primary-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Recaps
          </button>
          <button
            onClick={() => setActiveTab('movies')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeTab === 'movies'
                ? 'bg-primary-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Movies
          </button>
        </div>

        {activeTab === 'recaps' ? (
          <RecapList />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Movie cards will be rendered here */}
            <p className="col-span-full text-center text-gray-500 py-10">
              Browse movies to create recaps
            </p>
          </div>
        )}
      </main>

      <BottomNavigation />
    </div>
  );
}