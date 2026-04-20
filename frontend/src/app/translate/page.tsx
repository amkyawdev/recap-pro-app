'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LanguageSelector from '@/components/translate/LanguageSelector';
import TranslationBox from '@/components/translate/TranslationBox';
import TextToSpeech from '@/components/translate/TextToSpeech';
import { SUPPORTED_LANGUAGES } from '@/lib/utils/constants';

export default function TranslatePage() {
  const router = useRouter();
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('es');
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    if (!sourceText.trim()) return;
    setLoading(true);
    
    // Mock translation - replace with actual API call
    setTimeout(() => {
      setTranslatedText(`[Translated to ${SUPPORTED_LANGUAGES.find(l => l.code === targetLang)?.name}] ${sourceText}`);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button onClick={() => router.back()} className="text-gray-600 hover:text-gray-900 mb-2">
            ← Back
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Translate Recap</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        <div className="flex gap-4 items-center justify-between">
          <LanguageSelector
            value={sourceLang}
            onChange={setSourceLang}
            label="From"
          />
          <button
            onClick={handleTranslate}
            disabled={loading || !sourceText.trim()}
            className="bg-primary-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-600 transition disabled:opacity-50"
          >
            {loading ? '...' : '→'}
          </button>
          <LanguageSelector
            value={targetLang}
            onChange={setTargetLang}
            label="To"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <TranslationBox
            label="Original Text"
            value={sourceText}
            onChange={setSourceText}
            placeholder="Enter text to translate..."
          />
          <TranslationBox
            label="Translated Text"
            value={translatedText}
            onChange={setTranslatedText}
            placeholder="Translation will appear here..."
          />
        </div>

        {translatedText && (
          <TextToSpeech text={translatedText} language={targetLang} />
        )}
      </main>
    </div>
  );
}