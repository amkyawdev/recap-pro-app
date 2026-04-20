'use client';

import { useState, use } from 'react';
import { useRouter } from 'next/navigation';
import RichTextEditor from '@/components/editor/RichTextEditor';
import ImageUploader from '@/components/editor/ImageUploader';

interface EditPageProps {
  params: Promise<{ id: string }>;
}

export default function EditPage({ params }: EditPageProps) {
  const { id } = use(params);
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    // Save recap logic here
    setTimeout(() => {
      setLoading(false);
      router.push('/');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={() => router.back()} className="text-gray-600 hover:text-gray-900">
            ← Back
          </button>
          <h1 className="text-xl font-bold">Edit Recap</h1>
          <button
            onClick={handleSave}
            disabled={loading}
            className="text-primary-600 font-medium disabled:opacity-50"
          >
            {loading ? 'Saving...' : 'Save'}
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Recap Title"
            className="w-full text-2xl font-bold border-b-2 border-gray-200 focus:border-primary-500 outline-none py-2 bg-transparent"
          />
        </div>

        <RichTextEditor value={content} onChange={setContent} />

        <ImageUploader
          images={images}
          onChange={setImages}
        />
      </main>
    </div>
  );
}