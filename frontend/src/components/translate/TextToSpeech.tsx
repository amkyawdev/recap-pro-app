'use client';

import { useState } from 'react';

interface TextToSpeechProps {
  text: string;
  language: string;
}

export default function TextToSpeech({ text, language }: TextToSpeechProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  const handlePlay = () => {
    if (!('speechSynthesis' in window)) {
      setIsSupported(false);
      return;
    }

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    utterance.onend = () => setIsPlaying(false);
    
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  };

  if (!isSupported) {
    return (
      <div className="text-sm text-gray-500">
        Text-to-speech is not supported in your browser
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg">
      <button
        onClick={handlePlay}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition
          ${isPlaying 
            ? 'bg-red-500 text-white hover:bg-red-600' 
            : 'bg-primary-500 text-white hover:bg-primary-600'
          }
        `}
      >
        <span>{isPlaying ? '⏹️' : '🔊'}</span>
        {isPlaying ? 'Stop' : 'Listen'}
      </button>
      <span className="text-sm text-gray-600">
        Text-to-speech in {language.toUpperCase()}
      </span>
    </div>
  );
}