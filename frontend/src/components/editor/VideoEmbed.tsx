'use client';

import { useState } from 'react';

interface VideoEmbedProps {
  url?: string;
  onChange?: (url: string) => void;
}

export default function VideoEmbed({ url = '', onChange }: VideoEmbedProps) {
  const [videoUrl, setVideoUrl] = useState(url);
  const [error, setError] = useState('');

  const getEmbedUrl = (inputUrl: string): string | null => {
    // YouTube
    const ytMatch = inputUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
    if (ytMatch) {
      return `https://www.youtube.com/embed/${ytMatch[1]}`;
    }
    
    // Vimeo
    const vimeoMatch = inputUrl.match(/vimeo\.com\/(\d+)/);
    if (vimeoMatch) {
      return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
    }
    
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const embedUrl = getEmbedUrl(videoUrl);
    if (embedUrl) {
      setError('');
      onChange?.(videoUrl);
    } else {
      setError('Please enter a valid YouTube or Vimeo URL');
    }
  };

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">
        Video Embed
      </label>
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          placeholder="Paste YouTube or Vimeo URL"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition"
        >
          Add
        </button>
      </form>

      {error && <p className="text-sm text-red-500">{error}</p>}

      {embedUrl && (
        <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
          <iframe
            src={embedUrl}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}