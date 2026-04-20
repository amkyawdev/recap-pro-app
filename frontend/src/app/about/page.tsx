'use client';

import { useRouter } from 'next/navigation';
import BottomNavigation from '@/components/mobile/BottomNavigation';

export default function AboutPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button onClick={() => router.back()} className="text-gray-600 hover:text-gray-900 mb-2">
            ← Back
          </button>
          <h1 className="text-2xl font-bold text-gray-900">About Recap Pro</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Welcome to Recap Pro</h2>
          <p className="text-gray-600">
            Recap Pro is your ultimate destination for creating and sharing movie recaps.
            Express your thoughts, translate to multiple languages, and listen to text-to-speech.
          </p>
          
          <div className="border-t pt-4 mt-4">
            <h3 className="font-medium text-gray-900 mb-2">Features</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Create rich movie recaps</li>
              <li>Multi-language translation</li>
              <li>Text-to-speech playback</li>
              <li>Social app-style mobile experience</li>
              <li>Touch-optimized interactions</li>
            </ul>
          </div>

          <div className="border-t pt-4 mt-4">
            <h3 className="font-medium text-gray-900 mb-2">Version</h3>
            <p className="text-gray-600">1.0.0</p>
          </div>
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
}